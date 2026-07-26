import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaAndroid,
  FaBootstrap,
} from "react-icons/fa6";

import {
  SiJavascript,
  SiMysql,
  SiFlask,
  SiTailwindcss,
  SiDocker,
  SiFirebase,
  SiKubernetes,
} from "react-icons/si";

import {
  BsRobot,
  BsGlobe,
  BsPhone,
  BsTools,
  BsCpu,
  BsBarChartFill,
} from "react-icons/bs";

import { TbLink } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Programming",
    subtitle: "Languages & Core Development",
    icon: <BsCpu />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems",
    icon: <BsRobot />,
    skills: [
      { name: "Machine Learning", icon: "🤖" },
      { name: "Deep Learning", icon: "🧠" },
      { name: "NLP", icon: "💬" },
      { name: "Generative AI", icon: "✨" },
    ],
  },

  {
    title: "Web Development",
    subtitle: "Modern Web Technologies",
    icon: <BsGlobe />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },

  {
    title: "Android Development",
    subtitle: "Native Android Apps",
    icon: <BsPhone />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Android Studio", icon: <FaAndroid /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Material Design", icon: "🎨" },
    ],
  },

  {
    title: "Tools & Cloud",
    subtitle: "Development Ecosystem",
    icon: <BsTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },

  {
    title: "Data & Infrastructure",
    subtitle: "Analytics & DevOps",
    icon: <BsBarChartFill />,
    skills: [
      { name: "Power BI", icon: <BsBarChartFill /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "LangChain", icon: <TbLink /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
    ],
  },
];