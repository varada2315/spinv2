import React from 'react';
import MultiStepPackageForm from './MultiStepPackageForm';
import VisaApplicationForm from './VisaApplicationForm';
import B2BConnectForm from './B2BConnectForm';

export default function InquiryModal({ selectedItem, onClose, onSubmitted }) {
  if (!selectedItem) return null;

  const category = typeof selectedItem === 'object' && selectedItem.category 
    ? selectedItem.category 
    : (typeof selectedItem === 'string' ? selectedItem : '');

  const titleString = typeof selectedItem === 'string' 
    ? selectedItem 
    : (selectedItem.country || selectedItem.title || selectedItem.name || '');

  const isB2B = category === 'b2b' || titleString.toLowerCase().includes('b2b') || titleString.toLowerCase().includes('partner');
  const isVisa = !isB2B && category !== 'package' && category !== 'custom-package' && (category === 'visa' || titleString.toLowerCase().includes('visa'));

  if (isB2B) {
    return (
      <B2BConnectForm 
        onClose={onClose} 
        onSubmitted={onSubmitted} 
      />
    );
  }

  if (isVisa) {
    const rawCountry = typeof selectedItem === 'object'
      ? (selectedItem.country || selectedItem.destination || selectedItem.title || '')
      : (typeof selectedItem === 'string' ? selectedItem : '');
    let cleanCountry = rawCountry
      .replace(/visa/gi, '')
      .replace(/application/gi, '')
      .replace(/assistance/gi, '')
      .replace(/concierge/gi, '')
      .replace(/services/gi, '')
      .replace(/apply for now/gi, '')
      .replace(/apply/gi, '')
      .trim();

    if (['assistance', 'services', 'concierge', 'application', 'apply for now', 'apply'].includes(cleanCountry.toLowerCase())) {
      cleanCountry = '';
    }

    return (
      <VisaApplicationForm 
        initialCountry={cleanCountry} 
        onClose={onClose} 
        onSubmitted={onSubmitted} 
      />
    );
  }

  // Filter out generic action titles like "Plan My Trip", "International Holiday Package", etc.
  const rawDest = typeof selectedItem === 'object' 
    ? (selectedItem.destination || selectedItem.name || '') 
    : (typeof selectedItem === 'string' ? selectedItem : '');

  const genericExactTerms = [
    'plan my trip', 
    'international holiday package', 
    'domestic holiday package', 
    'package', 
    'general inquiry', 
    'custom package', 
    'get in touch', 
    "let's connect", 
    'lets connect',
    'custom destination'
  ];
  const isExactGeneric = genericExactTerms.includes(rawDest.trim().toLowerCase());
  const destName = isExactGeneric ? '' : rawDest.trim();

  return (
    <MultiStepPackageForm 
      initialCategory={category}
      initialDestination={destName} 
      onClose={onClose} 
      onSubmitted={onSubmitted} 
    />
  );
}
