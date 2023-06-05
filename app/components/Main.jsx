"use client"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Tooltip } from "@nextui-org/react"

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-[url('/img/gold-bg-2.jpg')] bg-cover bg-center">

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center relative">
        <p className="py-3 uppercase text-sm tracking-widest text-gray-700">
          {"Let's Build Something Extraordinary Together"}
        </p>
        <div className="font-corgar">
          <h1 className="py-4 text-gray-600 ">
            {"Hi, I'm "}
            <span className="text-transparent bg-gradient-to-r from-gray-500 via-[#b0a183] to-gray-500 bg-clip-text">
              Terrell
            </span>
          </h1>
          <h1 className="text-transparent bg-gradient-to-r from-gray-500 via-[#b0a183] to-gray-500 bg-clip-text h-[100%]">
            {"Software Engineer"}
          </h1>
        </div>

        <p className="py-6 text-gray-700 max-w-[70%]">
          Proven track record of creating and implementing successful front
          and back end web applications.
        </p>

        <div className="flex items-center py-4 w-[300px] justify-between">
          <a
            href="https://www.linkedin.com/in/terrelljackson-tj/"
            target="_blank"
          >
            <Tooltip content={"Linkedin"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#e6e3dd]">
                <FaLinkedinIn />
              </div>
            </Tooltip>
          </a>
          <a href="https://github.com/TJRelly" target="_blank">
            <Tooltip content={"Github"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#e6e3dd]">
                <FaGithub />
              </div>
            </Tooltip>
          </a>
          <a href="mailto:terrell.jackson.jobs@gmail.com" target="_blank">
            <Tooltip content={"Email"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#e6e3dd]">
                <AiOutlineMail />
              </div>
            </Tooltip>
          </a>
          <a
            href="/#contact"
            // target="_blank"
          >
            <Tooltip content={"Contact Me"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#e6e3dd]">
                <BsFillPersonLinesFill />
              </div>
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main
