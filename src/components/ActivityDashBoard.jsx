import React from 'react';

const ActivityDashboard = () => {
  return (
    <div className="space-y-6  p-8">
            {/* Time Tracking by Categories and Websites */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">Time Tracking</h2>
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600">Daily</button>
          <button className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600">Weekly</button>
        </div>
        <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          {/* Placeholder for time tracking by categories */}
          <p className="text-gray-500">Time Tracking by Categories (Chart Placeholder)</p>
        </div>
      </div>

      {/* Productive vs. Unproductive Time Graph */}
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-pink-500">Productive vs Unproductive Time</h2>
        <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
          {/* Placeholder for productive vs. unproductive time graph */}
          <p className="text-gray-500">Productive vs. Unproductive Time Graph Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDashboard;
