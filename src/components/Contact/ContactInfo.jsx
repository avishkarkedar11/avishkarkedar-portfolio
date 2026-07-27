import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import resume from "../../assets/resume/Avishkar_Resume.pdf";

const contactItems = [
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    value: "avishkarkedar11@gmail.com",
    href: "mailto:avishkarkedar11@gmail.com",
  },
  {
    icon: HiOutlinePhone,
    title: "Phone",
    value: "+91 73507 20383",
    href: "tel:+917350720383",
  },
  {
    icon: HiOutlineMapPin,
    title: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/avishkarkedar11",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/avishkarkedar11",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Contact Cards */}
      {contactItems.map((item) => {
        const Icon = item.icon;

        const Card = (
          <div className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <Icon className="h-7 w-7" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <p className="mt-1 font-semibold text-slate-900 break-all">
                {item.value}
              </p>
            </div>
          </div>
        );

        return item.href ? (
          <a
            key={item.title}
            href={item.href}
            className="block"
          >
            {Card}
          </a>
        ) : (
          <div key={item.title}>{Card}</div>
        );
      })}

      {/* Social Links */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">
          Connect With Me
        </h3>

        <div className="mt-5 flex gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Resume Button */}
      <a
  href={resume}
  download="Avishkar_Kedar_Resume.pdf"
  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
>
  <HiOutlineDocumentArrowDown className="h-6 w-6" />
  Download Resume
</a>
    </motion.div>
  );
}