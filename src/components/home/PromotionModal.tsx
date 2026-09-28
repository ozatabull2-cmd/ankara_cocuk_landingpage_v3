import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  MessageCircle,
  FileText,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Building2,
  MapPin,
  Sparkles,
  Phone,
  Mail,
  User,
  Info,
} from 'lucide-react';
import {
  SITE_CONFIG,
  PROMOTION_WHATSAPP_MESSAGE,
  getWhatsAppUrl,
  trackEvent,
} from '../../data/config';
import {
  submitPromotionLead,
  PromotionLeadFormData,
} from '../../services/leadService';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'whatsapp' | 'form';

export const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('whatsapp');
  const modalRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState<PromotionLeadFormData>({
    businessName: '',
    location: '',
    serviceDescription: '',
    promotionTypes: [],
    contactName: '',
    contactPreference: 'phone',
    contactValue: '',
    notes: '',
  });

  // Validation & UI State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [backendNotice, setBackendNotice] = useState<string | null>(null);

  // Promotion type options
  const promotionTypeOptions = [
    'Instagram gönderisi',
    'Instagram hikâyesi',
    'Web sitesi',
    'WhatsApp toplulukları',
  ];

  // Close on Escape key and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      trackEvent('open_promo_modal');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleTogglePromotionType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.promotionTypes.includes(type);
      return {
        ...prev,
        promotionTypes: exists
          ? prev.promotionTypes.filter((t) => t !== type)
          : [...prev.promotionTypes, type],
      };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'İşletme veya kurum adı zorunludur.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'İlçe/konum bilgisi zorunludur.';
    }

    if (!formData.serviceDescription.trim()) {
      newErrors.serviceDescription = 'Tanıtılacak hizmet, ürün veya etkinlik zorunludur.';
    }

    if (!formData.contactValue.trim()) {
      newErrors.contactValue =
        formData.contactPreference === 'phone'
          ? 'Lütfen telefon numaranızı giriniz.'
          : 'Lütfen e-posta adresinizi giriniz.';
    } else {
      if (formData.contactPreference === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contactValue.trim())) {
          newErrors.contactValue = 'Geçerli bir e-posta adresi giriniz.';
        }
      } else {
        const phoneDigits = formData.contactValue.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
          newErrors.contactValue = 'Lütfen geçerli bir telefon numarası giriniz (en az 10 hane).';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBackendNotice(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitPromotionLead(formData);

      if (result.success) {
        setSubmissionSuccess(true);
        trackEvent('submit_promo_form', { businessName: formData.businessName });
      } else {
        if (!result.hasBackend) {
          // Explicitly inform user that backend/admin endpoint is not configured in this SPA
          setBackendNotice(result.message);
        } else {
          setErrors({ submit: result.message });
        }
      }
    } catch (err: any) {
      setErrors({ submit: err?.message || 'Bir hata oluştu. Lütfen tekrar deneyiniz.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      businessName: '',
      location: '',
      serviceDescription: '',
      promotionTypes: [],
      contactName: '',
      contactPreference: 'phone',
      contactValue: '',
      notes: '',
    });
    setErrors({});
    setSubmissionSuccess(false);
    setBackendNotice(null);
  };

  const whatsappDirectUrl = getWhatsAppUrl(PROMOTION_WHATSAPP_MESSAGE);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="relative px-6 pt-6 pb-4 sm:px-8 sm:pt-7 sm:pb-5 border-b border-slate-100 bg-gradient-to-r from-[#FAF8F5] via-white to-white flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#EE5D50] text-xs font-extrabold uppercase tracking-wide">
              HIZLI İLETİŞİM
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight">
              Size nasıl ulaşalım?
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Tanıtım seçeneklerini belirlemek için tercih ettiğiniz iletişim yöntemini seçin.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Pencereyi kapat"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 sm:px-8 pt-4 pb-2 bg-slate-50/70 border-b border-slate-200/80">
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-200/70 rounded-2xl">
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'whatsapp'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageCircle className={`w-5 h-5 ${activeTab === 'whatsapp' ? 'text-[#25D366] fill-[#25D366]' : ''}`} />
              <span>WhatsApp’tan yaz</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'form'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className={`w-5 h-5 ${activeTab === 'form' ? 'text-[#EE5D50]' : ''}`} />
              <span>Kısa form bırak</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 sm:px-8 sm:py-7 overflow-y-auto flex-grow space-y-6">
          {/* TAB 1: WHATSAPP */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-emerald-50/60 border-2 border-emerald-200/70 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-xs flex-shrink-0">
                    <MessageCircle className="w-7 h-7 fill-white stroke-none" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0B2545]">
                      WhatsApp Doğrudan İletişim
                    </h3>
                    <p className="text-sm font-semibold text-emerald-800">
                      Hat: {SITE_CONFIG.whatsappDisplayPhone}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Aşağıdaki butona tıkladığınızda işletme bilgilerinizi içeren hazır bir taslak mesaj WhatsApp'ta açılacaktır. Mesajı dilediğiniz gibi düzenleyip bize hemen iletebilirsiniz.
                </p>

                {/* Message preview box */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Gönderilecek hazır mesaj içeriği:
                  </span>
                  <div className="bg-white rounded-xl p-3.5 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-mono whitespace-pre-line leading-relaxed shadow-2xs">
                    {PROMOTION_WHATSAPP_MESSAGE}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent('click_whatsapp', { source: 'promotion_modal_whatsapp_tab' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98 text-center"
                >
                  <MessageCircle className="w-6 h-6 fill-white stroke-none flex-shrink-0" />
                  <span>WhatsApp’ta Mesajı Aç ve Gönder</span>
                </a>

                <p className="text-center text-xs text-slate-700 font-bold">
                  Mesaj açıldıktan sonra göndermek için WhatsApp’ta gönder butonuna basmanız yeterlidir.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: FORM */}
          {activeTab === 'form' && (
            <div className="animate-in fade-in duration-150">
              {submissionSuccess ? (
                <div className="text-center py-8 px-4 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-black text-[#0B2545]">
                      Talebiniz Alındı!
                    </h3>
                    <p className="text-base text-slate-700 font-semibold leading-relaxed">
                      Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 bg-[#0B2545] hover:bg-slate-800 text-white font-bold rounded-xl transition-all"
                    >
                      Kapat
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                    >
                      Yeni Form Doldur
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Backend connectivity alert if not connected */}
                  {backendNotice && (
                    <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm font-medium space-y-2">
                        <div className="font-bold text-amber-950">
                          Bilgilendirme: Yönetim Paneli / Backend Bağlantısı
                        </div>
                        <p className="leading-relaxed">
                          {backendNotice}
                        </p>
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setActiveTab('whatsapp')}
                            className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp seçeneğine geçiş yap
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* General submission error */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-center gap-2.5 text-red-700 text-sm font-medium">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errors.submit}</span>
                    </div>
                  )}

                  {/* Field 1: İşletme / Kurum Adı (Zorunlu) */}
                  <div>
                    <label className="block text-sm font-extrabold text-[#0B2545] mb-1.5">
                      İşletme veya Kurum Adı <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: '' });
                        }}
                        placeholder="Örn: Renkli Düşler Atölyesi"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 ${
                          errors.businessName
                            ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                            : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                      />
                    </div>
                    {errors.businessName && (
                      <p className="mt-1 text-xs font-bold text-red-600">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Field 2: İlçe / Konum (Zorunlu) */}
                  <div>
                    <label className="block text-sm font-extrabold text-[#0B2545] mb-1.5">
                      İlçe / Konum <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => {
                          setFormData({ ...formData, location: e.target.value });
                          if (errors.location) setErrors({ ...errors, location: '' });
                        }}
                        placeholder="Örn: Çankaya / Çayyolu"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 ${
                          errors.location
                            ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                            : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                      />
                    </div>
                    {errors.location && (
                      <p className="mt-1 text-xs font-bold text-red-600">{errors.location}</p>
                    )}
                  </div>

                  {/* Field 3: Tanıtılacak hizmet, ürün veya etkinlik (Zorunlu) */}
                  <div>
                    <label className="block text-sm font-extrabold text-[#0B2545] mb-1.5">
                      Tanıtılacak Hizmet, Ürün veya Etkinlik <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={2}
                        value={formData.serviceDescription}
                        onChange={(e) => {
                          setFormData({ ...formData, serviceDescription: e.target.value });
                          if (errors.serviceDescription) setErrors({ ...errors, serviceDescription: '' });
                        }}
                        placeholder="Örn: Hafta sonu seramik atölyesi ve çocuk drama kayıtları"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 ${
                          errors.serviceDescription
                            ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                            : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
                        }`}
                      />
                    </div>
                    {errors.serviceDescription && (
                      <p className="mt-1 text-xs font-bold text-red-600">{errors.serviceDescription}</p>
                    )}
                  </div>

                  {/* Field 4: İlgilenilen Tanıtım Türleri (Çoklu Seçilebilir) */}
                  <div className="space-y-2">
                    <label className="block text-sm font-extrabold text-[#0B2545]">
                      İlgilendiğiniz Tanıtım Türleri <span className="text-xs text-slate-500 font-normal">(Birden fazla seçilebilir)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {promotionTypeOptions.map((type) => {
                        const isChecked = formData.promotionTypes.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleTogglePromotionType(type)}
                            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition-all ${
                              isChecked
                                ? 'bg-orange-50 border-[#EE5D50] text-[#D93829] shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors flex-shrink-0 ${
                                isChecked
                                  ? 'bg-[#EE5D50] border-[#EE5D50] text-white'
                                  : 'border-slate-400 bg-white'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span>{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 5: İletişim Kişisinin Adı (İsteğe Bağlı) */}
                  <div>
                    <label className="block text-sm font-extrabold text-[#0B2545] mb-1.5">
                      İletişim Kişisinin Adı <span className="text-xs text-slate-500 font-normal">(İsteğe bağlı)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* Field 6 & 7: İletişim Tercihi & İlgili Değer (Zorunlu) */}
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <label className="block text-sm font-extrabold text-[#0B2545]">
                      İletişim Tercihi <span className="text-red-500">*</span>
                    </label>
                    
                    {/* Preference Selector Radio Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, contactPreference: 'phone', contactValue: '' });
                          setErrors({ ...errors, contactValue: '' });
                        }}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                          formData.contactPreference === 'phone'
                            ? 'bg-white border-[#25D366] text-[#0B2545] shadow-xs'
                            : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white'
                        }`}
                      >
                        <Phone className={`w-4 h-4 ${formData.contactPreference === 'phone' ? 'text-[#25D366]' : ''}`} />
                        <span>Telefon / WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, contactPreference: 'email', contactValue: '' });
                          setErrors({ ...errors, contactValue: '' });
                        }}
                        className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                          formData.contactPreference === 'email'
                            ? 'bg-white border-blue-500 text-[#0B2545] shadow-xs'
                            : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white'
                        }`}
                      >
                        <Mail className={`w-4 h-4 ${formData.contactPreference === 'email' ? 'text-blue-600' : ''}`} />
                        <span>E-posta</span>
                      </button>
                    </div>

                    {/* Conditional Input based on Preference */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          {formData.contactPreference === 'phone' ? (
                            <Phone className="w-4 h-4" />
                          ) : (
                            <Mail className="w-4 h-4" />
                          )}
                        </div>
                        <input
                          type={formData.contactPreference === 'phone' ? 'tel' : 'email'}
                          value={formData.contactValue}
                          onChange={(e) => {
                            setFormData({ ...formData, contactValue: e.target.value });
                            if (errors.contactValue) setErrors({ ...errors, contactValue: '' });
                          }}
                          placeholder={
                            formData.contactPreference === 'phone'
                              ? '05xx xxx xx xx'
                              : 'ornek@isletme.com'
                          }
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 ${
                            errors.contactValue
                              ? 'border-red-400 bg-red-50/30 focus:ring-red-300'
                              : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
                          }`}
                        />
                      </div>
                      {errors.contactValue && (
                        <p className="mt-1 text-xs font-bold text-red-600">{errors.contactValue}</p>
                      )}
                    </div>
                  </div>

                  {/* Field 8: Ek Not (İsteğe Bağlı) */}
                  <div>
                    <label className="block text-sm font-extrabold text-[#0B2545] mb-1.5">
                      Ek Not <span className="text-xs text-slate-500 font-normal">(İsteğe bağlı)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Belirtmek istediğiniz ek bir detay varsa yazabilirsiniz..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm sm:text-base font-medium transition-all focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#EE5D50] hover:bg-[#E24A3D] disabled:bg-slate-400 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98 text-center cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Başvuruyu Gönder</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Ankara Çocuk Ağı Tanıtım ve Reklam Servisi</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-slate-600 hover:text-slate-900"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};
