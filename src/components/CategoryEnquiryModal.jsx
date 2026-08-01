import React from 'react';
import MultiStepPackageForm from './MultiStepPackageForm';
import VisaApplicationForm from './VisaApplicationForm';
import B2BConnectForm from './B2BConnectForm';

export default function CategoryEnquiryModal({ category = 'international', onClose, onSubmitted }) {
  if (category === 'visa') {
    return (
      <VisaApplicationForm 
        initialCountry="" 
        onClose={onClose} 
        onSubmitted={onSubmitted} 
      />
    );
  }

  if (category === 'b2b') {
    return (
      <B2BConnectForm 
        onClose={onClose} 
        onSubmitted={onSubmitted} 
      />
    );
  }

  return (
    <MultiStepPackageForm 
      initialDestination="" 
      onClose={onClose} 
      onSubmitted={onSubmitted} 
    />
  );
}
