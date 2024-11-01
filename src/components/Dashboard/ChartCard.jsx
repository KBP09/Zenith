import React from 'react';
import { motion } from 'framer-motion';

const ChartCard = ({ title, children }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-xl font-semibold mb-4 text-gray-300'>{title}</h2>
    {children}
  </motion.div>
);

export default ChartCard;
