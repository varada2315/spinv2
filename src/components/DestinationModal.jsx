import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import './DestinationModal.css';

export default function DestinationModal({ destination, onClose }) {
  if (!destination) return null;

  const spots = destination.spots || [];
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    guests: '2 Guests (Couple)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showEnquiryForm) {
          setShowEnquiryForm(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showEnquiryForm]);

  // Automatic 3-Second Loop Timer across all destinations
  useEffect(() => {
    if (showEnquiryForm) return;
    if (spots.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSpotIndex((prev) => (prev + 1) % spots.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [showEnquiryForm, spots.length]);

  const currentSpot = spots[activeSpotIndex] || {
    name: destination.name,
    image: destination.heroImage,
    desc: destination.tagline
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `Hello Spin Global! I am interested in booking / planning a trip to *${destination.name}*.\n\n` +
      `📍 *Currently Showcasing Spot:* ${currentSpot.name}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone / WhatsApp:* ${formData.phone}\n` +
      `📅 *Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📝 *Special Requests:* ${formData.notes || 'None'}\n\n` +
      `Please send me custom package details & exclusive itinerary options for ${destination.name}. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/916284661722?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setShowEnquiryForm(false);
    }, 1800);
  };

  const categoryLabel = destination.category ? destination.category.toUpperCase() : 'TRAVEL';

  return (
    <div className="bali-showcase-overlay" onClick={onClose}>
      <div 
        className="bali-showcase-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Right Close Button */}
        <button className="bali-showcase-close-btn" onClick={onClose} aria-label="Close Showcase">
          <X size={22} />
        </button>

        {/* Full Screen Image & Content Layer */}
        <div className="bali-image-wrapper">
          <img 
            key={activeSpotIndex}
            src={currentSpot.image} 
            alt={currentSpot.name} 
            className="bali-slide-img" 
          />
          
          {/* Dark Overlay Filter */}
          <div className="bali-overlay-gradient" />

          {/* Left Content Header Box */}
          <div className="bali-content-box">
            <span className="bali-dest-badge">
              {categoryLabel} • {destination.name.toUpperCase()}
            </span>
            <h2 className="bali-dest-title">{currentSpot.name}</h2>
            <p className="bali-dest-desc">{currentSpot.desc}</p>
          </div>

          {/* Floating Primary CTA Button (Bottom Right) */}
          <button 
            className="bali-plan-trip-cta"
            onClick={() => setShowEnquiryForm(true)}
          >
            <span>Plan My Trip</span>
            <ArrowRight size={18} />
          </button>

          {/* Bottom Progress Indicators Row (Clickable to jump directly to any spot) */}
          {spots.length > 1 && (
            <div className="bali-progress-row">
              {spots.map((spot, idx) => (
                <div 
                  key={idx} 
                  className="bali-progress-track"
                  onClick={() => setActiveSpotIndex(idx)}
                  title={`Jump to ${spot.name}`}
                  role="button"
                  tabIndex={0}
                >
                  <div 
                    className={`bali-progress-bar ${idx === activeSpotIndex ? 'active' : idx < activeSpotIndex ? 'filled' : ''}`}
                    style={{
                      animationDuration: idx === activeSpotIndex && !showEnquiryForm ? '3000ms' : '0s'
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* STEP 3: Centered Enquiry Form Modal (Only opens when Plan My Trip is clicked) */}
      {showEnquiryForm && (
        <div className="bali-form-modal-overlay" onClick={() => setShowEnquiryForm(false)}>
          <div className="bali-form-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="bali-form-close-btn" 
              onClick={() => setShowEnquiryForm(false)} 
              aria-label="Close Form"
            >
              <X size={20} />
            </button>

            <div className="bali-form-header">
              <div className="wa-icon-bubble">
                <MessageCircle size={24} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="form-modal-title">Enquire About {destination.name}</h3>
                <p className="form-modal-sub">
                  Fill in your details below for a customized itinerary sent directly to your WhatsApp.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="dest-modal-form">
              <div className="form-field">
                <label>Your Name *</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label>Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Travel Date</label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                    <option value="3-4 Family Guests">3-4 Family Guests</option>
                    <option value="5+ Group / Corporate">5+ Group / Corporate</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Special Requests / Notes</label>
                <textarea
                  rows="2"
                  placeholder={`Mention specific preferences or questions about ${currentSpot.name}...`}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary dest-wa-submit-btn">
                <MessageCircle size={18} />
                <span>{submitted ? 'Connecting WhatsApp...' : 'Send Enquiry on WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
