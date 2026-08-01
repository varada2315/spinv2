import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import './CustomerReviews.css';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Amanpreet & Simran Kaur',
    location: 'Ludhiana, Punjab',
    destination: 'Bali, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Verified 2 weeks ago',
    text: 'Spin Global organized our honeymoon trip to Bali flawlessly! From private pool villa in Ubud to Tanah Lot sunset & Nusa Penida speed boat, everything was 5-star experience. Thanks to the team for 24/7 WhatsApp support!'
  },
  {
    id: 2,
    name: 'Rajesh & Meenakshi Sharma',
    location: 'New Delhi',
    destination: 'Dubai & Abu Dhabi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Verified 1 month ago',
    text: 'Extremely professional travel agency! They booked our Dubai family vacation including Burj Khalifa 124th floor, Desert Safari VIP seating, and Abu Dhabi BAPS temple tour. Rates were unbeatable compared to online portals.'
  },
  {
    id: 3,
    name: 'Vikramjit Singh',
    location: 'Chandigarh',
    destination: 'Kashmir Valley & Gulmarg',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Verified 3 weeks ago',
    text: 'Our Kashmir snow trip with Spin Global was magical. Houseboat stay in Dal Lake, Gondola ride in Gulmarg, and personal SUV driver. Very transparent pricing with zero hidden charges.'
  },
  {
    id: 4,
    name: 'Priya & Rohan Mehta',
    location: 'Mumbai',
    destination: 'Switzerland & Alps',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Verified 1 month ago',
    text: 'Spin Global handled our Schengen visa and Europe package smoothly. Swiss Travel Pass, Mt. Titlis cable car, and Interlaken hotel were perfectly arranged. Highly recommended!'
  }
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slider Timer (5s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const currentReview = REVIEWS_DATA[activeIndex];

  return (
    <section className="reviews-section">
      <div className="container">
        {/* Google Rating Style Header */}
        <div className="reviews-header-center">
          <h2 className="main-section-title">Loved by Travellers Worldwide</h2>
          <p className="section-subtitle">
            Read real experiences from couples, families, and solo explorers who created lifelong memories with Spin Global.
          </p>
        </div>

        {/* Reviews Auto Slider */}
        <div className="reviews-slider-container">
          <button className="reviews-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Review">
            <ChevronLeft size={22} />
          </button>

          <div className="review-card-main">
            <Quote className="quote-bg-icon" size={80} />
            
            <div className="review-card-top">
              <div className="avatar-wrap">
                <img src={currentReview.avatar} alt={currentReview.name} className="reviewer-avatar" />
              </div>
              <div className="reviewer-meta">
                <div className="reviewer-name-row">
                  <h4 className="reviewer-name">{currentReview.name}</h4>
                  <CheckCircle2 size={16} color="#00BF63" className="verified-icon" />
                </div>
                <span className="reviewer-location">{currentReview.location}</span>
                <div className="dest-visited-tag">
                  <span>Visited: <strong>{currentReview.destination}</strong></span>
                </div>
              </div>
            </div>

            <div className="review-stars-line">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
              ))}
              <span className="review-date">{currentReview.date}</span>
            </div>

            <p className="review-body-text">"{currentReview.text}"</p>
          </div>

          <button className="reviews-nav-btn next-btn" onClick={handleNext} aria-label="Next Review">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Slider Indicator Dots */}
        <div className="reviews-dots-row">
          {REVIEWS_DATA.map((_, idx) => (
            <button
              key={idx}
              className={`review-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
