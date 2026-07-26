import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaBrain,
  FaChartBar,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import profileImage from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-40"></div>

      <div className="absolute right-16 top-12 grid grid-cols-5 gap-4 opacity-30">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-blue-500"
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-3 text-blue-600 shadow-sm">
            <span>👋</span>
            <span className="font-semibold">
              Hello, I'm
            </span>
          </div>

          <div>
            <h1 className="font-['Sora'] text-6xl font-extrabold leading-none text-slate-900 lg:text-8xl">
              Avishkar
            </h1>

            <h1 className="mt-2 font-['Sora'] text-6xl font-extrabold leading-none text-blue-600 lg:text-8xl">
              Kedar
            </h1>
          </div>

          <h2 className="border-l-4 border-blue-600 pl-4 text-3xl font-bold">
            <span className="text-blue-600">
              AI & Machine Learning
            </span>

            <span className="text-slate-900">
              {" "}Engineer
            </span>
          </h2>

          <p className="max-w-xl text-lg leading-9 text-slate-600">
            I build intelligent AI systems, data-driven solutions, and scalable web
            applications that solve real-world problems and create meaningful impact.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
              🚀 View My Projects
            </button>

            <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              📄 Download Resume
            </button>
          </div>

          <div className="flex items-center gap-5 pt-3">

            <div className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <FaGithub className="text-2xl text-slate-700" />
              <span className="mt-2 text-xs">GitHub</span>
            </div>

            <div className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <FaLinkedin className="text-2xl text-blue-600" />
              <span className="mt-2 text-xs">LinkedIn</span>
            </div>

            <div className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <FaEnvelope className="text-2xl text-red-500" />
              <span className="mt-2 text-xs">Email</span>
            </div>

            <div className="flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <SiLeetcode className="text-2xl text-orange-500" />
              <span className="mt-2 text-xs">LeetCode</span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">

          <div className="absolute top-10 h-[520px] w-[520px] rounded-full border border-blue-100"></div>

          <div className="relative z-10 flex h-[610px] w-[560px] items-end justify-center overflow-hidden rounded-[40px] border border-white/60 bg-gradient-to-br from-white via-blue-50 to-white shadow-[0_30px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
            <img
              src={profileImage}
              alt="Avishkar"
              className="h-[110%] object-contain object-bottom"
            />
            <div className="absolute bottom-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
          </div>

          {/* AI Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-24 z-20 w-60 rounded-3xl bg-white p-5 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <FaCode size={22} />
              </div>

              <div>
                <h4 className="font-bold">
                  AI Enthusiast
                </h4>

                <p className="text-sm text-slate-500">
                  Building smart solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-[-40px] bottom-32 z-20 w-56 rounded-3xl bg-white p-5 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <FaChartBar size={22} />
              </div>

              <div>
                <h4 className="font-bold">
                  Data Driven
                </h4>

                <p className="text-sm text-slate-500">
                  Turning data into impact
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem Solver */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-[-30px] bottom-10 z-20 w-60 rounded-3xl bg-white p-5 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <FaBrain size={22} />
              </div>

              <div>
                <h4 className="font-bold">
                  Problem Solver
                </h4>

                <p className="text-sm text-slate-500">
                  Solving real-world challenges
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Star */}
          <div className="absolute right-10 top-48 text-blue-500">
            <Sparkles size={40} />
          </div>

        </div>
      </div>
    </section>
  );
}