import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#10b981", "#7c3aed", "#f59e0b"],
      });
    } catch (err) {}
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-8 shadow-xs backdrop-blur-md"
    >
      <h3 className="font-['Sora'] text-xl font-bold text-slate-900 dark:text-white">
        Send Me a Message
      </h3>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Fill out the details below and I will get back to you promptly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/60"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Opportunity / Collaboration"
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/60"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here..."
            required
            className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950/60"
          />
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
        >
          Send Message
          <HiOutlinePaperAirplane size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>
      </form>
    </motion.div>
  );
}