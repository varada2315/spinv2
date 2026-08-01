import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SpinLogo from './SpinLogo';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import FaqSection from './FaqSection';
import PageCtaBanner from './PageCtaBanner';
import './ContactFooter.css';

export default function ContactFooter({ onToast }) {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isHomePage = path === '/';
  const isContactPage = path === '/contact';

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20Let’s%20start%20planning%20my%20trip.%20I’m%20excited%20to%20explore%20the%20best%20travel%20options.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onToast) {
      onToast(`Thank you ${formData.name}! Your enquiry has been received. Spin Global team will contact you shortly.`);
    }
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer className="contact-footer-section">
      <div className="container">
        {/* Render FAQs on Home page, no top banner on Contact page (ContactSection rendered by ContactPage), and Campaign Banner on sub-pages */}
        {isHomePage ? (
          <FaqSection />
        ) : isContactPage ? null : (
          <PageCtaBanner />
        )}

        {/* Footer Navigation Columns using React Router Links */}
        <div className="footer-links-grid">
          <div className="footer-col brand">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', marginBottom: '12px' }}>
              <SpinLogo size="small" />
            </Link>
            <p className="footer-tagline">
              Simplifying travel with personalised holidays, expert visa assistance, and tailored corporate travel solutions.
            </p>

            {/* Office Location Address & Embedded Interactive Map */}
            <div className="footer-address-box">
              <div className="footer-address-info">
                <MapPin size={18} className="address-pin-icon" />
                <span>Sec 32 A, Chandigarh Road, Ludhiana, Punjab</span>
              </div>

              <div className="footer-map-embed-wrapper">
                <iframe
                  title="Spin Global Office Location"
                  src="https://maps.google.com/maps?q=Sec%2032%20A%2C%20Chandigarh%20Road%2C%20Ludhiana%2C%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="140"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/international">International</Link></li>
              <li><Link to="/domestic">Domestic</Link></li>
              <li><Link to="/visas">Visas</Link></li>
              <li><Link to="/b2b">B2B</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              <li><Link to="/international">International Holidays</Link></li>
              <li><Link to="/domestic">Incredible Bharat (Domestic)</Link></li>
              <li><Link to="/visas">Tourist & Business Visas</Link></li>
              <li><Link to="/b2b">B2B Travel Agency Portal</Link></li>
              <li><Link to="/contact">Corporate MICE & Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} <strong>Spin Global</strong>. All Rights Reserved.</span>
          <span className="built-with">Designed for travelers worldwide</span>
        </div>
      </div>
    </footer>
  );
}
