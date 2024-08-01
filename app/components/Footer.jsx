import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const date = new Date();

  return (
    <footer className="flex items-center justify-between px-4 sm:px-6 md:px-12 h-[50px] bg-sky-400 text-white">
      <div>{`Copyright © ${date.getFullYear()} TJackson`}</div>
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/terrelljackson-tj/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/TJRelly"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/TJR_Tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
