import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
      >
        <span className="text-sm font-semibold tracking-wide text-blue-600">
          🚀 My Work
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
      >
        Featured Projects
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
      >
        A selection of AI/ML, Data Science, Web, and Mobile projects that
        showcase my skills in building scalable applications, solving
        real-world problems, and creating modern user experiences.
      </motion.p>
    </div>
  );
}