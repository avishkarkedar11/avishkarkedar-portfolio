import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCodeBracket,
  HiOutlineXMark,
  HiCheckCircle,
} from "react-icons/hi2";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute right-5 top-5 z-20 rounded-full bg-slate-900/80 text-white p-2.5 shadow-lg backdrop-blur-md transition hover:bg-slate-900 hover:scale-105"
              >
                <HiOutlineXMark className="h-5 w-5 text-white" />
              </button>

              <div className="overflow-y-auto">

                {/* Screenshot */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10">

                  {/* Description */}
                  <section>
                    <h3 className="font-['Sora'] text-2xl font-bold text-slate-900 dark:text-white">
                      Project Overview
                    </h3>

                    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300 text-base">
                      {project.description}
                    </p>
                  </section>

                  {/* Features */}
                  {project.highlights?.length > 0 && (
                    <section className="mt-10">
                      <h3 className="font-['Sora'] text-2xl font-bold text-slate-900 dark:text-white">
                        Key Features
                      </h3>

                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {project.highlights.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-4"
                          >
                            <HiCheckCircle className="mt-1 text-blue-600 dark:text-blue-400 shrink-0" />

                            <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Tech Stack */}
                  <section className="mt-10">
                    <h3 className="font-['Sora'] text-2xl font-bold text-slate-900 dark:text-white">
                      Technologies
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl bg-blue-50 dark:bg-blue-950/60 px-4 py-2 text-xs font-bold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Links */}
                  <section className="mt-10 flex flex-col gap-4 sm:flex-row pt-6 border-t border-slate-100 dark:border-slate-800">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-bold text-white shadow-md transition hover:shadow-lg"
                      >
                        Live Demo
                        <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-300 dark:border-slate-700 px-6 py-3.5 font-bold text-slate-700 dark:text-slate-200 transition hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800"
                      >
                        GitHub
                        <HiOutlineCodeBracket className="h-5 w-5" />
                      </a>
                    )}

                  </section>

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}