import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Globe, Shield, ArrowRight, Sparkles, Building2, FileText, ChevronRight, PhoneCall, MessageCircle, Send } from 'lucide-react';
import CustomPackageModal from './CustomPackageModal';
import './HeroSearchBar.css';

const SEARCH_INDEX = [
  // PAGES
  { id: 1, title: 'About Spin Global', category: 'Page', link: '/about', icon: Building2, tags: ['about', 'company', 'story', 'team', 'who we are'] },
  { id: 2, title: 'International Holidays & Tours', category: 'Page', link: '/international', icon: Globe, tags: ['international', 'overseas', 'holidays', 'tours', 'packages', 'vacation', 'abroad'] },
  { id: 3, title: 'Incredible Bharat - Domestic Packages', category: 'Page', link: '/domestic', icon: MapPin, tags: ['domestic', 'india', 'bharat', 'trips', 'indian holidays', 'destinations'] },
  { id: 4, title: 'Tourist & Business Visas Assistance', category: 'Page', link: '/visas', icon: Shield, tags: ['visa', 'visas', 'passport', 'immigration', 'visitor visa', 'tourist visa', 'business visa'] },
  { id: 5, title: 'B2B Travel Agency Partner Portal', category: 'Page', link: '/b2b', icon: FileText, tags: ['b2b', 'corporate', 'partner', 'agency', 'wholesale', 'travel agent', 'b2b portal'] },
  { id: 6, title: 'Contact Us & Office Details', category: 'Page', link: '/contact', icon: MapPin, tags: ['contact', 'office', 'phone', 'whatsapp', 'address', 'ludhiana', 'email'] },

  // INTERNATIONAL DESTINATIONS (ALL SHOWCASE DESTINATIONS)
  { id: 7, title: 'Bali, Indonesia', category: 'International Destination', slug: 'bali', icon: Globe, tags: ['bali', 'indonesia', 'ubud', 'tanah lot', 'nusa penida', 'beach', 'temple'] },
  { id: 8, title: 'Dubai & Abu Dhabi, UAE', category: 'International Destination', slug: 'uae', icon: Globe, tags: ['dubai', 'uae', 'abu dhabi', 'burj khalifa', 'desert safari', 'emirates'] },
  { id: 9, title: 'Vietnam (Ha Long Bay & Da Nang)', category: 'International Destination', slug: 'vietnam', icon: Globe, tags: ['vietnam', 'ha long bay', 'da nang', 'hanoi', 'golden bridge'] },
  { id: 10, title: 'Thailand (Phuket & Bangkok)', category: 'International Destination', slug: 'thailand', icon: Globe, tags: ['thailand', 'phuket', 'bangkok', 'krabi', 'phi phi', 'islands'] },
  { id: 11, title: 'Singapore', category: 'International Destination', slug: 'singapore', icon: Globe, tags: ['singapore', 'marina bay', 'sentosa', 'gardens by the bay'] },
  { id: 12, title: 'Malaysia (Kuala Lumpur & Genting)', category: 'International Destination', slug: 'malaysia', icon: Globe, tags: ['malaysia', 'kuala lumpur', 'genting', 'batu caves', 'petronas'] },
  { id: 13, title: 'Japan (Tokyo & Kyoto)', category: 'International Destination', slug: 'japan', icon: Globe, tags: ['japan', 'tokyo', 'kyoto', 'fuji', 'cherry blossom', 'asia'] },
  { id: 14, title: 'Schengen Europe (Switzerland, France, Italy)', category: 'International Destination', slug: 'schengen', icon: Globe, tags: ['schengen', 'switzerland', 'swiss', 'alps', 'zurich', 'interlaken', 'europe', 'paris', 'france', 'rome', 'italy', 'amsterdam'] },
  { id: 15, title: 'Sri Lanka (Colombo & Kandy)', category: 'International Destination', slug: 'sri-lanka', icon: Globe, tags: ['sri lanka', 'colombo', 'kandy', 'sigiriya', 'ramayana', 'nuwara eliya'] },
  { id: 16, title: 'Philippines (El Nido & Boracay)', category: 'International Destination', slug: 'philippines', icon: Globe, tags: ['philippines', 'el nido', 'boracay', 'manila', 'palawan', 'lagoons'] },
  { id: 17, title: 'Georgia (Tbilisi & Kazbegi)', category: 'International Destination', slug: 'georgia', icon: Globe, tags: ['georgia', 'tbilisi', 'kazbegi', 'caucasus', 'gergeti'] },
  { id: 18, title: 'Kazakhstan (Almaty & Charyn Canyon)', category: 'International Destination', slug: 'kazakhstan', icon: Globe, tags: ['kazakhstan', 'almaty', 'charyn canyon', 'big almaty lake'] },
  { id: 19, title: 'Maldives Luxury Overwater Villas', category: 'International Destination', slug: 'maldives', icon: Globe, tags: ['maldives', 'overwater villa', 'honeymoon', 'island', 'beach', 'resort'] },
  { id: 20, title: 'Saudi Arabia (Riyadh & AlUla)', category: 'International Destination', slug: 'saudi-arabia', icon: Globe, tags: ['saudi arabia', 'saudi', 'riyadh', 'alula', 'jeddah'] },
  { id: 21, title: 'Turkey (Istanbul & Cappadocia)', category: 'International Destination', slug: 'turkey', icon: Globe, tags: ['turkey', 'cappadocia', 'istanbul', 'balloon', 'hagiasophia'] },
  { id: 22, title: 'Russia (Moscow & St. Petersburg)', category: 'International Destination', slug: 'russia', icon: Globe, tags: ['russia', 'moscow', 'st petersburg', 'red square', 'hermitage'] },
  { id: 23, title: 'South Korea (Seoul & Jeju Island)', category: 'International Destination', slug: 'south-korea', icon: Globe, tags: ['south korea', 'korea', 'seoul', 'jeju', 'nami island'] },
  { id: 24, title: 'Kenya Safari (Masai Mara & Amboseli)', category: 'International Destination', slug: 'kenya', icon: Globe, tags: ['kenya', 'safari', 'masai mara', 'wildlife', 'amboseli'] },
  { id: 25, title: 'Egypt (Pyramids & Nile Cruises)', category: 'International Destination', slug: 'egypt', icon: Globe, tags: ['egypt', 'pyramids', 'nile', 'cairo', 'luxor', 'sphinx'] },
  { id: 26, title: 'Mauritius Island & Beach Resorts', category: 'International Destination', slug: 'mauritius', icon: Globe, tags: ['mauritius', 'chamarel', 'beach', 'resort', 'ile aux cerfs'] },
  { id: 27, title: 'Nepal (Kathmandu & Pokhara)', category: 'International Destination', slug: 'nepal', icon: Globe, tags: ['nepal', 'kathmandu', 'pokhara', 'everest', 'annapurna'] },
  { id: 28, title: 'Bhutan (Paro & Thimphu)', category: 'International Destination', slug: 'bhutan', icon: Globe, tags: ['bhutan', 'paro', 'thimphu', 'tigers nest', 'punakha'] },

  // DOMESTIC INDIA DESTINATIONS
  { id: 29, title: 'Kashmir Valley & Gulmarg', category: 'Domestic Destination', slug: 'kashmir', icon: MapPin, tags: ['kashmir', 'srinagar', 'gulmarg', 'snow', 'dal lake', 'pahalgam'] },
  { id: 30, title: 'Andaman & Nicobar Islands', category: 'Domestic Destination', slug: 'andaman', icon: MapPin, tags: ['andaman', 'nicobar', 'havelock', 'radhanagar', 'cellular jail'] },
  { id: 31, title: 'Leh Ladakh Adventure', category: 'Domestic Destination', slug: 'leh-ladakh', icon: MapPin, tags: ['ladakh', 'leh', 'pangong', 'khardungla', 'bikes', 'adventure'] },
  { id: 32, title: 'Rajasthan Royal Palaces', category: 'Domestic Destination', slug: 'rajasthan', icon: MapPin, tags: ['rajasthan', 'jaipur', 'udaipur', 'jaisalmer', 'palace', 'fort'] },
  { id: 33, title: 'Goa Beaches & Cruises', category: 'Domestic Destination', slug: 'goa', icon: MapPin, tags: ['goa', 'beach', 'party', 'water sports', 'cruise', 'south goa'] },
  { id: 34, title: 'Meghalaya (Shillong & Cherrapunji)', category: 'Domestic Destination', slug: 'meghalaya', icon: MapPin, tags: ['meghalaya', 'shillong', 'cherrapunji', 'dawki', 'living root bridge'] },
  { id: 35, title: 'Sikkim (Gangtok & Pelling)', category: 'Domestic Destination', slug: 'sikkim', icon: MapPin, tags: ['sikkim', 'gangtok', 'pelling', 'tsomgo lake', 'nathula'] },
  { id: 36, title: 'Kerala Backwaters & Munnar', category: 'Domestic Destination', slug: 'kerala', icon: MapPin, tags: ['kerala', 'munnar', 'alleppey', 'houseboat', 'backwaters', 'gods own country'] },

  // SERVICES
  { id: 37, title: 'Fast Visa Support & Processing', category: 'Service', link: '/visas', icon: Shield, tags: ['visa assistance', 'visa process', 'schengen visa', 'visa application'] },
  { id: 38, title: 'Tailor-Made Holiday Packages', category: 'Service', link: '/international', icon: Sparkles, tags: ['holiday packages', 'custom tour', 'itinerary', 'tailor made'] },
  { id: 39, title: 'Corporate Travel & B2B Solutions', category: 'Service', link: '/b2b', icon: Building2, tags: ['corporate travel', 'b2b', 'mice', 'conferences', 'events'] }
];

export default function HeroSearchBar({ onOpenInquiry, onOpenDestination }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customModalDest, setCustomModalDest] = useState('');

  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);

  // Filter search results
  const results = query.trim() === '' ? [] : SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase().trim();
    const titleMatch = item.title.toLowerCase().includes(q);
    const categoryMatch = item.category.toLowerCase().includes(q);
    const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(q));
    return titleMatch || categoryMatch || tagMatch;
  });

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenCustomConnect = (customDestText) => {
    setIsOpen(false);
    const target = customDestText || query.trim() || 'Custom Destination';
    setCustomModalDest(target);
    setShowCustomModal(true);
  };

  const handleExecuteSearch = (targetItem) => {
    setIsOpen(false);
    if (targetItem && targetItem.slug) {
      // Direct showcase destination -> open 6-picture slideshow DestinationModal!
      if (onOpenDestination) {
        onOpenDestination(targetItem.slug);
      } else {
        navigate('/international');
      }
    } else if (targetItem && targetItem.category === 'Page') {
      navigate(targetItem.link);
    } else if (targetItem && targetItem.category === 'Service') {
      navigate(targetItem.link);
    } else {
      // Custom / unlisted destination (e.g. Himachal, Manali, Shimla, Switzerland, Paris, etc.) -> open CustomPackageModal!
      const targetDest = targetItem ? targetItem.title : (query.trim() || 'Custom Destination');
      handleOpenCustomConnect(targetDest);
    }
  };

  // Keyboard navigation (Arrow keys & Enter)
  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        e.preventDefault();
        handleExecuteSearch(results[0]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0) {
        const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0];
        handleExecuteSearch(target);
      } else {
        handleOpenCustomConnect();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Highlight matching keyword helper
  const renderHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={idx} className="search-highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="hero-search-wrapper" ref={searchWrapperRef}>
      <div className={`hero-search-bar ${isOpen ? 'active-open' : ''}`}>
        <Search size={22} className="left-search-icon" />

        <input
          type="text"
          className="hero-search-input"
          placeholder="Search destinations, packages, visas, or services..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Search destinations, packages, visas or services"
        />

        <button
          type="button"
          className="search-submit-btn"
          onClick={() => {
            if (results.length > 0) {
              const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0];
              handleExecuteSearch(target);
            } else {
              handleExecuteSearch(null);
            }
          }}
          aria-label="Submit search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Live Dropdown Suggestions */}
      {isOpen && query.trim() !== '' && (
        <div className="hero-search-dropdown">
          {results.length > 0 ? (
            <div className="search-results-list">
              <div className="dropdown-section-header">
                <span>SUGGESTED RESULTS</span>
                <span className="results-count">{results.length} found</span>
              </div>
              {results.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    className={`search-result-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleExecuteSearch(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="result-icon-box">
                      <IconComponent size={18} color="#00BF63" />
                    </div>
                    <div className="result-text-box">
                      <span className="result-title">
                        {renderHighlightedText(item.title, query)}
                      </span>
                      <span className="result-category">{item.category}</span>
                    </div>
                    <ChevronRight size={18} className="result-arrow" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="search-assistance-card">
              <div className="assistance-mascot-wrap">
                <img src="/images/spin-mascot.png" alt="Spinny Mascot Guide" className="assistance-mascot-img" />
              </div>

              <div className="assistance-info">
                <h4 className="assistance-title">Couldn't find your destination?</h4>
                <p className="assistance-sub">
                  Our travel experts can help you plan a customized itinerary for <strong>"{query}"</strong>!
                </p>

                <div className="assistance-actions-row">
                  <button
                    type="button"
                    className="btn-assist btn-assist-connect"
                    onClick={handleOpenCustomConnect}
                  >
                    <Send size={15} />
                    <span>Connect & Plan "{query}"</span>
                  </button>

                  <a
                    href={`https://wa.me/916284661722?text=${encodeURIComponent(`Hello Spin Global! I searched for "${query}" on your website and would like a custom package itinerary.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-assist btn-assist-wa"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:6284661722"
                    className="btn-assist btn-assist-call"
                  >
                    <PhoneCall size={15} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showCustomModal && (
        <CustomPackageModal
          destination={customModalDest}
          onClose={() => setShowCustomModal(false)}
        />
      )}
    </div>
  );
}
