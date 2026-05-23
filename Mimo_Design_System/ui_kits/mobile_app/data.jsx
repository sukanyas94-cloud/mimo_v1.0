// data.jsx — Mock memories + collections for the Mimo click-thru.

const MEMORIES = [
  {
    id: 'm-kyoto-hotel',
    title: 'A weekend in Higashiyama, Kyoto',
    source: 'instagram.com',
    date: '14 Apr',
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
    thumbColor: 'linear-gradient(135deg,#C9D5B8,#7C9A6F)',
    systemUnderstanding: 'Travel reference',
    related: [{ id: 'm-kyoto-hotel', reason: 'Related because both reference Japan travel.' }],
  },
  {
    id: 'm-kaiseki',
    title: 'Kikunoi — Kyoto kaiseki, 3 stars',
    source: 'tabelog.com',
    date: '10 Apr',
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
    thumbColor: 'linear-gradient(160deg,#4F5A48 0%,#22281D 100%)',
    related: [],
  },
  {
    id: 'm-figma-typography',
    title: 'Type and hierarchy in Figma',
    source: 'figma.com',
    date: '28 Feb',
    thumbColor: 'linear-gradient(135deg,#E0D9F2,#9B8FC6)',
    systemUnderstanding: 'Reading list',
    related: [],
  },
  {
    id: 'm-tofu',
    title: 'Crispy gochujang tofu',
    source: 'nytimes.com',
    date: '20 Feb',
    thumbColor: 'linear-gradient(135deg,#F2D6B8,#C97F45)',
    humanContext: 'Try this weekend.',
    related: [],
  },
];

const COLLECTIONS = [
  { id: 'c-japan',   name: 'Japan trip',     count: 14, swatch: 'linear-gradient(135deg,#E6DCC8,#C7B595)' },
  { id: 'c-fitness', name: 'Fitness',        count: 8,  swatch: 'linear-gradient(135deg,#C9D5B8,#7C9A6F)' },
  { id: 'c-buy',     name: 'To buy',         count: 21, swatch: 'linear-gradient(135deg,#F2D6B8,#C97F45)' },
  { id: 'c-read',    name: 'To read',        count: 32, swatch: 'linear-gradient(135deg,#E0D9F2,#9B8FC6)' },
];

function findMemory(id) { return MEMORIES.find(m => m.id === id); }

Object.assign(window, { MEMORIES, COLLECTIONS, findMemory });
