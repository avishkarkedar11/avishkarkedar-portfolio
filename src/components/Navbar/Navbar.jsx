import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiMoon, FiSun, FiDownload } from "react-icons/fi";
import resume from "../../assets/resume/Avishkar_Resume.pdf";
import navigation from "../../constants/navigation";
import Logo from "../Common/Logo";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/80 px-6 py-3 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.08)] backdrop-blur-xl transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] ${
          scrolled ? "bg-white/90 shadow-lg border-white/90 dark:bg-slate-900/90 dark:border-slate-800/90" : ""
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 xl:gap-9 lg:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}

                {/* Active Dot Indicator matching mockup */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href={resume}
            download="Avishkar_Kedar_Resume.pdf"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition hover:bg-slate-200 dark:hover:bg-slate-700 lg:hidden"
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/60 bg-white/95 dark:border-slate-800 dark:bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 font-semibold transition ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  )}
                </a>
              ))}

              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <button
                  onClick={toggleTheme}
                  title="Toggle theme"
                  aria-label="Toggle theme"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 dark:border-slate-700 dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
                <a
                  href={resume}
                  download="Avishkar_Kedar_Resume.pdf"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-md"
                >
                  <FiDownload size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}