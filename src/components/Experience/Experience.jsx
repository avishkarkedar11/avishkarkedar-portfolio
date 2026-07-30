import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Ambient Lights */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-50/80 dark:bg-blue-950/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-indigo-50/80 dark:bg-indigo-950/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            EXPERIENCE
          </div>

          <h2 className="mt-4 font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Gaining hands-on experience through machine learning internships, data analytics, and full-stack software development.
          </p>
        </motion.div>

        {/* Responsive Vertical Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline Thread Line */}
          <div className="absolute left-4 sm:left-32 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-200 dark:to-slate-800" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row sm:items-start group"
              >
                {/* Desktop Date Label on Left Column */}
                <div className="hidden sm:block shrink-0 sm:w-28 sm:text-right pt-2 pr-6">
                  <span className="font-['Sora'] text-base font-extrabold text-slate-900 dark:text-white block">
                    {exp.year}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-0.5">
                    {exp.duration}
                  </span>
                </div>

                {/* Timeline Connector Node Circle */}
                <div className="absolute left-4 sm:left-32 top-3.5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 shadow-md shadow-blue-500/30 group-hover:scale-125 transition-transform duration-300">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </div>

                {/* Main Glass Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="ml-9 sm:ml-8 flex-1 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 sm:p-7 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500/60 hover:shadow-xl dark:hover:shadow-blue-500/10"
                >
                  {/* Card Top Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      {/* Mobile Date Badge */}
                      <div className="sm:hidden mb-2 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                        <HiOutlineCalendar size={14} />
                        <span>{exp.duration} ({exp.year})</span>
                      </div>

                      <h3 className="font-['Sora'] text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                        <span className="flex items-center gap-1.5">
                          <HiOutlineBriefcase size={15} />
                          {exp.company}
                        </span>

                        {exp.location && (
                          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
                            <HiOutlineMapPin size={14} />
                            {exp.location}
                          </span>
                        )}

                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <HiOutlineExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Role Type Badge */}
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}

                      <span className="rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bulleted Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <HiOutlineCheckCircle className="mt-0.5 text-blue-500 dark:text-blue-400 shrink-0" size={15} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
          >
            Explore Portfolio Projects
            <HiOutlineArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}