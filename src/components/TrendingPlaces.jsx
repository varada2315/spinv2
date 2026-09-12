import React from 'react';
import { Sparkles, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import './TrendingPlaces.css';

const TRENDING_PLACES = [
  {
    id: 'bali',
    slug: 'bali',
    name: 'Bali, Indonesia',
    category: 'International',
    image: encodeURI('/images/Bali Ulun Danu Temple.jpg?v=5'),
    objectPosition: 'center center',
    tagline: 'Ulun Danu Temple & Ubud Terraces'
  },
  {
    id: 'kashmir',
    slug: 'kashmir',
    name: 'Kashmir Valley',
    category: 'Domestic',
    image: encodeURI('/images/Kashmir.jpg.jpeg'),
    tagline: 'Dal Lake Shikaras & Snowy Peaks'
  },
  {
    id: 'dubai',
    slug: 'uae',
    name: 'Dubai, UAE',
    category: 'International',
    image: encodeURI('/images/Dubai Skyline Burj Khalifa.jpg'),
    tagline: 'Burj Khalifa & Futuristic Skyline'
  },
  {
    id: 'goa',
    slug: 'goa',
    name: 'Goa Beaches',
    category: 'Domestic',
    image: encodeURI('/images/Goa (2).avif'),
    tagline: 'Golden Sands & Sunset Coastline'
  },
  {
    id: 'thailand',
    slug: 'thailand',
    name: 'Phi Phi Islands, Thailand',
    category: 'International',
    image: encodeURI('/images/Thailand Phi Phi Islands.jpg'),
    tagline: 'Turquoise Lagoons & Longtail Boats'
  },
  {
    id: 'kerala',
    slug: 'kerala',
    name: 'Kerala Backwaters',
    category: 'Domestic',
    image: encodeURI('/images/kerala 2.jpg.jpeg'),
    tagline: 'Alleppey Houseboats & Lotus Lagoons'
  },
  {
    id: 'singapore',
    slug: 'singapore',
    name: 'Singapore City',
    category: 'International',
    image: encodeURI('/images/Singapore Marina Bay Sands.jpg'),
    objectPosition: 'center center',
    tagline: 'Marina Bay Sands & SkyPark'
  },
  {
    id: 'ladakh',
    slug: 'leh-ladakh',
    name: 'Leh Ladakh',
    category: 'Domestic',
    image: encodeURI('/images/leh ladakh.jpg.jpeg'),
    tagline: 'Thiksey Monastery & Ancient Stupas'
  },
  {
    id: 'japan',
    slug: 'japan',
    name: 'Kyoto, Japan',
    category: 'International',
    image: encodeURI('/images/Fushimi Inari Shrine , Kyoto , Japan.jpg'),
    tagline: 'Fushimi Inari & Red Torii Gates'
  },
  {
    id: 'rajasthan',
    slug: 'rajasthan',
    name: 'Jaipur, Rajasthan',
    category: 'Domestic',
    image: encodeURI('/images/Rajasthan.jpg.jpeg'),
    tagline: 'Hawa Mahal & Pink City Heritage'
  },
  {
    id: 'vietnam',
    slug: 'vietnam',
    name: 'Ba Na Hills, Vietnam',
    category: 'International',
    image: encodeURI('/images/Ba Na Hills Golden Bridge , Vietnam.jpg'),
    tagline: 'Golden Bridge & Giant Stone Hands'
  },
  {
    id: 'andaman',
    slug: 'andaman',
    name: 'Andaman Islands',
    category: 'Domestic',
    image: encodeURI('/images/Andaman.jpg.jpeg'),
    tagline: 'Pristine Lagoons & Coral Reefs'
  },
  {
    id: 'europe',
    slug: 'schengen',
    name: 'Paris, France',
    category: 'International',
    image: encodeURI('/images 2/Eiffel Tower , paris , france.jpg.jpeg'),
    tagline: 'Eiffel Tower & Seine River Cruises'
  },
  {
    id: 'meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya',
    category: 'Domestic',
    image: encodeURI('/images/meghalaya.jpg.jpeg'),
    tagline: 'Nohkalikai Falls & Cloud Canyons'
  },
  {
    id: 'sikkim',
    slug: 'sikkim',
    name: 'Sikkim',
    category: 'Domestic',
    image: encodeURI('/images/sikkim.jpg.jpeg'),
    tagline: 'Rumtek Monastery & Himalayan Valleys'
  },
  {
    id: 'maldives',
    slug: 'maldives',
    name: 'Maldives',
    category: 'International',
    image: encodeURI('/images/Luxury Overwater Villas & Sunset , Maldives.jpg'),
    tagline: 'Luxury Overwater Villas & Lagoons'
  },
  {
    id: 'malaysia',
    slug: 'malaysia',
    name: 'Kuala Lumpur, Malaysia',
    category: 'International',
    image: encodeURI('/images/Petronas Twin Towers , Kuala Lumpur , Malaysia.jpg'),
    tagline: 'Petronas Twin Towers & Skyline'
  },
  {
    id: 'egypt',
    slug: 'egypt',
    name: 'Giza, Egypt',
    category: 'International',
    image: encodeURI('/images/Pyramids of Giza , Egypt.jpg'),
    tagline: 'Great Pyramids of Giza & Desert'
  },
  {
    id: 'georgia',
    slug: 'georgia',
    name: 'Tbilisi, Georgia',
    category: 'International',
    image: encodeURI('/images 2/Holy Trinity Cathedral , georgia.jpg.jpeg'),
    objectPosition: 'center top',
    tagline: 'Holy Trinity Cathedral & Old Town'
  },
  {
    id: 'turkey',
    slug: 'turkey',
    name: 'Istanbul, Turkey',
    category: 'International',
    image: encodeURI('/images/Hagia Sophia , Istanbul , Turkey.jpg'),
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
                loading="lazy"
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
