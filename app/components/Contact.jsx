"use client"; // This is a client component
import Image from "next/image";
import { React, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          email,
          subject,
          message,
        }),
      });
      if (res.ok) console.log("message sent successfully");
    } catch (err) {
      console.error("Err", err);
    }
  };

  return (
    <div id="contact" className="w-full py-14 px-8 relative bg-[#ecf0f3]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-gray-500">
          Contact
        </p>
        <h2 className="py-4 text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* {left} */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 w-full h-full rounded-xl">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/img/contact-us.jpg"
                  alt="contact us"
                  width={450}
                  height={300}
                />
              </div>
              <div>
                <h2 className="py-3 font-corgar">Terrell Jackson</h2>
                <p>Software Developer</p>
                <p className="py-4">
                  {
                    "I am available for contract or full-time positions. Contact me and let's talk."
                  }
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
              </div>
              <div className="flex items-center py-4 w-[300px] justify-between">
                <a
                  href="https://www.linkedin.com/in/terrelljackson-tj/"
                  target="_blank"
                >
                  <Tooltip content={"Linkedin"} color={"invert"}>
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                      <FaLinkedinIn />
                    </div>
                  </Tooltip>
                </a>
                <a href="https://github.com/TJRelly" target="_blank">
                  <Tooltip content={"Github"} color={"invert"}>
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                      <FaGithub />
                    </div>
                  </Tooltip>
                </a>
                <a href="mailto:terrell.jackson.jobs@gmail.com" target="_blank">
                  <Tooltip content={"Email"} color={"invert"}>
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                      <AiOutlineMail />
                    </div>
                  </Tooltip>
                </a>
                <a
                  href="/#contact"
                  // target="_blank"
                >
                  <Tooltip content={"Contact Me"} color={"invert"}>
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#D7BE69]/50">
                      <BsFillPersonLinesFill />
                    </div>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          {/* {right} */}
          <div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4 text-gray-700">
            <div className="p-4">
              <form onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 rounded-lg p-3"
                      type="text"
                      id="name"
                      value={name}
                    />
                  </div>
                  <div className="flex flex-col" htmlFor="number">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      onChange={(e) => setNumber(e.target.value)}
                      className="border-2 rounded-lg p-3"
                      type="text"
                      id="number"
                      value={number}
                    />
                  </div>
                </div>
                <div className="flex flex-col" htmlFor="email">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 rounded-lg p-3"
                    type="email"
                    id="email"
                    value={email}
                  />
                </div>
                <div className="flex flex-col" htmlFor="subject">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-2 rounded-lg p-3"
                    type="text"
                    id="subject"
                    value={subject}
                  />
                </div>
                <div className="flex flex-col" htmlFor="message">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    id="message"
                    value={message}
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-l from-[#D7BE69] to-gray-400">
              <HiOutlineChevronDoubleUp className="text-[#ecf0f3]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;