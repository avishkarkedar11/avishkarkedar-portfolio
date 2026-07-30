import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineLightningBolt, HiOutlineUserGroup, HiOutlineSparkles, HiOutlineArrowRight } from "react-icons/hi";

export default function About() {
  const handleLearnMore = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const cards = [
    {
      icon: <HiOutlineLightBulb className="text-blue-600 dark:text-blue-400" size={26} />,
      bgColor: "bg-blue-50/80 dark:bg-blue-950/60 border-blue-100 dark:border-blue-900/60",
      title: "Problem Solver",
      description: "I love tackling challenging problems and building smart, efficient solutions.",
    },
    {
      icon: <HiOutlineLightningBolt className="text-indigo-600 dark:text-indigo-400" size={26} />,
      bgColor: "bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-100 dark:border-indigo-900/60",
      title: "Quick Learner",
      description: "I learn new technologies fast and adapt to new challenges easily.",
    },
    {
      icon: <HiOutlineUserGroup className="text-purple-600 dark:text-purple-400" size={26} />,
      bgColor: "bg-purple-50/80 dark:bg-purple-950/60 border-purple-100 dark:border-purple-900/60",
      title: "Team Player",
      description: "I collaborate effectively and believe in growing together with the team.",
    },
    {
      icon: <HiOutlineSparkles className="text-teal-600 dark:text-teal-400" size={26} />,
      bgColor: "bg-teal-50/80 dark:bg-teal-950/60 border-teal-100 dark:border-teal-900/60",
      title: "Detail Oriented",
      description: "I pay attention to details and write clean, maintainable, scalable code.",
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-50/60 dark:bg-blue-950/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          
          {/* Left Column (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
              ABOUT ME
            </div>

            <h2 className="font-['Sora'] text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
              Turning Ideas Into <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg">
              I am an AI & Data Science student passionate about building impactful solutions using Machine Learning, Deep Learning, and Full Stack Development.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg">
              I enjoy solving complex problems, working with data, and creating seamless, high-performance user experiences that provide real value.
            </p>

            <div className="pt-2">
              <button
                onClick={handleLearnMore}
                className="group flex items-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white hover:shadow-lg"
              >
                Know More About Me
                <HiOutlineArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Grid (7 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-3xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${card.bgColor} shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                  {card.icon}
                </div>

                <h3 className="font-['Sora'] text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}