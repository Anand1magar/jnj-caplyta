import React from 'react';
import { FLOW_SCREEN_BY_PATH } from './flowData.js';

function DetailCard({ icon, label, value, accent, iconBackground }) {
  return (
    <div style={{
      border: '1px solid rgba(19, 32, 53, 0.08)',
      borderRadius: 16,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(247,249,252,0.96))',
      boxShadow: '0 8px 22px rgba(17, 24, 39, 0.04)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderLeft: `4px solid ${accent}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: iconBackground,
          color: accent,
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.65)',
          flexShrink: 0,
        }}>
          {icon}
        </div>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: '0.08em', fontWeight: 700, textTransform: 'uppercase', color: 'var(--gunmetal)' }}>{label}</p>
      </div>

      <p style={{ margin: 0, fontSize: 14, lineHeight: '21px', color: 'var(--pitch)', whiteSpace: 'pre-wrap' }}>{value}</p>
    </div>
  );
}

export function FlowInfoPanel({ path }) {
  const screen = FLOW_SCREEN_BY_PATH[path];

  if (!screen) {
    return <div style={{ width: 360, flexShrink: 0, borderLeft: '1px solid var(--fade)' }} />;
  }

  return (
    <div style={{ width: 360, flexShrink: 0, height: '100%', boxSizing: 'border-box', borderLeft: '1px solid var(--fade)', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%)' }}>
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--fade)', background: 'rgba(255,255,255,0.75)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--pitch)' }}>Overview</p>
          <span style={{
            padding: '6px 10px',
            borderRadius: 999,
            background: 'rgba(41, 98, 255, 0.08)',
            color: 'var(--sky)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Screen
          </span>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DetailCard
          icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5v14" /><circle cx="12" cy="12" r="8" /></svg>}
          label="Stage"
          value={screen.stage}
          accent="#2d6cdf"
          iconBackground="rgba(45,108,223,0.10)"
        />

        <DetailCard
          icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2l8 8-8 8-8-8 8-8z" /><path d="M12 6v6l4 2" /></svg>}
          label="Trigger"
          value={screen.trigger}
          accent="#7c3aed"
          iconBackground="rgba(124,58,237,0.10)"
        />

        <DetailCard
          icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5v14" /><path d="M4 4l16 16" /></svg>}
          label="System action"
          value={screen.action}
          accent="#0f9f6e"
          iconBackground="rgba(15,159,110,0.10)"
        />
      </div>
    </div>
  );
}
