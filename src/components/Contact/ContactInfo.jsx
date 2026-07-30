import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Email Card */}
      <a
        href="mailto:avishkarkedar11@gmail.com"
        className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/5"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors">
          <HiOutlineEnvelope size={22} />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Email</span>
          <span className="font-['Sora'] text-sm font-bold text-slate-800 dark:text-slate-100 break-all group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            avishkarkedar11@gmail.com
          </span>
        </div>
      </a>

      {/* Phone Card */}
      <a
        href="tel:+917350720383"
        className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/5"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-600 dark:group-hover:text-white transition-colors">
          <HiOutlinePhone size={22} />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Phone</span>
          <span className="font-['Sora'] text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            +91 7350720383
          </span>
        </div>
      </a>

      {/* Location Card */}
      <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
          <HiOutlineMapPin size={22} />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Location</span>
          <span className="font-['Sora'] text-sm font-bold text-slate-800 dark:text-slate-100">
            Pune, Maharashtra, India
          </span>
        </div>
      </div>

      {/* Availability Status Card */}
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/40 p-4 text-emerald-800 dark:text-emerald-300">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider block text-emerald-700 dark:text-emerald-400">Availability</span>
          <span className="font-semibold text-sm text-emerald-900 dark:text-emerald-200">Open to Work & Internships</span>
        </div>
      </div>

      {/* Social Links Bar */}
      <div className="pt-2 flex items-center gap-3">
        <a
          href="https://linkedin.com/in/avishkarkedar11"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="https://github.com/avishkarkedar11"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white dark:hover:text-white hover:border-slate-900"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://leetcode.com/u/avishkarkedar"
          target="_blank"
          rel="noreferrer"
          aria-label="LeetCode"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white dark:hover:text-white hover:border-amber-500"
        >
          <SiLeetcode size={18} />
        </a>
      </div>
    </motion.div>
  );
}