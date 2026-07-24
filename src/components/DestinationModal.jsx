import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Calendar, Users, Send, Sparkles } from 'lucide-react';
import './DestinationModal.css';

export default function DestinationModal({ destination, onClose }) {
  if (!destination) return null;

  const spots = destination.spots || [];
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
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
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const currentSpot = spots[activeSpotIndex] || {
    name: destination.name,
    image: destination.heroImage,
    desc: destination.tagline
  };

  const handlePrevSpot = () => {
    setActiveSpotIndex((prev) => (prev - 1 + spots.length) % spots.length);
  };

  const handleNextSpot = () => {
    setActiveSpotIndex((prev) => (prev + 1) % spots.length);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `Hello Spin Global! I would like to enquire about a trip to *${destination.name}*.\n\n` +
      `📍 *Featured Spot Interested:* ${currentSpot.name}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📝 *Notes:* ${formData.notes || 'None'}\n\n` +
      `Please contact me with custom package details & itinerary options. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/916284661722?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="dest-modal-overlay" onClick={onClose}>
      <div className="dest-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Close Button */}
        <button className="dest-modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        <div className="dest-modal-grid">
          {/* LEFT COLUMN: Interactive Tourist Spot Slideshow */}
          <div className="dest-slideshow-col">
            <div className="slideshow-image-container">
              <img 
                src={currentSpot.image} 
                alt={currentSpot.name} 
                className="slideshow-spot-img fade-in-key" 
              />
              
              <div className="slideshow-overlay-gradient" />

              {/* Navigation Arrow Controls */}
              {spots.length > 1 && (
                <>
                  <button className="slideshow-arrow left-arrow" onClick={handlePrevSpot} aria-label="Previous Spot">
                    <ChevronLeft size={24} />
                  </button>
                  <button className="slideshow-arrow right-arrow" onClick={handleNextSpot} aria-label="Next Spot">
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Spot Counter Tag */}
              <div className="slideshow-counter">
                <span>Spot {activeSpotIndex + 1} of {spots.length}</span>
              </div>
            </div>

            {/* Current Spot Information & Mascot Guide Header */}
            <div className="spot-info-box">
              <div className="mascot-modal-header">
                <img src="/images/spin-mascot.png" alt="Spin Mascot Guide" className="modal-mascot-guide-img" />
                <div>
                  <span className="dest-badge">{destination.category} • {destination.name}</span>
                  <p className="mascot-modal-sub">Spin's Tourist Spot Guide</p>
                </div>
              </div>

              <h3 className="spot-slide-title">{currentSpot.name}</h3>
              <p className="spot-slide-desc">{currentSpot.desc}</p>

              {/* Thumbnail Dot Indicators */}
              {spots.length > 1 && (
                <div className="slideshow-dots-row">
                  {spots.map((spot, idx) => (
                    <button
                      key={idx}
                      className={`slide-dot ${idx === activeSpotIndex ? 'active' : ''}`}
                      onClick={() => setActiveSpotIndex(idx)}
                      title={spot.name}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Direct WhatsApp Enquiry Form */}
          <div className="dest-form-col">
            <div className="dest-form-header">
              <div className="wa-icon-bubble">
                <MessageCircle size={24} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="form-modal-title">Enquire About {destination.name}</h3>
                <p className="form-modal-sub">
                  Fill in your details below for a customized itinerary sent straight to your WhatsApp.
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
                    <option value="3-4 Family Guests">3-4 Family</option>
                    <option value="5+ Group / Corporate">5+ Group</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Special Requests / Notes</label>
                <textarea
                  rows="2"
                  placeholder={`Mention specific hotels or questions about ${currentSpot.name}...`}
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
      </div>
    </div>
  );
}
