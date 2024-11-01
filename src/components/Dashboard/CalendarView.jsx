import React from 'react';
import { motion } from 'framer-motion';

const CalendarView = ({ events }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-md p-6 mt-5 rounded-2xl'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-xl font-semibold mb-4 text-gray-300'>Upcoming Events</h2>
    <div className='space-y-4'>
      {events.map((event, index) => (
        <motion.div
          key={index}
          className='flex items-center space-x-4 p-3 bg-white bg-opacity-5 rounded-lg'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div
            className={`flex-shrink-0 w-12 h-12 ${
              event.type === 'meeting' ? 'bg-blue-500' : 'bg-green-500'
            } bg-opacity-20 rounded-lg flex items-center justify-center text-2xl`}
          >
            {event.type === 'meeting' ? '👥' : '🎯'}
          </div>
          <div>
            <h3 className='font-medium text-white'>{event.title}</h3>
            <p className='text-sm text-gray-400'>{event.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default CalendarView;
