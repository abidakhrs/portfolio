export interface EducationItem {
  id: number;
  date: string;
  degree: string;
  institution: string;
  description?: string;
  field?: string;
  gpa?: string;
  logo?: string;
}

export const mockEducationData: EducationItem[] = [
  {
    id: 1,
    date: "March 2023 – January 2026",
    degree: "Bachelor of Computer Science (Computer System & Networking)",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    description: "Focused on software development, networking, and web applications. Gained practical experience through projects and internships.",
    logo: "/ump2.jpg"
  },
  {
    id: 2,
    date: "August 2020 – January 2023",
    degree: "Diploma of Computer Science",
    institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    description: "Covered foundational computer science concepts, programming, and system administration.",
    logo: "/ump.jpg"
  }
];
