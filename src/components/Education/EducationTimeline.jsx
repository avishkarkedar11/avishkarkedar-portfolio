import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

export default function EducationTimeline({ education }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Vertical Timeline Line */}
      <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200 md:block" />

      <div className="space-y-10">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="relative md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-10 hidden md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
            </div>

            {/* Education Card */}
            <EducationCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}