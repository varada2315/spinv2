import React from 'react';

export default function SpinLogo({ size = 'medium', className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';
  
  const height = isLarge ? 56 : isSmall ? 36 : 46;

  return (
    <div className={`spin-logo-brand ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img 
        src="/images/spin-logo.png" 
        alt="Spin Global" 
        style={{ 
          height: `${height}px`, 
          width: 'auto', 
          objectFit: 'contain',
          display: 'block'
        }} 
      />
    </div>
  );
}
