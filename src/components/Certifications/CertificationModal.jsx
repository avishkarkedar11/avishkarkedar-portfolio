import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBuildingOffice2,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineXMark,
  HiOutlineCheckBadge,
  HiOutlineDocumentCheck
} from "react-icons/hi2";

export default function CertificationModal({
  certification,
  isOpen,
  onClose,
}) {
  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute right-5 top-5 z-20 rounded-full bg-slate-900/70 text-white p-2.5 shadow-lg backdrop-blur-md transition hover:bg-slate-900 hover:scale-105"
              >
                <HiOutlineXMark className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto">

                {/* Content */}
                <div className="p-6 sm:p-10">

                  {/* Header Row: Title & Type */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
                    <h2 className="font-['Sora'] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                      {certification.title}
                    </h2>
                    <span className="rounded-full bg-blue-50 dark:bg-blue-950/80 px-4 py-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                      {certification.type}
                    </span>
                  </div>

                  {/* Meta Stats Cards */}
                  <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">

                    <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                        <HiOutlineBuildingOffice2 size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Issuer
                        </p>
                        <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                        <HiOutlineCalendarDays size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Year
                        </p>
                        <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {certification.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                        <HiOutlineClock size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Duration
                        </p>
                        <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {certification.duration}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Description */}
                  <section className="mt-8">
                    <h3 className="font-['Sora'] text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <HiOutlineDocumentCheck className="text-blue-600 dark:text-blue-400" />
                      About this Certification
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {certification.description}
                    </p>
                  </section>

                  {/* Skills */}
                  <section className="mt-8">
                    <h3 className="font-['Sora'] text-lg font-bold text-slate-900 dark:text-white">
                      Key Competencies & Skills
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Action Button */}
                  {certification.credential && certification.credential !== "#" && (
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                      <a
                        href={certification.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                      >
                        Verify Credential
                        <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}