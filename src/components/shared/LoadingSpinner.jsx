import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#1E1E2E] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#A78BFA]"></div>
        <h2 className="mt-4 text-2xl font-semibold text-[#A78BFA]">Loading...</h2>
        <p className="mt-2 text-gray-400">Please wait while we prepare your productivity insights</p>
      </div>
    </div>
  )
}