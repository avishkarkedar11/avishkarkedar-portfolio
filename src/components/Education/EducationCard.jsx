import { motion } from "framer-motion";
import {
  HiOutlineCalendarDays,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
};

export default function EducationCard({ item }) {
  const Icon = item.icon;

  const colors = colorMap[item.color] || colorMap.blue;

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        {/* Icon */}
        <div
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border ${colors.border} ${colors.bg}`}
        >
          <Icon className={`h-10 w-10 ${colors.text}`} />
        </div>

        {/* Content */}
        <div className="flex-1">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {item.institution}
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
                {item.degree}
                {item.field && (
                  <>
                    {" "}
                    — {item.field}
                  </>
                )}
              </p>

              <p className="mt-4 text-slate-600">
                <span className="font-semibold">
                  {item.scoreLabel}:
                </span>{" "}
                {item.score}
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <HiOutlineCalendarDays className="h-4 w-4" />
                {item.year}
              </div>

              <div
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${colors.badge}`}
              >
                <HiOutlineCheckBadge className="h-4 w-4" />
                {item.status}
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}