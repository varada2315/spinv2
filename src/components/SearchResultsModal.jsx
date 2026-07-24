import React, { useState } from 'react';
import { X, Plane, Calendar, Users, MapPin, ArrowRight, Filter, ShieldCheck, Star } from 'lucide-react';
import './SearchResultsModal.css';

export default function SearchResultsModal({ searchData, onClose, onSelectResult }) {
  const [filterType, setFilterType] = useState('All');

  if (!searchData) return null;

  const mockResults = [
    {
      id: 'res-1',
      airline: 'Emirates Airways',
      flightNo: 'EK-204',
      departTime: '08:30 AM',
      arrivalTime: '06:15 PM',
      duration: '9h 45m (Direct)',
      price: 680,
      rating: 4.9,
      type: 'Non-stop',
      baggage: '2x 23kg Included'
    },
    {
      id: 'res-2',
      airline: 'Qatar Airways',
      flightNo: 'QR-702',
      departTime: '11:15 AM',
      arrivalTime: '09:40 PM',
      duration: '10h 25m (1 Layover)',
      price: 590,
      rating: 4.8,
      type: '1 Stop',
      baggage: '2x 23kg Included'
    },
    {
      id: 'res-3',
      airline: 'Singapore Airlines',
      flightNo: 'SQ-025',
      departTime: '04:00 PM',
      arrivalTime: '02:30 AM',
      duration: '8h 30m (Direct)',
      price: 740,
      rating: 4.95,
      type: 'Non-stop',
      baggage: '30kg Included'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card search-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="search-modal-header">
          <div className="search-summary-tag">
            <span className="summary-tab-pill">{searchData.tab}</span>
            <div className="search-route-title">
              <span>{searchData.from}</span>
              <ArrowRight size={16} color="#0055FE" />
              <span>{searchData.to || 'Anywhere'}</span>
            </div>
          </div>
          <div className="search-meta-info">
            <span><Calendar size={14} /> {searchData.depart}</span>
            <span><Users size={14} /> {searchData.travelers}</span>
          </div>
        </div>

        {/* Results List */}
        <div className="search-modal-body">
          <div className="search-results-topbar">
            <h3 className="results-count">Found 3 Available {searchData.tab} Deals</h3>
            <div className="results-filters">
              <button 
                className={`filter-btn ${filterType === 'All' ? 'active' : ''}`}
                onClick={() => setFilterType('All')}
              >
                Best Match
              </button>
              <button 
                className={`filter-btn ${filterType === 'Cheapest' ? 'active' : ''}`}
                onClick={() => setFilterType('Cheapest')}
              >
                Cheapest First
              </button>
            </div>
          </div>

          <div className="results-cards-list">
            {mockResults.map((item) => (
              <div key={item.id} className="result-item-card">
                <div className="result-left">
                  <div className="airline-badge">
                    <Plane size={18} color="#0055FE" />
                    <span className="airline-name">{item.airline}</span>
                    <span className="flight-code">{item.flightNo}</span>
                  </div>

                  <div className="flight-times-row">
                    <div className="time-col">
                      <span className="time-big">{item.departTime}</span>
                      <span className="city-sub">{searchData.from}</span>
                    </div>

                    <div className="duration-col">
                      <span className="dur-text">{item.duration}</span>
                      <div className="dur-line">
                        <span className="line-dot"></span>
                        <span className="line-bar"></span>
                        <span className="line-dot"></span>
                      </div>
                      <span className="type-badge">{item.type}</span>
                    </div>

                    <div className="time-col">
                      <span className="time-big">{item.arrivalTime}</span>
                      <span className="city-sub">{searchData.to || 'Destination'}</span>
                    </div>
                  </div>
                </div>

                <div className="result-right">
                  <div className="price-box">
                    <span className="from-txt">Total Price</span>
                    <span className="res-price">${item.price}</span>
                    <span className="baggage-txt">{item.baggage}</span>
                  </div>

                  <button 
                    className="select-deal-btn"
                    onClick={() => {
                      onSelectResult(item);
                      onClose();
                    }}
                  >
                    Select Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
