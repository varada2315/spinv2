import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SpinLogo from './SpinLogo';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'International', path: '/international' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'Visas', path: '/visas' },
    { name: 'B2B', path: '/b2b' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <header className={`site-navbar ${scrolled ? 'is-scrolled' : 'is-transparent'}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand-link" onClick={() => window.scrollTo(0, 0)}>
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
          <button 
            type="button"
            className="whatsapp-nav-btn"
            onClick={() => onOpenInquiry && onOpenInquiry({ category: 'package' })}
            title="Start planning your dream trip"
          >
            <MessageCircle size={18} />
            <span>Start Planning</span>
          </button>

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
              <button 
                type="button"
                className="mobile-wa-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry && onOpenInquiry({ category: 'package' });
                }}
              >
                <MessageCircle size={18} /> Start Planning
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
