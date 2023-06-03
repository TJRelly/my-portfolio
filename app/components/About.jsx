import React from "react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center px-10 py-[100px] relative"
      style={{ background: "linear-gradient(#ECF0F3,#F4EED7,#ECF0F3)" }}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-gray-500">
            About
          </p>
          <h2 className="py-4 text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Who I Am
          </h2>
          <p className="py-2">{"I'm not your average developer;"}</p>
          <p className="py-2 text-gray-600">
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
            <p className="py-2 pb-4 underline cursor-pointer hover:text-[#C49F00] ease-in duration-300">
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
