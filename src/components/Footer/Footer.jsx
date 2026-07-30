import { motion } from "framer-motion";
import { HiArrowUp, HiOutlineArrowRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Logo from "../Common/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden bg-[#0B0F19] text-white pt-16 pb-8 border-t border-slate-800">
      {/* Soft background radial glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info (4 Cols) */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-lg font-black text-white shadow-md">
                AK
              </div>
              <span className="font-['Sora'] text-xl font-bold tracking-tight text-white">
                Avishkar Kedar
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI Engineer passionate about building intelligent solutions and creating real-world impact through modern technology.
            </p>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {["About", "Skills", "Experience", "Projects", "Education", "Certifications", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links (2 Cols) */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-slate-300">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://linkedin.com/in/avishkarkedar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avishkarkedar11"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:avishkarkedar11@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <FaEnvelope size={15} />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/avishkarkedar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <SiLeetcode size={15} />
                  LeetCode
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Connect CTA Card (3 Cols) matching mockup */}
          <div className="space-y-4 lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md">
            <h4 className="font-['Sora'] text-sm font-bold text-white">
              Let's Connect
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              I'm always excited to collaborate on innovative projects and ideas.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-blue-500 hover:to-indigo-500"
            >
              Let's Talk
              <HiOutlineArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Avishkar Kedar. All rights reserved.</p>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white shadow-xs"
          >
            <span>Back to Top</span>
            <HiArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 text-blue-400" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}