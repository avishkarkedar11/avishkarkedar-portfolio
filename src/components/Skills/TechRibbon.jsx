import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaAndroid,
} from "react-icons/fa6";

import {
  SiJavascript,
  SiFlask,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";

import { TbBrandOpenai } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

const techStack = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Power BI", icon: <BsBarChartFill /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Generative AI", icon: <TbBrandOpenai /> },
];

const items = [...techStack, ...techStack];

export default function TechRibbon() {
  return (
    <section className="relative overflow-hidden py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />

      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div className="flex w-max animate-tech-scroll hover:[animation-play-state:paused] gap-6">
        {items.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-6 py-3 shadow-xs transition-all duration-300 hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
          >
            <span className="text-xl text-blue-600 dark:text-blue-400 transition-transform duration-300 hover:scale-110">
              {tech.icon}
            </span>

            <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}