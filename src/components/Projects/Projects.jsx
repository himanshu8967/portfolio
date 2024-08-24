import React from "react";
import ProjectCard from "./ProjectCard";
import food from "../../assets/food.avif"; // Adjust the path as necessary
import investment from "../../assets/investment.jpg"; // Adjust the path as necessary
import project from "../../assets/project.png"; // Adjust the path as necessary

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap   gap-8 md:gap-10 justify-center  ">
        <ProjectCard
          title="Food Ordering App"
          main="Created a comprehensive food ordering system featuring a menu display, cart management, and order processing."
          img={food}
        />
        <ProjectCard
          title="Investment Calculator"
          main="Developed a tool to help users calculate potential returns on investments with a user-friendly interface and real-time updates."
          img={investment}
        />
        <ProjectCard
          title="Project Management Tool"
          main="Built an application to streamline task assignments and track progress."
          img={project}
        />
      </div>
    </div>
  );
};

export default Projects;
