import React from 'react';
import { motion } from 'framer-motion';

const WeeklySummary = ({ data }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-xl font-semibold mb-4 text-gray-300'>Weekly Summary</h2>
    <div className='grid grid-cols-2 gap-4'>
      <div className='p-4 bg-white bg-opacity-5 rounded-lg'>
        <h3 className='text-sm text-gray-400'>Most Productive Day</h3>
        <p className='text-lg font-medium text-white'>Wednesday</p>
      </div>
      <div className='p-4 bg-white bg-opacity-5  rounded-lg'>
        <h3 className='text-sm text-gray-400'>Focus Time</h3>
        <p className='text-lg font-medium text-white'>32h 45m</p>
      </div>
      <div className='p-4 bg-white bg-opacity-5 rounded-lg'>
        <h3 className='text-sm text-gray-400'>Tasks Completed</h3>
        <p className='text-lg font-medium text-white'>24</p>
      </div>
      <div className='p-4 bg-white bg-opacity-5 rounded-lg'>
        <h3 className='text-sm text-gray-400'>Avg. Focus Score</h3>
        <p className='text-lg font-medium text-white'>8.5</p>
      </div>
    </div>
  </motion.div>
);

export default WeeklySummary;
