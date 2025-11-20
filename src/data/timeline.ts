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
    date: "2022 - Present",
    title: "Senior Developer",
    subtitle: "Tech Company",
    companyInitials: "TC",
    companyColor: "bg-gradient-to-r from-blue-500 to-purple-600",
    description: "Leading development of web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices.",
    image: "/company1.jpg"
  },
  {
    id: 2,
    date: "2020 - 2022",
    title: "Frontend Developer",
    subtitle: "Startup Inc.",
    companyInitials: "SI",
    companyColor: "bg-gradient-to-r from-green-500 to-teal-500",
    description: "Developed responsive user interfaces for client projects. Implemented modern design systems and improved user experience.",
    image: "/company2.jpg"
  },
  {
    id: 3,
    date: "2019 - 2020",
    title: "Junior Web Developer",
    subtitle: "Digital Agency",
    companyInitials: "DA",
    companyColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    description: "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Collaborated with design team to implement UI/UX concepts.",
    image: "/company3.jpg"
  },
  {
    id: 4,
    date: "2018 - 2019",
    title: "Freelance Developer",
    subtitle: "Self-Employed",
    companyInitials: "SE",
    companyColor: "bg-gradient-to-r from-red-500 to-pink-500",
    description: "Provided web development services for small businesses. Specialized in creating custom WordPress websites and e-commerce solutions.",
    image: "/company4.jpg"
  },
  {
    id: 5,
    date: "2017 - 2018",
    title: "Web Development Intern",
    subtitle: "Innovate Solutions",
    companyInitials: "IS",
    companyColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
    description: "Assisted in developing and testing web applications. Gained hands-on experience with JavaScript frameworks and responsive design.",
    image: "/company5.jpg"
  }
];