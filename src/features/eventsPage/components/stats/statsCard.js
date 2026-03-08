import React from "react";

const StatsCard = ({ icon, text, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-xl text-center h-full min-h-40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer ${bgColor}`}
    >
      <div className="text-4xl mb-4 text-gray-800">{icon}</div>
      <p className="text-gray-800 text-[15px] font-medium leading-snug px-2">
        {text}
      </p>
    </div>
  );
};

export default StatsCard;
