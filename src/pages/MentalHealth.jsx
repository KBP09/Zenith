import React from 'react'
import Sidebar from '../components/shared/sidebar'
import MentalHealthDashboard from '../components/Mental'
const MentalHealth = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0C142C] text-gray-200">
      <Sidebar selectedNav={"Mental Health"} />
      <div className="flex-1 p-6 overflow-scroll">
        <MentalHealthDashboard />
      </div>
    </div>
  )
}

export default MentalHealth
