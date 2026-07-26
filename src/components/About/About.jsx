import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-10"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-4 font-['Sora'] text-5xl font-bold text-slate-900">
            Get to Know Me Better
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Passionate about Artificial Intelligence, Machine Learning,
            Data Science and building modern applications that create
            real-world impact.
          </p>

        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            <h3 className="text-3xl font-bold text-slate-900">
              Building AI Solutions with Modern Technology
            </h3>

            <p className="text-lg leading-9 text-slate-600">
              I am an Artificial Intelligence & Data Science undergraduate
              passionate about Machine Learning, Full Stack Development,
              Generative AI, and Data Analytics.
            </p>

            <p className="text-lg leading-9 text-slate-600">
              My goal is to build intelligent products that solve real-world
              problems while continuously learning new technologies and
              delivering impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Python",
                "Machine Learning",
                "Data Science",
                "React",
                "Flask",
                "SQL",
                "Power BI",
                "Generative AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-5 py-2 font-medium text-blue-600"
                >
                  {skill}
                </span>
              ))}

            </div>

            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
              Download Resume
            </button>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >

            <StatCard
              icon={<FaGraduationCap />}
              number="8.9"
              label="CGPA"
            />

            <StatCard
              icon={<FaLaptopCode />}
              number="10+"
              label="Projects"
            />

            <StatCard
              icon={<FaBriefcase />}
              number="3"
              label="Internships"
            />

            <StatCard
              icon={<FaRocket />}
              number="2+"
              label="Years Learning"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
        {icon}
      </div>

      <h3 className="text-4xl font-bold text-slate-900">
        {number}
      </h3>

      <p className="mt-2 text-slate-500">
        {label}
      </p>

    </div>
  );
}