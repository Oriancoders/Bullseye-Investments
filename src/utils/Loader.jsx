// src/components/Common/Loader/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center text-white">
      {/* Spinner */}
      <div className="w-20 h-20 border-8 border-t-transparent border-white rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-6 text-lg flex items-center space-x-1">
        <span>Loading BullsEye Investment Page</span>
        <span className="flex space-x-1">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </span>
      </p>
    </div>
  );
};

export default Loader;
