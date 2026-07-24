import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SpinLogo from './SpinLogo';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import './ContactFooter.css';

export default function ContactFooter({ onToast }) {
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
      {/* Contact Header & Form Area */}
      <div className="container">
        <div className="contact-card-box">
          <div className="contact-info-col">
            <span className="section-badge">Get In Touch</span>
            <h2 className="contact-title">Let's Connect.</h2>
            <p className="contact-sub">
              Whether you're planning your next journey, need visa assistance, or would like to discuss a business partnership, we'd love to hear from you.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="icon-wrap"><MapPin size={20} color="#00BF63" /></div>
                <div>
                  <span className="det-label">Office Address</span>
                  <span className="det-val">Chandigarh Road, Ludhiana, Punjab, India</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="icon-wrap"><Phone size={20} color="#00BF63" /></div>
                <div>
                  <span className="det-label">Phone & WhatsApp</span>
                  <a href="tel:6284661722" className="det-val font-bold">+91 62846 - 61722</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="icon-wrap"><Mail size={20} color="#00BF63" /></div>
                <div>
                  <span className="det-label">Email Enquiry</span>
                  <a href="mailto:info@spinglobal.in" className="det-val">info@spinglobal.in</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="icon-wrap"><Clock size={20} color="#00BF63" /></div>
                <div>
                  <span className="det-label">Working Hours</span>
                  <span className="det-val">Available 24 x 7</span>
                </div>
              </div>
            </div>

            <div className="contact-wa-direct">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-cream">
                <MessageCircle size={18} />
                <span>Chat on WhatsApp (+91 62846-61722)</span>
              </a>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="contact-form-col">
            <h3 className="form-card-title">Send Us a Message</h3>
            <p className="form-card-sub">A few details are all we need to get started.</p>

            <form onSubmit={handleSubmit} className="spin-contact-form">
              <div className="form-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <label>Travel / Visa Requirement</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your trip plans, dates, or visa questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <span>{submitted ? 'Enquiry Sent!' : 'Submit Enquiry'}</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Columns using React Router Links */}
        <div className="footer-links-grid">
          <div className="footer-col brand">
            <SpinLogo size="small" />
            <p className="footer-tagline">
              Simplifying travel with personalised holidays, expert visa assistance, and tailored corporate travel solutions.
            </p>
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
