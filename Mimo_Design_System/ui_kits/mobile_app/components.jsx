// components.jsx — Mimo UI primitives for the mobile app kit.
// All visual rules trace back to colors_and_type.css tokens.

// All values are CSS variables, so dark theme switches automatically when
// [data-theme="dark"] is set on the device-frame root.
const M = {
  bg: 'var(--bg)', surface: 'var(--surface)', quiet: 'var(--surface-quiet)', press: 'var(--surface-press)',
  border: 'var(--border)', borderStrong: 'var(--border-strong)', divider: 'var(--divider)',
  ink1: 'var(--ink-1)', ink2: 'var(--ink-2)', ink3: 'var(--ink-3)', ink4: 'var(--ink-4)',
  inkOnAccent: 'var(--ink-on-accent)',
  accent: 'var(--accent)', accentStrong: 'var(--accent-strong)', accentSoft: 'var(--accent-soft)',
  humanBg: 'var(--human-bg)', humanBorder: 'var(--human-border)', humanInk: 'var(--human-ink)',
  systemBg: 'var(--system-bg)', systemBorder: 'var(--system-border)', systemInk: 'var(--system-ink)',
  successBg: 'var(--success-bg)', success: 'var(--success)',
  warningBg: 'var(--warning-bg)', warning: 'var(--warning)',
  dangerBg: 'var(--danger-bg)', danger: 'var(--danger)',
  scrim: 'var(--scrim)',
  font: 'var(--font-sans)',
  elev1: 'var(--elev-1)', elev2: 'var(--elev-2)', elev3: 'var(--elev-3)',
};

// ─── Button ──────────────────────────────────────────────────────────────
function Button({ variant = 'primary', size = 'md', icon, children, onClick, disabled, style, type = 'button' }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: M.font, fontWeight: 500, fontSize: size === 'sm' ? 13 : 15,
    height: size === 'sm' ? 32 : 44, padding: size === 'sm' ? '0 12px' : '0 18px',
    borderRadius: size === 'sm' ? 8 : 10,
    border: '1px solid transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background 160ms cubic-bezier(0.2,0,0.2,1)',
  };
  const variants = {
    primary:   { background: M.ink1, color: 'var(--bg)' },
    secondary: { background: M.surface, color: M.ink1, borderColor: M.borderStrong },
    ghost:     { background: 'transparent', color: M.ink1 },
    accent:    { background: M.accent, color: 'var(--ink-on-accent)' },
    danger:    { background: 'transparent', color: M.danger },
  };
  return (
    <button type={type} onClick={disabled ? undefined : onClick} style={{ ...base, ...variants[variant], ...style }}>
      {icon}
      {children}
    </button>
  );
}

// ─── App bar ─────────────────────────────────────────────────────────────
function AppBar({ title, leading, trailing, transparent }) {
  return (
    <div style={{
      height: 56, display: 'flex', alignItems: 'center',
      padding: '0 4px',
      background: transparent ? 'transparent' : M.bg,
      borderBottom: transparent ? 'none' : `1px solid ${M.border}`,
      flexShrink: 0,
    }}>
      <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}>{leading}</div>
      <div style={{ flex: 1, fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1, letterSpacing: '-0.01em' }}>
        {title}
      </div>
      <div style={{ width: 44, display: 'flex', justifyContent: 'center' }}>{trailing}</div>
    </div>
  );
}

function IconButton({ children, onClick, ariaLabel, style }) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: 40, height: 40, borderRadius: 10, border: 0,
        background: 'transparent', color: M.ink1, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 120ms cubic-bezier(0.2,0,0.2,1)',
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = M.quiet)}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      {children}
    </button>
  );
}

// ─── Bottom nav ──────────────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  const items = [
    { id: 'home',    label: 'Home',    Icon: window.IconHome },
    { id: 'library', label: 'Library', Icon: window.IconLibrary },
    { id: 'profile', label: 'Profile', Icon: window.IconUser },
  ];
  return (
    <div style={{
      display: 'flex', height: 56, background: M.bg,
      borderTop: `1px solid ${M.border}`, flexShrink: 0,
    }}>
      {items.map(({ id, label, Icon }) => {
        const isActive = id === active;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 2,
              background: 'transparent', border: 0, cursor: 'pointer',
              color: isActive ? M.ink1 : M.ink3,
              fontFamily: M.font, fontSize: 11, fontWeight: 500,
            }}
          >
            <Icon size={22} stroke={isActive ? 1.9 : 1.6} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Search Field ────────────────────────────────────────────────────────
function SearchField({ value = '', onChange, onFocus, onBlur, placeholder = 'Search or paste a link', autoFocus, urlMode, onSubmit, leadingClose, onClose }) {
  const inputRef = React.useRef(null);
  React.useEffect(() => { if (autoFocus && inputRef.current) inputRef.current.focus(); }, [autoFocus]);
  const showUrl = urlMode || /^https?:\/\//i.test(value);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(value); }}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 48, padding: '0 14px',
        background: showUrl ? M.systemBg : M.surface,
        border: `1px solid ${showUrl ? M.systemBorder : M.border}`,
        borderRadius: 12,
        transition: 'border-color 160ms cubic-bezier(0.2,0,0.2,1), background 160ms',
      }}
    >
      {leadingClose ? (
        <button type="button" onClick={onClose} aria-label="Close"
          style={{ border: 0, background: 'transparent', padding: 0, color: M.ink2, cursor: 'pointer', display: 'inline-flex' }}>
          <window.IconBack size={20} />
        </button>
      ) : (
        <window.IconSearch size={18} style={{ color: showUrl ? M.systemInk : M.ink3 }} />
      )}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          flex: 1, border: 0, outline: 'none', background: 'transparent',
          fontFamily: M.font, fontSize: 15, color: M.ink1,
          minWidth: 0,
        }}
      />
      {showUrl && (
        <button type="submit" style={{
          fontSize: 11, fontWeight: 600, color: M.systemInk,
          background: M.systemBg, border: 0, padding: '5px 10px',
          borderRadius: 999, cursor: 'pointer',
        }}>Save link</button>
      )}
      {!showUrl && value && (
        <button type="button" onClick={() => onChange('')} aria-label="Clear"
          style={{ border: 0, background: 'transparent', padding: 0, color: M.ink3, cursor: 'pointer', display: 'inline-flex' }}>
          <window.IconClose size={16} />
        </button>
      )}
    </form>
  );
}

// ─── Chips ───────────────────────────────────────────────────────────────
function Chip({ tone = 'neutral', icon, children, active, onClick, size = 'md' }) {
  const tones = {
    neutral: { bg: M.quiet,    fg: M.ink2, bd: 'transparent' },
    human:   { bg: M.humanBg,  fg: M.humanInk, bd: M.humanBorder },
    system:  { bg: M.systemBg, fg: M.systemInk, bd: M.systemBorder },
    accent:  { bg: M.accentSoft, fg: M.accentStrong, bd: 'transparent' },
    success: { bg: M.successBg, fg: M.success, bd: 'transparent' },
  };
  const t = tones[tone];
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: size === 'sm' ? 22 : 28, padding: size === 'sm' ? '0 8px' : '0 12px',
      borderRadius: 999, fontFamily: M.font, fontSize: size === 'sm' ? 11 : 12, fontWeight: 500,
      background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
    }}>
      {icon}{children}
    </span>
  );
}

function FilterChip({ active, children, onClick }) {
  return (
    <button onClick={onClick} style={{
      height: 32, padding: '0 14px', borderRadius: 999,
      fontFamily: M.font, fontSize: 13, fontWeight: 500,
      background: active ? M.ink1 : M.surface,
      color: active ? 'var(--bg)' : M.ink1,
      border: `1px solid ${active ? M.ink1 : M.borderStrong}`,
      cursor: 'pointer', whiteSpace: 'nowrap',
    }}>{children}</button>
  );
}

// ─── Memory Card ─────────────────────────────────────────────────────────
function MemoryCard({ memory, variant = 'standard', onClick }) {
  if (variant === 'compact') {
    return (
      <article onClick={onClick} style={{
        display: 'flex', gap: 12, padding: 10, alignItems: 'center',
        background: M.surface, border: `1px solid ${M.border}`,
        borderRadius: 12, boxShadow: M.elev1,
        cursor: onClick ? 'pointer' : 'default',
      }}>
        <Thumb memory={memory} size={64} radius={8} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <h3 style={{ margin: 0, fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1, lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{memory.title}</h3>
          <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{memory.source} · {memory.date}</div>
        </div>
      </article>
    );
  }
  return (
    <article onClick={onClick} style={{
      background: M.surface, border: `1px solid ${M.border}`,
      borderRadius: 14, boxShadow: M.elev1, overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <Thumb memory={memory} aspect="16/9" radius={0} />
      <div style={{ padding: '14px 16px 16px' }}>
        <h3 style={{ margin: 0, fontFamily: M.font, fontSize: 15, fontWeight: 600, color: M.ink1, lineHeight: 1.3 }}>{memory.title}</h3>
        <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 4 }}>{memory.source} · {memory.date}</div>
        {(memory.humanContext || memory.systemUnderstanding) && (
          <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
            {memory.humanContext && <Chip tone="human" size="sm">You noted</Chip>}
            {memory.systemUnderstanding && <Chip tone="system" size="sm">{memory.systemUnderstanding}</Chip>}
          </div>
        )}
      </div>
    </article>
  );
}

function Thumb({ memory, aspect, size, radius = 10 }) {
  const style = {
    background: memory.thumbColor || 'linear-gradient(135deg,#B5A88C,#7A6B4E)',
    borderRadius: radius,
    position: 'relative',
    boxShadow: 'inset 0 0 0 1px rgba(20,20,18,0.04)',
  };
  if (size) { style.width = size; style.height = size; style.flexShrink = 0; }
  else if (aspect) { style.aspectRatio = aspect; }
  if (memory.video) {
    return (
      <div style={style}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFF',
        }}>
          <window.IconPlay size={28} />
        </div>
      </div>
    );
  }
  if (memory.fallback) {
    return (
      <div style={{ ...style, background: M.quiet, display: 'flex', alignItems: 'center', justifyContent: 'center', color: M.ink4 }}>
        <window.IconImage size={size ? 20 : 28} />
      </div>
    );
  }
  return <div style={style} />;
}

// ─── Context blocks ──────────────────────────────────────────────────────
function HumanContextBlock({ children }) {
  return (
    <div style={{
      background: M.humanBg, border: `1px solid ${M.humanBorder}`,
      borderRadius: 12, padding: '14px 16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: M.font, fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: M.humanInk, marginBottom: 6 }}>
        <window.IconQuote size={13} stroke={1.75} />
        You noted
      </div>
      <div style={{ fontFamily: M.font, fontSize: 14, lineHeight: 1.45, color: M.humanInk }}>{children}</div>
    </div>
  );
}

function SystemContextBlock({ children }) {
  return (
    <div style={{
      background: M.systemBg, border: `1px solid ${M.systemBorder}`,
      borderRadius: 12, padding: '14px 16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: M.font, fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: M.systemInk, marginBottom: 6 }}>
        <window.IconSparkles size={13} stroke={1.75} />
        Mimo thinks
      </div>
      <div style={{ fontFamily: M.font, fontSize: 14, lineHeight: 1.45, color: M.systemInk }}>{children}</div>
    </div>
  );
}

function RelatedCard({ memory, reason, onClick }) {
  return (
    <article onClick={onClick} style={{
      display: 'flex', gap: 12, alignItems: 'center',
      padding: 12, background: M.surface,
      border: `1px solid ${M.border}`, borderRadius: 12, boxShadow: M.elev1,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <Thumb memory={memory} size={56} radius={8} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1, lineHeight: 1.3 }}>{memory.title}</div>
        <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2, lineHeight: 1.4 }}>{reason}</div>
      </div>
    </article>
  );
}

// ─── Section header ─────────────────────────────────────────────────────
function SectionHeader({ title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
      <h2 style={{ margin: 0, fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1, letterSpacing: '-0.01em' }}>{title}</h2>
      {action}
    </div>
  );
}

// ─── Save Confirmation Sheet ─────────────────────────────────────────────
function SaveSheet({ memory, onView, onUndo, onDismiss }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 30,
      background: 'rgba(20,20,18,0.32)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'mimoFadeIn 220ms cubic-bezier(0.2,0,0.2,1)',
    }} onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: M.surface, borderRadius: '20px 20px 0 0',
        padding: '18px 18px 28px', boxShadow: M.elev3,
        animation: 'mimoSlideUp 220ms cubic-bezier(0.2,0,0.2,1)',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 999, background: M.borderStrong, margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: M.successBg, color: M.success, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <window.IconCheck size={16} />
          </div>
          <div style={{ fontFamily: M.font, fontSize: 15, fontWeight: 600, color: M.ink1 }}>Saved.</div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 14, padding: 12, background: M.quiet, borderRadius: 12 }}>
          <Thumb memory={memory} size={56} radius={8} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1, lineHeight: 1.3 }}>{memory.title}</div>
            <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{memory.source}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Button variant="secondary" style={{ flex: 1 }} onClick={onUndo}>Undo</Button>
          <Button variant="primary" style={{ flex: 1 }} onClick={onView}>View memory</Button>
        </div>
      </div>
    </div>
  );
}

// ─── Add Personal Context Sheet ─────────────────────────────────────────
function AddContextSheet({ memory, initialValue = '', onSave, onDismiss }) {
  const [value, setValue] = React.useState(initialValue);
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 30,
      background: M.scrim,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'mimoFadeIn 220ms cubic-bezier(0.2,0,0.2,1)',
    }} onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: M.surface, borderRadius: '20px 20px 0 0',
        padding: '18px 18px 28px', boxShadow: M.elev3,
        animation: 'mimoSlideUp 220ms cubic-bezier(0.2,0,0.2,1)',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 999, background: M.borderStrong, margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1 }}>Add personal context</h2>
          <button onClick={onDismiss} style={{ border: 0, background: 'transparent', padding: 6, color: M.ink3, cursor: 'pointer', display: 'inline-flex' }} aria-label="Close">
            <window.IconClose size={18} />
          </button>
        </div>
        <p style={{ margin: '0 0 12px', fontFamily: M.font, fontSize: 13, color: M.ink3, lineHeight: 1.5 }}>
          What's worth remembering about this? Who recommended it, why it matters, when you might use it.
        </p>
        <textarea
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Rahul recommended this. Compare against the blue version."
          rows={3}
          style={{
            width: '100%', boxSizing: 'border-box',
            padding: 12, borderRadius: 10,
            border: `1px solid ${M.border}`,
            background: M.humanBg, color: M.humanInk,
            fontFamily: M.font, fontSize: 14, lineHeight: 1.45,
            resize: 'none', outline: 'none',
          }}
        />
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Button variant="secondary" style={{ flex: 1 }} onClick={onDismiss}>Cancel</Button>
          <Button variant="primary"   style={{ flex: 1 }} onClick={() => onSave && onSave(value)} disabled={!value.trim()}>Save context</Button>
        </div>
      </div>
    </div>
  );
}

// ─── Source Unavailable Banner (UC-007 edge case) ───────────────────────
function SourceUnavailableBlock() {
  return (
    <div style={{
      background: M.warningBg,
      border: `1px solid var(--warning)`,
      borderRadius: 12, padding: '12px 14px',
      display: 'flex', gap: 10, alignItems: 'flex-start',
    }}>
      <div style={{ color: M.warning, marginTop: 2 }}>
        <window.IconWarn size={16} />
      </div>
      <div>
        <div style={{ fontFamily: M.font, fontSize: 13, fontWeight: 600, color: M.warning }}>Original page is no longer reachable.</div>
        <div style={{ fontFamily: M.font, fontSize: 13, color: M.ink2, marginTop: 2, lineHeight: 1.4 }}>Your memory is still safe — context and understanding are preserved here.</div>
      </div>
    </div>
  );
}

// ─── Multi-select bottom action bar ─────────────────────────────────────
function MultiSelectBar({ count, onCreateCollection, onDelete, onCancel }) {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20,
      background: M.surface, borderTop: `1px solid ${M.border}`,
      boxShadow: M.elev2, padding: '10px 12px',
      display: 'flex', alignItems: 'center', gap: 8,
      animation: 'mimoSlideUp 200ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <Button variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
      <div style={{ flex: 1, textAlign: 'center', fontFamily: M.font, fontSize: 13, color: M.ink2 }}>
        {count} selected
      </div>
      <Button variant="danger" size="sm" onClick={onDelete} disabled={count === 0}>Delete</Button>
      <Button variant="primary" size="sm" icon={<window.IconPlus size={13} />} onClick={onCreateCollection} disabled={count === 0}>Create collection</Button>
    </div>
  );
}

Object.assign(window, {
  M, Button, AppBar, IconButton, BottomNav, SearchField, Chip, FilterChip,
  MemoryCard, Thumb, HumanContextBlock, SystemContextBlock, RelatedCard,
  SectionHeader, SaveSheet,
  AddContextSheet, SourceUnavailableBlock, MultiSelectBar,
});
