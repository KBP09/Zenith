import { format, subDays, startOfWeek, addDays } from 'date-fns';

export const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF2D55', '#AF52DE', '#5856D6'];

export const generateFakeData = (days) => {
  return Array.from({ length: days }, (_, index) => ({
    date: format(subDays(new Date(), days - 1 - index), 'MMM dd'),
    productivity: Math.floor(Math.random() * 100),
    focus: Math.floor(Math.random() * 100) + 20,
    contentConsumption: Math.floor(Math.random() * 150),
    mood: Math.floor(Math.random() * 5) + 1,
  }));
};

export const generateEvents = () => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  return [
    { 
      date: format(addDays(startOfCurrentWeek, 1), 'MMM dd'),
      title: 'Project Review',
      type: 'meeting'
    },
    {
      date: format(addDays(startOfCurrentWeek, 2), 'MMM dd'),
      title: 'Design Sprint',
      type: 'workshop'
    },
    {
      date: format(addDays(startOfCurrentWeek, 4), 'MMM dd'),
      title: 'Team Sync',
      type: 'meeting'
    },
  ];
};

export const totalTimeofApps = (apps = []) => {
  return apps.reduce((total, app) => total + app.time, 0);
};

export const fakeData = {
  name: "John Doe",
  streak: 7,
  totalTime: 36000,
  focusScore: 85,
  productivityScore: 92,
  wellbeingScore: 78,
  contentConsumptionScore: 65,
  COLORS: COLORS,
  websiteUsage: [
    { name: "Work", value: 14400 },
    { name: "Learning", value: 7200 },
    { name: "Social", value: 5400 },
    { name: "Entertainment", value: 3600 },
  ],
  wellbeingData: [
    { subject: 'Sleep', A: 8 },
    { subject: 'Exercise', A: 7 },
    { subject: 'Nutrition', A: 6 },
    { subject: 'Mindfulness', A: 8 },
    { subject: 'Social', A: 9 },
  ],
  productivityData: [
    { subject: 'Focus', A: 9 },
    { subject: 'Efficiency', A: 8 },
    { subject: 'Task Completion', A: 8.5 },
    { subject: 'Time Management', A: 7 },
    { subject: 'Goal Achievement', A: 9 },
  ],
  creativity: [
    { subject: 'Ideation', A: 8 },
    { subject: 'Innovation', A: 7 },
    { subject: 'Problem Solving', A: 9 },
    { subject: 'Design Thinking', A: 6 },
    { subject: 'Experimentation', A: 8 },
  ],
  topApps: [
    { name: "VS Code", time: 7200, icon: "🖥️", category: "Work", change: 5 },
    { name: "Slack", time: 3600, icon: "💬", category: "Communication", change: -2 },
    { name: "Chrome", time: 2700, icon: "🌐", category: "Browsing", change: 10 },
    { name: "Notion", time: 1800, icon: "📝", category: "Productivity", change: 0 },
  ],
  getHistoricalData: (range) => {
    switch (range) {
      case 'day':
        return generateFakeData(24);
      case 'week':
        return generateFakeData(7);
      case 'month':
        return generateFakeData(30);
    }
  },
  contentConsumption: [
    { category: 'Work', value: 2.4 },
    { category: 'Entertainment', value: 1.8 },
    { category: 'Education', value: 1.2 },
    { category: 'Social Media', value: 0.9 },
    { category: 'News', value: 0.6 },
    { category: 'Health & Fitness', value: 0.4 },
    { category: 'Personal Development', value: 1.3 },
  ],
};