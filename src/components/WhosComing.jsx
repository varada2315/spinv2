import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './WhosComing.css';

const TRAVEL_TYPES = [
  {
    id: 'family',
    label: 'Family',
    image: '/images/travel-family-cutout.png',
    alt: 'Family travel with luggage',
    description: 'Perfect family getaways',
  },
  {
    id: 'couple',
    label: 'Couple',
    image: '/images/travel-couple-cutout.png',
    alt: 'Couple travelling together',
    description: 'Romantic escapes for two',
  },
  {
    id: 'friends',
    label: 'Friends',
    image: '/images/travel-friends-cutout.png',
    alt: 'Group of friends travelling',
    description: 'Group adventures & trips',
  },
  {
    id: 'solo',
    label: 'Solo',
    image: '/images/travel-solo-cutout.png',
    alt: 'Solo female traveller',
    description: 'Solo explorer journeys',
  },
  {
    id: 'senior',
    label: 'Senior Citizen',
    image: '/images/travel-senior-cutout.png',
    alt: 'Senior citizen couple travelling',
    description: 'Relaxing senior getaways',
  },
];

export default function WhosComing({ onOpenInquiry }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // Determine visible count based on window width
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    if (window.innerWidth <= 1280) return 4;
    return 5;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, TRAVEL_TYPES.length - visibleCount);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const translateX = -(currentIndex * (100 / visibleCount));

  const handleCardClick = (type) => {
    if (onOpenInquiry) {
      onOpenInquiry({
        category: type.id,
        title: `${type.label} Travel Package`,
        description: type.description,
      });
    }
  };

  return (
    <section className="whos-coming-section" aria-label="Who's Coming Along">
      {/* Header */}
      <div className="whos-coming-header">
        <h2>
          Who's <span className="highlight">Coming</span> Along?
        </h2>
      </div>

      {/* Slider */}
      <div className="whos-coming-slider-wrapper">
        {/* Prev button */}
        <button
          className="whos-coming-nav prev"
          onClick={prev}
          aria-label="Previous"
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Track */}
        <div className="whos-coming-track-outer">
          <div
            ref={trackRef}
            className="whos-coming-track"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {TRAVEL_TYPES.map((type) => (
              <div
                key={type.id}
                className="whos-coming-card"
                onClick={() => handleCardClick(type)}
                role="button"
                tabIndex={0}
                aria-label={`${type.label} travel packages`}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(type)}
              >
                <div className="whos-coming-img-wrap">
                  <img
                    src={type.image}
                    alt={type.alt}
                    className="whos-coming-img"
                    loading="lazy"
                  />
                </div>
                <div className="whos-coming-label">
                  <span>{type.label}</span>
                  <span className="arrow-icon">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          className="whos-coming-nav next"
          onClick={next}
          aria-label="Next"
          disabled={currentIndex === maxIndex}
          style={{ opacity: currentIndex === maxIndex ? 0.4 : 1 }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="whos-coming-dots" role="tablist" aria-label="Slide position">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`whos-coming-dot${currentIndex === i ? ' active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={currentIndex === i}
            />
          ))}
        </div>
      )}
    </section>
  );
}
