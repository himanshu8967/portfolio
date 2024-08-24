import React from "react";

const ProjectCard = ({ title, main, img }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl overflow-hidden">
      <img
        className="p-4 object-cover h-48 md:h-56 rounded-t-xl cursor-grab transition-transform duration-300 ease-in-out transform hover:scale-105"
        src={img}
        alt={title}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      </div>
      <div className="p-4 flex justify-center">
        <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
