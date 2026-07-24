import React from 'react';
import SpinLogo from './SpinLogo';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <SpinLogo size="small" />
            <p className="footer-about">
              Spin Global Travel is your premier travel companion, offering handpicked flight deals, curated resort stays, and unforgettable guided tours worldwide.
            </p>
            <div className="footer-contact-list">
              <div className="contact-item">
                <MapPin size={16} color="#00B54B" />
                <span>100 Global Avenue, Suite 500, New York, NY</span>
              </div>
              <div className="contact-item">
                <Phone size={16} color="#0055FE" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="contact-item">
                <Mail size={16} color="#FFAB00" />
                <span>support@spinglobaltravel.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Spin Global</a></li>
              <li><a href="#destinations">Popular Destinations</a></li>
              <li><a href="#tours">Special Tour Packages</a></li>
              <li><a href="#flights">Flight Search</a></li>
              <li><a href="#hotels">Luxury Hotels</a></li>
              <li><a href="#blog">Travel Blog & Guides</a></li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="footer-col">
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-links">
              <li><a href="#">Phuket, Thailand</a></li>
              <li><a href="#">Paris, France</a></li>
              <li><a href="#">Bali, Indonesia</a></li>
              <li><a href="#">Dubai, UAE</a></li>
              <li><a href="#">Santorini, Greece</a></li>
              <li><a href="#">Tokyo, Japan</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Trust */}
          <div className="footer-col">
            <h4 className="footer-heading">Customer Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center & FAQs</a></li>
              <li><a href="#">Booking Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund & Cancellation</a></li>
              <li><a href="#">Safety & Health Guidelines</a></li>
              <li><a href="#">Partner Portal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} <strong>Spin Global Travel</strong>. All rights reserved. Crafted with <Heart size={14} color="#FF2E2E" fill="#FF2E2E" style={{ display: 'inline', margin: '0 2px' }} /> for travelers worldwide.
          </div>
          <div className="payment-badges">
            <span className="pay-badge">VISA</span>
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">PayPal</span>
            <span className="pay-badge">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
