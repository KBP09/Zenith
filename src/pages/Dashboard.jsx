import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
} from 'recharts';

import { Sidebar, LoadingSpinner } from '../components/shared';
import {
  Header,
  MetricCard,
  ChartCard,
  TimeRangeSelector,
  TopApps,
  CalendarView,
  WeeklySummary,
  MoodTracker,
} from '../components/Dashboard';

import { COLORS, generateEvents, fakeData } from '../utils/dashboardUtils.js';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    ...fakeData,
    moodData: [],
    topApps: [],
  });
  const [events] = useState(generateEvents());

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const historicalData = fakeData.getHistoricalData(timeRange);
      setData((prevData) => ({
        ...prevData,
        focusScore: Math.floor(Math.random() * 20) + 80,
        productivityScore: Math.floor(Math.random() * 20) + 80,
        wellbeingScore: Math.floor(Math.random() * 20) + 70,
        contentConsumptionScore: Math.floor(Math.random() * 30) + 60,
        websiteUsage: fakeData.websiteUsage.map((site) => ({
          ...site,
          value: Math.floor(Math.random() * 10000) + 5000,
        })),
        moodData: historicalData,
        topApps: fakeData.topApps.map((app) => ({
          ...app,
          time: Math.floor(Math.random() * 5000) + 1000,
          change: Math.floor(Math.random() * 20) - 10,
        })),
      }));
      setIsLoading(false);
    }, 1000);
  }, [timeRange]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'Dashboard'} />

      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'>
        <Header name={data.name} avatar={data.avatar} streak={data.streak} />
        <TimeRangeSelector timeRange={timeRange} setTimeRange={setTimeRange} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <MetricCard
            title='Focus Score'
            value={data.focusScore}
            icon='🎯'
            color='text-blue-400'
            change={3}
          />
          <MetricCard
            title='Productivity'
            value={data.productivityScore}
            icon='📈'
            color='text-green-400'
            change={-2}
          />
          <MetricCard
            title='Wellbeing'
            value={data.wellbeingScore}
            icon='🌿'
            color='text-yellow-400'
            change={5}
          />
          <MetricCard
            title='Content Consumption'
            value={data.contentConsumptionScore}
            icon='📚'
            color='text-purple-400'
            change={-1}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <ChartCard title='Productivity Trend'>
            <ResponsiveContainer width='100%' height={200}>
              <AreaChart data={data.moodData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
                <XAxis dataKey='date' stroke='#8884d8' />
                <YAxis stroke='#8884d8' />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
                <Area
                  type='monotone'
                  dataKey='productivity'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.8}
                />
                <Area
                  type='monotone'
                  dataKey='focus'
                  stroke='#82ca9d'
                  fill='#82ca9d'
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Content Consumption'>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart data={fakeData.contentConsumption} layout='vertical'>
                <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
                <XAxis type='number' stroke='#8884d8' />
                <YAxis dataKey='category' type='category' stroke='#8884d8' />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
                <Bar dataKey='value'>
                  {fakeData.contentConsumption.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <ChartCard title='Wellbeing Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={data.wellbeingData}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#8884d8' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#8884d8' />
                <Radar
                  name='Wellbeing'
                  dataKey='A'
                  stroke='#FF9500'
                  fill='#FF9500'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Productivity Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={data.productivityData}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#82ca9d' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#82ca9d' />
                <Radar
                  name='Productivity'
                  dataKey='A'
                  stroke='#34C759'
                  fill='#34C759'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Creativity Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={fakeData.creativity}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#AF52DE' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#AF52DE' />
                <Radar
                  name='Creativity'
                  dataKey='A'
                  stroke='#AF52DE'
                  fill='#AF52DE'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <ChartCard title='Website Usage'>
            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={data.websiteUsage}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  outerRadius={80}
                  label
                >
                  {data.websiteUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
          <TopApps apps={data.topApps || []} timeRange={timeRange} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
          <MoodTracker moodData={data.moodData || []} />
          <WeeklySummary data={data} />
        </div>
        <CalendarView events={events} />
      </div>
    </div>
  );
};

export default Dashboard;
