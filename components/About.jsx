import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center px-10 py-16 relative"
      style={{ background: "linear-gradient(#ECF0F3,#F4EED7,#ECF0F3)" }}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-gray-500">
            About
          </p>
          <h2 className="py-4 text-transparent bg-gradient-to-r from-[#D7BE69] via-gray-600 to-[#D7BE69] bg-clip-text">
            Who I Am
          </h2>
          <p className="py-2">{"I'm not your average developer;"}</p>
          <p className="py-2 text-gray-600">
            I possess a remarkable ability to quickly learn and excel in new
            skills. Alongside my technical proficiency, I am an accomplished
            pianist and currently serve as the acting pastor at my church,
            showcasing my leadership abilities and dedication to serving others.
            I have a deep passion for singing and a genuine love for the arts,
            demonstrating my creative spirit and ability to find inspiration
            from diverse sources.
          </p>
          <p className="py-2">
            Moreover, I enjoy playing Raid Shadow Legends and immersing myself
            in the world of gaming, highlighting my adaptability and
            understanding of user experiences. In addition to my diverse
            interests, I have also had the privilege of working as a Middle and
            High School math tutor, actively contributing to the education and
            development of young minds.
          </p>
          <p className="py-2 text-gray-600">
            My fascination with learning new technologies and my insatiable
            curiosity drive me to constantly stay ahead of the curve, ensuring I
            am always up-to-date and well-versed in the latest advancements. My
            well-rounded background and diverse skill set make me a valuable
            asset to any team, bringing a unique perspective, technical
            proficiency, and a passion for continuous growth and success to your
            organization.
          </p>
          <p className="py-2 pb-4 underline cursor-pointer hover:text-[#C49F00] ease-in duration-300">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="py-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/img/workspace.png"
            alt="workspace"
            width={800}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
