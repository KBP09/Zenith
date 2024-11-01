import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../../../public/boy.png';
const Header = ({ name, streak }) => {
  return (
    <motion.header 
      className="flex justify-between items-center mb-6 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.img
          src={avatar}
          alt={name}
          width={10}
          height={10}
          className="w-12 h-12 rounded-full mr-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {name}!
          </h1>
          <p className="text-sm text-gray-300">Let's make today productive</p>
        </div>
      </div>
      <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
        <span className="text-xl mr-2">🔥</span>
        <span className="text-xl font-semibold">{streak} day streak</span>
      </div>
    </motion.header>
  );
};

export default Header;