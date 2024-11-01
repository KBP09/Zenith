import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import ChartCard from './ChartCard';
import { COLORS } from '../../utils/dashboardUtils';

const MoodTracker = ({ moodData = [] }) => (
  <ChartCard title="Mood Tracker">
    <ResponsiveContainer width="100%" height={200}>
      {moodData && moodData.length > 0 ? (
        <LineChart data={moodData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3a5a" />
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#8884d8" />
          <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2}>
            {moodData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.mood - 1]} />
            ))}
          </Line>
        </LineChart>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">No mood data available</p>
        </div>
      )}
    </ResponsiveContainer>
  </ChartCard>
);

export default MoodTracker;