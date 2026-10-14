import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SmsMessageScreen, SMS_LINK_BLUE } from '../components/SmsMessageScreen.jsx';

const body = { margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' };

// Figma: Shipping & Delivery section, "Overview" SMS.
export function ShippingSmsPage() {
  const navigate = useNavigate();
  return (
    <SmsMessageScreen>
      <p style={body}>
        J&J Direct: Your prescription has shipped:
        {'\n'}CAPLYTA
      </p>
      <p style={{ ...body, margin: '8px 0 0' }}>
        Track your delivery here:{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/shipped'); }} style={{ color: SMS_LINK_BLUE, textDecoration: 'none' }}>
          my.jnjdirect.com
        </a>
      </p>
    </SmsMessageScreen>
  );
}
