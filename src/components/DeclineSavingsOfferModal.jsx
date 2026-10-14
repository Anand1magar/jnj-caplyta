import React from 'react';
import { Modal } from '@ds/components/feedback/Modal/Modal.jsx';
import { Button } from '@ds/components/forms/Button/Button.jsx';

// Brand-local replacement for the shared DeclineEnrollmentModal. Same layout
// and same props — only the copy differs, which is the whole reason it lives
// here: the base flow's three savings pages render the shared modal, and this
// wording is client-approved for CAPLYTA alone. Editing ds/ would change it for
// every brand and be wiped by the next `vendor-ds.mjs` run.
export function DeclineSavingsOfferModal({ open, onClose, onEnroll, onDecline }) {
  return (
    <Modal open={open} onClose={onClose} size="full">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%', fontFamily: 'var(--font-body)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, lineHeight: '24px', color: 'var(--pitch)', margin: 0 }}>Why pay full price?</h2>
          <p style={{ fontSize: 16, lineHeight: '24px', color: 'var(--pitch)', margin: 0 }}>
            You won&rsquo;t be eligible to receive the savings offer, which will potentially lower your cost by 90%.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Button hierarchy="primary" fullWidth onClick={onEnroll}>Enroll in savings offer</Button>
          <Button hierarchy="secondary" fullWidth onClick={onDecline}>Decline savings offer</Button>
        </div>
      </div>
    </Modal>
  );
}
