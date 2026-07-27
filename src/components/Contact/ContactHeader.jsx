import { motion } from "framer-motion";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function ContactHeader() {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2"
      >
        <HiOutlineEnvelope className="h-5 w-5 text-blue-600" />

        <span className="text-sm font-semibold tracking-wide text-blue-600">
          Contact
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl"
      >
        Let's{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Work Together
        </span>
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "90px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
      >
        I'm always open to discussing{" "}
        <span className="font-semibold text-slate-800">
          AI & Machine Learning, Data Science, Web Development,
        </span>{" "}
        internship opportunities, freelance projects, or exciting
        collaborations. Feel free to reach out—I'd love to connect.
      </motion.p>
    </div>
  );
}