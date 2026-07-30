import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineCheckCircle } from "react-icons/hi2";

export default function EducationCard({ item }) {
  const Icon = item.icon || HiOutlineAcademicCap;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 p-7 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Icon Badge Container */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/60 dark:bg-blue-950/80 dark:text-blue-400 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white">
          <Icon className="h-8 w-8 transition-colors" />
        </div>

        {/* Content Details */}
        <div className="flex-1">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-['Sora'] text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.degree} {item.field && `in ${item.field}`}
              </h3>

              <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {item.institution}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <HiOutlineCalendar size={14} />
                {item.year}
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                <HiOutlineCheckCircle size={14} />
                {item.scoreLabel}: {item.score}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}