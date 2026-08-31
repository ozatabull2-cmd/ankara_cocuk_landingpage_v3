import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { MonthlyPage } from './pages/MonthlyPage';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600 selection:text-white relative">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aylik-calisma" element={<MonthlyPage />} />
          {/* Fallback to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
