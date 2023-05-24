import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="w-full md:h-screen p-2 flex items-center py-16 relative"
      style={{ background: "linear-gradient(#ECF0F3,#F4EED7,#ECF0F3)" }}
    >
      <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest">About</p>
          <h2>Who I Am</h2>
          <p>{"I'm not your average developer;"}</p>
          <p>
            I possess a remarkable ability to quickly learn and excel in new
            skills. Alongside my technical proficiency, I am an accomplished
            pianist and currently serve as the acting pastor at my church,
            showcasing my leadership abilities and dedication to serving others.
            I have a deep passion for singing and a genuine love for the arts,
            demonstrating my creative spirit and ability to find inspiration
            from diverse sources.
          </p>
          <p>
            Moreover, I enjoy playing Raid Shadow Legends and immersing myself
            in the world of gaming, highlighting my adaptability and
            understanding of user experiences. In addition to my diverse
            interests, I currently work as a Middle and High School math tutor,
            actively contributing to the education and development of young
            minds.
          </p>
          <p>
            My fascination with learning new technologies and my insatiable
            curiosity drive me to constantly stay ahead of the curve, ensuring I
            am always up-to-date and well-versed in the latest advancements. My
            well-rounded background and diverse skill set make me a valuable
            asset to any team, bringing a unique perspective, technical
            proficiency, and a passion for continuous growth and success to your
            organization.
          </p>
        </div>
        <div>
          <Image src="/img/gold-pc.jpg" alt="gold pc" width={500} height={1} />
        </div>
      </div>
    </div>
  );
};

export default About;
