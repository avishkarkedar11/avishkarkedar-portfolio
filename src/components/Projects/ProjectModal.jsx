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
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:bg-white"
              >
                <HiOutlineXMark className="h-6 w-6 text-slate-700" />
              </button>

              <div className="overflow-y-auto">

                {/* Screenshot */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
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
                    <h3 className="text-2xl font-bold text-slate-900">
                      Project Overview
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {project.description}
                    </p>
                  </section>

                  {/* Features */}
                  {project.highlights?.length > 0 && (
                    <section className="mt-10">
                      <h3 className="text-2xl font-bold text-slate-900">
                        Key Features
                      </h3>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {project.highlights.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                          >
                            <HiCheckCircle className="mt-1 text-blue-600" />

                            <span className="text-slate-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Tech Stack */}
                  <section className="mt-10">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Technologies
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Links */}
                  <section className="mt-10 flex flex-col gap-4 sm:flex-row">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
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
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
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