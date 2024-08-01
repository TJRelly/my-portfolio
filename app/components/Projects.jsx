import React from "react"
import smart5 from "/public/projects/smart5.png"
import AI2 from "/public/projects/AI2.png"
import barber1 from "/public/projects/barber1.png"
import portfolio from "/public/projects/portfolio.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full relative py-16 pb-32 px-8 bg-gradient-to-b from-sky-500 to-sky-400 "
    >
      <div className="max-w-[1240px] mx-auto px-2 pt-12 pb-8">
        <p className="uppercase text-xl tracking-widest text-purple-700">Projects</p>
        <h2 className="py-4 text-white font-robotoS">
          {"What I've Built"}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 relative max-w-[1240px] mx-auto">
        <ProjectItem
          title="Smart Brain"
          backgroundImg={smart5}
          projectUrl="/projects/smart"
          tech1="FullStack Application"
          tech2="React | Node | PostgreSQL"
        />
        <ProjectItem
          title="My Portfolio"
          backgroundImg={portfolio}
          projectUrl="/projects/portfolio"
          tech1="FullStack Application"
          tech2="React | Next API | Javascript"
        />
        <ProjectItem
          title="Barbershops Inc."
          backgroundImg={barber1}
          projectUrl="/projects/barber"
          tech1="FrontEnd Application"
          tech2="HTML | CSS | Javascript"
        />
        <ProjectItem
          title="Code Wizard"
          backgroundImg={AI2}
          projectUrl="/projects/wizard"
          tech1="FrontEnd Application"
          tech2="Javascript | Node JS | API"
        />
      </div>
    </div>
  )
}

export default Projects
