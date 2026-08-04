import React from 'react';
import { Sparkles, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import './TrendingPlaces.css';

const TRENDING_PLACES = [
  {
    id: 'bali',
    slug: 'bali',
    name: 'Bali, Indonesia',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tagline: 'Tropical Beaches & Ubud Terraces'
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    name: 'Kashmir Valley',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    tagline: 'Shikara Rides & Gulmarg Snow'
  },
  {
    id: 'dubai',
    slug: 'uae',
    name: 'Dubai, UAE',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Burj Khalifa & Desert Safari'
  },
  {
    id: 'goa',
    slug: 'goa',
    name: 'Goa Beaches',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    tagline: 'Sunsets, Cruises & Nightlife'
  },
  {
    id: 'thailand',
    slug: 'thailand',
    name: 'Phuket, Thailand',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Phi Phi Islands & Turquoise Seas'
  },
  {
    id: 'kerala',
    slug: 'kerala',
    name: 'Kerala Backwaters',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    tagline: 'Alleppey Houseboats & Tea Estates'
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore City',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    tagline: 'Gardens by the Bay & Skyline'
  },
  {
    id: 'ladakh',
    slug: 'leh-ladakh',
    name: 'Leh Ladakh',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    tagline: 'Pangong Lake & Mountain Passes'
  },
  {
    id: 'japan',
    slug: 'japan',
    name: 'Kyoto, Japan',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    tagline: 'Mount Fuji & Cherry Blossoms'
  },
  {
    id: 'rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan Palaces',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    tagline: 'Royal Forts & Desert Safaris'
  },
  {
    id: 'vietnam',
    slug: 'vietnam',
    name: 'Ha Long Bay, Vietnam',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    tagline: 'Golden Bridge & Emerald Waters'
  },
  {
    id: 'andaman',
    slug: 'andaman',
    name: 'Andaman Islands',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    tagline: 'Radhanagar Coral Reefs'
  },
  {
    id: 'europe',
    slug: 'schengen',
    name: 'Swiss Alps, Europe',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    tagline: 'Paris Eiffel & Scenic Rail Trips'
  },
  {
    id: 'meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya',
    category: 'Domestic',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    tagline: 'Living Root Bridges & Dawki River'
  }
];

export default function TrendingPlaces({ onSelectDestination }) {
  // Duplicate the list twice for seamless infinite marquee loop
  const marqueeItems = [...TRENDING_PLACES, ...TRENDING_PLACES];

  const handleCardClick = (item) => {
    if (onSelectDestination) {
      onSelectDestination(item.slug);
    }
  };

  return (
    <section className="trending-places-section">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">
            <Sparkles size={14} color="#00BF63" />
            <span>Top Picks</span>
          </span>
          <h2 className="main-section-title">Trending Places</h2>
          <p className="section-subtitle">
            Discover the destinations travellers are exploring the most.
          </p>
        </div>
      </div>

      {/* Full-width infinite scrolling marquee track */}
      <div className="trending-marquee-wrapper">
        <div className="trending-marquee-track">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="trending-card"
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
            >
              <img src={item.image} alt={item.name} className="trending-card-img" />
              <div className="trending-card-overlay" />

              {/* Category Pill Badge */}
              <div className="trending-card-badge">
                {item.category === 'Domestic' ? (
                  <MapPin size={12} color="#00BF63" />
                ) : (
                  <Globe size={12} color="#00BF63" />
                )}
                <span>{item.category}</span>
              </div>

              {/* Bottom Card Content */}
              <div className="trending-card-content">
                <div className="trending-title-row">
                  <h3 className="trending-card-title">{item.name}</h3>
                  <div className="trending-card-arrow">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="trending-card-tagline">{item.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
