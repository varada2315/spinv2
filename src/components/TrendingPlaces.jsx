import React from 'react';
import { Sparkles, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import './TrendingPlaces.css';

const TRENDING_PLACES = [
  {
    id: 'bali',
    slug: 'bali',
    name: 'Bali, Indonesia',
    category: 'International',
    image: '/images/intl/bali.jpg',
    objectPosition: 'center center',
    tagline: 'Ulun Danu Temple & Ubud Terraces'
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    name: 'Kashmir Valley',
    category: 'Domestic',
    image: '/images/dom/kashmir.jpg',
    tagline: 'Dal Lake Shikaras & Snowy Peaks'
  },
  {
    id: 'dubai',
    slug: 'uae',
    name: 'Dubai, UAE',
    category: 'International',
    image: '/images/intl/uae.jpg',
    tagline: 'Burj Khalifa & Futuristic Skyline'
  },
  {
    id: 'goa',
    slug: 'goa',
    name: 'Goa Beaches',
    category: 'Domestic',
    image: '/images/dom/goa.jpg',
    tagline: 'Golden Sands & Sunset Coastline'
  },
  {
    id: 'thailand',
    slug: 'thailand',
    name: 'Phi Phi Islands, Thailand',
    category: 'International',
    image: '/images/intl/thailand.jpg',
    tagline: 'Turquoise Lagoons & Longtail Boats'
  },
  {
    id: 'kerala',
    slug: 'kerala',
    name: 'Kerala Backwaters',
    category: 'Domestic',
    image: '/images/dom/kerala.jpg',
    tagline: 'Alleppey Houseboats & Lotus Lagoons'
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore City',
    category: 'International',
    image: '/images/intl/singapore.jpg',
    objectPosition: 'center center',
    tagline: 'Marina Bay Sands & SkyPark'
  },
  {
    id: 'ladakh',
    slug: 'leh-ladakh',
    name: 'Leh Ladakh',
    category: 'Domestic',
    image: '/images/dom/leh-ladakh.jpg',
    tagline: 'Thiksey Monastery & Ancient Stupas'
  },
  {
    id: 'japan',
    slug: 'japan',
    name: 'Kyoto, Japan',
    category: 'International',
    image: '/images/intl/japan.jpg',
    tagline: 'Fushimi Inari & Red Torii Gates'
  },
  {
    id: 'rajasthan',
    slug: 'rajasthan',
    name: 'Jaipur, Rajasthan',
    category: 'Domestic',
    image: '/images/dom/rajasthan.jpg',
    tagline: 'Hawa Mahal & Pink City Heritage'
  },
  {
    id: 'vietnam',
    slug: 'vietnam',
    name: 'Ba Na Hills, Vietnam',
    category: 'International',
    image: '/images/intl/vietnam.jpg',
    tagline: 'Golden Bridge & Giant Stone Hands'
  },
  {
    id: 'andaman',
    slug: 'andaman',
    name: 'Andaman Islands',
    category: 'Domestic',
    image: '/images/dom/andaman.jpg',
    tagline: 'Pristine Lagoons & Coral Reefs'
  },
  {
    id: 'europe',
    slug: 'schengen',
    name: 'Paris, France',
    category: 'International',
    image: '/images/intl/schengen.jpg',
    tagline: 'Eiffel Tower & Seine River Cruises'
  },
  {
    id: 'meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya',
    category: 'Domestic',
    image: '/images/dom/meghalaya.jpg',
    tagline: 'Nohkalikai Falls & Cloud Canyons'
  },
  {
    id: 'sikkim',
    slug: 'sikkim',
    name: 'Sikkim',
    category: 'Domestic',
    image: '/images/dom/sikkim.jpg',
    tagline: 'Rumtek Monastery & Himalayan Valleys'
  },
  {
    id: 'maldives',
    slug: 'maldives',
    name: 'Maldives',
    category: 'International',
    image: '/images/intl/maldives.jpg',
    tagline: 'Luxury Overwater Villas & Lagoons'
  },
  {
    id: 'malaysia',
    slug: 'malaysia',
    name: 'Kuala Lumpur, Malaysia',
    category: 'International',
    image: '/images/intl/malaysia.jpg',
    tagline: 'Petronas Twin Towers & Skyline'
  },
  {
    id: 'egypt',
    slug: 'egypt',
    name: 'Giza, Egypt',
    category: 'International',
    image: '/images/intl/egypt.jpg',
    tagline: 'Great Pyramids of Giza & Desert'
  },
  {
    id: 'georgia',
    slug: 'georgia',
    name: 'Tbilisi, Georgia',
    category: 'International',
    image: '/images/intl/georgia.jpg',
    objectPosition: 'center top',
    tagline: 'Holy Trinity Cathedral & Old Town'
  },
  {
    id: 'turkey',
    slug: 'turkey',
    name: 'Istanbul, Turkey',
    category: 'International',
    image: '/images/intl/turkey.jpg',
    tagline: 'Hagia Sophia & Grand Bazaars'
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
              <img 
                src={item.image} 
                alt={item.name} 
                className="trending-card-img" 
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                loading="eager"
                decoding="async"
              />
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
