import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function CertificationGrid({
  certifications,
  onCertificationClick,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      layout
      className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch"
    >
      {certifications.map((certification) => (
        <motion.div
          key={certification.id}
          variants={itemVariants}
          layout
          className="flex h-full"
        >
          <CertificationCard
            certification={certification}
            onClick={onCertificationClick}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}