import React from "react";
import smart5 from "../public/projects/smart5.png";
import AI2 from "../public/projects/AI2.png";
import news1 from "../public/projects/news1.png";
import barber1 from "../public/projects/barber1.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      className="w-full relative py-16 px-8"
      style={{ background: "linear-gradient(#ECF0F3,#F4EED7,#ECF0F3)" }}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-gray-500">
          Projects
        </p>
        <h2 className="py-4 text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
          {"What I've Built"}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 relative">
        <ProjectItem
          title="Face Detection App"
          backgroundImg={smart5}
          projectUrl="/smart"
          tech1="React.js"
          tech2="Express.js"
          tech3="PostgreSQL"
        />
        <ProjectItem
          title="AI Code-Helper App"
          backgroundImg={AI2}
          projectUrl="/smart"
          tech1="React.js"
        />
        <ProjectItem
          title="News Landing Page"
          backgroundImg={news1}
          projectUrl="/smart"
          tech1="Javascript"
        />
        <ProjectItem
          title="Barbershop Website"
          backgroundImg={barber1}
          projectUrl="/smart"
          tech1="HTML"
          tech2="CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
