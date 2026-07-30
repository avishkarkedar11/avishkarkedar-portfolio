import { motion } from "framer-motion";

export default function EducationHeader() {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
        EDUCATION
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
      >
        Building a strong academic foundation in Artificial Intelligence, Machine Learning, Data Science, and Computer Engineering.
      </motion.p>
    </div>
  );
}