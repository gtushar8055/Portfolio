import React from "react";

const Cards = ({ icon, title, description, repoLink }) => {
  return (
    <div className="bg-yellow-500  rounded-2xl border-2 border-yellow-500
                    flex flex-col items-center text-center 
                    p-6 w-full sm:w-72 min-h-[18rem] 
                    shadow-md shadow-[#02131F]/40 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg">
      
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#02131F] mb-4">
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-black font-bold text-xl mb-3 tracking-wide">
        {title}
      </h1>

      {/* Description */}
      <p className="text-black text-opacity-80 text-sm sm:text-base leading-relaxed mb-4">
        {description}
      </p>

      {/* Repo Button */}
      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-4 py-2 bg-[#02131F] text-yellow-500 font-semibold rounded-lg 
                     hover:bg-yellow-400 hover:text-[#02131F] hover:border border-[#02131F] transition-colors duration-300"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Cards;
