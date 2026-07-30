import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function ProjectsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          PROJECTS
        </div>

        <h2 className="mt-3 font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Featured Projects
        </h2>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        href="https://github.com/avishkarkedar11"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300"
      >
        View All Projects on GitHub
        <HiOutlineArrowRight size={16} />
      </motion.a>
    </div>
  );
}