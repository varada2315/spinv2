import React from 'react';
import { ArrowRight } from 'lucide-react';
import './InternationalHolidays.css';

export default function InternationalHolidays({ onSelectDestination }) {
  const holidays = [
    { slug: 'bali', title: 'Indonesia (Bali)', image: encodeURI('/images/bali-international.jpg?v=3'), tag: 'Tanah Lot & Ubud Terraces' },
    { slug: 'uae', title: 'UAE (Dubai)', image: encodeURI('/images/Dubai Skyline Burj Khalifa.jpg'), tag: 'Burj Khalifa & Desert Safari' },
    { slug: 'vietnam', title: 'Vietnam', image: encodeURI('/images/Ba Na Hills Golden Bridge , Vietnam.jpg'), tag: 'Ba Na Hills & Golden Bridge' },
    { slug: 'thailand', title: 'Thailand', image: encodeURI('/images/Thailand Phi Phi Islands.jpg'), tag: 'Phi Phi Islands & Temples' },
    { slug: 'singapore', title: 'Singapore', image: encodeURI('/images/Singapore Marina Bay Sands.jpg'), tag: 'Gardens by the Bay & Sentosa', objectPosition: 'center center' },
    { slug: 'malaysia', title: 'Malaysia', image: encodeURI('/images/Petronas Twin Towers , Kuala Lumpur , Malaysia.jpg'), tag: 'Petronas Towers & Langkawi' },
    { slug: 'japan', title: 'Japan', image: encodeURI('/images/Fushimi Inari Shrine , Kyoto , Japan.jpg'), tag: 'Fushimi Inari & Bamboo Grove' },
    { slug: 'schengen', title: 'Schengen (Europe)', image: encodeURI('/images 2/Eiffel Tower , paris , france.jpg.jpeg'), tag: 'Eiffel Tower & Swiss Alps' },
    { slug: 'sri-lanka', title: 'Sri Lanka', image: encodeURI('/images/Sigiriya Rock Fortress , Sri Lanka.jpg'), tag: 'Sigiriya Rock & Nine Arch' },
    { slug: 'philippines', title: 'Philippines', image: encodeURI('/images/Coron, Philippines.jpg.jpeg'), tag: 'Coron Lagoons & Bohol' },
    { slug: 'georgia', title: 'Georgia', image: encodeURI('/images 2/Holy Trinity Cathedral , georgia.jpg.jpeg?v=2'), tag: 'Holy Trinity & Caucasus Peaks', objectPosition: 'center top' },
    { slug: 'kazakhstan', title: 'Kazakhstan', image: encodeURI('/images/Charyn Canyon , Kazakhstan.jpg.jpeg'), tag: 'Charyn Canyon & Kolsai Lakes' },
    { slug: 'maldives', title: 'Maldives', image: encodeURI('/images/Luxury Overwater Villas & Sunset , Maldives.jpg'), tag: 'Luxury Overwater Villas & Reefs' },
    { slug: 'azerbaijan', title: 'Azerbaijan', image: encodeURI('/images/Flame Towers , azerbaijan.jpg.jpeg'), tag: 'Flame Towers & Baku Boulevard' },
    { slug: 'turkey', title: 'Turkey', image: encodeURI('/images/Cappadocia Hot Air Balloons , Turkey.jpg'), tag: 'Cappadocia Hot Air Balloons' },
    { slug: 'seychelles', title: 'Seychelles', image: encodeURI('/images/La Digue, Seychelles.jpg.jpeg'), tag: 'La Digue & Granite Beaches' },
    { slug: 'south-korea', title: 'South Korea', image: encodeURI('/images/N Seoul Tower , South Korea.jpg'), tag: 'N Seoul Tower & Jeju Island' },
    { slug: 'kenya', title: 'Kenya', image: encodeURI('/images/Maasai Mara National Reserve , Kenya.jpg.jpeg'), tag: 'Maasai Mara & Kilimanjaro' },
    { slug: 'egypt', title: 'Egypt', image: encodeURI('/images/Pyramids of Giza , Egypt.jpg'), tag: 'Pyramids & Nile Cruises' },
    { slug: 'mauritius', title: 'Mauritius', image: encodeURI('/images/Caudan Waterfront , Port Louis , Mauritius.jpg'), tag: 'Coloured Earths & Beaches' },
    { slug: 'nepal', title: 'Nepal', image: encodeURI('/images/Mount Everest , nepal.jpg.jpeg'), tag: 'Mount Everest & Pokhara' },
    { slug: 'bhutan', title: 'Bhutan', image: encodeURI('/images 2/Paro Taktsang , bhutan (2).jpg.jpeg'), tag: "Tiger's Nest & Punakha Valley" },
    { slug: 'hong-kong', title: 'Hong Kong', image: encodeURI('/images 2/Victoria Harbour Skyline & Red Junk Boat - Hong kong.jpg.jpeg'), tag: 'Victoria Harbour & Disneyland' },
    { slug: 'china', title: 'China', image: encodeURI('/images/Great Wall of China.jpg.jpeg'), tag: 'Great Wall & Forbidden City' }
  ];

  return (
    <section className="international-holidays-section" id="international">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Custom Tour Packages</span>
          <h2 className="main-section-title">Find Your Perfect Escape</h2>
          <p className="section-subtitle">
            Handcrafted international travel packages across Bali, Europe, Dubai, Thailand, Singapore, Japan, Vietnam & top global destinations.
          </p>
        </div>

        <div className="holidays-grid">
          {holidays.map((item, idx) => (
            <div
              key={idx}
              className="holiday-card hover-lift"
              onClick={() => onSelectDestination && onSelectDestination(item.slug)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="holiday-img" 
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                loading="lazy" 
                decoding="async" 
              />
              <div className="holiday-overlay">
                <span className="holiday-tag">{item.tag}</span>
                <h3 className="holiday-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
