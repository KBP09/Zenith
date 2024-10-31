import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Use AnimatePresence for conditional rendering animations
import logo from '../../assets/headline.png';
import '../../animations.css';

const sidebarItems = [
    { icon: 'https://img.icons8.com/?size=100&id=83326&format=png&color=ffffff', label: 'Dashboard', path: '/dashboard' },
    { icon: 'https://img.icons8.com/?size=100&id=118377&format=png&color=ffffff', label: 'Recommendation', path: '/recommendation' },
    { icon: 'https://img.icons8.com/?size=100&id=zxpRXfB1FrB0&format=png&color=ffffff', label: 'Mental Health', path: '/mentalhealth' },
    { icon: 'https://img.icons8.com/?size=100&id=20884&format=png&color=ffffff', label: 'Goal Tracker', path: '/goaltracker' },
    { icon: 'https://img.icons8.com/?size=100&id=hJecpPVXgZ5Y&format=png&color=ffffff', label: '30 Days Report', path: '/report' },
    { icon: 'https://img.icons8.com/?size=100&id=1349&format=png&color=ffffff', label: 'Visited Websites', path: '/visitedwebsite' },
    { icon: 'https://img.icons8.com/?size=100&id=364&format=png&color=ffffff', label: 'Settings', path: '/settings' },
    { icon: 'https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff', label: 'Profile', path: '/profile' },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSideBar = () => setIsOpen((prev) => !prev);

    const sidebarVariants = {
        open: { x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } },
        closed: { x: -300, opacity: 0, transition: { ease: 'easeIn', duration: 0.5 } },
    };

    return (
        <>
            {/* Hamburger Icon */}
            {!isOpen && (
                <span
                    className="absolute z-50 top-4 left-4 cursor-pointer text-white text-3xl"
                    onClick={handleSideBar}
                >
                    ☰
                </span>
            )}

            {/* Sidebar with AnimatePresence for mounting/unmounting animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="w-64 h-screen flex flex-col justify-between text-white bg-[#060919] p-4 relative z-40"
                    >
                        {/* Close Icon */}
                        <span
                            className="absolute top-4 right-4 cursor-pointer text-xl"
                            onClick={handleSideBar}
                        >
                            ✕
                        </span>

                        {/* Logo */}
                        <div className="mb-8 ml-4 text-3xl font-semibold">
                            {/* <img className="w-32 h-12" src={logo} alt="logo" /> */}
                            Zenith
                        </div>

                        {/* Navigation */}
                        <nav>
                            {sidebarItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="flex items-center mb-4 hover:bg-gray-700 p-2 rounded"
                                >
                                    <img className="w-6 h-6 mr-2" src={item.icon} alt="icon" />
                                    <span className="transition duration-200 ease-in-out hover:text-blue-400">
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Logout Button */}
                        <div className="flex justify-center items-end">
                            <button className="bg-blue-500 px-12 py-2 text-xl rounded-lg transition-transform transform hover:scale-105">
                                Log out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
