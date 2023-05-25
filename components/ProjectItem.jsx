import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({title, backgroundImg, projectUrl,tech1, tech2, tech3}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:metallicgradient ease-in duration-300">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute">
          <h3 className="text-2xl text-white tracking-wider text-center font-roboto">
            {title}
          </h3>
          <p className="pt-2 text-center text-bold">{tech1}</p>
          <p className="text-center text-bold">{tech2}</p>
          <p className="pb-4 text-center text-bold">{tech3}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
