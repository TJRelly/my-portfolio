"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("");

    const pathname = usePathname();

    useEffect(() => {
        setNavBg(
            pathname === "/"
                ? "rgb(14, 165, 233, 0.75)"
                : "rgb(128, 128, 128, 0.6)"
        );
    }, [pathname]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        if (nav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [nav]);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleShadow);

        return () => {
            window.removeEventListener("scroll", handleShadow);
        };
    }, []);

    return (
        <div>
            <div
                className={
                    shadow
                        ? "fixed w-full h-20 shadow-xl z-[100]"
                        : "fixed w-full h-20 z-[100]"
                }
                style={{
                    background: shadow ? navBg : "transparent",
                    backdropFilter: shadow ? "blur(15px)" : "",
                }}
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
                        <ul className="hidden md:flex text-white">
                            <li className="ml-10 text-sm uppercase hover:text-yellow-400 ease-in duration-200">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="ml-10 text-sm uppercase hover:text-yellow-400 ease-in duration-200">
                                <Link href="/#about">About</Link>
                            </li>
                            <li className="ml-10 text-sm uppercase hover:text-yellow-400 ease-in duration-200">
                                <Link href="/#skills">Skills</Link>
                            </li>
                            <li className="ml-10 text-sm uppercase hover:text-yellow-400 ease-in duration-200">
                                <Link href="/#projects">Projects</Link>
                            </li>
                            <li className="ml-10 text-sm uppercase hover:text-yellow-400 ease-in duration-200">
                                <Link href="/#contact">Contact</Link>
                            </li>
                        </ul>
                        <div
                            onClick={handleNav}
                            className="md:hidden rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 text-white"
                        >
                            <AiOutlineMenu size={20} />
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${
                        nav ? "block" : "hidden"
                    }`}
                >
                    <div
                        className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-sky-500 via-sky-400 to-[#e6e3dd] p-10 transition-transform duration-300 ease-in-out transform ${
                            nav ? "translate-x-0" : "-translate-x-full"
                        }`}
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
                                {
                                    "Let's build something extraordinary together!"
                                }
                            </p>
                        </div>
                        <div className="py-4 flex flex-col text-white">
                            <ul className="uppercase">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-yellow-400 ease-in duration-300"
                                >
                                    <Link href="/">Home</Link>
                                </li>
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-yellow-400 ease-in duration-300"
                                >
                                    <Link href="/#about">About</Link>
                                </li>
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-yellow-400 ease-in duration-300"
                                >
                                    <Link href="/#skills">Skills</Link>
                                </li>
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-yellow-400 ease-in duration-300"
                                >
                                    <Link href="/#projects">Projects</Link>
                                </li>
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-yellow-300 ease-in duration-300"
                                >
                                    <Link href="/#contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="pt-[8rem]">
                                <p className="uppercase tracking-widest]">
                                    {"Let's connect"}
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-gray-700">
                                    <a
                                        href="https://www.linkedin.com/in/terrelljackson-tj/"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            content={"Linkedin"}
                                            color={"invert"}
                                        >
                                            <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                                                <FaLinkedinIn />
                                            </div>
                                        </Tooltip>
                                    </a>
                                    <a
                                        href="https://github.com/TJRelly"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            content={"Github"}
                                            color={"invert"}
                                        >
                                            <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                                                <FaGithub />
                                            </div>
                                        </Tooltip>
                                    </a>
                                    <a
                                        href="mailto:terrell.jackson.jobs@gmail.com"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            content={"Email"}
                                            color={"invert"}
                                        >
                                            <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                                                <AiOutlineMail />
                                            </div>
                                        </Tooltip>
                                    </a>
                                    <a
                                        href="/#contact"
                                    >
                                        <Tooltip
                                            content={"Contact Me"}
                                            color={"invert"}
                                        >
                                            <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300/90">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </Tooltip>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

