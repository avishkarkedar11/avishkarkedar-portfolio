import { motion } from "framer-motion";

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="mt-12 mb-12 flex justify-center">
      <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-sm">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <motion.button
              key={category}
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2 }}
              onClick={() => onCategoryChange(category)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-blue-600 dark:bg-blue-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="activeProjectFilter"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                  }}
                  className="absolute inset-0 -z-10 rounded-xl bg-blue-600 dark:bg-blue-600"
                />
              )}

              <span className="relative z-10">
                {category}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}