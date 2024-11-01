import React from 'react';
import { motion } from 'framer-motion';

const TimeRangeSelector = ({ timeRange, setTimeRange }) => (
  <div className='flex justify-center space-x-2 mb-6'>
    {['day', 'week', 'month'].map((range) => (
      <motion.button
        key={range}
        onClick={() => setTimeRange(range)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          timeRange === range
            ? 'bg-blue-500 text-white'
            : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {range.charAt(0).toUpperCase() + range.slice(1)}
      </motion.button>
    ))}
  </div>
);

export default TimeRangeSelector;
