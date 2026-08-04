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
  const [currentPage, setCurrentPage] = useState(0);
  const trackRef = useRef(null);

  // Determine visible count based on window width (3 cards max per page)
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const totalPages = Math.ceil(TRAVEL_TYPES.length / visibleCount);

  // Reset to first page if page index exceeds totalPages on resize
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const prev = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  }, [totalPages]);

  const translateX = -(currentPage * 100);

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
          aria-label="Previous Page"
          disabled={currentPage === 0}
          style={{ opacity: currentPage === 0 ? 0.4 : 1 }}
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
          aria-label="Next Page"
          disabled={currentPage >= totalPages - 1}
          style={{ opacity: currentPage >= totalPages - 1 ? 0.4 : 1 }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dots (Exact count matching pages) */}
      {totalPages > 1 && (
        <div className="whos-coming-dots" role="tablist" aria-label="Slide position">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`whos-coming-dot${currentPage === i ? ' active' : ''}`}
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to page ${i + 1}`}
              role="tab"
              aria-selected={currentPage === i}
            />
          ))}
        </div>
      )}
    </section>
  );
}
