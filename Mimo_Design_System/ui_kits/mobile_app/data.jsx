// data.jsx — Mock memories + collections for the Mimo click-thru.

const MEMORIES = [
  {
    id: 'm-kyoto-hotel',
    title: 'A weekend in Higashiyama, Kyoto',
    source: 'instagram.com',
    date: '14 Apr',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#E6DCC8 0%,#C7B595 100%)',
    humanContext: 'Rahul recommended this. Try during the Japan trip — quiet ryokans near Yasaka Shrine.',
    systemUnderstanding: 'Travel reference',
    sourceContext: 'Saved from a carousel by @kyotostays. Includes prices for shoulder season.',
    related: [
      { id: 'm-jr-pass', reason: 'Related because both reference Japan travel.' },
      { id: 'm-kaiseki', reason: 'Related because both were saved while planning the Kyoto trip.' },
    ],
  },
  {
    id: 'm-kettlebell',
    title: '10-minute kettlebell finisher',
    source: 'YouTube',
    date: '22 Mar',
    video: true,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(160deg,#3C4858 0%,#1A1F26 100%)',
    systemUnderstanding: 'Workout to try',
    sourceContext: '4:32 · Eric Leija',
    related: [{ id: 'm-mobility', reason: 'Related because both were saved during workout research.' }],
  },
  {
    id: 'm-aesop',
    title: 'Aesop Marrakech eau de toilette',
    source: 'aesop.com',
    date: '12 Jan',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#B5A88C,#7A6B4E)',
    humanContext: 'Birthday gift for Maya — wait until July.',
    systemUnderstanding: 'Future purchase',
    related: [],
  },
  {
    id: 'm-plaintext',
    title: 'Why I switched to plain text notes',
    source: 'jsomers.net',
    date: '02 Feb',
    fallback: true,
    systemUnderstanding: 'Reading list',
    sourceUnavailable: true,
    related: [],
  },
  {
    id: 'm-jr-pass',
    title: 'JR Pass for Kansai — 5-day flexi',
    source: 'japan-rail-pass.com',
    date: '11 Apr',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#C9D5B8,#7C9A6F)',
    systemUnderstanding: 'Travel reference',
    related: [{ id: 'm-kyoto-hotel', reason: 'Related because both reference Japan travel.' }],
  },
  {
    id: 'm-kaiseki',
    title: 'Kikunoi — Kyoto kaiseki, 3 stars',
    source: 'tabelog.com',
    date: '10 Apr',
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#D6C5A5,#8A6F3E)',
    humanContext: 'Book 2 months in advance.',
    related: [],
  },
  {
    id: 'm-mobility',
    title: 'Daily 8-minute mobility routine',
    source: 'YouTube',
    date: '14 Mar',
    video: true,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(160deg,#4F5A48 0%,#22281D 100%)',
    related: [],
  },
  {
    id: 'm-figma-typography',
    title: 'Type and hierarchy in Figma',
    source: 'figma.com',
    date: '28 Feb',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#E0D9F2,#9B8FC6)',
    systemUnderstanding: 'Reading list',
    related: [],
  },
  {
    id: 'm-tofu',
    title: 'Crispy gochujang tofu',
    source: 'nytimes.com',
    date: '20 Feb',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80&auto=format&fit=crop',
    thumbColor: 'linear-gradient(135deg,#F2D6B8,#C97F45)',
    humanContext: 'Try this weekend.',
    related: [],
  },
];

const COLLECTIONS = [
  { id: 'c-japan',   name: 'Japan trip',     count: 14, swatch: 'linear-gradient(135deg,#E6DCC8,#C7B595)', cover: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80&auto=format&fit=crop' },
  { id: 'c-fitness', name: 'Fitness',        count: 8,  swatch: 'linear-gradient(135deg,#C9D5B8,#7C9A6F)', cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80&auto=format&fit=crop' },
  { id: 'c-buy',     name: 'To buy',         count: 21, swatch: 'linear-gradient(135deg,#F2D6B8,#C97F45)', cover: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&q=80&auto=format&fit=crop' },
  { id: 'c-read',    name: 'To read',        count: 32, swatch: 'linear-gradient(135deg,#E0D9F2,#9B8FC6)', cover: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=80&auto=format&fit=crop' },
];

// Initial memberships — wired up after both arrays exist so we can reference both.
// memory.memberships is an array of collection ids.
MEMORIES.forEach(m => { m.memberships = m.memberships || []; });

// Seed a couple of memberships so the prototype isn't empty.
findMemoryInit('m-kyoto-hotel').memberships = ['c-japan'];
findMemoryInit('m-jr-pass').memberships = ['c-japan'];
findMemoryInit('m-kaiseki').memberships = ['c-japan'];
findMemoryInit('m-kettlebell').memberships = ['c-fitness'];
findMemoryInit('m-mobility').memberships = ['c-fitness'];
findMemoryInit('m-aesop').memberships = ['c-buy'];
findMemoryInit('m-figma-typography').memberships = ['c-read'];
findMemoryInit('m-plaintext').memberships = ['c-read'];

function findMemoryInit(id) { return MEMORIES.find(m => m.id === id); }
function findMemory(id) { return MEMORIES.find(m => m.id === id); }
function findCollection(id) { return COLLECTIONS.find(c => c.id === id); }

// Suggested collection names from a memory's system understanding label.
// Returns 3 ideas: recommended (specific), broader, tighter.
function suggestCollectionNames(memory) {
  const map = {
    'Travel reference': ['Japan trip', 'Travel', 'Kyoto weekend'],
    'Workout to try':   ['Fitness', 'Workouts', 'Strength sessions'],
    'Future purchase':  ['To buy', 'Gift ideas', 'Wishlist'],
    'Reading list':     ['To read', 'Reading list', 'Essays'],
  };
  return map[memory.systemUnderstanding] || ['Saved for later', 'To revisit', 'Worth keeping'];
}

// Create a new collection from a memory (cover inherited).
let _collectionCounter = 0;
function createCollection(name, sourceMemory) {
  const id = 'c-new-' + (++_collectionCounter);
  const collection = {
    id,
    name,
    count: 1,
    swatch: sourceMemory.thumbColor || 'linear-gradient(135deg,#B5A88C,#7A6B4E)',
    cover: sourceMemory.image || null,
    isNew: true,
  };
  COLLECTIONS.unshift(collection);
  return collection;
}

// Toggle a memory's membership in a collection. Returns new memberships array.
function toggleMembership(memory, collectionId) {
  const has = memory.memberships.includes(collectionId);
  if (has) {
    memory.memberships = memory.memberships.filter(x => x !== collectionId);
    const c = findCollection(collectionId);
    if (c) c.count = Math.max(0, c.count - 1);
  } else {
    memory.memberships = [...memory.memberships, collectionId];
    const c = findCollection(collectionId);
    if (c) c.count = c.count + 1;
  }
  return memory.memberships;
}

Object.assign(window, {
  MEMORIES, COLLECTIONS, findMemory, findCollection,
  suggestCollectionNames, createCollection, toggleMembership,
  getNativeApp, getRecipient,
});

// Infer the native app for a memory's source URL. Returns null if no
// matching native app is known (caller falls back to browser).
function getNativeApp(memory) {
  const src = (memory.source || '').toLowerCase();
  if (src.includes('instagram')) return { name: 'Instagram', color: '#E4405F' };
  if (src.includes('youtube'))   return { name: 'YouTube',   color: '#FF0000' };
  if (src.includes('tiktok'))    return { name: 'TikTok',    color: '#000000' };
  if (src.includes('pinterest')) return { name: 'Pinterest', color: '#BD081C' };
  if (src.includes('reddit'))    return { name: 'Reddit',    color: '#FF4500' };
  if (src.includes('whatsapp'))  return { name: 'WhatsApp',  color: '#25D366' };
  return null;
}

// Pull a recipient name out of human context — looks for the first
// proper-noun match against a small known set so "Send to Rahul" can
// surface in the smart launcher.
function getRecipient(memory) {
  const note = memory.humanContext || '';
  const names = ['Rahul', 'Maya', 'Alex', 'Priya', 'Sam', 'Mike'];
  for (const n of names) {
    if (new RegExp('\\b' + n + '\\b', 'i').test(note)) {
      return { name: n, app: 'WhatsApp' };
    }
  }
  return null;
}
