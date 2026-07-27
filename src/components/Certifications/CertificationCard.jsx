import { motion } from "framer-motion";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const colorMap = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    chip: "bg-blue-50 text-blue-700",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-700",
    chip: "bg-emerald-50 text-emerald-700",
  },
  violet: {
    badge: "bg-violet-100 text-violet-700",
    chip: "bg-violet-50 text-violet-700",
  },
};

export default function CertificationCard({
  certification,
  onClick,
}) {
  const colors =
    colorMap[certification.color] || colorMap.blue;

  return (
    <motion.article
  layout
  whileHover={{ y: -8 }}
  transition={{ duration: 0.25 }}
  onClick={() => onClick?.(certification)}
  className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
>
      {/* Certificate Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={certification.image}
          alt={certification.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}
          >
            {certification.type}
          </span>

          {certification.featured && (
            <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
              ⭐ Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
          {certification.title}
        </h3>

        {/* Issuer */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <HiOutlineBuildingOffice2 className="h-5 w-5 text-blue-600" />

          <span>{certification.issuer}</span>
        </div>

        {/* Year */}
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <HiOutlineCalendarDays className="h-5 w-5 text-blue-600" />

          <span>
            {certification.duration} • {certification.year}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-600">
          {certification.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className={`rounded-full px-3 py-1 text-xs font-medium ${colors.chip}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(certification);
            }}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View Credential

            <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
          </button>

          <span className="text-xs font-medium text-slate-400">
            Click to view →
          </span>
        </div>
      </div>
    </motion.article>
  );
}