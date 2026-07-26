import { motion } from "framer-motion";

export default function ExperienceSidebar({
  companies,
  activeCompany,
  setActiveCompany,
}) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">
          Career Journey
        </h3>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {companies.length} Experiences
        </span>
      </div>

      {/* Mobile */}
      <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden scrollbar-hide">
        {companies.map((company) => {
          const active = activeCompany.id === company.id;

          return (
            <motion.button
              whileTap={{ scale: 0.97 }}
              key={company.id}
              onClick={() => setActiveCompany(company)}
              className={`min-w-[240px] rounded-2xl border p-4 text-left transition-all duration-300 ${
                active
                  ? "border-blue-500 bg-blue-600 text-white shadow-lg"
                  : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow">
                  <img
                    src={company.logo}
                    alt={company.company}
                    className="max-h-8 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="truncate font-semibold">
                    {company.shortName}
                  </h4>

                  <p
                    className={`mt-1 text-xs ${
                      active ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {company.year}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden space-y-3 lg:block">
        {companies.map((company) => {
          const active = activeCompany.id === company.id;

          return (
            <motion.button
              key={company.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCompany(company)}
              className={`group w-full rounded-2xl border p-4 transition-all duration-300 ${
                active
                  ? "border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src={company.logo}
                    alt={company.company}
                    className="max-h-10 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <h4 className="truncate text-sm font-bold">
                      {company.shortName}
                    </h4>

                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-blue-100"
                          : "text-slate-400"
                      }`}
                    >
                      {company.year}
                    </span>
                  </div>

                  <p
                    className={`mt-1 line-clamp-2 text-xs leading-5 ${
                      active
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    {company.role}
                  </p>

                  {company.current && (
                    <span className="mt-3 inline-flex rounded-full bg-emerald-500 px-2 py-1 text-[10px] font-semibold text-white">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
}