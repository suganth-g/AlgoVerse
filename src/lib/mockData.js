export const CURRENT_USER = {
  id: 'user_1',
  name: 'Alex Chen',
  email: 'alex.chen@example.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  level: 12,
  xp: 4500,
  nextLevelXp: 5000,
  streak: 15,
  joinedAt: '2023-01-15T00:00:00Z',
  rank: 'Gold',
  solved: {
    easy: 120,
    medium: 85,
    hard: 30,
    total: 235
  },
  accuracy: 82.5,
  badges: [
    { id: 'b1', name: '7-Day Streak', icon: 'zap', date: '2023-02-10' },
    { id: 'b2', name: 'Array Master', icon: 'award', date: '2023-03-22' },
    { id: 'b3', name: 'Graph Explorer', icon: 'compass', date: '2023-05-15' },
  ]
};

export const MOCK_PROBLEMS = [
  {
    id: 'p1',
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: '51.2%',
    tags: ['Array', 'Hash Table'],
    status: 'Solved',
    companies: ['Amazon', 'Google', 'Apple']
  },
  {
    id: 'p2',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptance: '40.5%',
    tags: ['Linked List', 'Math'],
    status: 'Attempted',
    companies: ['Microsoft', 'Bloomberg']
  },
  {
    id: 'p3',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    acceptance: '34.0%',
    tags: ['Hash Table', 'String', 'Sliding Window'],
    status: 'Todo',
    companies: ['Amazon', 'Meta', 'Netflix']
  },
  {
    id: 'p4',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: '36.8%',
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    status: 'Todo',
    companies: ['Google', 'Apple', 'Goldman Sachs']
  },
  {
    id: 'p5',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    acceptance: '33.1%',
    tags: ['String', 'Dynamic Programming'],
    status: 'Todo',
    companies: ['Amazon', 'Microsoft']
  },
  {
    id: 'p6',
    title: 'Zigzag Conversion',
    difficulty: 'Medium',
    acceptance: '45.8%',
    tags: ['String'],
    status: 'Todo',
    companies: ['Uber', 'Apple']
  }
];

export const MOCK_ACTIVITIES = [
  { id: 'a1', type: 'solve', problem: 'Two Sum', difficulty: 'Easy', date: '2026-07-03T10:00:00Z', xp: 10 },
  { id: 'a2', type: 'solve', problem: 'Valid Parentheses', difficulty: 'Easy', date: '2026-07-02T14:30:00Z', xp: 10 },
  { id: 'a3', type: 'contest', name: 'Weekly Contest 350', rank: 450, date: '2026-06-28T08:00:00Z', xp: 150 },
  { id: 'a4', type: 'solve', problem: 'Merge K Sorted Lists', difficulty: 'Hard', date: '2026-06-27T18:45:00Z', xp: 40 },
];

export const HEATMAP_DATA = Array.from({ length: 365 }).map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (365 - i));
  // Random activity level 0-4
  const count = Math.random() > 0.6 ? Math.floor(Math.random() * 5) : 0;
  return { date: date.toISOString().split('T')[0], count };
});
