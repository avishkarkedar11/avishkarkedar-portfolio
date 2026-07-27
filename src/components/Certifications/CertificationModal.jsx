import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineBuildingOffice2,
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineXMark,
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
            className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:bg-white"
              >
                <HiOutlineXMark className="h-6 w-6 text-slate-700" />
              </button>

              <div className="overflow-y-auto">

                {/* Certificate */}
                <div className="relative bg-slate-100">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-10">

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                    {certification.title}
                  </h2>

                  {/* Meta */}
                  <div className="mt-6 grid gap-4 md:grid-cols-3">

                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <HiOutlineBuildingOffice2 className="h-6 w-6 text-blue-600" />

                      <div>
                        <p className="text-xs uppercase text-slate-500">
                          Issuer
                        </p>

                        <p className="font-semibold text-slate-900">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <HiOutlineCalendarDays className="h-6 w-6 text-blue-600" />

                      <div>
                        <p className="text-xs uppercase text-slate-500">
                          Year
                        </p>

                        <p className="font-semibold text-slate-900">
                          {certification.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <HiOutlineClock className="h-6 w-6 text-blue-600" />

                      <div>
                        <p className="text-xs uppercase text-slate-500">
                          Duration
                        </p>

                        <p className="font-semibold text-slate-900">
                          {certification.duration}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Description */}
                  <section className="mt-10">
                    <h3 className="text-xl font-bold text-slate-900">
                      About this Certification
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {certification.description}
                    </p>
                  </section>

                  {/* Skills */}
                  <section className="mt-10">
                    <h3 className="text-xl font-bold text-slate-900">
                      Skills Gained
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Button */}
                  {certification.credential !== "#" && (
                    <div className="mt-10">
                      <a
                        href={certification.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                      >
                        View Credential

                        <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
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