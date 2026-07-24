import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle } from 'lucide-react';
import SpinLogo from './SpinLogo';
import './InquiryModal.css';

export default function InquiryModal({ selectedItem, onClose, onSubmitted }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  if (!selectedItem) return null;

  const itemTitle = typeof selectedItem === 'string' ? selectedItem : selectedItem.country || selectedItem.title || 'Travel Package';

  const whatsappLink = `https://wa.me/916284661722?text=Hello%20Spin%20Global!%20I'm%20interested%20in%20${encodeURIComponent(itemTitle)}.`;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitted(`Enquiry for ${itemTitle} submitted! Spin Global expert will call you shortly.`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card inquiry-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="inquiry-header">
          <SpinLogo size="small" />
          <h2 className="inquiry-title">Enquire About: <span className="text-green">{itemTitle}</span></h2>
          <p className="inquiry-sub">Get free consultation, visa checklist, or customized package quote.</p>
        </div>

        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="inquiry-field">
            <label>Your Full Name</label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="inquiry-field">
            <label>Phone / WhatsApp Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="inquiry-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="inquiry-field">
            <label>Additional Notes</label>
            <textarea
              rows="3"
              placeholder="Travel dates, number of passengers, specific visa queries..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary inquiry-submit-btn">
            <span>Send Enquiry Request</span>
            <Send size={16} />
          </button>
        </form>

        <div className="or-wa-divider">
          <span>OR CHAT DIRECTLY</span>
        </div>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-cream wa-modal-btn">
          <MessageCircle size={18} />
          <span>Chat on WhatsApp (+91 62846-61722)</span>
        </a>
      </div>
    </div>
  );
}
