import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ds/components/forms/Button/Button.jsx';
import { TextInput } from '@ds/components/forms/TextInput/TextInput.jsx';
import { NextSteps } from '@ds/components/domain/NextSteps/NextSteps.jsx';
import { BrandHeader as MyPhilHeader } from '../components/BrandHeader.jsx';
import { JnjFooter as MyPhilFooter } from '../components/JnjFooter.jsx';
import hipaaVector from '@ds/assets/icons/hipaa-badge/hipaa-vector.svg';
import hipaaLabel from '@ds/assets/icons/hipaa-badge/hipaa-label.svg';
import compliantLabel from '@ds/assets/icons/hipaa-badge/compliant-label.svg';
import hipaaVectorStroke from '@ds/assets/icons/hipaa-badge/hipaa-vector-stroke.svg';

const PATIENT_NAME = 'Patricia';

function HipaaBadge() {
  return (
    <div style={{ position: 'relative', width: 81, height: 40, flexShrink: 0 }}>
      <div style={{ background: 'var(--secondary)', borderRadius: '1px 17px 1px 1px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '8px 13px 8px 8px', position: 'relative' }}>
        <img src={hipaaVector} alt="" style={{ position: 'absolute', right: -8, top: 4, width: 16, height: 22 }} />
        <img src={hipaaLabel} alt="" style={{ width: 50, height: 13 }} />
        <img src={compliantLabel} alt="" style={{ width: 51, height: 7 }} />
        <img src={hipaaVectorStroke} alt="" style={{ position: 'absolute', right: -10, top: 3, width: 19, height: 25 }} />
      </div>
    </div>
  );
}

export function WelcomePage() {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const canContinue = lastName && dob;

  return (
    <div style={{ width: '100%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-body)' }}>
      <MyPhilHeader />

      <div style={{ width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 28, padding: '20px 16px 60px' }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: '36px', color: 'var(--pitch)', margin: 0 }}>Welcome, {PATIENT_NAME}!</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 16, lineHeight: '24px', color: 'var(--pitch)', margin: 0 }}>
            Dr. Ethan Caldwell sent your CAPLYTA prescription. Confirm your identity to continue.
          </p>
          <TextInput label="Last name" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <TextInput label="Date of birth (MM/DD/YYYY)" placeholder="Date of birth (MM/DD/YYYY)" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>

        <Button
          hierarchy="primary"
          fullWidth
          disabled={!canContinue}
          onClick={() => navigate('/insurance-details')}
        >
          Next
        </Button>
      </div>

      <div style={{ width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, padding: '0 16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <p style={{ fontSize: 14, lineHeight: '22px', color: 'var(--pitch)', margin: 0, maxWidth: 194 }}>
            By proceeding, you agree to <a href="#" style={{ color: 'var(--pitch)' }}>terms of use</a>, our <a href="#" style={{ color: 'var(--pitch)' }}>privacy policy</a> and <a href="#" style={{ color: 'var(--pitch)' }}>HIPAA policy.</a>
          </p>
          <HipaaBadge />
        </div>
        <div style={{ borderTop: '1px solid var(--fade)' }} />
        <p style={{ fontSize: 16, lineHeight: '24px', color: 'var(--pitch)', margin: 0 }}>
          Already have a PhilRx account? <a href="#" style={{ color: 'var(--sky)', fontWeight: 700, textDecoration: 'underline' }}>Log in</a>
        </p>
      </div>

      <div style={{ width: '100%', boxSizing: 'border-box', padding: '0 16px 20px' }}>
        <NextSteps
          title="What's next"
          steps={[
            'Confirm your information',
            'PhilRx will find your lowest price',
            'Confirm your price, and we’ll ship your medication',
          ]}
        />
      </div>

      <MyPhilFooter />

    </div>
  );
}
