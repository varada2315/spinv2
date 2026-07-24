import React, { useState } from 'react';
import { 
  Plane, 
  Building2, 
  Compass, 
  Package, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  ArrowRightLeft,
  ChevronDown
} from 'lucide-react';
import './BookingWidget.css';

export default function BookingWidget({ onSearch }) {
  const [activeTab, setActiveTab] = useState('Flights');
  const [fromCity, setFromCity] = useState('New York (NYC)');
  const [toCity, setToCity] = useState('Santorini, Greece');
  const [departDate, setDepartDate] = useState('2024-05-20');
  const [returnDate, setReturnDate] = useState('2024-05-27');
  const [travelers, setTravelers] = useState('2 Adults, 1 Child');

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const cityOptions = [
    { city: 'New York (NYC)', country: 'United States', code: 'JFK' },
    { city: 'London (LHR)', country: 'United Kingdom', code: 'LHR' },
    { city: 'Paris (CDG)', country: 'France', code: 'CDG' },
    { city: 'Santorini (JTR)', country: 'Greece', code: 'JTR' },
    { city: 'Phuket (HKT)', country: 'Thailand', code: 'HKT' },
    { city: 'Bali (DPS)', country: 'Indonesia', code: 'DPS' },
    { city: 'Dubai (DXB)', country: 'United Arab Emirates', code: 'DXB' },
    { city: 'Tokyo (HND)', country: 'Japan', code: 'HND' },
  ];

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      tab: activeTab,
      from: fromCity,
      to: toCity,
      depart: departDate,
      return: returnDate,
      travelers: travelers
    });
  };

  return (
    <div className="booking-widget-container container">
      <div className="booking-widget-card glass-card">
        {/* Tab Selector Row */}
        <div className="widget-tabs">
          <button 
            className={`widget-tab ${activeTab === 'Flights' ? 'active' : ''}`}
            onClick={() => setActiveTab('Flights')}
          >
            <Plane size={18} />
            <span>Flights</span>
          </button>
          <button 
            className={`widget-tab ${activeTab === 'Hotels' ? 'active' : ''}`}
            onClick={() => setActiveTab('Hotels')}
          >
            <Building2 size={18} />
            <span>Hotels</span>
          </button>
          <button 
            className={`widget-tab ${activeTab === 'Tours' ? 'active' : ''}`}
            onClick={() => setActiveTab('Tours')}
          >
            <Compass size={18} />
            <span>Tours</span>
          </button>
          <button 
            className={`widget-tab ${activeTab === 'Packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('Packages')}
          >
            <Package size={18} />
            <span>Packages</span>
          </button>
        </div>

        {/* Search Fields Row */}
        <form onSubmit={handleSearchSubmit} className="widget-form-grid">
          {/* FROM Field */}
          <div className="search-field-box">
            <label className="field-label">From</label>
            <div className="field-input-wrap" onClick={() => setShowFromDropdown(!showFromDropdown)}>
              <span className="field-val">{fromCity}</span>
              <ChevronDown size={14} className="field-arrow" />
            </div>

            {showFromDropdown && (
              <div className="search-dropdown-menu">
                <div className="dropdown-title">Select Origin</div>
                {cityOptions.map((item) => (
                  <div
                    key={`from-${item.code}`}
                    className="dropdown-item"
                    onClick={() => {
                      setFromCity(item.city);
                      setShowFromDropdown(false);
                    }}
                  >
                    <div>
                      <span className="item-city">{item.city}</span>
                      <span className="item-country">{item.country}</span>
                    </div>
                    <span className="item-code">{item.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Swap Button */}
          <button 
            type="button" 
            className="swap-btn" 
            onClick={handleSwap} 
            title="Swap Origin & Destination"
            aria-label="Swap locations"
          >
            <ArrowRightLeft size={16} />
          </button>

          {/* TO Field */}
          <div className="search-field-box">
            <label className="field-label">To</label>
            <div className="field-input-wrap" onClick={() => setShowToDropdown(!showToDropdown)}>
              <MapPin size={16} className="field-icon" />
              <span className={`field-val ${!toCity ? 'placeholder' : ''}`}>
                {toCity || 'Where to?'}
              </span>
            </div>

            {showToDropdown && (
              <div className="search-dropdown-menu">
                <div className="dropdown-title">Select Destination</div>
                {cityOptions.map((item) => (
                  <div
                    key={`to-${item.code}`}
                    className="dropdown-item"
                    onClick={() => {
                      setToCity(item.city);
                      setShowToDropdown(false);
                    }}
                  >
                    <div>
                      <span className="item-city">{item.city}</span>
                      <span className="item-country">{item.country}</span>
                    </div>
                    <span className="item-code">{item.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DEPART Date Field */}
          <div className="search-field-box">
            <label className="field-label">Depart</label>
            <div className="field-input-wrap">
              <Calendar size={16} className="field-icon" />
              <input 
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>

          {/* RETURN Date Field */}
          <div className="search-field-box">
            <label className="field-label">Return</label>
            <div className="field-input-wrap">
              <Calendar size={16} className="field-icon" />
              <input 
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>

          {/* TRAVELERS Field */}
          <div className="search-field-box">
            <label className="field-label">Travelers</label>
            <div className="field-input-wrap" onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}>
              <Users size={16} className="field-icon" />
              <span className="field-val">{travelers}</span>
            </div>

            {showTravelerDropdown && (
              <div className="search-dropdown-menu travelers-menu">
                <div className="traveler-option" onClick={() => { setTravelers('1 Adult'); setShowTravelerDropdown(false); }}>
                  <span>Solo (1 Adult)</span>
                </div>
                <div className="traveler-option" onClick={() => { setTravelers('2 Adults'); setShowTravelerDropdown(false); }}>
                  <span>Couple (2 Adults)</span>
                </div>
                <div className="traveler-option" onClick={() => { setTravelers('2 Adults, 1 Child'); setShowTravelerDropdown(false); }}>
                  <span>Family (2 Adults, 1 Child)</span>
                </div>
                <div className="traveler-option" onClick={() => { setTravelers('4 Adults, 2 Children'); setShowTravelerDropdown(false); }}>
                  <span>Group (4+ Guests)</span>
                </div>
              </div>
            )}
          </div>

          {/* SEARCH SUBMIT BUTTON */}
          <button type="submit" className="widget-search-btn">
            <span>Search</span>
            <Search size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
