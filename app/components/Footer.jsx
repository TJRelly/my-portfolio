import React from "react"
import { FaGithub, FaLinkedinIn} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const date = new Date()
  return (
    <footer className="flex items-center justify-center gap-24 sm:gap-40 h-[50px] px-10 2xl:px-16 bg-sky-400 text-white">
      <div>{`Copyright © ${date.getFullYear()} TJackson`}</div>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/terrelljackson-tj/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/TJRelly"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/TJR_Tech"
          target="_blank"
        >
        <FaXTwitter />
        </a>
      </div>
    </footer>
  )
}

export default Footer
