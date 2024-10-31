import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/shared/sidebar';
import { CheckCircleIcon, TrophyIcon } from 'lucide-react';

// Sample data for recommendations and achievements
const recommendations = [
  { id: 1, text: 'Try Pomodoro Technique for focused work sessions.', followed: false },
  { id: 2, text: 'Use Notion for organizing tasks and notes.', followed: false },
  { id: 3, text: 'Meditate for 5 minutes during breaks.', followed: false },
  { id: 4, text: 'Limit social media usage during work hours.', followed: false },
  { id: 5, text: 'Use Forest app to avoid distractions.', followed: false },
];

const mentalHealthTips = [
  'Take regular breaks to avoid burnout.',
  'Practice deep breathing exercises.',
  'Engage in short physical activities like stretching.',
  'Journal your thoughts daily for mental clarity.',
  'Practice gratitude to uplift your mood.',
];

const RecommendationPage = () => {
  const [progress, setProgress] = useState(0);
  const [recommendationList, setRecommendationList] = useState(recommendations);

  // Function to handle following a recommendation
  const followRecommendation = (id) => {
    const updatedList = recommendationList.map((rec) =>
      rec.id === id ? { ...rec, followed: true } : rec
    );
    setRecommendationList(updatedList);

    // Update progress based on the number of followed recommendations
    const followedCount = updatedList.filter((rec) => rec.followed).length;
    setProgress((followedCount / recommendations.length) * 100);
  };

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-white">
      <Sidebar selectedNav={"Recommendation"} />

      <motion.div
        className="flex-1 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <h1 className="text-3xl font-bold mb-6 text-[#58a6ff]">Personalized Recommendations</h1>

        {/* Recommendations Section */}
        <div className="bg-[#161b22] p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#8b949e]">Suggested Tools & Techniques</h2>
          <ul className="space-y-4">
            {recommendationList.map((rec) => (
              <li key={rec.id} className="flex items-center justify-between p-4 bg-[#1f2933] rounded-lg shadow-md">
                <span className={rec.followed ? "line-through text-gray-500" : "text-[#c9d1d9]"}>
                  {rec.text}
                </span>
                {!rec.followed ? (
                  <button
                    onClick={() => followRecommendation(rec.id)}
                    className="text-[#58a6ff] hover:text-[#79c0ff] font-semibold"
                  >
                    Follow
                  </button>
                ) : (
                  <CheckCircleIcon className="text-[#2ea043]" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mental Health Tips Section */}
        <div className="bg-[#161b22] p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#8b949e]">Mental Health Tips</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#c9d1d9]">
            {mentalHealthTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Gamified Progress Section */}
        <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#8b949e]">Progress & Achievements</h2>
          
          {/* Progress Bar */}
          <div className="bg-[#2d333b] rounded-full h-4 mb-4">
            <div
              className="bg-[#2ea043] h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[#8b949e] mb-4">You have followed {Math.round(progress)}% of recommendations.</p>

          {/* Achievements */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2 text-[#8b949e]">Achievements</h3>
            <ul className="space-y-3">
              {progress >= 20 && (
                <li className="flex items-center space-x-2 text-[#2ea043]">
                  <TrophyIcon className="w-5 h-5" />
                  <span>Beginner: Followed 20% of recommendations!</span>
                </li>
              )}
              {progress >= 50 && (
                <li className="flex items-center space-x-2 text-[#2ea043]">
                  <TrophyIcon className="w-5 h-5" />
                  <span>Intermediate: Followed 50% of recommendations!</span>
                </li>
              )}
              {progress >= 100 && (
                <li className="flex items-center space-x-2 text-[#2ea043]">
                  <TrophyIcon className="w-5 h-5" />
                  <span>Master: Followed all recommendations!</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecommendationPage;
