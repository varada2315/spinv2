import React, { useState } from 'react';
import { MapPin, ArrowRight, Star, Heart } from 'lucide-react';
import './PopularDestinations.css';

export default function PopularDestinations({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState({});

  const categories = ['All', 'Asia', 'Europe', 'Middle East', 'Beach', 'Adventure'];

  const destinations = [
    {
      id: 'thailand',
      title: 'Thailand',
      location: 'Phuket',
      badge: 'Bestseller',
      badgeClass: 'badge-blue',
      price: 699,
      rating: 4.9,
      reviews: 1420,
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      category: 'Asia',
      duration: '7 Days / 6 Nights',
      description: 'Explore stunning limestone cliffs, crystal clear turquoise waters, and vibrant nightlife in Phuket & Phi Phi Islands.'
    },
    {
      id: 'france',
      title: 'France',
      location: 'Paris',
      badge: 'Popular',
      badgeClass: 'badge-pink',
      price: 799,
      rating: 4.8,
      reviews: 980,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      category: 'Europe',
      duration: '5 Days / 4 Nights',
      description: 'Experience romantic Seine river cruises, world-class art museums, Eiffel tower views, and exquisite French pastries.'
    },
    {
      id: 'bali',
      title: 'Bali, Indonesia',
      location: 'Ubud',
      badge: 'Trending',
      badgeClass: 'badge-cyan',
      price: 599,
      rating: 4.9,
      reviews: 2150,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      category: 'Beach',
      duration: '6 Days / 5 Nights',
      description: 'Immerse in lush terraced rice paddies, sacred water temples, tropical beaches, and serene luxury wellness retreats.'
    },
    {
      id: 'dubai',
      title: 'Dubai, UAE',
      location: 'Dubai',
      badge: 'Bestseller',
      badgeClass: 'badge-blue',
      price: 899,
      rating: 4.9,
      reviews: 1840,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      category: 'Middle East',
      duration: '6 Days / 5 Nights',
      description: 'Witness futuristic architecture, desert safari dune bashing, luxury shopping malls, and private yacht cruises.'
    }
  ];

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory || (activeCategory === 'Beach' && d.id === 'thailand'));

  const toggleFav = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="destinations-section" id="destinations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrap">
            <h2 className="section-title">
              Popular Destinations
              <svg className="flight-doodle" width="48" height="24" viewBox="0 0 60 30" fill="none">
                <path d="M2 25C15 10 35 30 55 5" stroke="#0055FE" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M52 2L58 6L54 10" stroke="#0055FE" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </h2>
          </div>
          <button className="view-all-btn">
            <span>View All Destinations</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Category Pills */}
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="destinations-grid">
          {filteredDestinations.map((item) => (
            <div 
              key={item.id} 
              className="dest-card hover-lift"
              onClick={() => onSelectDestination(item)}
            >
              {/* Card Image Wrapper */}
              <div className="dest-image-wrap">
                <img src={item.image} alt={item.title} className="dest-img" />
                
                {/* Top Badge */}
                <span className={`dest-badge ${item.badgeClass}`}>
                  {item.badge}
                </span>

                {/* Heart Favorite Button */}
                <button 
                  className={`fav-btn ${favorites[item.id] ? 'active' : ''}`}
                  onClick={(e) => toggleFav(e, item.id)}
                  aria-label="Add to favorites"
                >
                  <Heart size={16} fill={favorites[item.id] ? '#FF2E2E' : 'none'} color={favorites[item.id] ? '#FF2E2E' : '#FFFFFF'} />
                </button>

                {/* Rating Badge */}
                <div className="rating-badge">
                  <Star size={12} fill="#FFAB00" color="#FFAB00" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Card Content Overlay Bottom */}
              <div className="dest-card-content">
                <div className="dest-info-left">
                  <h3 className="dest-title">{item.title}</h3>
                  <div className="dest-location">
                    <MapPin size={14} color="#00B54B" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="dest-price-wrap">
                  <span className="price-label">From</span>
                  <span className="price-amount">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
