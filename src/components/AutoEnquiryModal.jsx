import React, { useState, useEffect } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './AutoEnquiryModal.css';

export default function AutoEnquiryModal({ onSubmitted, isOpenControlled = false, onCloseControlled }) {
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const isOpen = isOpenControlled || isOpenInternal;
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Trigger Logic:
  // 1. On page load / refresh, everything reboots fresh (no persistent storage block).
  // 2. Initial trigger appears after 30 seconds OR when user scrolls down (whichever comes first).
  // 3. From that moment onward, it waits 5 minutes before showing again (recurring 5-minute interval).
  useEffect(() => {
    let initialTimer = null;
    let recurringInterval = null;
    let hasTriggeredInitial = false;

    const startRecurringTimer = () => {
      if (recurringInterval) clearInterval(recurringInterval);
      recurringInterval = setInterval(() => {
        setIsOpenInternal(true);
      }, 5 * 60 * 1000); // 5 minutes (300,000 ms)
    };

    const triggerModal = () => {
      if (hasTriggeredInitial) return;
      hasTriggeredInitial = true;

      // Cancel 30-second timer if scroll triggered first
      if (initialTimer) {
        clearTimeout(initialTimer);
        initialTimer = null;
      }

      // Remove scroll listener so normal scrolling doesn't re-trigger
      window.removeEventListener('scroll', handleScroll);

      // Open the modal
      setIsOpenInternal(true);

      // Start the 5-minute cooldown / recurring interval from this exact moment
      startRecurringTimer();
    };

    // 1. Initial timer: 30 seconds after page load/refresh
    initialTimer = setTimeout(() => {
      triggerModal();
    }, 30000);

    // 2. Scroll trigger: when user scrolls down
    const handleScroll = () => {
      if (hasTriggeredInitial) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const scrollDepth = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      if (scrollTop > 200 || scrollDepth >= 0.25) {
        triggerModal();
      }
    };

    // Custom Event Listener (Allows manual trigger for testing or navigation buttons)
    const handleCustomTrigger = () => {
      if (!hasTriggeredInitial) {
        triggerModal();
      } else {
        setIsOpenInternal(true);
        startRecurringTimer();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('openLeadCapturePopup', handleCustomTrigger);

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      if (recurringInterval) clearInterval(recurringInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openLeadCapturePopup', handleCustomTrigger);
    };
  }, []);

  const handleClose = () => {
    setIsOpenInternal(false);
    if (onCloseControlled) onCloseControlled();
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
    setIsOpenInternal(false);
    if (onCloseControlled) onCloseControlled();
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
