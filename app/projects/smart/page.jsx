import React from "react"
import Image from "next/image"
import Link from "next/link"
import smart5 from "../../../public/projects/smart5.png"
import { RiRadioButtonFill } from "react-icons/ri"

const Smart = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={smart5}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6">
          <h2 className="py-2">Smart Brain</h2>
          <h3>React JS | Express JS | PostgrSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-4 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Overview
          </h2>
          <p className="pt-4 max-w-[750px]">
            An advanced facial detection software that accurately identifies and
            locates faces within images.
          </p>
          <p className="pt-4 max-w-[750px]">
            {
              "I have developed a robust web application leveraging React JS for the frontend and Express JS for the backend. This application is hosted on both Github and Cyclic platforms, ensuring seamless accessibility and continuous integration. Users can effortlessly sign in and utilize the application's intuitive interface to input an image URL and leverage the powerful Clarifai face-detection API for accurate face detection within the uploaded image. This project showcases my expertise in building efficient and user-friendly applications by combining cutting-edge technologies and integrating third-party APIs to deliver a seamless and engaging user experience."
            }
          </p>

          <a href="https://tjrelly.github.io/smart-brain/" target="_blank">
            <button className="px-8 py-2 mt-6 mr-5">Live Site</button>
          </a>
          <a href="https://smart-brain-chi.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-6">Github Repo</button>
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
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>
                PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Clairfai
                API
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

export default Smart
