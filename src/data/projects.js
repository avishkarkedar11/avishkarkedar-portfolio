import aiFitness from "../assets/projects/ai-fitness.webp";
import jobsDashboard from "../assets/projects/jobs-dashboard.webp";
import expenseTracker from "../assets/projects/expense-tracker.webp";
import garudas from "../assets/projects/garudas.webp";
import sentimentAnalysis from "../assets/projects/sentiment-analysis.webp";
import horyzen from "../assets/projects/horyzen.webp";

export const projectCategories = [
  "All",
  "AI/ML",
  "Web Development",
  "Mobile",
];

export const projects = [
  {
    id: 1,

    title: "AI Fitness & Diet Recommendation System",

    slug: "ai-fitness-system",

    category: "AI/ML",

    featured: true,

    image: aiFitness,

    description:
      "An AI-powered web application that generates personalised fitness plans, diet recommendations and progress tracking based on user goals and health metrics.",

    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "Scikit-Learn",
      "Bootstrap",
      "Chart.js",
    ],

    github:
      "https://github.com/avishkarkedar11/AI-Fitness-Diet-Recommendation-System",

    live:
      "https://ai-fitness-diet-recommendation-system.onrender.com",

    highlights: [
      "Google Authentication",
      "AI Diet Recommendation",
      "Progress Analytics",
      "BMI & Calorie Calculator",
      "Responsive Dashboard",
    ],
  },

  {
    id: 2,

    title: "Real-Time India Jobs Dashboard",

    slug: "jobs-dashboard",

    category: "AI/ML",

    featured: true,

    image: jobsDashboard,

    description:
      "Real-time job analytics platform that collects job listings, analyses hiring trends and visualises insights using interactive dashboards.",

    technologies: [
      "Python",
      "Selenium",
      "SQL",
      "Power BI",
      "Streamlit",
      "Pandas",
    ],

    github:
      "https://github.com/avishkarkedar11/real-time-india-jobs-dashboard",

    live: "",

    highlights: [
      "Real-Time Scraping",
      "Job Market Analytics",
      "Interactive Dashboard",
      "Data Cleaning",
      "Power BI Reports",
    ],
  },

  {
    id: 3,

    title: "Expense Tracker App",

    slug: "expense-tracker",

    category: "Mobile",

    featured: true,

    image: expenseTracker,

    description:
      "Android application for tracking income and expenses with Firebase authentication and cloud data synchronisation.",

    technologies: [
      "Flutter",
      "Firebase",
      "Dart",
      "Material UI",
    ],

    github: "",

    live: "",

    highlights: [
      "Authentication",
      "Cloud Sync",
      "Expense Analytics",
      "Monthly Reports",
    ],
  },

  {
    id: 4,

    title: "Garudas Agro Machinery",

    slug: "garudas-agro",

    category: "Web Development",

    featured: false,

    image: garudas,

    description:
      "Modern responsive company website developed for an agricultural machinery business with product showcase and enquiry functionality.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
    ],

    github: "",

    live:
      "https://garudas-agro-machinery.vercel.app",

    highlights: [
      "Responsive Design",
      "SEO Optimised",
      "Modern UI",
      "Fast Performance",
    ],
  },

  {
    id: 5,

    title: "Flipkart Review Sentiment Analysis",

    slug: "flipkart-sentiment",

    category: "AI/ML",

    featured: false,

    image: sentimentAnalysis,

    description:
      "Machine learning project that classifies customer reviews into positive and negative sentiments using NLP techniques.",

    technologies: [
      "Python",
      "NLP",
      "Scikit-Learn",
      "Pandas",
      "Matplotlib",
    ],

    github: "",

    live: "",

    highlights: [
      "Natural Language Processing",
      "Text Classification",
      "Data Visualisation",
      "ML Pipeline",
    ],
  },

  {
    id: 6,

    title: "Horyzen Technologies",

    slug: "horyzen-technologies",

    category: "Web Development",

    featured: false,

    image: horyzen,

    description:
      "Official website for Horyzen Technologies featuring company information, services, portfolio, internship programme and contact system.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "EmailJS",
    ],

    github: "",

    live:
      "https://horyzen.in",

    highlights: [
      "Company Website",
      "Portfolio",
      "Internship Portal",
      "Responsive Design",
    ],
  },
];