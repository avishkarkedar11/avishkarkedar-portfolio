import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-950 py-16 sm:py-20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ContactHeader />

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}