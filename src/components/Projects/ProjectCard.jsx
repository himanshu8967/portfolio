import React from "react";

const ProjectCard = ({ title, main, img, link }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl overflow-hidden">
      <img
        className="p-4 object-cover h-48 md:h-56 rounded-t-xl cursor-grab transition-transform duration-300 ease-in-out transform hover:scale-105"
        src={img}
        alt={title}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="flex-grow" />
      <div className="p-4 flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
