import React from "react"
import Image from "next/image"
import Link from "next/link"
import portfolio from "../../../public/projects/portfolio.png"
import { RiRadioButtonFill } from "react-icons/ri"

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={portfolio}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">My Portfolio</h2>
          <h3>Next JS | Next API | Nodemailer</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Overview
          </h2>

          <p className="pt-4">
            {
              "This portfolio website is a meticulously crafted project using Next.js and styled with Tailwind CSS, leveraging server-side rendering to enhance search engine optimization and implementing lazy-loading images for optimal page load speed. The project also utilizes client-side routing for seamless navigation, incorporating the latest Next.js 13 features and taking advantage of the upgraded app client routing system. Furthermore, a custom Next.js API is implemented to handle form submissions, enabling users to send messages. Finally, the integration of Node Mailer facilitates the seamless delivery of emails from the integrated form."
            }
          </p>
          <a href="https://coding-ai-eta.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-6 mr-5 hover:scale-95 ease-in duration-300">
              Live Site
            </button>
          </a>
          <a href="https://github.com/TJRelly/coding-ai" target="_blank">
            <button className="px-8 py-2 mt-6 hover:scale-95 ease-in duration-300">
              Github Repo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 border-b border-[#C49F00]/50 my-4">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Next API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>
                Nodemailer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>NPM
                Particles
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer hover:text-[#C49F00] ease-in duration-300">
            Back
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
