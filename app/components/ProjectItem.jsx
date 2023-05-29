import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  tech1,
  tech2,
  tech3,
}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:projectgradient ease-in duration-300">
        <Image
          className="rounded-xl group-hover:opacity-5"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute">
          <h3 className="text-2xl tracking-wider text-center font-corgar">
            {title}
          </h3>
          <p className="pt-2 text-center text-bold">{tech1}</p>
          <p className="text-center text-bold">{tech2}</p>
          <p className="pb-4 text-center text-bold">{tech3}</p>
          <Link href={projectUrl}>
            <p className="text-center py-2 rounded-lg button text-lg cursor-pointer font-roboto">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
