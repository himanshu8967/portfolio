import React from "react";
import AboutImg from "../../assets/logo2.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        {/* Added padding-left to shift the heading slightly to the left */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-left pl-2 md:pl-4">
          About
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img
            className="md:h-80 h-64 w-full md:w-auto object-cover rounded-lg shadow-lg mb-6 md:mb-0"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a BCA graduate with strong skills in web development.
                  I specialize in HTML, CSS, JavaScript, React.js, Redux, and Tailwind CSS. 
                  I am passionate about creating user-friendly applications and thrive in collaborative environments.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  SQL Query
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Successfully solved a series of SQL challenges on Leetcode.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
