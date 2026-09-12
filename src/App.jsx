import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InternationalPage from './pages/InternationalPage';
import DomesticPage from './pages/DomesticPage';
import VisasPage from './pages/VisasPage';
import B2BPage from './pages/B2BPage';
import ContactPage from './pages/ContactPage';

import ContactFooter from './components/ContactFooter';
import DestinationModal from './components/DestinationModal';
import InquiryModal from './components/InquiryModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import BrandMascotGuide from './components/BrandMascotGuide';
import AutoEnquiryModal from './components/AutoEnquiryModal';
import { destinationsData } from './data/destinationsData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedInquiryItem, setSelectedInquiryItem] = useState(null);
  const [activeDestinationModal, setActiveDestinationModal] = useState(null);
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenLeadCapture = () => {
    setIsLeadCaptureOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleOpenInquiry = (item) => {
    setSelectedInquiryItem(item);
  };

  const handleOpenDestinationModal = (slugOrObject) => {
    if (!slugOrObject) return;
    const slug = typeof slugOrObject === 'string' ? slugOrObject : (slugOrObject.slug || slugOrObject.id || '');
    if (!slug) return;

    const key = slug.toLowerCase().trim();
    const matched = destinationsData[key];
    if (matched) {
      setActiveDestinationModal(matched);
    } else {
      // Do NOT default to Bali! Open custom inquiry for unlisted destination
      handleOpenInquiry({ category: 'package', destination: slug, title: `Custom Trip to ${slug}` });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        {/* Top Header Navigation Bar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Multi-Page Route Configurations */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenDestination={handleOpenDestinationModal} onOpenInquiry={handleOpenInquiry} onToast={showToast} />} />
            <Route path="/about" element={<AboutPage onOpenInquiry={handleOpenInquiry} onOpenLeadCapture={handleOpenLeadCapture} />} />
            <Route path="/international" element={<InternationalPage onOpenDestination={handleOpenDestinationModal} onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/domestic" element={<DomesticPage onOpenDestination={handleOpenDestinationModal} onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/visas" element={<VisasPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/b2b" element={<B2BPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact" element={<ContactPage onOpenInquiry={handleOpenInquiry} onToast={showToast} />} />
          </Routes>
        </main>

        {/* Official Spin Brand Mascot Interactive Travel Guide (Bottom-Left) */}
        <BrandMascotGuide onOpenInquiry={handleOpenInquiry} />

        {/* Persistent Floating WhatsApp Enquiry Button (Bottom-Right) */}
        <WhatsAppFloat />

        {/* Common Site Footer */}
        <ContactFooter onToast={showToast} />

        {/* Destination Famous Spots Pop-Up Modal with Image Slideshow & Form */}
        {activeDestinationModal && (
          <DestinationModal
            destination={activeDestinationModal}
            onClose={() => setActiveDestinationModal(null)}
          />
        )}

        {/* General Service Inquiry Modal */}
        {selectedInquiryItem && (
          <InquiryModal
            selectedItem={selectedInquiryItem}
            onClose={() => setSelectedInquiryItem(null)}
            onSubmitted={(msg) => showToast(msg)}
          />
        )}

        {/* Automatic & Direct Lead Capture "Get In Touch" Popup Modal */}
        <AutoEnquiryModal 
          isOpenControlled={isLeadCaptureOpen}
          onCloseControlled={() => setIsLeadCaptureOpen(false)}
          onSubmitted={showToast} 
        />

        {/* Global Floating Toast Notification */}
        {toastMessage && (
          <div className="toast-notification">
            <CheckCircle2 size={20} color="#00BF63" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </Router>
  );
}
