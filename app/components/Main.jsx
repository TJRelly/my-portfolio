"use client"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Tooltip } from "@nextui-org/react"
import wave from "../../public/img/wave.svg"
import Image from "next/image"

const Main = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen justify-center items-center text-center bg-gradient-to-b from-sky-500 to-sky-400"
    >
    
      <div className="max-w-[1240px] my-auto mx-auto p-2 flex flex-col justify-center items-center relative">

        <p className="py-3 uppercase tracking-widest text-white">
          {"Let's Build Something Extraordinary Together"}
        </p>

        <div className="font-robotoS">
          <h1 className="py-4 text-white ">
            {"Hi, I'm "}
            <span className="text-yellow-300">Terrell</span>
          </h1>
          <h1 className="text-transparent bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text pb-4">
            {"Software Engineer"}
          </h1>
        </div>

        <p className="text-white uppercase tracking-wider py-6">
          Creating and implementing successful front and back-end web
          applications.
        </p>

        <div className="flex items-center py-4 w-[300px] justify-between">
          <a
            href="https://www.linkedin.com/in/terrelljackson-tj/"
            target="_blank"
          >
            <Tooltip content={"Linkedin"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                <FaLinkedinIn className="w-5 h-5" />
              </div>
            </Tooltip>
          </a>
          <a href="https://github.com/TJRelly" target="_blank">
            <Tooltip content={"Github"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                <FaGithub className="w-5 h-5" />
              </div>
            </Tooltip>
          </a>
          <a href="mailto:terrell.jackson.jobs@gmail.com" target="_blank">
            <Tooltip content={"Email"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                <AiOutlineMail className="w-5 h-5" />
              </div>
            </Tooltip>
          </a>
          <a
            href="/#contact"
            // target="_blank"
          >
            <Tooltip content={"Contact Me"} color={"invert"}>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                <BsFillPersonLinesFill className="w-5 h-5" />
              </div>
            </Tooltip>
          </a>
        </div>
      </div>
      <Image src={wave} alt="wave" className="w-full absolute bottom-0"/>
    </div>
  )
}

export default Main
