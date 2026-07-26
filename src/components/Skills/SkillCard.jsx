import { motion } from "framer-motion";
import SkillChip from "./SkillChip";

export default function SkillCard({
  icon,
  title,
  subtitle,
  skills,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-blue-400 hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl text-white shadow-lg">
            {icon}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillChip
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}