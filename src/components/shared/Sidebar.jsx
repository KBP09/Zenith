import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronsRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 

const sidebarItems = [
  { icon: 'https://img.icons8.com/?size=100&id=83326&format=png&color=64748b', label: 'Dashboard', path: '/dashboard' },
  { icon: 'https://img.icons8.com/?size=100&id=118377&format=png&color=64748b', label: 'Recommendation', path: '/recommendation' },
  { icon: 'https://img.icons8.com/?size=100&id=zxpRXfB1FrB0&format=png&color=64748b', label: 'Mental Health', path: '/mentalhealth' },
  { icon: 'https://img.icons8.com/?size=100&id=1349&format=png&color=64748b', label: 'Visited Websites', path: '/visitedwebsite' },
  { icon: 'https://img.icons8.com/?size=100&id=20884&format=png&color=64748b', label: 'Goal Tracker', path: '/goaltracker' },
  { icon: 'https://img.icons8.com/?size=100&id=hJecpPVXgZ5Y&format=png&color=64748b', label: '30 Days Report', path: '/report' },
  { icon: 'https://img.icons8.com/?size=100&id=364&format=png&color=64748b', label: 'Settings', path: '/settings' },
  { icon: 'https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=64748b', label: 'Profile', path: '/profile' },
];

export default function Sidebar({selectedNav}) {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(selectedNav);
  const navigate = useNavigate(); 

  const handleNavigation = (path, title) => {
    setSelected(title);
    navigate(path); 
  };

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-600 bg-[#060919] p-2"
      style={{
        width: open ? "255px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        {sidebarItems.map((item) => (
          <Option
            key={item.label}
            Icon={item.icon}
            title={item.label}
            selected={selected}
            handleNavigation={() => handleNavigation(item.path, item.label)} // Pass the handleNavigation function
            open={open}
          />
        ))}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
}

const Option = ({ Icon, title, selected, handleNavigation, open }) => {
  return (
    <motion.button
      layout
      onClick={handleNavigation} // Use the handleNavigation prop
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-200 "}`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <img className="w-8 h-8" src={Icon} alt="icon" />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
}

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-600 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors ">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">Kartik Pokhriyal</span>
              <span className="block text-xs text-slate-200">Pro Plan</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md" >
    
      <img src="./icon-128.png" alt="Logo" />
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-600 transition-colors "
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
