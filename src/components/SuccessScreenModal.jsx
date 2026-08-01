import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import './SuccessScreenModal.css';

export default function SuccessScreenModal({ onClose }) {
  return (
    <div className="success-modal-backdrop" onClick={onClose}>
      {/* Decorative Floating Sparkles & Confetti Dots */}
      <div className="confetti-particle p1" />
      <div className="confetti-particle p2" />
      <div className="confetti-particle p3" />
      <div className="confetti-particle p4" />
      <div className="confetti-particle p5" />

      <div className="success-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="success-modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Large Animated Spinny Mascot Avatar */}
        <div className="mascot-avatar-wrap-large">
          <div className="mascot-glow-ring-large" />
          <img 
            src="/images/spin-mascot.png" 
            alt="Spinny Mascot" 
            className="success-mascot-img-large"
          />
          <div className="success-badge-icon-large">
            <CheckCircle2 size={26} color="#00BF63" />
          </div>
        </div>

        <div className="success-content-block">
          <div className="success-sparkle-tag">
            <Sparkles size={14} color="#00BF63" />
            <span>SUBMISSION SUCCESSFUL</span>
          </div>

          <h2 className="success-title-large">Thank You!</h2>
          
          <p className="success-main-message">
            We've received your details. Our team will connect with you shortly.
          </p>

          <p className="success-subtext">
            Our travel expert will contact you via call or WhatsApp as soon as possible.
          </p>

          <button className="btn-primary success-primary-cta" onClick={onClose}>
            <span>Continue Exploring</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
