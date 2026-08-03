import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import MultiStepPackageForm from './MultiStepPackageForm';
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
    notes: ''
  });
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');
  const [infants, setInfants] = useState('0');
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

    const totalTravelers = (parseInt(adults) || 1) + (parseInt(children) || 0) + (parseInt(infants) || 0);

    const messageText = `Hello Spin Global! I am interested in booking / planning a trip to *${destination.name}*.\n\n` +
      `📍 *Currently Showcasing Spot:* ${currentSpot.name}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone / WhatsApp:* ${formData.phone}\n` +
      `📅 *Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `👥 *Travelers:* ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s) (Total: ${totalTravelers})\n` +
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

      {/* STEP 3: Multi-step Plan Your Dream Trip Form Modal (Opens when Plan My Trip is clicked) */}
      {showEnquiryForm && (
        <MultiStepPackageForm
          initialCategory={destination.category ? destination.category.toLowerCase() : 'international'}
          initialDestination={destination.name}
          onClose={() => setShowEnquiryForm(false)}
        />
      )}
    </div>
  );
}
