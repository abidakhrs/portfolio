export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  companyInitials?: string;
  companyColor?: string;
  image?: string;
}

export const mockTimelineData: TimelineItem[] = [
  {
    id: 1,
    date: "August 2025 - January 2026",
    title: "T&T Intern - Innovation & Cloud Development Centre (Software Development)",
    subtitle: "Deloitte Consulting",
    companyInitials: "DC",
    companyColor: "bg-gradient-to-r from-blue-700 to-teal-500", // Custom color for Deloitte
    description: "Developed a scalable POC banking application using Micro front-end architecture and React Native, enhancing modularity and user experience. Collaborated with professional mentors and team members to deliver high-quality, maintainable features. Streamlined development workflow using Git for version control.",
    image: "/deloitte.jpg" // Placeholder
  },
  {
    id: 2,
    date: "May 2023 - August 2023",
    title: "Software Developer",
    subtitle: "CyberSphere Solution Sdn. Bhd",
    companyInitials: "CS",
    companyColor: "bg-gradient-to-r from-green-500 to-lime-600", // Custom color for CyberSphere
    description: "Developed DietMate, an innovative food diary and diet management web application. Coordinated task distribution and project timelines among team members. Delivered monthly progress reports and updates in team meetings.",
    image: "/cybersphere.jpeg" // Placeholder
  },
  {
    id: 3,
    date: "January 2023 - March 2023",
    title: "Web Developer Part Time",
    subtitle: "FIFWAY System Sdn. Bhd.",
    companyInitials: "FS",
    companyColor: "bg-gradient-to-r from-orange-500 to-yellow-600", // Custom color for FIFWAY System
    description: "Developed an administration system for disaster management. Assisted in client meetings and user training sessions to gather requirements and ensure smooth system adoption. Prepared comprehensive user manuals tailored for different user groups.",
    image: "/fifway.png" // Placeholder
  },
  {
    id: 4,
    date: "July 2022 - January 2023",
    title: "Web Developer Intern",
    subtitle: "FIFWAY System Sdn. Bhd.",
    companyInitials: "FS",
    companyColor: "bg-gradient-to-r from-orange-500 to-yellow-600", // Reusing color for same company
    description: "Designed and developed InfoBencanaJKMv2, a web-based administration system built with Bootstrap, jQuery, HTML, CSS, and JavaScript. Implemented backend functionality using PHP and MySQL. Collaborated closely with my professional team lead to refine system features.",
    image: "/fifway.png" // Placeholder
  }
];