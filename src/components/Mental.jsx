import React from 'react';

const MentalHealthDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Mental Health Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mental Health Scores */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-500">Mental Health Score</h2>
          <p className="text-3xl mt-4">75</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-500">Average Mood Score</h2>
          <p className="text-3xl mt-4">6.8</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-500">Average Sentiment Score</h2>
          <p className="text-3xl mt-4">7.1</p>
        </div>
      </div>

      {/* Daily Journal */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">Daily Journal</h2>
        <textarea className="w-full mt-4 p-2 bg-gray-700 rounded-lg" rows="4" placeholder="Write your thoughts here..."></textarea>
      </div>

      {/* Sentiment Pie Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">Mental Health Sentiment</h2>
        <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          {/* Placeholder for pie chart */}
          <p className="text-gray-500">Pie Chart Placeholder</p>
        </div>
      </div>

      {/* Night Usage Graph */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">Night Usage</h2>
        <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          {/* Placeholder for night usage graph */}
          <p className="text-gray-500">Night Usage Graph Placeholder</p>
        </div>
      </div>

      {/* AI-Generated Insights */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">AI-Generated Insights</h2>
        <p className="mt-4 text-gray-300">Based on your recent activities, you might benefit from a short break every 2 hours to maintain a positive mood. Remember to keep your sleep schedule consistent!</p>
      </div>
    </div>
  );
};

export default MentalHealthDashboard;
