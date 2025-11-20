export interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "E-Commerce Platform",
    subtitle: "React & Node.js Application",
    description: "A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard. Built with React for the frontend and Node.js for the backend API.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Web Application"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "Task Management App",
    subtitle: "React Native Mobile App",
    description: "A cross-platform mobile application for managing tasks and projects with real-time synchronization. Features include push notifications, team collaboration, and progress tracking.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    category: "Mobile App"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "Analytics Dashboard",
    subtitle: "Data Visualization Tool",
    description: "An interactive dashboard for visualizing business metrics with customizable charts and reports. Built using D3.js and integrated with various data sources.",
    technologies: ["React", "D3.js", "TypeScript", "Express"],
    category: "Web Application"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "Social Media API",
    subtitle: "Backend Service",
    description: "A robust API service for social media features including user authentication, content management, and real-time messaging capabilities.",
    technologies: ["Node.js", "MongoDB", "JWT", "Socket.io"],
    category: "Backend Service"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "Travel Booking System",
    subtitle: "Full-Stack Application",
    description: "A comprehensive travel booking system with hotel search, flight comparison, and itinerary management. Features real-time pricing and availability.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    category: "Web Application"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg",
    title: "Health & Fitness Tracker",
    subtitle: "Progressive Web App",
    description: "A PWA for tracking fitness goals, nutrition intake, and workout routines. Includes data visualization and personalized recommendations based on user progress.",
    technologies: ["React", "Firebase", "Chart.js", "PWA"],
    category: "Mobile App"
  }
];