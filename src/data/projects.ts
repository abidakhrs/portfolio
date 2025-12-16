export interface Project {
  id: number;
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  url?: string; // Optional field for live demo or repo link
}

export const mockProjects: Project[] = [
  {
    id: 1,
    image: "nophoto.webp",
    title: "Banky Mobile Application",
    subtitle: "React Native Mobile App",
    description: "Developed a mobile banking application featuring QR code scanning and generation for seamless transactions. Integrated location detection to adjust money flow and UI based on user location.",
    technologies: ["React Native", "TypeScript", "Re.Pack", "NPM"],
    category: "Mobile App"
  },
  {
    id: 2,
    image: "nadma.png",
    title: "NADMA Care Mobile Application",
    subtitle: "Java & Firebase Mobile App",
    description: "Developed an app to track users' location and mark them on maps using sensors and Open Street Map API for disaster management purposes.",
    technologies: ["Java", "XML", "Firebase", "OpenStreetMap API"],
    category: "Mobile App"
  },
  {
    id: 3,
    image: "smartscore.png",
    title: "SmartScore Web Application (FYP)",
    subtitle: "Web-Based Administration System",
    description: "Created an admin system with analytics for student grade calculations, using HTML, CSS, JS, Bootstrap, jQuery, PHP, and MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP", "MySQL"],
    category: "Web Application"
  },
  {
    id: 4,
    image: "dashboard.png",
    title: "Sales Dashboard",
    subtitle: "Data Visualization Dashboard",
    description: "Developed a dashboard for analyzing and visualizing sales data using Microsoft Power BI.",
    technologies: ["Power BI"],
    category: "Web Application"
  },
  {
    id: 5,
    image: "fuzzy.jpg",
    title: "Obesity Detector",
    subtitle: "Fuzzy Logic BMI Classifier",
    description: "Built a fuzzy logic-based system to determine BMI levels using datasets from Kaggle. Implemented in Google Colab with Python.",
    technologies: ["Python", "Fuzzy Logic", "Google Colab", "Kaggle"],
    category: "Data Science"
  },
  {
    id: 6,
    image: "nophoto.webp",
    title: "Worker Burnout Detector",
    subtitle: "Random Forest & Linear Regression",
    description: "Analyzed employee data from Kaggle to predict burnout risk using Random Forest and Linear Regression algorithms. Built in Python with data preprocessing and visualization.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Random Forest", "Linear Regression", "Kaggle"],
    category: "Data Science"
  },
  {
    id: 7,
    image: "nophoto.webp",
    title: "Simple To-Do List App",
    subtitle: "React Web App",
    description: "Built a lightweight to-do list application with task management features using React.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    category: "Web Application",
    url: "https://abidakhrs.github.io/todolist/"
  },
  {
    id: 8,
    image: "convex.png",
    title: "Convex Money Converter",
    subtitle: "Next.js Currency Converter",
    description: "Developed a money converter app using Next.js, TailwindCSS, and Axios to fetch real-time currency rates from an external API.",
    technologies: ["Next.js", "TailwindCSS", "Axios", "External API"],
    category: "Web Application",
    url: "https://abidakhrs.github.io/money-converter/"
  },
  {
    id: 9,
    image: "nophoto.webp",
    title: "Random Quote Generator",
    subtitle: "Vite SPA",
    description: "Created a single-page application to generate random quotes using Vite and fetching data from an external API.",
    technologies: ["Vite", "JavaScript", "SPA", "External API"],
    category: "Web Application",
    url: "https://abidakhrs.github.io/random-quote-gen/"
  },
  {
    id: 10,
    image: "nophoto.webp",
    title: "Chopi",
    subtitle: "Fullstack E-commerce Application",
    description: "Simple fullstack web app for online shopping, featuring product listings, cart management, and user authentication. Built with modern frontend and backend technologies to provide a seamless shopping experience.",
    technologies: ["Vite", "JavaScript", "React", "Supabase", "Express", "TailwindCSS", "Redux", "RTK"],
    category: "Web Application",
  }
  
];
