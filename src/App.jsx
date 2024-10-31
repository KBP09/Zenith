import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages 
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import GoalTracker from './pages/GoalTracker';
import Settings from './pages/Settings';
import MentalHealth from './pages/MentalHealth';
import Recommendation from './pages/Recommendation';
import VisitedWebsite from './pages/VisitedWebsite';
import Report from './pages/Report';






const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/goaltracker" element={<GoalTracker />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/mentalhealth" element={<MentalHealth />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/visitedwebsite" element={<VisitedWebsite />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  )
}

export default App
