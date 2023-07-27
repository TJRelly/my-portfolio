"use client" // This is a client component
import Image from "next/image"
import Link from "next/link"
import { React, useState } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import { Tooltip } from "@nextui-org/react"
import ConfettiExplosion from "react-confetti-explosion"

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const [isExploding, setIsExploding] = useState(false)

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

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
      })

      if (res.ok) {
        console.log("message sent successfully")
        setSubmitted(true)
        setIsExploding(true)
      }
    } catch (err) {
      console.error("Err", err)
    }
  }

  return (
    <div
      id="contact"
      className="w-full py-16 px-8 relative m-auto bg-[#f5f5f5]"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full text-sky-700">
        <p className="uppercase text-xl text-purple-700 tracking-widest ">Contact</p>
        <h2 className="pt-4 pb-8 text-transparent bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text font-robotoS">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* {left} */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-6">
            <div className="lg:p-4 w-full h-full rounded-xl">
              <div className="flex place-content-center">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/img/contact-us.png"
                  alt="contact us"
                  width={450}
                  height={300}
                />
              </div>
              <div>
                <h2 className="pt-8 pb-3 text-transparent bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text font-robotoS">
                  Terrell Jackson
                </h2>
                <p>Software Engineer</p>
                <p className="pt-4">
                  {
                    "I am available for contract or full-time positions. Contact me and let's talk."
                  }
                </p>
                <p className="pt-2">
                  {
                    "Please complete the adjacent form to send me a direct message."
                  }
                </p>
              </div>
              <div>
                <p className="pt-8">Connect with me!</p>
              </div>
              <div className="flex items-center py-4 w-[300px] justify-between">
                <a
                  href="https://www.linkedin.com/in/terrelljackson-tj/"
                  target="_blank"
                >
                  <Tooltip content={"Linkedin"} color={"invert"}>
                    <div className="connect-btn">
                      <FaLinkedinIn />
                    </div>
                  </Tooltip>
                </a>
                <a href="https://github.com/TJRelly" target="_blank">
                  <Tooltip content={"Github"} color={"invert"}>
                    <div className="connect-btn">
                      <FaGithub />
                    </div>
                  </Tooltip>
                </a>
                <a href="mailto:terrell.jackson.jobs@gmail.com" target="_blank">
                  <Tooltip content={"Email"} color={"invert"}>
                    <div className="connect-btn">
                      <AiOutlineMail />
                    </div>
                  </Tooltip>
                </a>
                <a href="/#contact">
                  <Tooltip content={"Contact Me"} color={"invert"}>
                    <div className="connect-btn">
                      <BsFillPersonLinesFill />
                    </div>
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
          {/* {right} */}
          <div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4 text-gray-700">
            <div className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col justify-center text-center py-8 gap-4 text-sky-800">
                  <h1 className="font-corgar py-4 text-transparent bg-gradient-to-r from-sky-400 to-sky-800 bg-clip-text">
                    Thank you!
                  </h1>
                  <p>Your message has been sent.</p>

                  {isExploding && (
                    <ConfettiExplosion particleCount={250} width={1500} />
                  )}
                </div>
              ) : (
                <form onSubmit={onSubmit} className="text-sky-800">
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
                        required
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
                      required
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
                      rows={8}
                      id="message"
                      value={message}
                      required
                    ></textarea>
                  </div>

                  <button className="w-full p-4 mt-4 hover:scale-[1.025] ease-in duration-300">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 bg-sky-600 text-white duration-300 ease-in p-4 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-white" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
