import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Plane } from 'lucide-react';
import CategoryEnquiryModal from './CategoryEnquiryModal';
import './PageCtaBanner.css';

const BANNER_CONFIG = {
  '/about': {
    subtitle: 'OUR STORY',
    heading: 'Travel Beyond Destinations',
    description: 'Discover the passion, expertise, and personalized service that make Spin Global your trusted travel partner.',
    category: 'international',
    bgImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1600&q=80'
  },
  '/international': {
    subtitle: 'WORLDWIDE ADVENTURES',
    heading: 'Your Next International Escape Awaits',
    description: 'Explore handpicked destinations with expertly designed international holiday experiences.',
    category: 'international',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'
  },
  '/domestic': {
    subtitle: 'DISCOVER INDIA',
    heading: 'Experience Incredible India Like Never Before',
    description: "From snow-capped mountains to tropical beaches, discover unforgettable journeys across India.",
    category: 'domestic',
    bgImage: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=80'
  },
  '/visas': {
    subtitle: 'TRAVEL MADE EASY',
    heading: 'Visa Support You Can Trust',
    description: 'Fast, reliable, and hassle-free visa assistance for your international travel plans.',
    category: 'visa',
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80'
  },
  '/b2b': {
    subtitle: 'BUSINESS PARTNERSHIPS',
    heading: 'Grow Your Travel Business With Spin Global',
    description: 'Partner with us to deliver exceptional travel experiences with wholesale rates and 24/7 B2B support.',
    category: 'b2b',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80'
  }
};

const DEFAULT_BANNER = {
  subtitle: 'WORLDWIDE ADVENTURES',
  heading: 'Your Next Escape Awaits',
  description: 'Handpicked holiday experiences, custom itineraries, and end-to-end visa assistance.',
  category: 'international',
  bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80'
};

export default function PageCtaBanner({ onNotification }) {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  const banner = BANNER_CONFIG[currentPath] || DEFAULT_BANNER;

  const handleCtaClick = () => {
    setActiveModalCategory(banner.category);
  };

  return (
    <>
      <div className="page-cta-banner-wrapper">
        <div className="page-cta-card">
          <img src={banner.bgImage} alt={banner.heading} className="page-cta-bg" />
          <div className="page-cta-overlay" />

          <div className="page-cta-content">
            <span className="page-cta-subtitle">
              <Plane size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
              {banner.subtitle}
            </span>
            <h2 className="page-cta-heading">{banner.heading}</h2>
            <p className="page-cta-desc">{banner.description}</p>
            
            <button className="page-cta-btn" onClick={handleCtaClick}>
              <span>Let's Connect</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {activeModalCategory && (
        <CategoryEnquiryModal
          category={activeModalCategory}
          onClose={() => setActiveModalCategory(null)}
          onSubmitted={(msg) => {
            if (onNotification) onNotification(msg);
          }}
        />
      )}
    </>
  );
}
