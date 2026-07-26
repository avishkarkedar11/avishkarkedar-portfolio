import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function ProjectGrid({
  projects,
  onProjectClick,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      layout
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
      "
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          layout
          className="h-full"
        >
          <ProjectCard
            project={project}
            onClick={onProjectClick}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}