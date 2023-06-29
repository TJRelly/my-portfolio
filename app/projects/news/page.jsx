import React from "react"
import Image from "next/image"
import Link from "next/link"
import news1 from "../../../public/projects/news1.png"
import { RiRadioButtonFill } from "react-icons/ri"

const News = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1 object-cover" fill src={news1} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6">
          <h2 className="py-2">News Landing Page</h2>
          <h3>HTML | CSS | Vanilla Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-4 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Overview
          </h2>
          <p className="pt-4 max-w-[750px]">
            For this project, I developed a responsive news website landing page
            based on a designed layout. The mobile version of the landing page
            incorporated a sliding navigation feature, which was achieved using
            a combination of CSS and JavaScript. This interactive navigation
            allowed users to seamlessly explore different sections of the
            website with smooth and intuitive sliding transitions. By focusing
            on delivering a visually appealing and user-friendly experience
            across devices, the resulting landing page successfully showcased
            the latest news while providing effortless navigation for mobile
            users.
          </p>
          <a href="https://tjrelly.github.io/news-homepage/" target="_blank">
            <button className="px-8 py-2 mt-6 mr-5">Live Site</button>
          </a>
          <a href="https://github.com/tjrelly/news-homepage" target="_blank">
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
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>
                Vanilla Javascript
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

export default News
