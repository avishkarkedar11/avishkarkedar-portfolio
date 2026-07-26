import { AnimatePresence, motion } from "framer-motion";
import {
  HiCheckCircle,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import TechBadge from "./TechBadge";

export default function ExperienceContent({ experience }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={experience.id}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
      >
        {/* Top Accent */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400" />

        <div className="p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="max-h-12 object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {experience.company}
                </h2>

                <p className="mt-1 text-lg text-blue-600">
                  {experience.role}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                    <HiOutlineCalendarDays />
                    {experience.duration}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                    <HiOutlineMapPin />
                    {experience.location}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                    <HiOutlineBriefcase />
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            {experience.current && (
              <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                ● Current
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-slate-200" />

          {/* About */}
          <section>
            <h3 className="text-xl font-bold text-slate-900">
              About the Role
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {experience.description}
            </p>
          </section>

          {/* Achievements */}
          <section className="mt-10">
            <h3 className="text-xl font-bold text-slate-900">
              Key Contributions
            </h3>

            <div className="mt-6 space-y-4">
              {experience.achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <HiCheckCircle className="text-blue-600" />
                  </div>

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mt-10">
            <h3 className="text-xl font-bold text-slate-900">
              Tech Stack
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  name={tech}
                />
              ))}
            </div>
          </section>

          {/* Buttons */}
          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={experience.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <HiOutlineDocumentText className="text-xl" />
              View Certificate
            </a>

            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
            >
              <HiOutlineArrowTopRightOnSquare className="text-xl" />
              Visit Website
            </a>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}