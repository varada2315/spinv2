import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20I%20would%20like%20to%20enquire%20about%20travel%20packages%20and%20visa%20services.";

  return (
    <div className="whatsapp-float-wrapper">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Enquire on WhatsApp (+91 62846-61722)"
      >
        <span className="online-indicator-dot" />
        <MessageCircle size={28} color="#FFFFFF" />
        <span className="wa-float-tooltip">Chat with Us (+91 62846-61722)</span>
      </a>
    </div>
  );
}
