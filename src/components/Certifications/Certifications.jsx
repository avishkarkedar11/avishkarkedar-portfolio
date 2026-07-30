import { useEffect, useState } from "react";
import { certifications } from "../../data/certifications";

import CertificationsHeader from "./CertificationsHeader";
import CertificationGrid from "./CertificationGrid";
import CertificationModal from "./CertificationModal";

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openCertification = (certification) => {
    setSelectedCertification(certification);
  };

  const closeCertification = () => {
    setSelectedCertification(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedCertification ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertification]);

  return (
    <section
      id="certifications"
      className="relative bg-slate-50/70 dark:bg-slate-950/70 py-16 sm:py-24 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-purple-500/5 dark:bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <CertificationsHeader />

        {/* Full-width Centered Certification Grid */}
        <div className="w-full">
          <CertificationGrid
            certifications={certifications}
            onCertificationClick={openCertification}
          />
        </div>

      </div>

      {/* Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={!!selectedCertification}
        onClose={closeCertification}
      />
    </section>
  );
}