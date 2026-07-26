import { useState } from "react";
import { motion } from "framer-motion";

import { experiences } from "../../data/experience";

import ExperienceSidebar from "./ExperienceSidebar";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState(experiences[0]);

  return (
    <section
      id="experience"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Experience
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Building practical experience through internships, AI projects,
            analytics, and full-stack development.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <ExperienceSidebar
            companies={experiences}
            activeCompany={activeCompany}
            setActiveCompany={setActiveCompany}
          />

          <ExperienceContent
            experience={activeCompany}
          />
        </div>
      </div>
    </section>
  );
}