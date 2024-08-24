import React from "react";
import ProjectCard from "./ProjectCard";
import food from "../../assets/food.avif";
import investment from "../../assets/investment.jpg";
import project from "../../assets/project.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-8 md:gap-10 justify-center">
        <ProjectCard
          title="Food Ordering App"
          main="Created a comprehensive food ordering system featuring a menu display, cart management, and order processing."
          img={food}
          link="https://github.com/himanshu8967/orderding_food"
        />
        <ProjectCard
          title="Investment Calculator"
          main="Developed a tool to help users calculate potential returns on investments with a user-friendly interface and real-time updates."
          img={investment}
          link="https://github.com/himanshu8967/Investment_Calculator"
        />
        <ProjectCard
          title="Project Management Tool"
          main="Built an application to streamline task assignments and track progress."
          img={project}
          link="https://github.com/himanshu8967/ProjectManagement"
        />
      </div>
    </div>
  );
};

export default Projects;
