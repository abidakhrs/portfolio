export interface EducationItem {
  id: number;
  date: string;
  degree: string;
  institution: string;
  description: string;
  field?: string;
  gpa?: string;
  logo?: string;
}

export const mockEducationData: EducationItem[] = [
  {
    id: 1,
    date: "2016 - 2020",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    field: "Computer Science",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and web development. Graduated with honors and participated in various hackathons.",
    logo: "/education/uni-tech.jpg"
  },
  {
    id: 2,
    date: "2020 - 2021",
    degree: "Master of Science in Software Engineering",
    institution: "State University",
    field: "Software Engineering",
    gpa: "3.9/4.0",
    description: "Advanced coursework in distributed systems, cloud computing, and machine learning. Completed thesis on scalable web architectures.",
    logo: "/education/state-university.jpg"
  },
  {
    id: 3,
    date: "2021 - 2022",
    degree: "Professional Certificate in UX Design",
    institution: "Design Institute",
    field: "User Experience",
    description: "Comprehensive program covering user research, prototyping, and usability testing. Completed capstone project for a real client.",
    logo: "/education/design-institute.jpg"
  },
  {
    id: 4,
    date: "2023",
    degree: "Advanced React Certification",
    institution: "Frontend Masters",
    description: "Intensive course covering advanced React patterns, state management, and performance optimization.",
    logo: "/education/frontend-masters.jpg"
  }
];