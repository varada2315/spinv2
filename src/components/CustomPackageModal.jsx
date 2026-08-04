import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, MapPin, MessageSquare, PhoneCall, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import './CustomPackageModal.css';

export default function CustomPackageModal({ destination = '', onClose, onSubmitted }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetDest, setTargetDest] = useState(destination);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      name,
      email,
      phone,
      service: 'Custom Package Inquiry',
      destination: targetDest,
      message: message || `Customized package request for ${targetDest}`
    };

    try {
      await submitLeadToCRM(leadData);
    } catch (err) {
      console.warn('CRM submission fallback:', err);
    }

    setSubmitting(false);
    setSubmitted(true);

    // Also offer WhatsApp direct connection
    const whatsappMsg = encodeURIComponent(
      `Hello Spin Global! I am interested in a customized package for *${targetDest}*.\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `📝 *Message:* ${message || 'Please send customized package details.'}`
    );
    const whatsappUrl = `https://wa.me/916284661722?text=${whatsappMsg}`;

    if (onSubmitted) {
      onSubmitted(`Thank you ${name}! Your customized package enquiry for ${targetDest} has been received.`);
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 1200);
  };

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="custom-modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="custom-modal-success">
            <CheckCircle2 size={56} color="#00BF63" className="success-icon-spin" />
            <h3>Enquiry Received!</h3>
            <p>Connecting you with our travel expert for <strong>{targetDest}</strong>...</p>
          </div>
        ) : (
          <>
            <div className="custom-modal-header">
              <div className="custom-modal-badge">
                <Sparkles size={14} color="#00BF63" />
                <span>Tailor-Made Itinerary</span>
              </div>
              <h3 className="custom-modal-title">
                Connect with our team for a customized package
              </h3>
              <p className="custom-modal-sub">
                Our experts create 100% tailor-made travel packages for <strong>"{targetDest || 'your destination'}"</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="custom-modal-form">
              <div className="custom-field">
                <label>1. Full Name *</label>
                <div className="custom-input-wrap">
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
                <div className="custom-field">
                  <label>2. Contact No. / WhatsApp *</label>
                  <div className="custom-input-wrap">
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

                <div className="custom-field">
                  <label>3. Email Address *</label>
                  <div className="custom-input-wrap">
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

              <div className="custom-field">
                <label>4. Destination *</label>
                <div className="custom-input-wrap">
                  <MapPin size={18} className="field-icon" />
                  <input
                    type="text"
                    placeholder="e.g. Himachal (Manali, Shimla), Paris, Switzerland"
                    value={targetDest}
                    onChange={(e) => setTargetDest(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="custom-field">
                <label>5. Message / Travel Requirements</label>
                <div className="custom-input-wrap textarea-wrap">
                  <MessageSquare size={18} className="field-icon textarea-icon" />
                  <textarea
                    rows="3"
                    placeholder="Mention tentative travel dates, number of travelers, budget, or preferred places..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary custom-submit-btn" disabled={submitting}>
                <Send size={18} />
                <span>{submitting ? 'Sending Enquiry...' : 'Send Inquiry'}</span>
              </button>
            </form>

            {/* Direct Contact Bar Below Form */}
            <div className="custom-contact-bar">
              <span className="contact-bar-label">Need Instant Assistance?</span>
              <div className="contact-bar-buttons">
                <a href="tel:+916284661722" className="btn-contact-bar call-btn">
                  <PhoneCall size={16} />
                  <span>Call Us: +91 6284661722</span>
                </a>

                <a 
                  href={`https://wa.me/916284661722?text=${encodeURIComponent(`Hello Spin Global! I would like to inquire about a custom package for ${targetDest}.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-contact-bar wa-btn"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
