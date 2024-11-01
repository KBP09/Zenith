import React from 'react';
import { motion } from 'framer-motion';
import { totalTimeofApps } from '../../utils/dashboardUtils';
const formatTimeinHrsMin= (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
const TopApps = ({ apps = [], timeRange }) => (
  <motion.div 
    className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-xl font-semibold mb-4 text-gray-300">Top Apps</h2>
    <div className="space-y-4">
      {apps && apps.length > 0 ? apps.map((app) => (
        <motion.div key={app.name} className="flex items-center" whileHover={{ x: 5 }}>
          <span className="text-2xl mr-3">{app.icon}</span>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-300">{app.name}</span>
              <span className="text-sm text-gray-400">
                {formatTimeinHrsMin(app.time)} ({app.category})
                <span className={app.change >= 0 ? 'text-green-400 ml-2' : 'text-red-400 ml-2'}>
                  {app.change >= 0 ? '↑' : '↓'} {Math.abs(app.change)}%
                </span>
              </span>
            </div>
            <div className="bg-gray-700 h-2 rounded-full">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(app.time / totalTimeofApps(apps)) * 100}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      )) : (
        <p className="text-gray-400">No app data available</p>
      )}
    </div>
  </motion.div>
);

export default TopApps;