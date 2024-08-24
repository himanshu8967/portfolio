import React from "react";
import logo from "../../assets/logo.jpg"; // Ensure this path is correct
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full min-h-screen p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I have completed my Bachelor of Computer Applications (BCA) from Dr. B. C. Roy Engineering College Academy of Professional Courses, where I graduated with a CGPA of 8.6/10.
        </p>
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:w-2/4 flex justify-center items-center">
        <img
          className="w-96 h-96 md:w-[32rem] md:h-[32rem] object-cover"
          src={logo}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
