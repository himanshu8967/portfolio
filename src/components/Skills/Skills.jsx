import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="text-sm md:text-base">HTML5</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="text-sm md:text-base">CSS3</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="text-sm md:text-base">React.js</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <IoLogoJavascript color="#F7DF1E" size={50} />
            </span>
            <span className="text-sm md:text-base">JavaScript</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <SiTailwindcss color="#38B2AC" size={50} />
            </span>
            <span className="text-sm md:text-base">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <SiRedux color="#764ABC" size={50} />
            </span>
            <span className="text-sm md:text-base">Redux</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl mb-2">
              <FaDatabase color="#007ACC" size={50} />
            </span>
            <span className="text-sm md:text-base">SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
