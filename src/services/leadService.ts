import { SITE_CONFIG } from '../data/config';

export interface PromotionLeadFormData {
  businessName: string;
  location: string;
  serviceDescription: string;
  promotionTypes?: string[];
  contactName?: string;
  contactPreference: 'phone' | 'instagram' | 'email';
  contactValue: string;
  notes?: string;
}

export interface PromotionLeadSubmission extends PromotionLeadFormData {
  id: string;
  submittedAt: string; // ISO 8601 string
  submittedAtFormatted: string; // Localized date/time in Turkish
}

export interface LeadSubmissionResult {
  success: boolean;
  hasBackend: boolean;
  message: string;
  lead?: PromotionLeadSubmission;
}

const LOCAL_STORAGE_KEY = 'ankara_cocuk_leads';

/**
 * Saves lead locally to localStorage (for browser inspection and local testing fallback)
 */
export const saveLeadLocally = (lead: PromotionLeadSubmission): void => {
  try {
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    const leads: PromotionLeadSubmission[] = existing ? JSON.parse(existing) : [];
    leads.unshift(lead);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
  } catch (error) {
    console.warn('LocalStorage lead save error:', error);
  }
};

/**
 * Retrieves all locally saved leads
 */
export const getLocalLeads = (): PromotionLeadSubmission[] => {
  try {
    const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    return existing ? JSON.parse(existing) : [];
  } catch {
    return [];
  }
};

/**
 * Submits the promotion lead to the configured backend API or webhook.
 * If no backend/admin panel endpoint is configured, it records locally and returns hasBackend: false.
 */
export const submitPromotionLead = async (
  formData: PromotionLeadFormData
): Promise<LeadSubmissionResult> => {
  const now = new Date();
  const leadSubmission: PromotionLeadSubmission = {
    ...formData,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    submittedAt: now.toISOString(),
    submittedAtFormatted: new Intl.DateTimeFormat('tr-TR', {
      dateStyle: 'long',
      timeStyle: 'medium',
    }).format(now),
  };

  // Always store a copy in localStorage so user inquiries are not lost during client-side testing
  saveLeadLocally(leadSubmission);

  // Check if a backend API / Webhook endpoint is configured in SITE_CONFIG or Vite Environment variables
  const endpoint =
    SITE_CONFIG.leadApiEndpoint ||
    ((import.meta as unknown as { env?: Record<string, string> }).env?.VITE_LEADS_API_URL);

  if (!endpoint) {
    // There is no backend server or database connected to this static frontend SPA
    return {
      success: false,
      hasBackend: false,
      message:
        'Projede henüz başvuruları veritabanına/yönetim paneline kaydedecek aktif bir backend API bağlantısı (leadApiEndpoint) bulunmuyor. Başvuru yerel belleğe kaydedildi ancak sunucuya gönderilemedi. Hızlı iletişim için lütfen WhatsApp seçeneğini kullanınız.',
      lead: leadSubmission,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadSubmission),
    });

    if (!response.ok) {
      throw new Error(`Sunucu yanıt hatası: ${response.status} ${response.statusText}`);
    }

    return {
      success: true,
      hasBackend: true,
      message: 'Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      lead: leadSubmission,
    };
  } catch (error: any) {
    return {
      success: false,
      hasBackend: true,
      message:
        error?.message ||
        'Başvuru sunucuya iletilirken bir bağlantı hatası oluştu. Lütfen tekrar deneyiniz.',
      lead: leadSubmission,
    };
  }
};
