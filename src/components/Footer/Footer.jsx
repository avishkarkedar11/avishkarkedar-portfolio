import { motion } from "framer-motion";
import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-24 w-full border-t border-slate-200 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div className="w-full lg:w-auto">
            <FooterBrand />
          </div>

          {/* Navigation + Copyright + Back To Top */}
          <div className="w-full lg:w-auto">
            <FooterBottom />
          </div>
        </div>
      </motion.div>
    </footer>
  );
}