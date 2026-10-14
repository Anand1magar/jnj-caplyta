import React from 'react';
import caplytaLogo from '../assets/caplyta-logo.svg';

// CAPLYTA marketing header: brand logo alone. The PhilRx MyPhilHeader it
// replaces pairs the logo with a tagline; this brand carries no tagline, so the
// logo sits on its own at the left. Imported as `BrandHeader as MyPhilHeader`
// at each call site so the swap is a one-line import change per screen.
// Sticks to the top of the viewport while the page scrolls.
export function BrandHeader() {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%', height: 60, background: 'var(--pure)', borderBottom: '1px solid var(--fade)', display: 'flex', alignItems: 'center', padding: '0 17px', boxSizing: 'border-box' }}>
      <img src={caplytaLogo} alt="CAPLYTA" style={{ height: 28 }} />
    </div>
  );
}
