import React from 'react'
import { Bell, MessageCircle } from 'lucide-react'
import badge from '../assets/main_badge.png'
import demobadge from '../assets/badgedemo.png'

// Components
import Sidebar from '../components/shared/sidebar'


const badgeItems = [
    { icon: '🏆', label: 'Goal Achiever', value: 'Completed 10 Goals', date: '2024-10-01' },
    { icon: '📈', label: 'Productivity Guru', value: 'Logged 100+ Hours', date: '2024-10-02' },
    { icon: '🧠', label: 'Mindful Tracker', value: '7 Days of Mindfulness', date: '2024-10-03' },
    { icon: '💡', label: 'Creative Thinker', value: '3 Ideas Implemented', date: '2024-10-04' },
    { icon: '🚀', label: 'High Performer', value: 'Achieved 90% Productivity', date: '2024-10-05' },
    { icon: '🌱', label: 'Growth Mindset', value: 'Engaged in 5 Personal Development Activities', date: '2024-10-06' },
    { icon: '🛌', label: 'Rest and Recharge', value: 'Maintained Sleep Schedule for 14 Days', date: '2024-10-07' },
    { icon: '💪', label: 'Wellness Warrior', value: 'Consistent Exercise for 30 Days', date: '2024-10-08' },
    { icon: '📅', label: 'Time Manager', value: 'Organized 30 Tasks', date: '2024-10-09' },
    { icon: '✨', label: 'Positivity Champion', value: 'Practiced Gratitude for 10 Days', date: '2024-10-10' },
    { icon: '🔍', label: 'Focus Finder', value: 'Reduced Distractions by 50%', date: '2024-10-11' },
    { icon: '🤝', label: 'Collaboration Expert', value: 'Worked with 5 Team Members', date: '2024-10-12' },
    { icon: '🗂️', label: 'Organization Ninja', value: 'Sorted 50+ Files', date: '2024-10-13' },
    { icon: '🏅', label: 'Consistency Champion', value: 'Consistent Tracking for 30 Days', date: '2024-10-14' },
    { icon: '🗣️', label: 'Feedback Seeker', value: 'Received Feedback on 5 Projects', date: '2024-10-15' },
];


export default function Profile() {
    return (
        <div className="flex h-screen overflow-hidden bg-[#0C142C] text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <Bell className="mr-4" />
                        <span>4k viewers</span>
                    </div>
                    <div className="flex items-center">
                        <MessageCircle className="mr-2" />
                        <span>Contact Us</span>
                    </div>
                </div>

                {/* User Profile */}
                <div className="rounded-lg p-6 mb-8 flex metallic-textured-background">
                    <img className='w-52 h-52 self-center' src="./src/assets/pfp.png" alt="pfp" />
                    <div className='w-[calc(100%-208px)]'>
                        <div className="flex items-center justify-between">

                            <div className="flex">

                                <div className='p-4'>
                                    <h2 className="text-2xl font-bold">Kartik Pokhriyal</h2>
                                    <p className="text-red-400">Challenging</p>
                                    <div className='p-4 pl-0 flex gap-2'>
                                        <span className='border-2 p-2 rounded-3xl text-gray-400 border-[#23447d]'>Novice Analyst</span>
                                        <span className='border-2 p-2 rounded-3xl text-gray-400 border-[#23447d]'>Master Strategist</span>
                                    </div>
                                </div>

                            </div>
                            <button className="bg-blue-500 self-start mt-4  text-white px-4 py-2 rounded-full">
                                Refer Now
                            </button>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center mr-4">
                                <span className="text-green-500 mr-1"><img className='w-20 h-20' src={badge} alt="badge" /></span>
                                <span className="text-5xl font-bold mb-2">42</span>
                            </div>
                            <div className="text-xl flex gap-1 text-gray-400 items-end">
                                Points <p className='text-5xl text-slate-50 font-semibold'>142</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Earned Badges */}
                <div className="bg-[#12284E] rounded-lg p-6 h-[300px] overflow-scroll">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Earned Badges</h3>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-400">
                                <th className="text-left pb-2">Badge</th>
                                <th className="text-left pb-2">Value</th>
                                <th className="text-left pb-2">Date</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {badgeItems.map((item, index) => (
                                <tr key={index} className="border-t border-gray-700">
                                    <td className="py-2 text-lg font-semibold flex items-center">
                                        <span className="mr-2"><img className='w-16 h-16' src={demobadge} alt="" /></span>
                                        {item.label}
                                    </td>
                                    <td className="py-2">{item.value}</td>
                                    <td className="py-2">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}