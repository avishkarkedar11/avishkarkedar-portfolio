import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function FooterBottom() {
  const handleScroll = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 lg:items-end"
    >
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-end">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
          >
            {link.name}

            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Bottom Row */}
      <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row lg:min-w-[520px]">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          © {new Date().getFullYear()} Avishkar Kedar. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <span>Back to Top</span>

          <HiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </motion.div>
  );
}