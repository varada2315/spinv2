import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Compass, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Hotel, 
  Sparkles, 
  Globe, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './MultiStepPackageForm.css';

export default function MultiStepPackageForm({ initialDestination = '', initialCategory = '', onClose, onSubmitted }) {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Step 1 State
  const [tripType, setTripType] = useState(
    initialCategory === 'domestic' ? 'Domestic Trip' : 'International Trip'
  );
  const [destination, setDestination] = useState(initialDestination || '');
  const [serviceNeeded, setServiceNeeded] = useState('Complete Trip Planning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Sync destination if initialDestination changes
  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  // Step 2 State
  const [travelDates, setTravelDates] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [infants, setInfants] = useState('0');
  const [childrenAges, setChildrenAges] = useState('');

  // Step 3 State
  const [budgetType, setBudgetType] = useState('50K–70K per person');
  const [customBudget, setCustomBudget] = useState('');
  const [hotelPref, setHotelPref] = useState('4 Star');
  const [specialReq, setSpecialReq] = useState('');

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalBudget = budgetType === 'Custom' ? customBudget : budgetType;

    const leadData = {
      tripType: tripType || 'Custom Trip',
      destination,
      serviceNeeded,
      name,
      phone,
      email,
      travelDates,
      departureCity,
      travelers: {
        adults,
        children,
        infants,
        childrenAges: parseInt(children) > 0 ? childrenAges : 'N/A'
      },
      budgetRange: finalBudget,
      hotelPreference: hotelPref,
      specialRequirements: specialReq
    };

    try {
      await submitLeadToCRM(leadData, 'Multi-Step Package Inquiry');
    } catch (err) {
      console.warn('CRM submission fallback:', err);
    }

    setSubmitting(false);
    setShowSuccess(true);

    if (onSubmitted) {
      onSubmitted(`Thank you ${name}! Package inquiry for ${destination} received.`);
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="multistep-backdrop" onClick={onClose}>
          <div className="multistep-card" onClick={(e) => e.stopPropagation()}>
            <button className="multistep-close-btn" onClick={onClose} aria-label="Close form">
              <X size={20} />
            </button>

            {/* Header & Step Indicator */}
            <div className="multistep-header">
              <div className="multistep-badge">
                <Sparkles size={14} />
                <span>STEP {step} OF 3</span>
              </div>
              <h2 className="multistep-title">Plan Your Dream Trip</h2>
              <p className="multistep-sub">Get a 100% customized itinerary tailored to your dates and budget.</p>

              {/* Progress Bar */}
              <div className="step-progress-bar">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>
            </div>

            {/* STEP 1: Destination, Help Option & Contact Details */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="multistep-form-body">
                <div className="multi-field">
                  <label>Destination Name *</label>
                  <div className="multi-input-wrap">
                    <Compass size={18} className="multi-field-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Manali, Bali, Dubai, Kashmir, USA..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="multi-field">
                  <label>What do you need help with? *</label>
                  <div className="multi-input-wrap">
                    <HelpCircle size={18} className="multi-field-icon" />
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      required
                    >
                      <option value="Visa">Visa</option>
                      <option value="Flight & Hotel">Flight & Hotel</option>
                      <option value="Transfers & Sightseeings">Transfers & Sightseeings</option>
                      <option value="Complete Trip Planning">Complete Trip Planning</option>
                      <option value="Not sure yet, just exploring">Not sure yet, just exploring</option>
                    </select>
                    <ChevronDown size={18} className="multi-field-select-arrow" />
                  </div>
                </div>

                <div className="multi-field">
                  <label>Full Name *</label>
                  <div className="multi-input-wrap">
                    <User size={18} className="multi-field-icon" />
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="multi-field">
                    <label>Contact / WhatsApp No. *</label>
                    <div className="multi-input-wrap">
                      <Phone size={18} className="multi-field-icon" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="multi-field">
                    <label>Email Address *</label>
                    <div className="multi-input-wrap">
                      <Mail size={18} className="multi-field-icon" />
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="multistep-actions">
                  <button type="submit" className="btn-primary step-btn-next">
                    <span>Continue to Step 2</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Travel Dates & Passengers */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="multistep-form-body">
                <div className="form-grid-2">
                  <div className="multi-field">
                    <label>Travel Dates *</label>
                    <div className="multi-input-wrap">
                      <Calendar size={18} className="multi-field-icon" />
                      <input
                        type="date"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="multi-field">
                    <label>Departure City *</label>
                    <div className="multi-input-wrap">
                      <MapPin size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="e.g. New Delhi, Chandigarh, Mumbai"
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="multi-field">
                  <label>Number of Travelers *</label>
                  <div className="travelers-counter-grid">
                    <div className="counter-box">
                      <span className="counter-label">Adults (12+ Years)</span>
                      <select value={adults} onChange={(e) => setAdults(e.target.value)}>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5+">5+ Group</option>
                      </select>
                    </div>

                    <div className="counter-box">
                      <span className="counter-label">Children (Below 12 Years)</span>
                      <select value={children} onChange={(e) => setChildren(e.target.value)}>
                        <option value="0">0 Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3+">3+ Children</option>
                      </select>
                    </div>

                    <div className="counter-box">
                      <span className="counter-label">Infants (Below 2 Years)</span>
                      <select value={infants} onChange={(e) => setInfants(e.target.value)}>
                        <option value="0">0 Infants</option>
                        <option value="1">1 Infant</option>
                        <option value="2">2 Infants</option>
                        <option value="3+">3+ Infants</option>
                      </select>
                    </div>
                  </div>
                </div>

                {parseInt(children) > 0 && (
                  <div className="multi-field">
                    <label>Children's Age(s)</label>
                    <div className="multi-input-wrap">
                      <Users size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="e.g. 5 yrs, 8 yrs"
                        value={childrenAges}
                        onChange={(e) => setChildrenAges(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="multistep-actions flex-between">
                  <button type="button" className="btn-secondary step-btn-back" onClick={handlePrevStep}>
                    <ArrowLeft size={18} />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="btn-primary step-btn-next">
                    <span>Continue to Step 3</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Budget & Preferences */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="multistep-form-body">
                <div className="multi-field">
                  <label>Budget Range *</label>
                  <div className="budget-options-list">
                    {['30K–50K per person', '50K–70K per person', '70K+ per person', 'Custom'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`budget-chip ${budgetType === b ? 'selected' : ''}`}
                        onClick={() => setBudgetType(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>

                  {budgetType === 'Custom' && (
                    <div className="multi-input-wrap mt-8">
                      <DollarSign size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="Enter custom budget (e.g. ₹1,20,000 per person)"
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="multi-field">
                  <label>Hotel Preference *</label>
                  <div className="hotel-pref-row">
                    {['3 Star', '4 Star', '5 Star'].map((h) => (
                      <button
                        key={h}
                        type="button"
                        className={`hotel-chip ${hotelPref === h ? 'selected' : ''}`}
                        onClick={() => setHotelPref(h)}
                      >
                        <Hotel size={16} />
                        <span>{h}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="multi-field">
                  <label>Any Special Requirements</label>
                  <div className="multi-input-wrap textarea-wrap">
                    <textarea
                      rows="2"
                      placeholder="Honeymoon inclusions, veg meal preferences, specific flights..."
                      value={specialReq}
                      onChange={(e) => setSpecialReq(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="multistep-actions flex-between">
                  <button type="button" className="btn-secondary step-btn-back" onClick={handlePrevStep}>
                    <ArrowLeft size={18} />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="btn-primary step-btn-submit" disabled={submitting}>
                    <span>{submitting ? 'Connecting...' : 'Connect With Our Team'}</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {showSuccess && (
        <SuccessScreenModal onClose={onClose} />
      )}
    </>
  );
}
