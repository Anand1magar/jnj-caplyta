import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SmsMessageScreen, SMS_LINK_BLUE } from '../components/SmsMessageScreen.jsx';

export function SmsPage() {
  const navigate = useNavigate();
  return (
    <SmsMessageScreen>
      <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919', opacity: 0.9, whiteSpace: 'pre-wrap' }}>
        PhilRx: Your prescription from Dr. Ethan Caldwell has been received for:
        {'\n'}- CAPLYTA
        {'\n\n'}Verify your information here:{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/welcome'); }} style={{ color: SMS_LINK_BLUE, textDecoration: 'none' }}>
          https://jjdirect.com/sign-up/dasyhk
        </a>
      </p>
      <p style={{ margin: '8px 0 0', fontFamily: 'Arial, sans-serif', fontSize: 16, lineHeight: 1.25, color: '#191919' }}>
        Note: Reply HELP for help or STOP to unsubscribe. About 4msgs/month. Msg&amp;Data rates may apply
      </p>
    </SmsMessageScreen>
  );
}
