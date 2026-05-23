// app.jsx — Stitches Mimo screens into a click-thru on an Android frame.

const {
  AndroidDevice, BottomNav, SaveSheet, AddContextSheet, MEMORIES, findMemory,
  HomeScreen, SearchScreen, MemoryDetailScreen, LibraryScreen, CollectionDetailScreen, ProfileScreen,
  IconSun, IconMoon,
} = window;

const MIMO_M = window.M;

function App() {
  const [tab, setTab] = React.useState('home');
  const [stack, setStack] = React.useState([]);
  const [sheet, setSheet] = React.useState(null);       // 'save' | 'context' | null
  const [sheetData, setSheetData] = React.useState(null);
  const [emptyHome, setEmptyHome] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  const push = (entry) => setStack(s => [...s, entry]);
  const pop  = () => setStack(s => s.slice(0, -1));
  const goTab = (id) => { setStack([]); setTab(id); };

  const openMemory     = (id) => push({ type: 'memory', id });
  const openSearch     = ()   => push({ type: 'search' });
  const openCollection = (id) => push({ type: 'collection', id });
  const openSaveSheet  = ()   => { setSheet('save'); setSheetData({ memoryId: 'm-aesop' }); };
  const openEditContext = (memory) => { setSheet('context'); setSheetData({ memory }); };

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const top = stack[stack.length - 1];

  let screen;
  if (top?.type === 'memory') {
    screen = <MemoryDetailScreen memoryId={top.id} openMemory={openMemory} onBack={pop} onEditContext={openEditContext} />;
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
        <div data-theme={theme} style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: MIMO_M.bg, color: MIMO_M.ink1 }}>
          {screen}
          {showBottomNav && <BottomNav active={tab} onChange={goTab} />}

          {sheet === 'save' && (
            <SaveSheet
              memory={findMemory(sheetData.memoryId)}
              onView={() => { setSheet(null); setEmptyHome(false); openMemory(sheetData.memoryId); }}
              onUndo={() => setSheet(null)}
              onDismiss={() => setSheet(null)}
            />
          )}
          {sheet === 'context' && (
            <AddContextSheet
              memory={sheetData.memory}
              initialValue={sheetData.memory.humanContext || ''}
              onSave={(v) => { sheetData.memory.humanContext = v; setSheet(null); }}
              onDismiss={() => setSheet(null)}
            />
          )}
        </div>
      </AndroidDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
