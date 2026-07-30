import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onClick?.(project)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xs backdrop-blur-md transition-all duration-500 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Soft gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Image Preview Container with Dark Mockup Top Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 dark:bg-slate-950">
        {/* Mockup Frame Window Dots */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/60 px-2.5 py-1 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>

        {/* Image Zoom Effect */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

        {/* Category & Featured Badge */}
        <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
          <span className="rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200/40 dark:border-slate-700/40 backdrop-blur-md shadow-xs">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-['Sora'] text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100/90 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer with Buttons */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            {project.live && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:shadow-md"
              >
                <HiOutlineExternalLink size={15} />
                Live Demo
              </motion.a>
            )}

            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 shadow-xs transition hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
              >
                <HiOutlineCode size={15} />
                Code
              </motion.a>
            )}
          </div>

          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Details →
          </span>
        </div>
      </div>
    </motion.article>
  );
}