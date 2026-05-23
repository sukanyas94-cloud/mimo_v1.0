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
    overflow: 'hidden',
    boxShadow: 'inset 0 0 0 1px rgba(20,20,18,0.04)',
  };
  if (size) { style.width = size; style.height = size; style.flexShrink = 0; }
  else if (aspect) { style.aspectRatio = aspect; }
  if (memory.fallback) {
    return (
      <div style={{ ...style, background: M.quiet, display: 'flex', alignItems: 'center', justifyContent: 'center', color: M.ink4 }}>
        <window.IconImage size={size ? 20 : 28} />
      </div>
    );
  }
  return (
    <div style={style}>
      {memory.image && (
        <img
          src={memory.image}
          alt=""
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
      {memory.video && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: memory.image ? 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)' : 'transparent',
          color: '#FFF',
        }}>
          <div style={{
            width: size ? Math.max(32, size * 0.5) : 48,
            height: size ? Math.max(32, size * 0.5) : 48,
            borderRadius: 999, background: 'rgba(20,20,18,0.55)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <window.IconPlay size={size ? 16 : 22} />
          </div>
        </div>
      )}
    </div>
  );
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
// V2.5 capture sheet — appears over the source app (or in-app paste flow).
// Preview · promoted AI suggestion row · collapsed "Add a note" · Cancel/Save.
// API:
//   memory                 — the previewed memory (already created upstream)
//   onSave(note)           — commit with optional note text
//   onSaveToCollection(name, note) — commit + add to a suggested collection
//   onDismiss()            — cancel without committing
function SaveSheet({ memory, onSave, onSaveToCollection, onDismiss,
                    // Backward-compat — old SaveSheet callers used onView/onUndo.
                    // Kept here so app.jsx upgrades are mechanical, not breaking.
                    onView, onUndo }) {
  const [noteExpanded, setNoteExpanded] = React.useState(false);
  const [note, setNote] = React.useState('');

  const suggestionName = (memory.systemUnderstanding && window.suggestCollectionNames(memory)?.[0]) || null;

  const handleSave = () => {
    if (onSave) onSave(note.trim());
    else if (onView) onView();
  };
  const handleSaveToCollection = () => {
    if (onSaveToCollection && suggestionName) onSaveToCollection(suggestionName, note.trim());
    else handleSave();
  };
  const handleCancel = () => {
    if (onDismiss) onDismiss();
    else if (onUndo) onUndo();
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 30,
      background: M.scrim,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'mimoFadeIn 220ms cubic-bezier(0.2,0,0.2,1)',
    }} onClick={handleCancel}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: M.surface, borderRadius: '20px 20px 0 0',
        padding: '14px 18px 22px', boxShadow: M.elev3,
        animation: 'mimoSlideUp 220ms cubic-bezier(0.2,0,0.2,1)',
        color: M.ink1,
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 999, background: M.borderStrong, margin: '0 auto 14px' }} />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: M.accent,
            color: 'var(--ink-on-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: M.font, fontWeight: 600, fontSize: 13,
          }}>M</div>
          <h2 style={{ margin: 0, fontFamily: M.font, fontSize: 16, fontWeight: 600, color: M.ink1 }}>Save to Mimo</h2>
        </div>

        {/* Preview */}
        <div style={{
          display: 'flex', gap: 12, padding: 10,
          background: M.quiet, borderRadius: 12,
        }}>
          <Thumb memory={memory} size={64} radius={8} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{
              fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1, lineHeight: 1.3,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{memory.title}</div>
            <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{memory.source}</div>
          </div>
        </div>

        {/* Promoted AI suggestion row */}
        {suggestionName && (
          <button onClick={handleSaveToCollection} style={{
            marginTop: 12, width: '100%', display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 14px',
            background: M.systemBg, border: `1px solid ${M.systemBorder}`,
            borderRadius: 12, cursor: 'pointer', textAlign: 'left',
            transition: 'background 160ms cubic-bezier(0.2,0,0.2,1)',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: M.systemInk, color: M.systemBg,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}><window.IconSparkles size={14} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: M.font, fontSize: 13, fontWeight: 600, color: M.systemInk }}>
                Save to <span style={{ fontWeight: 700 }}>{suggestionName}</span>
              </div>
              <div style={{ fontFamily: M.font, fontSize: 11, color: M.systemInk, opacity: 0.8, marginTop: 2 }}>
                Mimo thinks · based on this link
              </div>
            </div>
            <span style={{
              fontFamily: M.font, fontSize: 11, fontWeight: 600,
              color: M.systemInk,
              background: M.surface, padding: '4px 8px', borderRadius: 6,
            }}>↵</span>
          </button>
        )}

        {/* Note affordance — collapsed by default */}
        {!noteExpanded ? (
          <button onClick={() => setNoteExpanded(true)} style={{
            marginTop: 8, width: '100%',
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '12px 14px',
            background: 'transparent', border: `1px dashed ${M.borderStrong}`,
            borderRadius: 12, cursor: 'pointer', textAlign: 'left',
            color: M.ink3, fontFamily: M.font, fontSize: 13,
          }}>
            <window.IconPencil size={14} />
            <span style={{ flex: 1 }}>Add a note · why are you saving this?</span>
            <span style={{ fontSize: 11, opacity: 0.7 }}>Optional</span>
          </button>
        ) : (
          <div style={{
            marginTop: 8, padding: 12, borderRadius: 12,
            background: M.humanBg, border: `1px solid ${M.humanBorder}`,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: M.font, fontSize: 11, fontWeight: 600,
              letterSpacing: '0.04em', textTransform: 'uppercase', color: M.humanInk,
              marginBottom: 6,
            }}>
              <window.IconPencil size={11} />
              You noted
            </div>
            <textarea
              autoFocus
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Rahul recommended this. Try during the Japan trip."
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: 0, border: 0, background: 'transparent',
                color: M.humanInk, fontFamily: M.font, fontSize: 14, lineHeight: 1.45,
                resize: 'none', outline: 'none',
              }}
            />
          </div>
        )}

        {/* Commit buttons */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Button variant="secondary" style={{ flex: 1 }} onClick={handleCancel}>Cancel</Button>
          <Button variant="primary"   style={{ flex: 1 }} onClick={handleSave}>Save</Button>
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

// ─── System understanding as a verb-button ───────────────────────────────
// Tappable; "+ Save" affordance baked into the chip itself.
function SystemActionChip({ label, dimmed, onClick }) {
  return (
    <button onClick={dimmed ? undefined : onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 10px 6px 10px',
      background: dimmed ? M.quiet : M.systemBg,
      border: `1px solid ${dimmed ? M.border : M.systemBorder}`,
      borderRadius: 999,
      cursor: dimmed ? 'default' : 'pointer',
      color: dimmed ? M.ink3 : M.systemInk,
      fontFamily: M.font, fontSize: 12, fontWeight: 500,
      transition: 'background 160ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <window.IconSparkles size={12} />
      <span>{label}</span>
      {!dimmed && (
        <span style={{
          width: 16, height: 16, borderRadius: 999,
          background: M.systemInk, color: M.systemBg,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          marginLeft: 2,
        }}><window.IconPlus size={10} /></span>
      )}
      {dimmed && (
        <window.IconCheck size={11} style={{ marginLeft: 2, color: M.ink3 }} />
      )}
    </button>
  );
}

// ─── Membership chip (read-only — appears once a memory joins a collection)
function MembershipChip({ name, swatch, cover, onClick }) {
  return (
    <span onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px 4px 4px',
      background: M.quiet,
      border: `1px solid ${M.border}`,
      borderRadius: 999,
      fontFamily: M.font, fontSize: 12, fontWeight: 500, color: M.ink2,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: 999, background: swatch,
        position: 'relative', overflow: 'hidden', flexShrink: 0,
      }}>
        {cover && (
          <img src={cover} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }} />
        )}
      </span>
      {name}
    </span>
  );
}

// ─── Toast (transient confirmation) ──────────────────────────────────────
function Toast({ children, action, actionLabel, onAction, onDismiss }) {
  React.useEffect(() => {
    const t = setTimeout(() => onDismiss && onDismiss(), 4200);
    return () => clearTimeout(t);
  }, [onDismiss]);
  return (
    <div style={{
      position: 'absolute', left: 16, right: 16, bottom: 76, zIndex: 40,
      background: M.ink1, color: 'var(--bg)',
      borderRadius: 10, padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: M.elev2,
      fontFamily: M.font, fontSize: 13,
      animation: 'mimoSlideUp 220ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <window.IconCircleCheck size={16} />
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      {actionLabel && (
        <button onClick={onAction} style={{
          color: 'inherit', background: 'transparent', border: 0,
          fontSize: 13, fontWeight: 600, cursor: 'pointer',
        }}>{actionLabel}</button>
      )}
    </div>
  );
}

// ─── Collection Picker Sheet ─────────────────────────────────────────────
// Canonical Save-to-collection surface. Pre-seeded suggestions from system
// understanding · type-to-create · existing collections filtered by query.
function CollectionPickerSheet({ memory, collections, onSaveExisting, onCreate, onDismiss }) {
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef(null);

  const suggestionNames = window.suggestCollectionNames(memory);
  const existingNames = new Set(collections.map(c => c.name.toLowerCase()));
  const suggested = suggestionNames.filter(n => !existingNames.has(n.toLowerCase()));

  const q = query.trim().toLowerCase();
  const exists = collections.find(c => c.name.toLowerCase() === q);
  const matches = q.length === 0
    ? collections
    : collections.filter(c => c.name.toLowerCase().includes(q));

  React.useEffect(() => {
    // Don't autofocus — keeps suggestions in the user's eyeline first.
  }, []);

  return (
    <div onClick={onDismiss} style={{
      position: 'absolute', inset: 0, zIndex: 30,
      background: M.scrim,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'mimoFadeIn 220ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: M.surface, borderRadius: '20px 20px 0 0',
        boxShadow: M.elev3, maxHeight: '82%',
        display: 'flex', flexDirection: 'column',
        animation: 'mimoSlideUp 220ms cubic-bezier(0.2,0,0.2,1)',
      }}>
        <div style={{ padding: '16px 18px 0' }}>
          <div style={{ width: 36, height: 4, borderRadius: 999, background: M.borderStrong, margin: '0 auto 14px' }} />
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0, fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1 }}>Save to collection</h2>
            <button onClick={onDismiss} aria-label="Close" style={{ border: 0, background: 'transparent', padding: 6, color: M.ink3, cursor: 'pointer', display: 'inline-flex' }}>
              <window.IconClose size={18} />
            </button>
          </div>
          <div style={{ marginTop: 4, fontFamily: M.font, fontSize: 13, color: M.ink3, lineHeight: 1.5, marginBottom: 12 }}>
            Pick a suggested collection, or type a new name.
          </div>
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder="Find or create a collection"
          />
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 18px 22px' }}>
          {/* Suggestions — only when no query, or query has no exact match */}
          {!exists && (
            <>
              {q.length > 0 && (
                <>
                  <SectionLabel>No match — create new</SectionLabel>
                  <CreateRow
                    name={query.trim()}
                    cover={memory.image}
                    gradient={memory.thumbColor}
                    onClick={() => onCreate(query.trim())}
                  />
                </>
              )}

              {suggested.length > 0 && q.length === 0 && (
                <>
                  <SectionLabel icon={<window.IconSparkles size={11} />}>Suggested by Mimo · from this memory</SectionLabel>
                  {suggested.map((name, i) => (
                    <SuggestRow
                      key={name}
                      name={name}
                      subtitle={i === 0
                        ? `Inferred from "${memory.systemUnderstanding}"`
                        : i === 1 ? 'Broader · groups all of this kind' : 'Tighter · this moment only'}
                      cover={memory.image}
                      gradient={memory.thumbColor}
                      recommended={i === 0}
                      onClick={() => onCreate(name)}
                    />
                  ))}
                </>
              )}
            </>
          )}

          <SectionLabel>{q.length > 0 ? 'Matching collections' : 'Your collections'}</SectionLabel>
          {matches.length === 0 ? (
            <div style={{
              padding: '14px 4px', display: 'flex', alignItems: 'center', gap: 10,
              color: M.ink3, fontFamily: M.font, fontSize: 13,
            }}>
              <window.IconFolder size={14} />
              {q.length === 0
                ? 'No collections yet. Pick a suggestion above — or type a new name.'
                : 'Nothing matches. Press enter on the create row above.'}
            </div>
          ) : (
            matches.map(c => (
              <ExistingRow
                key={c.id}
                collection={c}
                selected={memory.memberships.includes(c.id)}
                onClick={() => onSaveExisting(c.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ icon, children }) {
  return (
    <div style={{
      marginTop: 18, marginBottom: 8,
      display: 'flex', alignItems: 'center', gap: 6,
      fontFamily: M.font, fontSize: 11, fontWeight: 600,
      letterSpacing: '0.06em', textTransform: 'uppercase', color: M.ink3,
    }}>{icon}{children}</div>
  );
}

function SuggestRow({ name, subtitle, cover, gradient, recommended, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: 12,
      padding: 10, marginBottom: 6,
      background: recommended ? M.accentSoft : M.surface,
      border: `1px solid ${recommended ? M.accent : M.border}`,
      borderRadius: 12, cursor: 'pointer', textAlign: 'left',
      transition: 'background 160ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0, position: 'relative',
        background: gradient, overflow: 'hidden',
      }}>
        {cover && (
          <img src={cover} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1 }}>{name}</div>
        <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{subtitle}</div>
      </div>
      <span style={{
        fontFamily: M.font, fontSize: 11, fontWeight: 600,
        color: recommended ? M.accentStrong : M.ink3,
        padding: '5px 10px', borderRadius: 6,
        background: recommended ? M.surface : 'transparent',
        border: recommended ? 'none' : `1px solid ${M.border}`,
      }}>
        {recommended ? 'Save' : '+ Save'}
      </span>
    </button>
  );
}

function CreateRow({ name, cover, gradient, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: 12,
      padding: 12, marginBottom: 6,
      background: M.accentSoft, border: `1px solid ${M.accent}`,
      borderRadius: 12, cursor: 'pointer', textAlign: 'left',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0, position: 'relative',
        background: gradient, overflow: 'hidden',
      }}>
        {cover && (
          <img src={cover} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }} />
        )}
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(139,90,60,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFF',
        }}><window.IconPlus size={18} /></div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1 }}>Create "{name}"</div>
        <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink2, marginTop: 2 }}>New collection · cover inherited from this memory</div>
      </div>
      <span style={{
        fontFamily: M.font, fontSize: 12, fontWeight: 600,
        color: M.accentStrong, background: M.surface,
        padding: '4px 8px', borderRadius: 6,
      }}>↵</span>
    </button>
  );
}

function ExistingRow({ collection, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 8px', borderRadius: 10,
      background: selected ? M.accentSoft : 'transparent',
      border: 0, cursor: 'pointer', textAlign: 'left',
      transition: 'background 160ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0, position: 'relative',
        background: collection.swatch, overflow: 'hidden',
      }}>
        {collection.cover && (
          <img src={collection.cover} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1 }}>{collection.name}</div>
        <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{collection.count} {collection.count === 1 ? 'memory' : 'memories'}</div>
      </div>
      <div style={{
        width: 22, height: 22, borderRadius: 6,
        border: selected ? 'none' : `2px solid ${M.borderStrong}`,
        background: selected ? M.accent : 'transparent',
        color: 'var(--ink-on-accent)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>{selected && <window.IconCheck size={13} />}</div>
    </button>
  );
}

Object.assign(window, {
  SystemActionChip, MembershipChip, Toast,
  CollectionPickerSheet,
});
