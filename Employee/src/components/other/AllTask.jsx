import React from "react";

const TaskCard = () => {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-5 text-white w-full sm:w-[350px] transition-transform hover:scale-105 hover:bg-white/20 duration-300">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold">Make a UI Design</h3>
        <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/30 text-yellow-300">
          In Progress
        </span>
      </div>

      <p className="text-sm text-gray-200 mb-4">
        Design a modern, responsive task manager dashboard with smooth glassmorphism style.
      </p>

      <div className="flex justify-between items-center text-sm text-gray-300">
        <span>06 Oct 2025</span>
        <button className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition">
          View
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
