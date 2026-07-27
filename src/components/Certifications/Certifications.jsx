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

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedCertification
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertification]);

  return (
    <section
      id="certifications"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <CertificationsHeader />

        {/* Grid */}
        <CertificationGrid
          certifications={certifications}
          onCertificationClick={openCertification}
        />

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