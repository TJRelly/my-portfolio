import React from "react"
import Image from "next/image"
import Link from "next/link"
import AI2 from "../../../public/projects/AI2.png"
import { RiRadioButtonFill } from "react-icons/ri"

const Wizard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image className="absolute z-1 object-cover" fill src={AI2} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Code Wizard</h2>
          <h3> Vanilla Javascript | Node JS | OpenAI API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-4 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Overview
          </h2>
          <p className="pt-4">
            {
              "Code Wizard is a cutting-edge JavaScript AI application powered by OpenAI's latest machine learning model. With its sleek and intuitive user interface inspired by the ChatGPT app's dark mode, Code Wizard provides a seamless and elegant experience. Leveraging the advanced GPT-3 model API, users can effortlessly seek assistance with JavaScript, React JS, or any other coding language. Notably, Code Wizard goes beyond conventional coding support, enabling users to seamlessly transfer code from one language to another. Whether you're a beginner or an experienced developer, Code Wizard empowers you with an intelligent and versatile AI companion for all your coding needs."
            }
          </p>

          <a href="https://coding-ai-eta.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-6 mr-5">
              Live Site
            </button>
          </a>
          <a href="https://github.com/TJRelly/coding-ai" target="_blank">
            <button className="px-8 py-2 mt-6">
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
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Vanilla
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>
                Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>OpenAI
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1"></RiRadioButtonFill>CSS
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

export default Wizard
