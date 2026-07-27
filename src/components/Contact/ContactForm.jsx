import { motion } from "framer-motion";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // Connect EmailJS / Formspree / Backend API
    alert("Thank you! Your message has been received.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h3 className="text-2xl font-bold text-slate-900">
        Send a Message
      </h3>

      <p className="mt-2 text-slate-600">
        Have a project, internship opportunity, or collaboration in mind?
        Fill out the form and I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="Enter subject"
            required
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            placeholder="Write your message..."
            required
            className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          <HiOutlinePaperAirplane className="h-5 w-5" />
          Send Message
        </button>
      </form>
    </motion.div>
  );
}