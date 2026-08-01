import React, { useState, useEffect } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './AutoEnquiryModal.css';

export default function AutoEnquiryModal({ onSubmitted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Trigger Logic: 35s timer OR 40-50% scroll depth, ONCE per browser session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
    if (hasSeenPopup === 'true') return;

    let timer = null;

    const triggerModal = () => {
      if (sessionStorage.getItem('hasSeenLeadPopup') !== 'true') {
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
        if (timer) clearTimeout(timer);
      }
    };

    // 1. Timer Trigger: 35 seconds after load
    timer = setTimeout(() => {
      triggerModal();
    }, 35000);

    // 2. Scroll Trigger: 40% page scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const scrollDepth = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (scrollDepth >= 0.40) {
        triggerModal();
      }
    };

    // Custom Event Listener (Allows manual trigger for testing or navigation buttons)
    const handleCustomTrigger = () => {
      setIsOpen(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('openLeadCapturePopup', handleCustomTrigger);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openLeadCapturePopup', handleCustomTrigger);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      name,
      phone,
      email,
      service,
      message
    };

    await submitLeadToCRM(leadData, 'Homepage Lead Capture Popup');

    setSubmitting(false);
    setIsOpen(false);
    setShowSuccess(true);

    if (onSubmitted) {
      onSubmitted(`Thank you ${name}! Our team will connect with you shortly.`);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="auto-modal-backdrop" onClick={handleClose}>
          <div className="auto-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="auto-modal-close-btn" onClick={handleClose} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="auto-modal-header">
              <span className="auto-lead-badge">GET IN TOUCH</span>
              <h2 className="auto-modal-title">How Can We Help You?</h2>
              <p className="auto-modal-sub">
                Share a few details and our travel specialists will reach out to craft your perfect experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auto-modal-form">
              <div className="auto-field">
                <label>1. Name *</label>
                <div className="input-box-wrap">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="auto-field">
                  <label>2. Contact No. / WhatsApp *</label>
                  <div className="input-box-wrap">
                    <Phone size={18} className="field-icon" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="auto-field">
                  <label>3. Email *</label>
                  <div className="input-box-wrap">
                    <Mail size={18} className="field-icon" />
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="auto-field">
                <label>4. Service (Dropdown) *</label>
                <div className="input-box-wrap">
                  <Briefcase size={18} className="field-icon" />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="select-input"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Visa">Visa</option>
                    <option value="International">International</option>
                    <option value="Domestic">Domestic</option>
                    <option value="B2B">B2B</option>
                  </select>
                </div>
              </div>

              <div className="auto-field">
                <label>5. Message</label>
                <div className="input-box-wrap textarea-wrap">
                  <MessageSquare size={18} className="field-icon text-area-icon" />
                  <textarea
                    rows="3"
                    placeholder="Tell us about your travel dates, destination, or visa query..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="auto-modal-cta-btn" disabled={submitting}>
                <span>{submitting ? 'Connecting...' : 'Connect With Our Team'}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <SuccessScreenModal onClose={() => setShowSuccess(false)} />
      )}
    </>
  );
}
