// app.jsx — Stitches Mimo screens into a click-thru on an Android frame.

const {
  AndroidDevice, BottomNav, SaveSheet, AddContextSheet, CollectionPickerSheet, Toast,
  MEMORIES, COLLECTIONS, findMemory, findCollection,
  suggestCollectionNames, createCollection, toggleMembership,
  HomeScreen, SearchScreen, MemoryDetailScreen, LibraryScreen, CollectionDetailScreen, ProfileScreen,
  IconSun, IconMoon,
} = window;

const MIMO_M = window.M;

function App() {
  const [tab, setTab] = React.useState('home');
  const [stack, setStack] = React.useState([]);
  const [sheet, setSheet] = React.useState(null);       // 'save' | 'context' | 'collection-picker' | null
  const [sheetData, setSheetData] = React.useState(null);
  const [emptyHome, setEmptyHome] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [toast, setToast] = React.useState(null);
  // Re-render trigger when we mutate memory/collection data directly (mirrors AddContextSheet pattern).
  const [, bumpVersion] = React.useReducer(x => x + 1, 0);

  const push = (entry) => setStack(s => [...s, entry]);
  const pop  = () => setStack(s => s.slice(0, -1));
  const goTab = (id) => { setStack([]); setTab(id); };

  const openMemory     = (id) => push({ type: 'memory', id });
  const openSearch     = ()   => push({ type: 'search' });
  const openCollection = (id) => push({ type: 'collection', id });
  const openSaveSheet  = ()   => { setSheet('save'); setSheetData({ memoryId: 'm-aesop' }); };
  const openEditContext = (memory) => { setSheet('context'); setSheetData({ memory }); };

  // Commit the just-shared/pasted link. For the prototype the memory record
  // already exists (m-aesop); a real implementation would create it now.
  const commitSave = (memoryId, note) => {
    const memory = findMemory(memoryId);
    if (note && note.length > 0) memory.humanContext = note;
    setSheet(null);
    setEmptyHome(false);
    bumpVersion();
    setToast({
      message: <>Saved to Mimo.</>,
      sub: note ? 'Your note was attached.' : null,
      action: 'view',
      memoryId,
    });
  };

  const commitSaveToCollection = (memoryId, collectionName, note) => {
    const memory = findMemory(memoryId);
    if (note && note.length > 0) memory.humanContext = note;
    let collection = COLLECTIONS.find(c => c.name.toLowerCase() === collectionName.toLowerCase());
    let createdNew = false;
    if (!collection) {
      collection = createCollection(collectionName, memory);
      createdNew = true;
    }
    if (!memory.memberships.includes(collection.id)) toggleMembership(memory, collection.id);
    setSheet(null);
    setEmptyHome(false);
    bumpVersion();
    setToast({
      message: <>Saved to <strong style={{ fontWeight: 600 }}>{collection.name}</strong>.</>,
      sub: createdNew ? 'Collection created from this memory.' : 'Added to existing collection.',
      action: 'view',
      memoryId,
      collectionId: collection.id,
    });
  };

  const openCollectionPicker = (memory) => {
    setSheet('collection-picker');
    setSheetData({ memory });
  };

  // One-tap save: tap the system-understanding chip → save into a same-named
  // collection (creating it if needed) and confirm via toast.
  const quickSaveToSystemCategory = (memory) => {
    const name = memory.systemUnderstanding;
    if (!name) return;
    let collection = COLLECTIONS.find(c => c.name.toLowerCase() === name.toLowerCase());
    let createdNew = false;
    if (!collection) {
      collection = createCollection(name, memory);
      createdNew = true;
    }
    if (!memory.memberships.includes(collection.id)) {
      toggleMembership(memory, collection.id);
    }
    bumpVersion();
    setToast({
      message: <>Saved to <strong style={{ fontWeight: 600 }}>{collection.name}</strong>.</>,
      sub: createdNew ? 'Collection created from this memory.' : null,
      collectionId: collection.id,
    });
  };

  // From picker — save into an existing collection.
  const saveToExisting = (memory, collectionId) => {
    const collection = findCollection(collectionId);
    if (!collection) return;
    const wasMember = memory.memberships.includes(collectionId);
    toggleMembership(memory, collectionId);
    bumpVersion();
    setSheet(null);
    setToast({
      message: wasMember
        ? <>Removed from <strong style={{ fontWeight: 600 }}>{collection.name}</strong>.</>
        : <>Added to <strong style={{ fontWeight: 600 }}>{collection.name}</strong>.</>,
      collectionId,
    });
  };

  // From picker — create a new collection with this memory.
  const createAndSave = (memory, name) => {
    const collection = createCollection(name, memory);
    toggleMembership(memory, collection.id);
    bumpVersion();
    setSheet(null);
    setToast({
      message: <>Created <strong style={{ fontWeight: 600 }}>{collection.name}</strong>.</>,
      sub: 'Cover inherited from this memory.',
      collectionId: collection.id,
    });
  };

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const top = stack[stack.length - 1];

  let screen;
  if (top?.type === 'memory') {
    screen = (
      <MemoryDetailScreen
        memoryId={top.id}
        openMemory={openMemory}
        onBack={pop}
        onEditContext={openEditContext}
        onOpenCollectionPicker={openCollectionPicker}
        onQuickSaveToSystemCategory={quickSaveToSystemCategory}
        openCollection={openCollection}
      />
    );
  } else if (top?.type === 'search') {
    screen = <SearchScreen openMemory={openMemory} onClose={pop} onSaveSheet={() => { openSaveSheet(); pop(); }} />;
  } else if (top?.type === 'collection') {
    screen = <CollectionDetailScreen collectionId={top.id} openMemory={openMemory} onBack={pop} />;
  } else if (tab === 'home') {
    screen = <HomeScreen openMemory={openMemory} openSearch={openSearch} onSaveSheet={openSaveSheet} isEmpty={emptyHome} />;
  } else if (tab === 'library') {
    screen = <LibraryScreen openMemory={openMemory} openCollection={openCollection} />;
  } else {
    screen = <ProfileScreen theme={theme} onToggleTheme={toggleTheme} />;
  }

  const showBottomNav = top?.type !== 'search';

  // Outer page background switches too so the area around the device frame
  // matches the chosen theme.
  const pageBg = theme === 'dark' ? '#0A0A09' : '#EFEDE6';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', padding: 24, background: pageBg,
      transition: 'background 220ms cubic-bezier(0.2,0,0.2,1)',
    }}>
      {/* Theme switcher floating control for quick demo access */}
      <button onClick={toggleTheme} aria-label="Toggle theme" style={{
        position: 'fixed', top: 16, right: 16, zIndex: 100,
        width: 40, height: 40, borderRadius: 999, border: 'none',
        background: theme === 'dark' ? '#1B1B19' : '#FFFFFF',
        color: theme === 'dark' ? '#F2F0E9' : '#1A1A18',
        boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        {theme === 'dark' ? <IconSun size={16} /> : <IconMoon size={16} />}
      </button>

      <AndroidDevice width={412} height={892} dark={theme === 'dark'}>
        <div data-theme={theme} style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: MIMO_M.bg, color: MIMO_M.ink1 }}>
          {screen}
          {showBottomNav && <BottomNav active={tab} onChange={goTab} />}

          {sheet === 'save' && (
            <SaveSheet
              memory={findMemory(sheetData.memoryId)}
              onSave={(note) => commitSave(sheetData.memoryId, note)}
              onSaveToCollection={(name, note) => commitSaveToCollection(sheetData.memoryId, name, note)}
              onDismiss={() => setSheet(null)}
            />
          )}
          {sheet === 'context' && (
            <AddContextSheet
              memory={sheetData.memory}
              initialValue={sheetData.memory.humanContext || ''}
              onSave={(v) => { sheetData.memory.humanContext = v; setSheet(null); bumpVersion(); }}
              onDismiss={() => setSheet(null)}
            />
          )}
          {sheet === 'collection-picker' && (
            <CollectionPickerSheet
              memory={sheetData.memory}
              collections={COLLECTIONS}
              onSaveExisting={(cid) => saveToExisting(sheetData.memory, cid)}
              onCreate={(name) => createAndSave(sheetData.memory, name)}
              onDismiss={() => setSheet(null)}
            />
          )}

          {toast && (
            <Toast
              actionLabel="View"
              onAction={() => {
                const { memoryId, collectionId, action } = toast;
                setToast(null);
                if (action === 'view' && memoryId) openMemory(memoryId);
                else if (collectionId) openCollection(collectionId);
              }}
              onDismiss={() => setToast(null)}
            >
              <div>{toast.message}</div>
              {toast.sub && <div style={{ fontSize: 11, opacity: 0.7, marginTop: 1 }}>{toast.sub}</div>}
            </Toast>
          )}
        </div>
      </AndroidDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
