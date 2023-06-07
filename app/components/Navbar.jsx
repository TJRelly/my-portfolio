"use client" // This is a client component
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setshadow] = useState(false)
  const [navBg, setNavBg] = useState("")
  const [menuBg, setMenuBg] = useState("")
  const [linkColor, setLinkColor] = useState("#1f2937")

  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setNavBg("")
      setLinkColor("#ecf0f3")
      setMenuBg("")
    } else {
      setNavBg("")
      setLinkColor("#e6e3dd")
      setMenuBg("")
    }
  }, [pathname])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true)
      } else {
        setshadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-sky-500"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center h-full px-10 2xl:px-16">
        <Link href="/">
          <Image
            src="/img/logo-website.png"
            alt="logo"
            width={50}
            height={20}
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase ease-in duration-200 hover:text-sky-700">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase ease-in duration-200 hover:text-sky-700">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase ease-in duration-200 hover:text-sky-700">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase ease-in duration-200 hover:text-sky-700">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase ease-in duration-200 hover:text-sky-700">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-white"
            style={{ background: `${menuBg}` }}
          >
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-[#e6e3dd] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/img/logo-website.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer text-white hover:scale-110 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="border-b border-yellow-300/75 text-white my-4">
            <p className="w-[80%] md:w-[90%] py-4">
              {"Let's build something extraordinary together!"}
            </p>
          </div>
          <div className="py-4 flex flex-col text-white">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-yellow-500 ease-in duration-200"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-yellow-500 ease-in duration-200"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-yellow-500 ease-in duration-200"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-yellow-500 ease-in duration-200"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-yellow-500 ease-in duration-200"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-[8rem]">
              <p className="uppercase tracking-widest]">{"Let's connect"}</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-sky-400/40">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-sky-400/40">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-sky-400/40">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-sky-400/40">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
