import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiGit, SiGithub,SiMongodb,SiTypescript,SiExpress,SiSocketdotio,SiPhp,SiMysql  
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-xl" /> },
  { name: "Git", icon: <SiGit className="text-orange-400 text-xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300 text-xl" /> },
  { name: "MongoDB", icon: <SiMongodb  className="text-green-300 text-xl" /> },
  { name: "TypeScript", icon: <SiTypescript   className="text-blue-400 text-xl" /> },
  { name: "Express JS", icon: <SiExpress    className="text-white text-xl" /> },
  { name: "Socket", icon: <SiSocketdotio   className="text-white text-xl" /> },
  { name: "php", icon: <SiPhp    className="text-blue-400 text-xl" /> },
  { name: "mySQL", icon: <SiMysql     className="text-blue-400 text-xl" /> },
];

export default function Skills() {
  return (
    <section className="flex justify-center items-center  px-4">
      <div className="w-full max-w-3xl p-6  rounded-xl ">
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 b text-white rounded-lg border border-gray-700 bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1   "
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
