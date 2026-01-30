import React from "react";

const Project_Cards = ({ image, title, githubLink, demoLink , description}) => {
  return (
    <div className="bg-[#02131F] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105">
      
      {/* Project Image */}
      <div className="w-full border-4 border-yellow-500 h-52 flex justify-center items-center overflow-hidden rounded-xl mb-6">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
        />
      </div>

      

      {/* Project Title */}
      <h3 className="text-yellow-500 font-bold text-2xl text-center mb-4">{title}</h3>

      {/* Project Description */}
      <p className="text-yellow-500 text-md mb-4">{description}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 bg-yellow-500 text-[#02131F] font-medium rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          GitHub
        </a>
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 font-medium rounded-full hover:bg-yellow-500 hover:text-[#02131F] transition"
        >
          Visit ↗️
        </a>
      </div>
    </div>
  );
};

export default Project_Cards;
