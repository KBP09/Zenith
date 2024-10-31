import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon } from 'lucide-react';
import Sidebar from '../components/shared/sidebar';
import { motion } from 'framer-motion'; // Import Framer Motion
import ActivityDashboard from '../components/ActivityDashBoard';

const data = [
  { name: 'Monday', value1: 1000, value2: 1200 },
  { name: 'Tuesday', value1: 2000, value2: 1800 },
  { name: 'Wednesday', value1: 1500, value2: 2200 },
  { name: 'Thursday', value1: 2500, value2: 2000 },
  { name: 'Friday', value1: 2000, value2: 2400 },
  { name: 'Saturday', value1: 3000, value2: 2800 },
  { name: 'Sunday', value1: 2500, value2: 3200 },
];

const users = [
  { name: 'Shazdan', score: 2220, avatar: 'data:image/png;base64,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' },
  { name: 'Hamrissing', score: 119, avatar: 'data:image/png;base64,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', trend: 'up' },
  { name: 'Tipes', score: 3217, avatar: 'data:image/png;base64,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' },
  { name: 'Hamrdering', score: 140, avatar: 'data:image/png;base64,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', trend: 'up' },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const VisitedWebsite = () => {
  return (
    <div className="flex h-screen  bg-[#0A0C18] text-white">
      <Sidebar selectedNav={"Visited Websites"} />
      <div className="flex-1 p-8 overflow-scroll">
        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stat Cards */}
          <motion.div className="grid grid-cols-3 gap-4" variants={containerVariants}>
            {[  
              { title: 'Visited', value: '76', subvalue: 'Websites' },
              { title: 'Hours', value: '19h 18min', subvalue: 'in 7 days' },
              { title: 'Most Productive Day', value: 'Monday' },
            ].map((item, index) => (
              <motion.div key={index} className="bg-gradient-to-r from-blue-900 to-blue-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow" variants={itemVariants}>
                <div className="text-sm text-blue-200">{item.title}</div>
                <div className="text-2xl font-bold mt-2">{item.value}</div>
                <div className="text-xs text-blue-300">{item.subvalue}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Line Chart */}
          <motion.div className="bg-gradient-to-r from-blue-900 to-blue-900 p-4 rounded-lg shadow-lg" variants={itemVariants}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Time Distribution</h2>
              <div className="flex space-x-2">
                <span className="bg-blue-700 text-xs px-2 py-1 rounded">9.2%</span>
                <span className="bg-blue-700 text-xs px-2 py-1 rounded">2.90%</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Line
                  type="monotone"
                  dataKey="value1"
                  stroke="#FBBF24"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#38B2AC"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* User List */}
          <motion.div className="bg-gradient-to-r from-blue-900 to-blue-900 p-4 rounded-lg shadow-lg" variants={itemVariants}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Visited Websites</h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-200">Time</span>
                <span className="bg-blue-700 text-xs px-2 py-1 rounded">8565</span>
              </div>
            </div>
            <div className="space-y-4">
              {users.map((user, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between hover:bg-blue-700 transition-colors p-2 rounded"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{user.score}</span>
                    {user.trend === 'up' && (
                      <ArrowUpIcon className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <ActivityDashboard/>
      </div>
    </div>
  );
};

export default VisitedWebsite;
