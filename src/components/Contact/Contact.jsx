import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24 sm:py-28"
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