import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import './BrandMascotGuide.css';

export default function BrandMascotGuide({ onOpenInquiry }) {
  const [openCard, setOpenCard] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [dismissedBubble, setDismissedBubble] = useState(false);

  const mascotTips = [
    "Hey, what are you planning for international drive?",
    "What are you planning for today?",
    "Looking for a quick getaway?",
    "Need help with your visa?",
    "Where are you heading next?"
  ];

  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin!%20I'd%20like%20your%20guidance%20in%20planning%20my%20trip.";

  // Auto-cycle speech bubble tips
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % mascotTips.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [mascotTips.length]);

  return (
    <div className="mascot-guide-wrapper">
      {/* Interactive Travel Guide Popover Card */}
      {openCard && (
        <div className="mascot-popover-card">
          <button className="popover-close-btn" onClick={() => setOpenCard(false)} aria-label="Close Guide">
            <X size={16} />
          </button>

          <div className="popover-header">
            <img src="/images/spin-mascot.png" alt="Spin Mascot Guide" className="popover-mascot-img" />
            <div>
              <span className="popover-badge">Travel Helper</span>
              <h4 className="popover-title">Hey! What are you planning for?</h4>
              <p className="popover-sub">Let me know how I can help you today.</p>
            </div>
          </div>

          <div className="popover-actions">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="popover-act-btn wa-act"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>

            <button 
              className="popover-act-btn itinerary-act"
              onClick={() => {
                setOpenCard(false);
                if (onOpenInquiry) onOpenInquiry({ title: 'Custom Travel Package' });
              }}
            >
              <Compass size={16} />
              <span>Plan Custom Trip</span>
            </button>

            <button 
              className="popover-act-btn visa-act"
              onClick={() => {
                setOpenCard(false);
                if (onOpenInquiry) onOpenInquiry({ country: 'Visa Application' });
              }}
            >
              <ShieldCheck size={16} />
              <span>Visa Assistance</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Mascot Speech Bubble */}
      {!openCard && !dismissedBubble && (
        <div className="mascot-speech-bubble" onClick={() => setOpenCard(true)}>
          <span>{mascotTips[currentTipIndex]}</span>
          <button 
            className="speech-close" 
            onClick={(e) => {
              e.stopPropagation();
              setDismissedBubble(true);
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Waving Mascot Character Trigger */}
      <button 
        className="mascot-character-btn" 
        onClick={() => setOpenCard(!openCard)}
        title="Click Spin for Travel Guidance"
      >
        <img src="/images/spin-mascot.png" alt="Spin Mascot - Brand Travel Guide" className="mascot-avatar-img" />
        <span className="mascot-pulse-ring" />
      </button>
    </div>
  );
}
