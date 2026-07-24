import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SpinLogo from './SpinLogo';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'International', path: '/international' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'Visas', path: '/visas' },
    { name: 'B2B', path: '/b2b' },
    { name: 'Contact us', path: '/contact' },
  ];

  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20Let’s%20start%20planning%20my%20trip.%20I’m%20excited%20to%20explore%20the%20best%20travel%20options.";

  return (
    <header className="site-navbar">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand-link">
          <SpinLogo />
        </Link>

        {/* Navigation Items with React Router NavLink */}
        <nav className="navbar-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && <span className="nav-line-indicator" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-nav-btn"
            title="Chat with Spin Global on WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Plan My Trip</span>
          </a>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-links-list">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="mobile-contact-box">
              <div className="phone-item">
                <Phone size={16} color="#00BF63" />
                <span>+91 62846-61722</span>
              </div>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-wa-btn"
              >
                <MessageCircle size={18} /> Plan My Trip via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
