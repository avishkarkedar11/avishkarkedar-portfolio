import { motion } from "framer-motion";

export default function EducationStats({ stats }) {
  return (
    <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -6,
          }}
          className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
        >
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-3xl transition-transform duration-300 group-hover:scale-110">
            {stat.icon}
          </div>

          {/* Value */}
          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>

          {/* Label */}
          <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}