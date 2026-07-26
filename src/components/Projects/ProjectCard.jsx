import { motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={() => onClick?.(project)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            {project.category}
          </span>

          {project.featured && (
            <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
              ⭐ Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
          {project.title}
        </h3>

        <p className="mt-4 min-h-[84px] line-clamp-3 text-[15px] leading-7 text-slate-600">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-5 min-h-[64px] flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:bg-blue-50 group-hover:text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex min-w-[180px] gap-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Live Demo
                <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              >
                GitHub
                <HiOutlineCodeBracket className="h-4 w-4" />
              </a>
            )}
          </div>

          <span className="text-xs font-medium text-slate-400">
            Click to view →
          </span>
        </div>
      </div>
    </motion.article>
  );
}