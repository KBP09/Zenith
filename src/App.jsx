import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import {
  Landing,
  Dashboard,
  Profile,
  GoalTracker,
  Settings,
  MentalHealth,
  Recommendation,
  VisitedWebsite,
  Report,
} from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/goaltracker' element={<GoalTracker />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/mentalhealth' element={<MentalHealth />} />
        <Route path='/recommendation' element={<Recommendation />} />
        <Route path='/visitedwebsite' element={<VisitedWebsite />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
