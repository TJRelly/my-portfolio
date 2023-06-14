import React from "react"
import smart5 from "/public/projects/smart5.png"
import AI2 from "/public/projects/AI2.png"
import news1 from "/public/projects/news1.png"
import portfolio from "/public/projects/portfolio.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full relative py-16 pb-32 px-8 bg-gradient-to-b from-sky-500 to-sky-400 "
    >
      <div className="max-w-[1240px] mx-auto px-2 pt-12 pb-8">
        <p className="uppercase text-xl tracking-widest text-white">Projects</p>
        <h2 className="py-4 text-yellow-300 font-robotoS">
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
          title="Code Wizard"
          backgroundImg={AI2}
          projectUrl="/projects/wizard"
          tech1="FrontEnd Application"
          tech2="Javascript | Node JS | ChatGPT API"
        />
        <ProjectItem
          title="News Landing Page"
          backgroundImg={news1}
          projectUrl="/projects/news"
          tech1="FrontEnd Application"
          tech2="HTML | CSS | Javascript"
        />
        {/* <ProjectItem
          title="Barbershop Website"
          backgroundImg={barber1}
          projectUrl="/barber"
          tech1="FrontEnd Application"
          tech2="HTML | CSS | Javascript"
        /> */}
      </div>
    </div>
  )
}

export default Projects
