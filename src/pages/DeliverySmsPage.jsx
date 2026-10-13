import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SmsMessageScreen, SMS_LINK_BLUE } from '../components/SmsMessageScreen.jsx';

const body = { margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' };

// Figma: Shipping & Delivery section, the delivered-confirmation SMS.
export function DeliverySmsPage() {
  const navigate = useNavigate();
  return (
    <SmsMessageScreen>
      <p style={body}>
        J&J Direct:
        {'\n'}Hi Patricia,
      </p>
      <p style={{ ...body, margin: '8px 0 0' }}>
        Your prescription was delivered on [delivered date]. Questions? Contact us{' '}
        {/* Underlined, unlike the bare-URL links in the other SMS screens: this
            one is an inline word ("here") inside a sentence, which needs the
            underline to read as a link. Not an inconsistency — don't "fix" it. */}
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/delivered'); }} style={{ color: SMS_LINK_BLUE, textDecoration: 'underline' }}>
          here
        </a>.
      </p>
    </SmsMessageScreen>
  );
}
