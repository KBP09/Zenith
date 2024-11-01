import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, icon, color, change }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl cursor-pointer`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`backface-hidden ${isFlipped ? 'hidden' : ''}`}>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-lg font-semibold text-gray-300'>{title}</h3>
            <span className='text-2xl'>{icon}</span>
          </div>
          <div className={`text-4xl font-bold ${color}`}>{value}</div>
          {change !== undefined && (
            <div className={`mt-2 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
            </div>
          )}
        </div>
        <div
          className={`backface-hidden ${isFlipped ? '' : 'hidden'}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className='text-lg font-semibold text-gray-300 mb-2'>Insights</h3>
          <p className='text-sm text-gray-400'>
            Your {title.toLowerCase()} has {change >= 0 ? 'improved' : 'decreased'} by{' '}
            {Math.abs(change)}% compared to last week.
          </p>
          <p className='text-sm text-gray-400 mt-2'>
            Tip: Try to maintain consistent {title.toLowerCase()} levels for better overall
            performance.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MetricCard;
