import React, { useState } from 'react';
import { X, Send, Globe, ShieldCheck, User, Phone, Mail, Calendar, Users, FileQuestion, Sparkles } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './MultiStepPackageForm.css';

export default function VisaApplicationForm({ initialCountry = '', onClose, onSubmitted }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [country, setCountry] = useState(initialCountry || '');
  const [visaType, setVisaType] = useState('Tourist');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [applicants, setApplicants] = useState('1 Applicant');
  const [appliedBefore, setAppliedBefore] = useState('No');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const leadData = {
      country,
      visaType,
      name,
      phone,
      email,
      intendedTravelDates: travelDates,
      numberOfApplicants: applicants,
      appliedForThisVisaBefore: appliedBefore
    };

    await submitLeadToCRM(leadData, 'Visa Application Form');

    setSubmitting(false);
    setShowSuccess(true);

    if (onSubmitted) {
      onSubmitted(`Thank you ${name}! Visa application inquiry for ${country} received.`);
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="multistep-backdrop" onClick={onClose}>
          <div className="multistep-card" onClick={(e) => e.stopPropagation()}>
            <button className="multistep-close-btn" onClick={onClose} aria-label="Close form">
              <X size={20} />
            </button>

            <div className="multistep-header">
              <div className="multistep-badge">
                <ShieldCheck size={14} />
                <span>VISA CONCIERGE</span>
              </div>
              <h2 className="multistep-title">Visa Application Assistance</h2>
              <p className="multistep-sub">Fast document checklist, embassy appointment scheduling, and expert guidance.</p>
            </div>

            <form onSubmit={handleSubmit} className="multistep-form-body">
              <div className="form-grid-2">
                <div className="multi-field">
                  <label>1. Country *</label>
                  <div className="multi-input-wrap">
                    <Globe size={18} className="multi-field-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Schengen, USA, UK, Dubai"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="multi-field">
                  <label>2. Visa Type *</label>
                  <div className="multi-input-wrap">
                    <ShieldCheck size={18} className="multi-field-icon" />
                    <select
                      value={visaType}
                      onChange={(e) => setVisaType(e.target.value)}
                      className="select-input"
                      required
                    >
                      <option value="Tourist">Tourist Visa</option>
                      <option value="Business">Business Visa</option>
                      <option value="Visitor">Visitor Visa</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="multi-field">
                <label>3. Full Name *</label>
                <div className="multi-input-wrap">
                  <User size={18} className="multi-field-icon" />
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
                <div className="multi-field">
                  <label>4. Contact No. / WhatsApp *</label>
                  <div className="multi-input-wrap">
                    <Phone size={18} className="multi-field-icon" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="multi-field">
                  <label>5. Email Address *</label>
                  <div className="multi-input-wrap">
                    <Mail size={18} className="multi-field-icon" />
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

              <div className="form-grid-2">
                <div className="multi-field">
                  <label>6. Intended Travel Dates *</label>
                  <div className="multi-input-wrap">
                    <Calendar size={18} className="multi-field-icon" />
                    <input
                      type="date"
                      value={travelDates}
                      onChange={(e) => setTravelDates(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="multi-field">
                  <label>7. Number of Applicants *</label>
                  <div className="multi-input-wrap">
                    <Users size={18} className="multi-field-icon" />
                    <select value={applicants} onChange={(e) => setApplicants(e.target.value)}>
                      <option value="1 Applicant">1 Applicant</option>
                      <option value="2 Applicants (Couple)">2 Applicants</option>
                      <option value="3-5 Family Applicants">3-5 Family Members</option>
                      <option value="6+ Group Applicants">6+ Group Applicants</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="multi-field">
                <label>8. Have You Ever Applied for This Visa Before? *</label>
                <div className="hotel-pref-row">
                  <button
                    type="button"
                    className={`hotel-chip ${appliedBefore === 'Yes' ? 'selected' : ''}`}
                    onClick={() => setAppliedBefore('Yes')}
                  >
                    <span>Yes (Applied Before)</span>
                  </button>
                  <button
                    type="button"
                    className={`hotel-chip ${appliedBefore === 'No' ? 'selected' : ''}`}
                    onClick={() => setAppliedBefore('No')}
                  >
                    <span>No (First Time)</span>
                  </button>
                </div>
              </div>

              <div className="multistep-actions mt-8">
                <button type="submit" className="auto-modal-cta-btn" disabled={submitting}>
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
