export interface Project {
  id: number;
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    image: "/nophoto.webp",
    title: "Banky Mobile Application",
    subtitle: "React Native Mobile App",
    description: "Developed a mobile banking application featuring QR code scanning and generation for seamless transactions. Integrated location detection to adjust money flow and UI based on user location.",
    technologies: ["React Native", "TypeScript", "Re.Pack", "NPM"],
    category: "Mobile App"
  },
  {
    id: 2,
    image: "/nadma.png",
    title: "NADMA Care Mobile Application",
    subtitle: "Java & Firebase Mobile App",
    description: "Developed an app to track users' location and mark them on maps using sensors and Open Street Map API for disaster management purposes.",
    technologies: ["Java", "XML", "Firebase", "OpenStreetMap API"],
    category: "Mobile App"
  },
  {
    id: 3,
    image: "/smartscore.png",
    title: "SmartScore Web Application (FYP)",
    subtitle: "Web-Based Administration System",
    description: "Created an admin system with analytics for student grade calculations, using HTML, CSS, JS, Bootstrap, jQuery, PHP, and MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP", "MySQL"],
    category: "Web Application"
  },
  {
    id: 4,
    image: "/dashboard.png",
    title: "Sales Dashboard",
    subtitle: "Data Visualization Dashboard",
    description: "Developed a dashboard for analyzing and visualizing sales data using Microsoft Power BI.",
    technologies: ["Power BI"],
    category: "Web Application"
  },
  {
    id: 5,
    image: "/fuzzy.jpg",
    title: "Obesity Detector",
    subtitle: "Fuzzy Logic BMI Classifier",
    description: "Built a fuzzy logic-based system to determine BMI levels using datasets from Kaggle. Implemented in Google Colab with Python.",
    technologies: ["Python", "Fuzzy Logic", "Google Colab", "Kaggle"],
    category: "Data Science"
  }
];
