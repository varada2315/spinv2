import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  Building2,
  FileText,
  ChevronRight,
  MessageCircle,
  Send,
  X,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { destinationsData } from '../data/destinationsData';
import CustomPackageModal from './CustomPackageModal';
import './HeroSearchBar.css';

// Normalize helper: lowercase, trim, accent-insensitive
function normalizeStr(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Common travel search intent stopwords that shouldn't restrict destination matching
const TRAVEL_INTENT_WORDS = new Set([
  'trip', 'trips', 'tour', 'tours', 'package', 'packages',
  'holiday', 'holidays', 'vacation', 'vacations', 'travel', 'travels',
  'visit', 'explore', 'itinerary', 'booking', 'flight', 'flights', 'tickets'
]);

// Build static search index once combining destinations, visa services, and main website pages
function buildSearchIndex() {
  const index = [];

  // 1. All 32 Destinations from destinationsData (International + Domestic)
  Object.entries(destinationsData).forEach(([slug, dest]) => {
    const isDomestic = dest.category === 'Domestic';
    const spotNames = (dest.spots || []).map((s) => s.name);
    const spotDescs = (dest.spots || []).map((s) => s.desc || '');

    // Extra aliases for destinations to ensure instant matching
    const aliasMap = {
      'bali': ['indonesia', 'ubud', 'canggu', 'kuta', 'seminyak', 'jimbaran', 'nusadua', 'beach', 'temples'],
      'uae': ['dubai', 'abu dhabi', 'sharjah', 'emirates', 'burj khalifa', 'burj al arab', 'desert'],
      'schengen': ['europe', 'france', 'paris', 'switzerland', 'swiss', 'italy', 'rome', 'greece', 'mykonos', 'spain', 'seville', 'germany', 'berlin'],
      'vietnam': ['danang', 'hanoi', 'saigon', 'phu quoc', 'sapa', 'halong'],
      'thailand': ['bangkok', 'phuket', 'krabi', 'pattaya', 'chiang mai', 'islands'],
      'singapore': ['singapore city', 'marina bay', 'changi', 'sentosa'],
      'malaysia': ['kuala lumpur', 'kl', 'genting', 'langkawi', 'penang'],
      'japan': ['tokyo', 'kyoto', 'osaka', 'fuji', 'mount fuji', 'sakura', 'cherry blossom'],
      'sri-lanka': ['colombo', 'kandy', 'galle', 'mirissa', 'ceylon'],
      'philippines': ['manila', 'cebu', 'bohol', 'coron', 'palawan', 'boracay'],
      'seychelles': ['mahe', 'praslin', 'la digue', 'indians ocean', 'islands'],
      'south-korea': ['korea', 'seoul', 'busan', 'jeju'],
      'egypt': ['cairo', 'giza', 'pyramids', 'luxor', 'aswan', 'nile'],
      'turkey': ['istanbul', 'cappadocia', 'antalya', 'hot air balloons'],
      'maldives': ['male', 'overwater villa', 'water villa', 'honeymoon', 'resorts'],
      'hong-kong': ['hongkong', 'victoria harbour', 'disneyland', 'kowloon'],
      'china': ['beijing', 'shanghai', 'great wall', 'xian', 'chengdu'],
      'kashmir': ['srinagar', 'gulmarg', 'pahalgam', 'dal lake', 'snow', 'shikara'],
      'leh-ladakh': ['ladakh', 'leh', 'pangong', 'khardungla', 'nubra valley'],
      'andaman': ['port blair', 'havelock', 'radhanagar', 'neil island', 'scuba'],
      'rajasthan': ['jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'forts', 'palaces'],
      'goa': ['panaji', 'calangute', 'baga', 'north goa', 'south goa', 'beaches'],
      'kerala': ['kochi', 'munnar', 'alleppey', 'backwaters', 'houseboat', 'thekkady'],
      'meghalaya': ['shillong', 'cherrapunji', 'dawki', 'living root bridge'],
      'sikkim': ['gangtok', 'pelling', 'tsomgo', 'nathula'],
      'azerbaijan': ['baku', 'flame towers', 'caspian sea', 'caucasus', 'old city', 'icheri sheher', 'heydar aliyev'],
      'nepal': ['kathmandu', 'pokhara', 'everest', 'pashupatinath']
    };

    const extraAliases = aliasMap[slug] || [];

    const searchableText = normalizeStr([
      dest.name,
      dest.category,
      isDomestic ? 'Domestic Bharat India' : 'International Overseas Abroad',
      dest.tagline || '',
      dest.description || '',
      ...spotNames,
      ...spotDescs,
      ...extraAliases
    ].join(' '));

    index.push({
      id: `dest-${slug}`,
      type: 'destination',
      title: dest.name,
      category: isDomestic ? 'Domestic Destination' : 'International Destination',
      slug,
      icon: isDomestic ? MapPin : Globe,
      spots: dest.spots || [],
      tagline: dest.tagline,
      searchableText
    });
  });

  // 2. Visa Assistance Services (Matches Visa requirements)
  const visaEntries = [
    { country: 'Schengen Europe', title: 'Schengen 29 European Nations Visa', type: 'Tourist / Business / Visitor', tags: ['schengen visa', 'europe visa', 'france visa', 'switzerland visa', 'italy visa', 'germany visa', 'spain visa', 'greece visa'] },
    { country: 'USA', title: 'USA B1/B2 Tourist & Business Visa', type: 'B1/B2 Tourist & Business', tags: ['usa visa', 'us visa', 'america visa', 'united states visa', 'b1 b2'] },
    { country: 'Canada', title: 'Canada Tourist & Visitor Visa', type: 'Tourist & Visitor Visa', tags: ['canada visa', 'canadian visa', 'visitor visa', 'tourist visa', 'canada visitor'] },
    { country: 'UK', title: 'UK Standard Visitor Visa (London)', type: 'Standard Visitor Visa', tags: ['uk visa', 'london visa', 'england visa', 'britain visa', 'united kingdom visa'] },
    { country: 'Australia', title: 'Australia Subclass 600 Visitor Visa', type: 'Subclass 600 Visitor', tags: ['australia visa', 'australian visa', 'sydney visa', 'melbourne visa'] },
    { country: 'New Zealand', title: 'New Zealand NZeTA & Visitor Visa', type: 'NZeTA & Visitor Visa', tags: ['new zealand visa', 'nz visa', 'nzeta'] },
    { country: 'Egypt', title: 'Egypt Tourist E-Visa Assistance', type: 'Tourist E-Visa', tags: ['egypt visa', 'cairo visa', 'egypt evisa', 'pyramids visa'] },
    { country: 'Japan', title: 'Japan Short-Term Tourist Visa', type: 'Short-Term Tourist Visa', tags: ['japan visa', 'tokyo visa'] },
    { country: 'South Korea', title: 'South Korea C-3-9 Tourist Visa', type: 'C-3-9 Tourist Visa', tags: ['korea visa', 'south korea visa', 'seoul visa'] },
    { country: 'China', title: 'China L Tourist & M Business Visa', type: 'L Tourist & M Business', tags: ['china visa', 'chinese visa'] },
    { country: 'Hong Kong', title: 'Hong Kong PAR & Visitor Permit Assistance', type: 'PAR & Visitor Permit', tags: ['hong kong visa', 'hongkong visa', 'par permit'] },
    { country: 'Russia', title: 'Russia Tourist & Business E-Visa', type: 'Tourist & Business E-Visa', tags: ['russia visa', 'russian visa', 'moscow visa', 'russia evisa'] },
    { country: 'Georgia', title: 'Georgia Short-Stay Tourist E-Visa', type: 'Short-Stay Tourist E-Visa', tags: ['georgia visa', 'tbilisi visa', 'georgia evisa'] },
    { country: 'Singapore', title: 'Singapore E-Visa Assistance', type: 'E-Visa Assistance', tags: ['singapore visa', 'singapore evisa'] },
    { country: 'Thailand', title: 'Thailand Tourist Visa & e-VOA', type: 'Tourist Visa & e-VOA', tags: ['thailand visa', 'bangkok visa', 'phuket visa'] },
    { country: 'Philippines', title: 'Philippines 9A Visitor Visa Assistance', type: '9A Visitor Visa', tags: ['philippines visa', 'manila visa'] },
    { country: 'Vietnam', title: 'Vietnam', type: 'Tourist & Business Visa', tags: ['vietnam visa', 'vietnam evisa'] },
    { country: 'Azerbaijan', title: 'Azerbaijan ASAN Official E-Visa', type: 'ASAN Official E-Visa', tags: ['azerbaijan visa', 'baku visa', 'asan visa', 'azerbaijan evisa'] },
    { country: 'Turkey', title: 'Turkey E-Visa Assistance', type: 'E-Visa Assistance', tags: ['turkey visa', 'istanbul visa', 'turkey evisa'] },
    { country: 'South Africa', title: 'South Africa Visitor Visa Assistance', type: 'Visitor Visa (Section 11)', tags: ['south africa visa', 'cape town visa'] },
    { country: 'Indonesia', title: 'Indonesia e-VOA & B211A Visa', type: 'e-VOA & B211A Visa', tags: ['indonesia visa', 'bali visa', 'jakarta visa'] },
    { country: 'Brazil', title: 'Brazil Visitor Visa & E-Visa', type: 'Visitor Visa & E-Visa', tags: ['brazil visa', 'rio visa', 'sao paulo visa', 'brazilian visa'] },
    { country: 'Sri Lanka', title: 'Sri Lanka ETA Tourist Visa', type: 'ETA Tourist Visa', tags: ['sri lanka visa', 'colombo visa', 'sri lankan visa', 'eta visa'] },
    { country: 'Malaysia', title: 'Malaysia Tourist E-Visa & MDAC', type: 'eNTRI / Tourist E-Visa', tags: ['malaysia visa', 'kuala lumpur visa', 'malaysian visa', 'entri'] },
    { country: 'Kenya', title: 'Kenya eTA Tourist Permit Assistance', type: 'eTA Tourist Permit', tags: ['kenya visa', 'nairobi visa', 'kenya eta'] },
    { country: 'General Visas', title: 'Tourist, Visitor & Business Visas Worldwide', link: '/visas', type: 'Global Visa Assistance', tags: ['visa assistance', 'all visas', 'visa requirements', 'passport assistance'] }
  ];

  visaEntries.forEach((v, idx) => {
    index.push({
      id: `visa-${idx}`,
      type: 'visa',
      title: v.title,
      category: 'Visa Service',
      country: v.country,
      visaType: v.type,
      link: v.link || '/visas',
      icon: Shield,
      searchableText: normalizeStr(`${v.title} ${v.country} ${v.type} visa visas ${(v.tags || []).join(' ')}`)
    });
  });

  // 3. Main Site Pages
  const pageEntries = [
    { title: 'International Holidays & Tour Packages', link: '/international', icon: Globe, tags: ['international', 'overseas', 'holidays', 'tours', 'packages', 'vacation', 'abroad'] },
    { title: 'Incredible Bharat - Domestic Tour Packages', link: '/domestic', icon: MapPin, tags: ['domestic', 'india', 'bharat', 'trips', 'indian holidays', 'destinations', 'kashmir', 'ladakh', 'kerala', 'goa'] },
    { title: 'Tourist & Business Visas Assistance', link: '/visas', icon: Shield, tags: ['visa', 'visas', 'passport', 'immigration', 'visitor visa', 'tourist visa', 'business visa'] },
    { title: 'B2B Travel Agency Partner Portal', link: '/b2b', icon: FileText, tags: ['b2b', 'corporate', 'partner', 'agency', 'wholesale', 'travel agent', 'b2b portal'] },
    { title: 'About Spin Global (Our Story & Team)', link: '/about', icon: Building2, tags: ['about', 'company', 'story', 'team', 'who we are', 'spin global', 'ludhiana'] },
    { title: 'Contact Us, Office Location & WhatsApp', link: '/contact', icon: MapPin, tags: ['contact', 'office', 'phone', 'whatsapp', 'address', 'ludhiana', 'email', 'support', 'call'] }
  ];

  pageEntries.forEach((p, idx) => {
    index.push({
      id: `page-${idx}`,
      type: 'page',
      title: p.title,
      category: 'Page',
      link: p.link,
      icon: p.icon,
      searchableText: normalizeStr(`${p.title} ${p.link} ${(p.tags || []).join(' ')}`)
    });
  });

  // 4. Highlighted Services
  const serviceEntries = [
    { title: 'Customized & Tailor-Made Holiday Packages', link: '/international', icon: Sparkles, tags: ['holiday packages', 'custom tour', 'itinerary', 'tailor made', 'honeymoon package', 'family trip'] },
    { title: 'Corporate Travel & MICE Management', link: '/b2b', icon: Building2, tags: ['corporate travel', 'b2b', 'mice', 'conferences', 'events', 'business trip'] },
    { title: 'Fast-Track Visa Document Support', link: '/visas', icon: Shield, tags: ['visa support', 'visa documentation', 'schengen visa appointment', 'us visa slot'] }
  ];

  serviceEntries.forEach((s, idx) => {
    index.push({
      id: `service-${idx}`,
      type: 'service',
      title: s.title,
      category: 'Service',
      link: s.link,
      icon: s.icon,
      searchableText: normalizeStr(`${s.title} ${(s.tags || []).join(' ')}`)
    });
  });

  return index;
}

// Popular suggested searches when user focuses search bar
const POPULAR_SEARCH_CHIPS = [
  { label: 'Bali', query: 'Bali' },
  { label: 'Dubai', query: 'Dubai' },
  { label: 'Schengen Europe', query: 'Schengen Europe' },
  { label: 'Maldives', query: 'Maldives' },
  { label: 'Japan', query: 'Japan' },
  { label: 'Kashmir', query: 'Kashmir' },
  { label: 'Seychelles', query: 'Seychelles' },
  { label: 'Visas', query: 'Visa' },
  { label: 'B2B Portal', query: 'B2B' }
];

export default function HeroSearchBar({ onOpenInquiry, onOpenDestination }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customModalDest, setCustomModalDest] = useState('');

  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);
  const inputRef = useRef(null);
  const resultsListRef = useRef(null);

  // Initialize search index once
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Filter results with intelligent multi-word token matching & spot discovery
  const results = useMemo(() => {
    const qNorm = normalizeStr(query);
    if (!qNorm) return [];

    const rawTokens = qNorm.split(/\s+/).filter(Boolean);
    // Filter travel intent words (e.g. "trip", "tour", "package") unless the query ONLY consists of them
    let searchTokens = rawTokens.filter((t) => !TRAVEL_INTENT_WORDS.has(t));
    if (searchTokens.length === 0) searchTokens = rawTokens;

    const matched = [];

    searchIndex.forEach((item) => {
      // 1. Direct whole-string match
      const directMatch = item.searchableText.includes(qNorm);

      // 2. All filtered search tokens must appear in searchableText
      const allTokensMatch = searchTokens.every((tok) => item.searchableText.includes(tok));

      if (directMatch || allTokensMatch) {
        // Calculate relevance score
        let score = 0;
        const normTitle = normalizeStr(item.title);

        if (normTitle === qNorm) score += 100;
        else if (normTitle.startsWith(qNorm)) score += 60;
        else if (normTitle.includes(qNorm)) score += 40;
        else if (directMatch) score += 30;
        else score += 20;

        // Check if a specific famous tourist spot matched
        let matchedSpot = null;
        if (item.spots && item.spots.length > 0) {
          const foundSpot = item.spots.find((s) => {
            const sNorm = normalizeStr(s.name);
            return searchTokens.some((tok) => tok.length >= 3 && sNorm.includes(tok));
          });
          if (foundSpot) {
            matchedSpot = foundSpot.name;
            score += 15;
          }
        }

        matched.push({
          ...item,
          score,
          matchedSpot
        });
      }
    });

    // Sort by relevance score descending
    matched.sort((a, b) => b.score - a.score);

    // Limit to top 8 suggestions for clean layout
    return matched.slice(0, 8);
  }, [query, searchIndex]);

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

  // Scroll active item into view during keyboard navigation
  useEffect(() => {
    if (selectedIndex >= 0 && resultsListRef.current) {
      const items = resultsListRef.current.querySelectorAll('.search-result-item');
      if (items[selectedIndex]) {
        items[selectedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Clear query button handler
  const handleClearQuery = () => {
    setQuery('');
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Open custom inquiry modal (or WhatsApp connection fallback)
  const handleOpenCustomConnect = (customDestText) => {
    setIsOpen(false);
    const targetQuery = typeof customDestText === 'string' && customDestText.trim()
      ? customDestText.trim()
      : (query.trim() || 'Custom Destination');

    const lower = targetQuery.toLowerCase();
    const isVisaQuery = lower.includes('visa');

    if (onOpenInquiry) {
      if (isVisaQuery) {
        const cleanedCountry = targetQuery.replace(/visa/gi, '').trim() || targetQuery;
        onOpenInquiry({
          category: 'visa',
          country: cleanedCountry,
          destination: cleanedCountry,
          title: `${cleanedCountry} Visa Application`
        });
      } else {
        onOpenInquiry({
          category: 'package',
          destination: targetQuery,
          title: `Custom Package to ${targetQuery}`
        });
      }
    } else {
      setCustomModalDest(targetQuery);
      setShowCustomModal(true);
    }
  };

  // Execute selection based on item type
  const handleExecuteSearch = (targetItem) => {
    setIsOpen(false);

    if (!targetItem) {
      // If no item provided but query typed, open custom inquiry
      if (query.trim()) {
        handleOpenCustomConnect(query.trim());
      } else if (inputRef.current) {
        inputRef.current.focus();
        setIsOpen(true);
      }
      return;
    }

    if (targetItem.type === 'destination' && targetItem.slug) {
      // Open Destination Modal directly
      if (onOpenDestination) {
        onOpenDestination(targetItem.slug);
      } else {
        navigate('/international');
      }
    } else if (targetItem.type === 'visa') {
      // Open visa inquiry prefilled or navigate to visas page
      if (onOpenInquiry && targetItem.country) {
        onOpenInquiry({
          category: 'visa',
          country: targetItem.country,
          type: targetItem.visaType || 'Tourist / Business Visa',
          title: targetItem.title
        });
      } else {
        navigate(targetItem.link || '/visas');
      }
    } else if (targetItem.link) {
      navigate(targetItem.link);
    } else {
      handleOpenCustomConnect(targetItem.title);
    }
  };

  // Keyboard navigation (Arrow keys, Enter, Escape)
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    // When dropdown is not open or results are empty
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (query.trim()) {
          if (results.length > 0) {
            handleExecuteSearch(results[0]);
          } else {
            handleOpenCustomConnect(query.trim());
          }
        }
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
      const target = selectedIndex >= 0 && selectedIndex < results.length
        ? results[selectedIndex]
        : results[0];
      handleExecuteSearch(target);
    }
  };

  // Safe highlighted text renderer (No regex syntax crashes on special characters)
  const renderHighlightedText = (text, highlight) => {
    if (!text || !highlight || !highlight.trim()) return text;
    const cleanHighlight = highlight.trim();
    // Escape regex characters
    const escaped = cleanHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    try {
      const regex = new RegExp(`(${escaped})`, 'gi');
      const parts = text.split(regex);
      return parts.map((part, idx) =>
        part.toLowerCase() === cleanHighlight.toLowerCase() ? (
          <span key={idx} className="search-highlight">{part}</span>
        ) : (
          part
        )
      );
    } catch {
      return text;
    }
  };

  return (
    <div className="hero-search-wrapper" ref={searchWrapperRef}>
      <div className={`hero-search-bar ${isOpen ? 'active-open' : ''}`}>
        <Search size={22} className="left-search-icon" />

        <input
          ref={inputRef}
          type="text"
          className="hero-search-input"
          placeholder="Search destinations, packages, visas, or spots (e.g. Dubai, Bali, Eiffel Tower)..."
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

        {/* Clear input button */}
        {query.length > 0 && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={handleClearQuery}
            aria-label="Clear search text"
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}

        {/* Search Submit Button */}
        <button
          type="button"
          className="search-submit-btn"
          onClick={() => {
            if (query.trim() === '') {
              if (inputRef.current) inputRef.current.focus();
              setIsOpen(true);
            } else if (results.length > 0) {
              const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0];
              handleExecuteSearch(target);
            } else {
              handleExecuteSearch(null);
            }
          }}
          aria-label="Submit search"
          title="Search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Live Dropdown Panel */}
      {isOpen && (
        <div className="hero-search-dropdown">
          {/* STATE 1: Empty Query -> Popular Trending Suggestions */}
          {query.trim() === '' ? (
            <div className="search-trending-panel">
              <div className="dropdown-section-header">
                <span className="section-header-title">
                  <Flame size={14} color="#FF5722" className="trending-icon-fire" />
                  POPULAR SEARCHES
                </span>
                <span className="results-count">Trending</span>
              </div>

              <div className="trending-chips-grid">
                {POPULAR_SEARCH_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="trending-chip"
                    onClick={() => {
                      setQuery(chip.query);
                      if (inputRef.current) inputRef.current.focus();
                    }}
                  >
                    <Search size={12} className="chip-icon" />
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            /* STATE 2: Matched Results List */
            <div className="search-results-list" ref={resultsListRef}>
              <div className="dropdown-section-header">
                <span>SUGGESTED RESULTS</span>
                <span className="results-count">{results.length} found</span>
              </div>
              {results.map((item, idx) => {
                const IconComponent = item.icon || Globe;
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
                      <div className="result-title-row">
                        <span className="result-title">
                          {renderHighlightedText(item.title, query)}
                        </span>
                        <span className={`result-category category-${item.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Display matched landmark/spot tag if user searched for a specific spot */}
                      {item.matchedSpot && (
                        <span className="result-spot-matched">
                          <Sparkles size={11} color="#00BF63" />
                          <span>Includes landmark: <strong>{renderHighlightedText(item.matchedSpot, query)}</strong></span>
                        </span>
                      )}
                    </div>
                    <ChevronRight size={18} className="result-arrow" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* STATE 3: No Results -> Instant Inquiry & WhatsApp Assistance */
            <div className="search-assistance-card">
              <div className="assistance-mascot-wrap">
                <img src="/images/spin-mascot.png" alt="Spinny Mascot Guide" className="assistance-mascot-img" />
              </div>

              <div className="assistance-info">
                <h4 className="assistance-title">Planning a trip to "{query}"?</h4>
                <p className="assistance-sub">
                  Our travel concierge team can craft a customized itinerary with flights, hotels, and visas tailored specifically for you.
                </p>

                <div className="assistance-actions-row">
                  <button
                    type="button"
                    className="btn-assist btn-assist-connect"
                    onClick={() => handleOpenCustomConnect(query)}
                  >
                    <Send size={15} />
                    <span>Get Custom Itinerary</span>
                  </button>

                  <a
                    href={`https://wa.me/916284661722?text=${encodeURIComponent('Hello Spin Global! I searched for ' + query + ' on your website and would like to get package details and pricing.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-assist btn-assist-wa"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Travel Expert</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fallback Custom Package Modal if onOpenInquiry is unprovided */}
      {showCustomModal && (
        <CustomPackageModal
          destination={customModalDest}
          onClose={() => setShowCustomModal(false)}
        />
      )}
    </div>
  );
}
