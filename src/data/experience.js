import athenuraLogo from "../assets/companies/athenura.png";
import omegasoftLogo from "../assets/companies/omegasoft.png";
import zidioLogo from "../assets/companies/zidio.png";
import ibaseLogo from "../assets/companies/ibase.png";

import athenuraCertificate from "../assets/certificates/athenura.pdf";
import omegasoftCertificate from "../assets/certificates/omegasoft.pdf";
import zidioCertificate from "../assets/certificates/zidio.pdf";
import ibaseCertificate from "../assets/certificates/ibase.pdf";

export const experiences = [
  {
    id: 1,

    company: "Athenura",
    shortName: "ATHENURA",

    logo: athenuraLogo,

    role: "Data Science & Analytics Intern",

    type: "Internship",

    duration: "May 2026 – Present",

    year: "2026",

    location: "Remote",

    current: true,

    website: "https://athenura.in",

    certificate: athenuraCertificate,

    description:
      "Working on real-world AI, analytics, machine learning, and data engineering projects while collaborating with cross-functional teams to build scalable intelligent applications.",

    achievements: [
      "Developed AI-powered analytics solutions using Python.",
      "Performed data preprocessing, feature engineering and EDA.",
      "Built and evaluated machine learning models.",
      "Worked with SQL databases and business analytics.",
      "Collaborated on production-ready applications.",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "SQL",
      "Power BI",
      "Git",
      "Flask",
    ],
  },

  {
    id: 2,

    company: "Omegasoft Technologies",

    shortName: "OMEGASOFT",

    logo: omegasoftLogo,

    role: "Data Science Intern",

    type: "Internship",

    duration: "Jan 2026 – Feb 2026",

    year: "2026",

    location: "Remote",

    current: false,

    website: "https://omegasoft.in",

    certificate: omegasoftCertificate,

    description:
      "Worked on machine learning and analytics projects involving data preprocessing, visualization and predictive modelling using Python.",

    achievements: [
      "Performed exploratory data analysis on business datasets.",
      "Built machine learning prediction models.",
      "Improved preprocessing pipelines.",
      "Created visual reports and insights.",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "SQL",
    ],
  },

  {
    id: 3,

    company: "Zidio Development",

    shortName: "ZIDIO",

    logo: zidioLogo,

    role: "Java Full Stack Developer Trainee",

    type: "Training",

    duration: "Jun 2025 – Sep 2025",

    year: "2025",

    location: "Remote",

    current: false,

    website: "https://zidio.in",

    certificate: zidioCertificate,

    description:
      "Completed intensive Full Stack Development training with a focus on backend development, frontend technologies, databases, and REST APIs.",

    achievements: [
      "Built Java-based full stack web applications.",
      "Worked with SQL databases.",
      "Integrated frontend with backend APIs.",
      "Developed responsive user interfaces.",
    ],

    technologies: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Bootstrap",
    ],
  },

  {
    id: 4,

    company: "iBase Electrosoft LLP",

    shortName: "IBASE",

    logo: ibaseLogo,

    role: "Machine Learning in Python Intern",

    type: "Industrial Training",

    duration: "Jun 2024 – Jul 2024",

    year: "2024",

    location: "Amravati",

    current: false,

    website: "https://ibaseelectrosoft.com",

    certificate: ibaseCertificate,

    description:
      "Successfully completed industrial training in Machine Learning using Python with hands-on implementation of ML algorithms and data analysis techniques.",

    achievements: [
      "Implemented supervised learning algorithms.",
      "Worked on Python-based machine learning projects.",
      "Performed data preprocessing and visualization.",
      "Completed industrial training with excellent performance.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
];