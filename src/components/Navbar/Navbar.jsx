import { useState } from "react";
import { motion } from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineDownload,
} from "react-icons/hi";

import { FiMoon } from "react-icons/fi";

import navigation from "../../constants/navigation";

import Logo from "../Common/Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full px-6 py-5"
  >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/30 bg-white/70 px-8 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300">

        {/* Logo */}

        <Logo />

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
  key={item.id}
  href={item.href}
  className={`group relative py-2 text-[16px] font-semibold transition duration-300 ${
    item.id === "home"
      ? "text-blue-600"
      : "text-slate-700 hover:text-blue-600"
  }`}
>
  {item.label}

  <span
    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
      item.id === "home"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}
  ></span>
</a>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

         <button className="group flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl">
            Download Resume
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:rotate-180 hover:bg-slate-100">
            <FiMoon size={20} />
          </button>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="mx-auto mt-4 max-w-7xl rounded-3xl bg-white p-6 shadow-2xl lg:hidden">

          <div className="flex flex-col gap-6">

            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-medium text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button className="mt-4 rounded-xl bg-blue-600 py-3 font-semibold text-white">
              Download Resume
            </button>

          </div>

        </div>
      )}
    </motion.header>
  );
}