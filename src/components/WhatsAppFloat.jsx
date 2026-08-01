import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './WhatsAppFloat.css';

export default function WhatsAppFloat({ phoneNumber = "+916284661722" }) {
  const whatsappUrl = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20I%20would%20like%20to%20enquire%20about%20travel%20packages%20and%20visa%20services.";

  const handleCallClick = (e) => {
    if (!phoneNumber) {
      e.preventDefault();
      window.location.href = "tel:+916284661722";
    }
  };

  return (
    <div className="floating-buttons-stack">
      {/* Floating Direct Call Button (Above WhatsApp) */}
      <a
        href={phoneNumber ? `tel:${phoneNumber}` : '#'}
        onClick={handleCallClick}
        className="call-float-btn"
        aria-label="Call Us Direct"
      >
        <Phone size={28} color="#FFFFFF" />
        <span className="float-tooltip">Call Us Direct</span>
      </a>

      {/* Official Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Enquire on WhatsApp (+91 62846-61722)"
      >
        <WhatsAppIcon size={28} color="#FFFFFF" />
        <span className="float-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
