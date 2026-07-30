import { motion } from "framer-motion";
import { HiOutlineEye, HiOutlineClock, HiCheckCircle } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa6";

export default function CertificationCard({ certification, onClick }) {
  const renderIssuerLogo = (issuer) => {
    const lower = issuer.toLowerCase();
    let initial = "C";
    let colorClass = "from-blue-600 to-indigo-600 text-white";
    
    if (lower.includes("deloitte")) {
      initial = "D";
      colorClass = "from-emerald-500 to-teal-600 text-white";
    } else if (lower.includes("ibase")) {
      initial = "iB";
      colorClass = "from-blue-600 to-cyan-600 text-white";
    } else if (lower.includes("zidio")) {
      initial = "ZD";
      colorClass = "from-purple-600 to-indigo-600 text-white";
    } else if (lower.includes("athenura")) {
      initial = "AT";
      colorClass = "from-amber-500 to-orange-600 text-white";
    }

    return (
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr ${colorClass} font-extrabold text-sm shadow-md`}>
        {initial}
      </div>
    );
  };

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onClick?.(certification)}
      className="group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-7 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-500/10"
    >
      <div className="space-y-4">
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {renderIssuerLogo(certification.issuer)}
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {certification.issuer}
              </h4>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                <HiOutlineClock size={13} className="text-slate-400" />
                <span>{certification.duration} • {certification.year}</span>
              </p>
            </div>
          </div>

          {/* Type Badge */}
          <span className="rounded-full bg-blue-50 dark:bg-blue-950/70 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 shadow-xs shrink-0">
            {certification.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Sora'] text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {certification.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
          {certification.description}
        </p>

        {/* Skill Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="rounded-lg bg-slate-100 dark:bg-slate-800/80 px-2 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
              +{certification.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <HiCheckCircle size={15} />
          Verified Credential
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all shadow-xs"
        >
          <HiOutlineEye size={14} />
          View Details
        </button>
      </div>
    </motion.article>
  );
}