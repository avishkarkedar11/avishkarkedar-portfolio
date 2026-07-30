import { motion } from "framer-motion";

export default function CertificationsHeader() {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
        CERTIFICATIONS & EXPERIENCE
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
      >
        Verified Credentials
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
      >
        Industry-recognized certifications and practical job simulations in AI, Machine Learning, Data Analytics, and Full Stack Engineering.
      </motion.p>
    </div>
  );
}