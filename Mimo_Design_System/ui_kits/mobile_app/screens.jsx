// screens.jsx — Mimo screens (Home, Search, Memory Detail, Library, Collection Detail, Profile).
// Hierarchy on every screen follows: Recognition → Context → Understanding → Relationships → Actions.

const {
  M, Button, AppBar, IconButton, BottomNav, SearchField, Chip, FilterChip,
  MemoryCard, Thumb, HumanContextBlock, SystemContextBlock, RelatedCard,
  SectionHeader,
  SourceUnavailableBlock, MultiSelectBar,
  IconHome, IconLibrary, IconUser, IconSearch, IconLink, IconExternal,
  IconShare, IconBookmarkPlus, IconPencil, IconTrash, IconMore, IconBack,
  IconClose, IconFilter, IconGrid, IconList, IconCheck, IconQuote, IconSparkles,
  IconInbox, IconClock, IconBell, IconChevR, IconFolder, IconImage,
  IconSun, IconMoon, IconPlus, IconCircle, IconCircleCheck,
  MEMORIES, COLLECTIONS, findMemory,
} = window;

const SCREEN_PAD = 16;
const SECTION_GAP = 28;
const BOTTOM_SAFE = 24; // space above bottom nav

// ─── HOME ────────────────────────────────────────────────────────────────
function HomeScreen({ openMemory, openSearch, onSaveSheet, isEmpty }) {
  const recent = MEMORIES.slice(0, 3);
  const related = [MEMORIES[7], MEMORIES[8]];

  if (isEmpty) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar title="Mimo" trailing={<IconButton ariaLabel="Notifications"><IconBell size={22} /></IconButton>} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12, textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: M.accentSoft, color: M.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <IconInbox size={28} />
          </div>
          <h1 style={{ margin: 0, fontFamily: M.font, fontSize: 24, fontWeight: 600, color: M.ink1, lineHeight: 1.2, letterSpacing: '-0.01em', maxWidth: 280 }}>
            Start saving links to build your memory space.
          </h1>
          <p style={{ margin: 0, fontFamily: M.font, fontSize: 14, color: M.ink2, lineHeight: 1.5, maxWidth: 280 }}>
            Anything you save stays findable later — even when you can't remember the exact title.
          </p>
          <div style={{ marginTop: 16 }}>
            <Button variant="primary" icon={<IconLink size={16} />} onClick={onSaveSheet}>Save your first link</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AppBar title="Mimo" trailing={<IconButton ariaLabel="Notifications"><IconBell size={22} /></IconButton>} />
      <div style={{ flex: 1, overflow: 'auto', padding: `8px ${SCREEN_PAD}px ${BOTTOM_SAFE}px` }}>
        <div onClick={openSearch} style={{ marginBottom: SECTION_GAP, cursor: 'pointer' }}>
          <SearchField value="" placeholder="Search or paste a link" />
        </div>

        <div style={{ marginBottom: SECTION_GAP }}>
          <SectionHeader title="Recent activity" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {recent.map(m => <MemoryCard key={m.id} memory={m} variant="compact" onClick={() => openMemory(m.id)} />)}
          </div>
        </div>

        <div>
          <SectionHeader title="Related memories" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(m => (
              <RelatedCard
                key={m.id}
                memory={m}
                reason="Related because you've been planning the Kyoto trip this week."
                onClick={() => openMemory(m.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SEARCH ──────────────────────────────────────────────────────────────
function SearchScreen({ openMemory, onClose, onSaveSheet }) {
  const [q, setQ] = React.useState('');
  const isUrl = /^https?:\/\//i.test(q);
  const results = q.trim().length === 0 ? [] : MEMORIES.filter(m =>
    (m.title + ' ' + m.source + ' ' + (m.humanContext || '') + ' ' + (m.systemUnderstanding || ''))
      .toLowerCase().includes(q.toLowerCase()));

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: `12px ${SCREEN_PAD}px`, background: M.bg, borderBottom: `1px solid ${M.border}` }}>
        <SearchField
          value={q}
          onChange={setQ}
          autoFocus
          leadingClose
          onClose={onClose}
          onSubmit={(v) => { if (/^https?:\/\//i.test(v)) onSaveSheet(); }}
        />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: `12px ${SCREEN_PAD}px ${BOTTOM_SAFE}px` }}>
        {q.length === 0 && (
          <div style={{ paddingTop: 8 }}>
            <SectionHeader title="Try" />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['kyoto hotel', 'kettlebell', 'thing rahul shared', 'aesop'].map(s => (
                <FilterChip key={s} onClick={() => setQ(s)}>{s}</FilterChip>
              ))}
            </div>
          </div>
        )}

        {q.length > 0 && results.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {results.map(m => <MemoryCard key={m.id} memory={m} variant="compact" onClick={() => openMemory(m.id)} />)}
          </div>
        )}

        {q.length > 0 && results.length === 0 && !isUrl && (
          <div style={{ paddingTop: 8 }}>
            <h3 style={{ margin: '0 0 6px', fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1 }}>No exact matches.</h3>
            <p style={{ margin: '0 0 20px', fontFamily: M.font, fontSize: 14, color: M.ink2, lineHeight: 1.5 }}>
              Here's what might be related — or refine your search above.
            </p>
            <SectionHeader title="Recent activity" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {MEMORIES.slice(0, 3).map(m => <MemoryCard key={m.id} memory={m} variant="compact" onClick={() => openMemory(m.id)} />)}
            </div>
          </div>
        )}

        {isUrl && (
          <div style={{ paddingTop: 8 }}>
            <SystemContextBlock>
              Looks like a link. Tap <strong>Save link</strong> to add it as a memory.
            </SystemContextBlock>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MEMORY DETAIL ───────────────────────────────────────────────────────
function MemoryDetailScreen({ memoryId, openMemory, onBack, onEditContext }) {
  const memory = findMemory(memoryId) || MEMORIES[0];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AppBar
        title="Memory"
        leading={<IconButton ariaLabel="Back" onClick={onBack}><IconBack size={22} /></IconButton>}
        trailing={<IconButton ariaLabel="More"><IconMore size={22} /></IconButton>}
      />
      <div style={{ flex: 1, overflow: 'auto', padding: `0 0 ${BOTTOM_SAFE}px` }}>
        {/* Recognition */}
        <div style={{ padding: `0 ${SCREEN_PAD}px 16px` }}>
          <Thumb memory={memory} aspect="16/9" radius={14} />
          <h1 style={{ margin: '14px 0 6px', fontFamily: M.font, fontSize: 22, fontWeight: 600, color: M.ink1, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            {memory.title}
          </h1>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontFamily: M.font, fontSize: 13, color: M.ink3 }}>
            <span>{memory.source}</span>
            <span aria-hidden="true">·</span>
            <span>{memory.date}</span>
          </div>
        </div>

        {/* Context */}
        {(memory.humanContext || memory.sourceContext || memory.sourceUnavailable) && (
          <div style={{ padding: `0 ${SCREEN_PAD}px`, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {memory.sourceUnavailable && <SourceUnavailableBlock />}
            {memory.humanContext && <HumanContextBlock>{memory.humanContext}</HumanContextBlock>}
            {memory.sourceContext && (
              <div style={{ fontFamily: M.font, fontSize: 13, color: M.ink2, lineHeight: 1.5 }}>{memory.sourceContext}</div>
            )}
          </div>
        )}

        {/* Understanding */}
        {memory.systemUnderstanding && (
          <div style={{ padding: `16px ${SCREEN_PAD}px 0` }}>
            <SystemContextBlock>{memory.systemUnderstanding}. Mimo will resurface this when relevant.</SystemContextBlock>
          </div>
        )}

        {/* Relationships */}
        {memory.related && memory.related.length > 0 && (
          <div style={{ padding: `24px ${SCREEN_PAD}px 0` }}>
            <SectionHeader title="Related memories" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {memory.related.map(r => {
                const m = findMemory(r.id);
                if (!m) return null;
                return <RelatedCard key={r.id} memory={m} reason={r.reason} onClick={() => openMemory(r.id)} />;
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ padding: `28px ${SCREEN_PAD}px 0` }}>
          <Button variant="primary" icon={<IconExternal size={14} />} style={{ width: '100%' }} disabled={memory.sourceUnavailable}>
            {memory.sourceUnavailable ? 'Source unavailable' : 'Open original'}
          </Button>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 10 }}>
            <Button variant="secondary" icon={<IconShare size={14} />} size="md" style={{ width: '100%' }}>Share</Button>
            <Button variant="secondary" icon={<IconBookmarkPlus size={14} />} size="md" style={{ width: '100%' }}>Save</Button>
            <Button variant="secondary" icon={<IconPencil size={14} />} size="md" style={{ width: '100%' }} onClick={() => onEditContext && onEditContext(memory)}>Edit</Button>
          </div>
          <div style={{ marginTop: 16 }}>
            <Button variant="danger" icon={<IconTrash size={14} />}>Delete memory</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── LIBRARY ─────────────────────────────────────────────────────────────
function LibraryScreen({ openMemory, openCollection, onMultiSelectCreate }) {
  const [filter, setFilter] = React.useState('All');
  const [view, setView] = React.useState('grid');
  const [multi, setMulti] = React.useState(false);
  const [picked, setPicked] = React.useState({});
  const filters = ['All', 'Articles', 'Videos', 'Products', 'Places'];

  const toggle = (id) => setPicked(p => ({ ...p, [id]: !p[id] }));
  const pickedCount = Object.values(picked).filter(Boolean).length;
  const startMulti = () => { setMulti(true); setPicked({}); };
  const cancelMulti = () => { setMulti(false); setPicked({}); };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      <AppBar
        title={multi ? `${pickedCount} selected` : 'Library'}
        leading={multi
          ? <IconButton ariaLabel="Cancel selection" onClick={cancelMulti}><IconClose size={20} /></IconButton>
          : undefined}
        trailing={
          multi
            ? null
            : <IconButton ariaLabel="Select" onClick={startMulti}><IconCheck size={20} /></IconButton>
        }
      />
      <div style={{ flex: 1, overflow: 'auto', padding: `8px 0 ${multi ? 80 : BOTTOM_SAFE}px` }}>
        {!multi && (
          <div style={{ display: 'flex', gap: 8, padding: `4px ${SCREEN_PAD}px 12px`, overflowX: 'auto', scrollbarWidth: 'none' }}>
            <IconButton ariaLabel="Filter"><IconFilter size={18} /></IconButton>
            {filters.map(f => <FilterChip key={f} active={f === filter} onClick={() => setFilter(f)}>{f}</FilterChip>)}
            <IconButton ariaLabel={view === 'grid' ? 'List view' : 'Grid view'} onClick={() => setView(v => v === 'grid' ? 'list' : 'grid')} style={{ marginLeft: 'auto' }}>
              {view === 'grid' ? <IconList size={18} /> : <IconGrid size={18} />}
            </IconButton>
          </div>
        )}

        <div style={{ padding: `0 ${SCREEN_PAD}px` }}>
          {view === 'grid' || multi ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {MEMORIES.map(m => (
                <LibraryGridCell
                  key={m.id}
                  memory={m}
                  multi={multi}
                  selected={!!picked[m.id]}
                  onClick={() => multi ? toggle(m.id) : openMemory(m.id)}
                />
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {MEMORIES.map(m => <MemoryCard key={m.id} memory={m} variant="compact" onClick={() => openMemory(m.id)} />)}
            </div>
          )}
        </div>

        {!multi && (
          <div style={{ padding: `${SECTION_GAP}px ${SCREEN_PAD}px 0` }}>
            <SectionHeader title="Collections" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {COLLECTIONS.map(c => (
                <button key={c.id} onClick={() => openCollection(c.id)} style={{
                  display: 'flex', flexDirection: 'column', gap: 10,
                  padding: 12, background: M.surface,
                  border: `1px solid ${M.border}`, borderRadius: 12, boxShadow: M.elev1,
                  textAlign: 'left', cursor: 'pointer',
                }}>
                  <div style={{ aspectRatio: '4/3', borderRadius: 8, background: c.swatch }} />
                  <div>
                    <div style={{ fontFamily: M.font, fontSize: 14, fontWeight: 600, color: M.ink1 }}>{c.name}</div>
                    <div style={{ fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 2 }}>{c.count} memories</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {multi && (
        <MultiSelectBar
          count={pickedCount}
          onCancel={cancelMulti}
          onDelete={() => { setPicked({}); setMulti(false); }}
          onCreateCollection={() => { onMultiSelectCreate && onMultiSelectCreate(pickedCount); cancelMulti(); }}
        />
      )}
    </div>
  );
}

function LibraryGridCell({ memory, onClick, multi, selected }) {
  return (
    <article onClick={onClick} style={{
      background: M.surface, border: `1px solid ${selected ? M.accent : M.border}`,
      borderRadius: 12, boxShadow: M.elev1, overflow: 'hidden', cursor: 'pointer',
      position: 'relative',
      transition: 'border-color 120ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      <Thumb memory={memory} aspect="4/3" radius={0} />
      {multi && (
        <div style={{
          position: 'absolute', top: 8, right: 8,
          width: 26, height: 26, borderRadius: 999,
          background: selected ? M.accent : 'rgba(255,255,255,0.85)',
          color: selected ? 'var(--ink-on-accent)' : M.ink3,
          border: selected ? 'none' : `1px solid ${M.borderStrong}`,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)',
        }}>
          {selected ? <IconCheck size={14} /> : null}
        </div>
      )}
      <div style={{ padding: 10 }}>
        <h3 style={{
          margin: 0, fontFamily: M.font, fontSize: 13, fontWeight: 600, color: M.ink1,
          lineHeight: 1.3,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{memory.title}</h3>
        <div style={{ fontFamily: M.font, fontSize: 11, color: M.ink3, marginTop: 4 }}>{memory.source}</div>
      </div>
    </article>
  );
}

// ─── COLLECTION DETAIL ──────────────────────────────────────────────────
function CollectionDetailScreen({ collectionId, openMemory, onBack }) {
  const c = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];
  const items = c.id === 'c-japan'
    ? MEMORIES.filter(m => ['m-kyoto-hotel','m-jr-pass','m-kaiseki'].includes(m.id))
    : MEMORIES.slice(0, 4);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AppBar
        title="Collection"
        leading={<IconButton ariaLabel="Back" onClick={onBack}><IconBack size={22} /></IconButton>}
        trailing={<IconButton ariaLabel="More"><IconMore size={22} /></IconButton>}
      />
      <div style={{ flex: 1, overflow: 'auto', padding: `0 ${SCREEN_PAD}px ${BOTTOM_SAFE}px` }}>
        <h1 style={{ margin: '8px 0 4px', fontFamily: M.font, fontSize: 24, fontWeight: 600, color: M.ink1, letterSpacing: '-0.01em' }}>{c.name}</h1>
        <div style={{ fontFamily: M.font, fontSize: 13, color: M.ink3, marginBottom: 18 }}>{c.count} memories</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {items.map(m => <LibraryGridCell key={m.id} memory={m} onClick={() => openMemory(m.id)} />)}
        </div>
      </div>
    </div>
  );
}

// ─── PROFILE ────────────────────────────────────────────────────────────
function ProfileScreen({ theme, onToggleTheme }) {
  const Row = ({ label, value, last, onClick, trailing }) => (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: last ? 'none' : `1px solid ${M.divider}`, cursor: onClick ? 'pointer' : 'default' }}>
      <div style={{ fontFamily: M.font, fontSize: 15, color: M.ink1 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: M.font, fontSize: 13, color: M.ink3 }}>
        {value}
        {trailing !== undefined ? trailing : <IconChevR size={14} />}
      </div>
    </div>
  );
  const Group = ({ title, children }) => (
    <div style={{ marginBottom: SECTION_GAP }}>
      <div style={{ fontFamily: M.font, fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: M.ink3, marginBottom: 8, padding: `0 ${SCREEN_PAD}px` }}>{title}</div>
      <div style={{ background: M.surface, border: `1px solid ${M.border}`, borderRadius: 12 }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <AppBar title="Profile" />
      <div style={{ flex: 1, overflow: 'auto', padding: `8px ${SCREEN_PAD}px ${BOTTOM_SAFE}px` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 4px 22px' }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: M.accentSoft, color: M.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: M.font, fontSize: 22, fontWeight: 600 }}>S</div>
          <div>
            <div style={{ fontFamily: M.font, fontSize: 17, fontWeight: 600, color: M.ink1 }}>Sukanya</div>
            <div style={{ fontFamily: M.font, fontSize: 13, color: M.ink3 }}>sukanya@example.com</div>
          </div>
        </div>

        <div style={{ marginLeft: -SCREEN_PAD, marginRight: -SCREEN_PAD }}>
          <Group title="Preferences">
            <Row
              label="Appearance"
              onClick={onToggleTheme}
              value={theme === 'dark' ? 'Dark' : 'Light'}
              trailing={
                <button onClick={(e) => { e.stopPropagation(); onToggleTheme(); }} aria-label="Toggle theme" style={{
                  border: `1px solid ${M.borderStrong}`, background: M.quiet,
                  borderRadius: 999, padding: 4, display: 'inline-flex', gap: 2, cursor: 'pointer',
                }}>
                  <span style={{ width: 26, height: 22, borderRadius: 999, background: theme === 'light' ? M.surface : 'transparent', boxShadow: theme === 'light' ? M.elev1 : 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: theme === 'light' ? M.ink1 : M.ink3 }}>
                    <IconSun size={12} />
                  </span>
                  <span style={{ width: 26, height: 22, borderRadius: 999, background: theme === 'dark' ? M.surface : 'transparent', boxShadow: theme === 'dark' ? M.elev1 : 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: theme === 'dark' ? M.ink1 : M.ink3 }}>
                    <IconMoon size={12} />
                  </span>
                </button>
              }
            />
            <Row label="Rediscovery" value="Weekly" />
            <Row label="Save shortcut" value="Share sheet" last />
          </Group>
          <Group title="Permissions">
            <Row label="Notifications" value="Off" />
            <Row label="Share extension" value="On" last />
          </Group>
          <Group title="Integrations">
            <Row label="Connected apps" value="2" last />
          </Group>
          <Group title="Account">
            <Row label="Sign out" />
            <Row label="Delete account" last />
          </Group>
        </div>

        <div style={{ textAlign: 'center', fontFamily: M.font, fontSize: 12, color: M.ink3, marginTop: 12 }}>Mimo · v1.0</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen, SearchScreen, MemoryDetailScreen, LibraryScreen, CollectionDetailScreen, ProfileScreen,
});
