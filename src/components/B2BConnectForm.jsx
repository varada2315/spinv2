import React, { useState } from 'react';
import { X, Send, Building2, User, Phone, Mail, MapPin, MessageSquare, Briefcase } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './B2BConnectForm.css';

export default function B2BConnectForm({ onClose, onSubmitted }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      companyName,
      contactPersonName: contactPerson,
      phoneNumber: phone,
      email,
      location,
      message: message || 'N/A'
    };

    await submitLeadToCRM(leadData, 'B2B Partner Connect Form');

    setSubmitting(false);
    setShowSuccess(true);

    if (onSubmitted) {
      onSubmitted(`Thank you ${contactPerson}! B2B partnership query for ${companyName} received.`);
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="b2b-modal-backdrop" onClick={onClose}>
          <div className="b2b-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="b2b-modal-close-btn" onClick={onClose} aria-label="Close form">
              <X size={20} />
            </button>

            <div className="b2b-modal-header">
              <div className="b2b-modal-badge">
                <Briefcase size={15} />
                <span>B2B PARTNER PORTAL</span>
              </div>
              <h2 className="b2b-modal-title">Become a B2B Partner</h2>
              <p className="b2b-modal-sub">
                Reliable visa processing, wholesale rates, and white-label support for travel agencies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="b2b-form-body">
              <div className="b2b-form-grid-2">
                <div className="b2b-field">
                  <label>1. Company Name *</label>
                  <div className="b2b-input-wrap">
                    <Building2 size={18} className="b2b-field-icon" />
                    <input
                      type="text"
                      placeholder="Spin Travels Pvt Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="b2b-field">
                  <label>2. Contact Person Name *</label>
                  <div className="b2b-input-wrap">
                    <User size={18} className="b2b-field-icon" />
                    <input
                      type="text"
                      placeholder="Anita Roy"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="b2b-form-grid-2">
                <div className="b2b-field">
                  <label>3. Phone Number *</label>
                  <div className="b2b-input-wrap">
                    <Phone size={18} className="b2b-field-icon" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="b2b-field">
                  <label>4. Email Address *</label>
                  <div className="b2b-input-wrap">
                    <Mail size={18} className="b2b-field-icon" />
                    <input
                      type="email"
                      placeholder="b2b@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="b2b-field">
                <label>5. Location (City & State) *</label>
                <div className="b2b-input-wrap">
                  <MapPin size={18} className="b2b-field-icon" />
                  <input
                    type="text"
                    placeholder="e.g. Ludhiana, Punjab / New Delhi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="b2b-field">
                <label>6. Message (Optional)</label>
                <div className="b2b-input-wrap">
                  <MessageSquare size={18} className="b2b-field-icon b2b-textarea-icon" />
                  <textarea
                    rows="3"
                    placeholder="Tell us about your monthly visa volume or partnership requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="b2b-actions">
                <button type="submit" className="b2b-cta-btn" disabled={submitting}>
                  <span>{submitting ? 'Connecting...' : 'Connect With Our Team'}</span>
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <SuccessScreenModal onClose={onClose} />
      )}
    </>
  );
}
