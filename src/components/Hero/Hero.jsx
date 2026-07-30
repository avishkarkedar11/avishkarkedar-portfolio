import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineDownload, HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { BsCpu, BsBarChartLine } from "react-icons/bs";
import resume from "../../assets/resume/Avishkar_Resume.pdf";
import profileImage from "../../assets/images/profile.png";

export default function Hero() {
  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDownloadResume = (e) => {
    // Fire celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#4f46e5", "#7c3aed", "#38bdf8"],
      });
    } catch (err) {
      // fallback silent
    }
  };

  const stats = [
    { value: "12+", label: "Projects" },
    { value: "15+", label: "Certifications" },
    { value: "2+", label: "Internships" },
    { value: "8.9", label: "CGPA" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50/60 dark:bg-slate-950/60 pt-28 pb-12 lg:pt-32 lg:pb-16 bg-grid-pattern transition-colors duration-300"
    >
      {/* Mesh Gradient Ambient Background Lights */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[550px] w-[550px] rounded-full bg-blue-500/20 dark:bg-blue-600/15 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/15 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 h-[450px] w-[450px] rounded-full bg-purple-500/15 dark:bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Live Status Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 dark:border-blue-900/60 dark:bg-slate-900/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-blue-400"></span>
              </span>
              AI Engineer | Data Scientist | Full Stack Developer
            </motion.div>

            {/* Main Headline with Animated Gradient Shimmer */}
            <div>
              <h1 className="font-['Sora'] text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Hi, I'm <br />
                <span className="animate-text-gradient">
                  Avishkar Kedar
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              I build intelligent AI systems and <strong className="font-semibold text-slate-900 dark:text-white">data-driven solutions</strong> that solve real-world problems and create meaningful impact.
            </p>

            {/* Action CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleViewProjects}
                className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                <HiOutlineSparkles size={18} className="animate-spin-slow" />
                View My Work
                <HiOutlineArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href={resume}
                download="Avishkar_Kedar_Resume.pdf"
                onClick={handleDownloadResume}
                className="group flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 px-7 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-700 dark:hover:bg-slate-800 hover:shadow-md"
              >
                Download Resume
                <HiOutlineDownload size={18} className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>

            {/* Social Connect Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">Connect with me</span>
              
              <motion.a
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/avishkarkedar"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
              >
                <FaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/avishkarkedar11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-slate-800 hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white hover:shadow-md"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:avishkarkedar11@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400 hover:shadow-md"
              >
                <FaEnvelope size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://leetcode.com/u/avishkarkedar"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-xs transition-all duration-300 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-md"
              >
                <SiLeetcode size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual & Floating Badge Cards (5 Cols) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5">
            
            {/* Center Profile Container */}
            <div className="relative flex items-center justify-center w-full max-w-md">
              
              {/* Rotating Gradient Ring Backdrop */}
              <div className="absolute inset-0 m-auto h-[410px] w-[410px] rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/25 to-purple-500/25 blur-3xl animate-pulse-glow" />

              {/* Profile Glass Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 overflow-hidden rounded-[40px] border border-white/90 dark:border-slate-800 bg-gradient-to-b from-white/90 via-blue-50/60 to-white/90 dark:from-slate-900/90 dark:via-blue-950/40 dark:to-slate-900/90 p-3.5 shadow-[0_30px_70px_-15px_rgba(37,99,235,0.22)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-b from-blue-100/70 to-purple-100/50 dark:from-blue-950/60 dark:to-purple-950/40">
                  <img
                    src={profileImage}
                    alt="Avishkar Kedar Profile"
                    className="h-[390px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Tech Badges around profile */}
              {/* Badge 1: Python */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -left-4 top-10 z-20 flex items-center gap-2.5 rounded-2xl border border-white/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                  <FaPython size={18} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Python</span>
              </motion.div>

              {/* Badge 2: Machine Learning */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-4 top-16 z-20 flex items-center gap-2.5 rounded-2xl border border-white/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-slow"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                  <BsCpu size={18} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Machine Learning</span>
              </motion.div>

              {/* Badge 3: Data Science */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-6 bottom-16 z-20 flex items-center gap-2.5 rounded-2xl border border-white/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-slow"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                  <BsBarChartLine size={18} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Data Science</span>
              </motion.div>

              {/* Badge 4: React */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 bottom-10 z-20 flex items-center gap-2.5 rounded-2xl border border-white/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400">
                  <FaReact size={18} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">React</span>
              </motion.div>
            </div>

            {/* Statistics Bar Directly Under Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 grid w-full max-w-md grid-cols-4 gap-2 rounded-2xl border border-white/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-3.5 shadow-2xl backdrop-blur-md"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center p-1.5 transition-transform duration-300 hover:scale-105">
                  <span className="font-['Sora'] text-lg font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent sm:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}