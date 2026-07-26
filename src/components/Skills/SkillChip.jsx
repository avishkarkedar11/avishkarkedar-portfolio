import { motion } from "framer-motion";

export default function SkillChip({ icon, name }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center gap-3">
        <div className="text-xl text-blue-600 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <span className="text-sm font-medium text-slate-700">
          {name}
        </span>
      </div>
    </motion.div>
  );
}