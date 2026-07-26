import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import TechRibbon from "./TechRibbon";

import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              MY SKILLS
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Technologies & Expertise
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              I build AI-powered applications, modern web platforms, Android
              applications, and scalable software using industry-standard tools
              and technologies.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <TechRibbon />
    </>
  );
}