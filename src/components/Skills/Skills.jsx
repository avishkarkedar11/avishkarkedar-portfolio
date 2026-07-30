import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { skillCategories, allSkills } from "../../data/skills";
import TechRibbon from "./TechRibbon";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <>
      <section id="skills" className="relative py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-950/70 transition-colors duration-300">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              SKILLS
            </div>

            <h2 className="mt-4 font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Technologies I Work With
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              A comprehensive breakdown of tools, languages, and frameworks I use to build scalable AI systems and web applications.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {skillCategories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`relative rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25"
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Technology Cards Grid */}
          <motion.div
            layout
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.id}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 p-5 shadow-xs transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Subtle hover gradient backdrop */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/80 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-700">
                      {skill.icon}
                    </div>

                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-['Sora'] text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>

                      {/* 5-Dot Experience Indicator */}
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                              dot <= skill.rating
                                ? "bg-blue-600 dark:bg-blue-400 group-hover:bg-indigo-600"
                                : "bg-slate-200 dark:bg-slate-800"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setActiveTab("All")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
            >
              View All Skills
              <HiOutlineArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* Ribbon */}
      <TechRibbon />
    </>
  );
}