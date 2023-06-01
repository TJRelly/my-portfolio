import React from "react"
import smart5 from "/public/projects/smart5.png"
import AI2 from "/public/projects/AI2.png"
import news1 from "/public/projects/news1.png"
import portfolio from "/public/projects/portfolio.png"
// import barber1 from "/public/projects/barber1.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full relative py-14 px-8"
      style={{ background: "linear-gradient(#ECF0F3,#F4EED7,#ECF0F3)" }}
    >
      <div className="max-w-[1240px] mx-auto px-2 pt-16 pb-8">
        <p className="uppercase text-xl tracking-widest text-gray-500">
          Projects
        </p>
        <h2 className="py-4 text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
          {"What I've Built"}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 relative max-w-[1240px] mx-auto">
        <ProjectItem
          title="FaceScanPro"
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
