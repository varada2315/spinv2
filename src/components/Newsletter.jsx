import React, { useState } from 'react';
import { Send, Facebook, Instagram, Twitter, Youtube, CheckCircle2 } from 'lucide-react';
import './Newsletter.css';

export default function Newsletter({ onSubscribeToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    onSubscribeToast(`Thank you! ${email} has been subscribed to Spin Global Travel newsletter.`);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            {/* Left Content */}
            <div className="newsletter-left">
              <div className="plane-icon-wrapper">
                <Send size={28} color="#FFFFFF" className="plane-icon" />
              </div>
              <div className="newsletter-text">
                <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
                <p className="newsletter-desc">
                  Get the latest travel deals and inspiration straight to your inbox.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="email-input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  {subscribed ? (
                    <>
                      <CheckCircle2 size={16} /> Subscribed
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="newsletter-socials">
              <a href="https://www.facebook.com/share/1DQqQMsfwJ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/spinglobal_?igsh=MTFqczFqNDFnODRldA==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://youtube.com/@spinglobal-ind?si=FalPEFhXIH3-RzqJ" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
