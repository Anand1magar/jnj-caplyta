import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SmsMessageScreen, SMS_LINK_BLUE } from '../components/SmsMessageScreen.jsx';

export function SmsPage() {
  const navigate = useNavigate();
  return (
    <SmsMessageScreen>
      <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' }}>
        Your prescription from your healthcare provider has been received
        {'\n'}by J&J Direct.
      </p>
      <p style={{ margin: '8px 0 0', fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' }}>
        Click here to verify your information so we can process your prescription:{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/welcome'); }} style={{ color: SMS_LINK_BLUE, textDecoration: 'none' }}>
          enroll.jnjdirect.com
        </a>
      </p>
      <p style={{ margin: '8px 0 0', fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' }}>
        Need help by phone? Text back CALL and we will call you. Note: Reply HELP for help or STOP to unsubscribe.
      </p>
    </SmsMessageScreen>
  );
}
