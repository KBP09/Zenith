import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/headline.png';
import '../../animations.css';

const sidebarItems = [
    { icon: 'https://img.icons8.com/?size=100&id=83326&format=png&color=ffffff', label: 'Dashboard', path: '/dashboard' },
    { icon: 'https://img.icons8.com/?size=100&id=118377&format=png&color=ffffff', label: 'Recommendation', path: '/recommendation' },
    { icon: 'https://img.icons8.com/?size=100&id=zxpRXfB1FrB0&format=png&color=ffffff', label: 'Mental Health', path: '/mentalhealth' },
    { icon: 'https://img.icons8.com/?size=100&id=20884&format=png&color=ffffff', label: 'Goal Tracker', path: '/goaltracker' },
    { icon: 'https://img.icons8.com/?size=100&id=hJecpPVXgZ5Y&format=png&color=ffffff', label: '30 Day Report', path: '/report' },
    { icon: 'https://img.icons8.com/?size=100&id=1349&format=png&color=ffffff', label: 'Visited Website', path: '/visitedwebsite' },
    { icon: 'https://img.icons8.com/?size=100&id=364&format=png&color=ffffff', label: 'Settings', path: '/settings' },
    { icon: 'https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff', label: 'Profile', path: '/profile' },
];

const Sidebar = () => {
    return (
        <div className="w-64 flex justify-between flex-col h-screen text-white bg-[#060919] p-4">
            <div>
                <div className="mb-8 ml-4">
                    <img className='w-32 h-12' src={logo} alt="logo" />
                </div>
                <nav>
                    {sidebarItems.map((item, index) => (
                        <Link key={index} to={item.path} className="flex items-center mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded sidebar-item">
                            <span className="mr-2">
                                <img className='w-6 h-6' src={item.icon} alt="icon" />
                            </span>
                            <span className="transition duration-200 ease-in-out hover:text-blue-400">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className='flex justify-center items-end'>
                <button className='bg-blue-500 px-12 text-xl py-2 rounded-lg transition-transform transform hover:scale-105'>Log out</button>
            </div>
        </div>
    );
}

export default Sidebar;
