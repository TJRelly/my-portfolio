import React from "react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div
      id="about"
      className="w-full p-2 flex items-center px-12 pt-32 pb-20
       relative bg-[#f5f5f5]"
    >
      <div className="max-w-[1240px] m-auto md:grid md:order-first grid-cols-3 gap-8">
        <div className="col-span-2 max-w-[500px] place-self-end">
          <p className="uppercase text-xl tracking-widest text-purple-700">
            About
          </p>
          <h2 className="py-4 text-sky-600 font-robotoS">Who Am I?</h2>
          <p className="py-2 text-sky-700">
            I possess a remarkable ability to learn and excel at new skills
            quickly. Alongside my{" "}
            <span className="text-purple-700">
              technical proficiency
            </span>
            , I have a deep passion for the arts, showcasing my creative spirit
            and ability to find inspiration from diverse sources.
          </p>
          <p className="py-2 text-sky-700">
            My fascination with learning new technologies and my insatiable
            curiosity inspire me to{" "}
            <span className="text-purple-700">
              stay up-to-date
            </span>{" "}
            on the latest advancements, ensuring I remain current and
            well-versed. Furthermore, my well-rounded background and diverse
            skill set make me a valuable asset to any team, bringing a fresh
            perspective, technical proficiency, and a{" "}
            <span className="text-purple-700">
              hunger
            </span>{" "}
            for{" "}
            <span className="text-purple-700">
              continuous growth
            </span>{" "}
            and success.
          </p>
          <Link href="/#projects">
            <p className="py-6 pb-4 underline cursor-pointer text-sky-700 hover:text-purple-700 ease-in duration-300">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className= "flex items-center justify-center md:order-first">
          <Image
            src="/img/my-photo.png"
            alt="workspace"
            width={350}
            height={350}
            className="rounded-xl pt-4"
          />
        </div>
      </div>
    </div>
  )
}

export default About
