import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/avishkarkedar11",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/avishkarkedar11",
  },
  {
    name: "Email",
    icon: HiOutlineEnvelope,
    href: "mailto:avishkarkedar11@gmail.com",
  },
];

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Avishkar Kedar
        </h2>

        <p className="mt-2 text-base text-slate-600">
          AI & Data Science Engineer
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {socialLinks.map(({ name, icon: Icon, href }) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={name}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <Icon className="text-lg" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}