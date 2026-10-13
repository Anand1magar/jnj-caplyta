import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ds/components/forms/Button/Button.jsx';
import { TextInput } from '@ds/components/forms/TextInput/TextInput.jsx';
import { Checkbox } from '@ds/components/forms/Checkbox/Checkbox.jsx';
import { BrandAppHeader } from '../components/BrandAppHeader.jsx';
import { JnjFooter as MyPhilFooter } from '../components/JnjFooter.jsx';
import { useAuthNext } from '../authNext.js';

export function LoginPage() {
  const navigate = useNavigate();
  // ?next=refill when this chain started from the refill SMS; forwarded on so
  // both routes out of here keep the eventual destination.
  const { suffix } = useAuthNext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ width: '100%', minHeight: '100vh', boxSizing: 'border-box', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'var(--font-body)' }}>
      <BrandAppHeader />

      <div style={{ width: '100%', flex: 1, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, padding: '20px 16px' }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: '36px', color: 'var(--pitch)', margin: 0 }}>Log In to your account</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <TextInput label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextInput
            label="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Checkbox checked={showPassword} onChange={() => setShowPassword((v) => !v)} label="Show password" />

        <div style={{ alignSelf: 'flex-start' }}>
          <Button hierarchy="link">Forgot password?</Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Straight to the code entry, skipping both the confirm-identity
              step and the delivery choice: the patient has just proved the
              account is theirs with a password, so there is nothing left to
              ask — the code goes to the contact method already on file. */}
          <Button hierarchy="primary" fullWidth onClick={() => navigate('/otp-verify' + suffix)}>Log In</Button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--fade)' }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--pitch)' }}>OR</span>
            <div style={{ flex: 1, height: 1, background: 'var(--fade)' }} />
          </div>

          {/* No password, so the patient picks where the code should go first.
              Both buttons end at /otp-verify; this one takes the longer way. */}
          <Button hierarchy="secondary" fullWidth onClick={() => navigate('/otp-delivery' + suffix)}>Log in with one-time code</Button>

          <p style={{ fontSize: 16, lineHeight: '24px', color: 'var(--gunmetal)', margin: 0 }}>
            By proceeding, you agree to our{' '}
            <a href="#" style={{ color: 'var(--gunmetal)' }}>terms of use</a>,{' '}
            <a href="#" style={{ color: 'var(--gunmetal)' }}>privacy policy,</a> and{' '}
            <a href="#" style={{ color: 'var(--gunmetal)' }}>HIPAA policy</a>.
          </p>
        </div>
      </div>

      <div style={{ width: '100%', marginTop: 126 }}>
        <MyPhilFooter />
      </div>
    </div>
  );
}
