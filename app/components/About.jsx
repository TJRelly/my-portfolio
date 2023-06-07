import React from "react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center px-10 py-[100px] relative bg-gradient-to-b from-[#e6e3dd] via-sky-600 to-[#e6e3dd]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-white">
          <p className="uppercase text-xl tracking-widest text-gray-600 md:text-white">
            About
          </p>
          <h2 className="py-4 text-transparent bg-sky-600 md:bg-gradient-to-r from-white via-sky-400 to-white bg-clip-text font-robotoS">
            Who I Am
          </h2>
          <p className="py-2">{"I'm not your average developer;"}</p>
          <p className="py-2">
            I possess a remarkable ability to learn and excel at new skills
            quickly. Alongside my technical proficiency, I have a deep passion
            for the arts, showcasing my creative spirit and ability to find
            inspiration from diverse sources.
          </p>
          <p className="py-2">
            My fascination with learning new technologies and my insatiable
            curiosity inspire me to stay up-to-date on the latest advancements,
            ensuring I remain current and well-versed. Furthermore, my
            well-rounded background and diverse skill set make me a valuable
            asset to any team, bringing a fresh perspective, technical
            proficiency, and a passion for continuous growth and success.
          </p>
          <Link href="/#projects">
            <p className="py-6 pb-4 underline cursor-pointer hover:text-yellow-500 ease-in duration-300">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="py-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/img/workspace.png"
            alt="workspace"
            width={800}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default About
