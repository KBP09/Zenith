import React from 'react';
import { Bell, MessageCircle } from 'lucide-react';
import badge from '../assets/main_badge.png';
import demobadge from '../assets/badgedemo.png';
import Sidebar from '../components/shared/sidebar';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2, when: 'beforeChildren', staggerChildren: 0.25 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const bounceAnimation = {
    whileHover: { scale: 1.1, rotate: 3 },
    whileTap: { scale: 0.9 },
};

const pulseAnimation = {
    whileHover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.5 } },
};

const badgeItems = [
    { icon: '🏆', label: 'Goal Achiever', value: 'Completed 10 Goals', date: '2024-10-01' },
    { icon: '📈', label: 'Productivity Guru', value: 'Logged 100+ Hours', date: '2024-10-02' },
    { icon: '🧠', label: 'Mindful Tracker', value: '7 Days of Mindfulness', date: '2024-10-03' },
    { icon: '💡', label: 'Creative Thinker', value: '3 Ideas Implemented', date: '2024-10-04' },
    { icon: '🚀', label: 'High Performer', value: 'Achieved 90% Productivity', date: '2024-10-05' },
];

export default function Profile() {
    return (
        <div className="flex h-screen  bg-[#0C142C] text-white">
            <Sidebar selectedNav={"Profile"} />

            <motion.div
                className="flex-1 p-4 sm:p-8 overflow-scroll"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <motion.div className="flex items-center mb-4 sm:mb-0" variants={itemVariants} {...bounceAnimation}>
                        <Bell className="mr-4 cursor-pointer" />
                        <span className="text-lg sm:text-xl">4k viewers</span>
                    </motion.div>
                    <motion.div className="flex items-center" variants={itemVariants} {...bounceAnimation}>
                        <MessageCircle className="mr-2 cursor-pointer" />
                        <span className="text-sm sm:text-base">Contact Us</span>
                    </motion.div>
                </div>

                <motion.div
                    className="rounded-lg p-4 sm:p-6 mb-8 flex metallic-textured-background flex-col sm:flex-row"
                    variants={itemVariants}
                    {...pulseAnimation}
                >
                    <motion.img
                        className="w-32 h-32 sm:w-52 sm:h-52 self-center rounded-full shadow-lg cursor-pointer"
                        src="./src/assets/pfp.png"
                        alt="pfp"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div className="w-full sm:w-[calc(100%-208px)] ml-0 sm:ml-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Kartik Pokhriyal</h2>
                                <p className="text-red-400 mb-4">Challenging</p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <motion.span
                                        className="border-2 px-4 py-1 rounded-3xl text-gray-400 border-[#23447d] cursor-pointer"
                                        whileHover={{ backgroundColor: '#1A73E8', color: '#fff' }}
                                    >
                                        Novice Analyst
                                    </motion.span>
                                    <motion.span
                                        className="border-2 px-4 py-1 rounded-3xl text-gray-400 border-[#23447d] cursor-pointer"
                                        whileHover={{ backgroundColor: '#1A73E8', color: '#fff' }}
                                    >
                                        Master Strategist
                                    </motion.span>
                                </div>
                            </div>
                            <motion.button
                                className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg mt-4 sm:mt-0"
                                {...bounceAnimation}
                            >
                                Refer Now
                            </motion.button>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <motion.img
                                    className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
                                    src={badge}
                                    alt="badge"
                                    whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                                />
                                <span className="text-4xl sm:text-5xl font-bold ml-4">42</span>
                            </div>
                            <div className="text-xl flex gap-1 text-gray-400 items-end">
                                Points <p className="text-4xl sm:text-5xl text-slate-50 font-semibold">142</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-[#12284E] rounded-lg p-4 sm:p-6 overflow-y-auto"
                    variants={itemVariants}
                >
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Earned Badges</h3>
                    <table className="w-full text-sm sm:text-base">
                        <thead>
                            <tr className="text-gray-400">
                                <th className="text-left pb-2">Badge</th>
                                <th className="text-left pb-2">Value</th>
                                <th className="text-left pb-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {badgeItems.map((item, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-t border-gray-700"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: '#1A1F36' }}
                                >
                                    <td className="py-2 text-lg font-semibold flex items-center">
                                        <img className="w-16 h-16 mr-4" src={demobadge} alt="badge-icon" />
                                        {item.label}
                                    </td>
                                    <td className="py-2">{item.value}</td>
                                    <td className="py-2">{item.date}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </motion.div>
        </div>
    );
}
