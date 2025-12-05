export interface AchievementItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon?: string;
  credentialId?: string;
  skillTags?: string[];
}

export const mockAchievementsData: AchievementItem[] = [
  {
    id: 1,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "April 2022",
    description:
      "Completed foundational networking certification covering IPv4, routing, switching, network services, and essential connectivity principles.",
    icon: "/achievements/cisco.png",
    skillTags: ["Networking", "IPv4", "Routing", "Switching", "Cisco"]
  },
  {
    id: 2,
    title: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    description:
      "Validated advanced enterprise networking capabilities including automation, security, WAN technologies, and scalable network operations.",
    icon: "/achievements/cisco.png",
    skillTags: ["Enterprise Networking", "Security", "Automation", "WAN", "Cisco"]
  },
  {
    id: 3,
    title: "Certified AI Fundamentals",
    issuer: "IBM",
    date: "2024",
    description:
      "Gained foundational skills in artificial intelligence concepts, machine learning models, and data-driven problem solving.",
    icon: "/achievements/ibm.png",
    skillTags: ["AI", "Machine Learning", "Data Science", "IBM"]
  },
  {
    id: 4,
    title: "FYPro Finalist Bronze Award",
    issuer: "UMPSA Computing Faculty",
    date: "March 2025",
    description:
      "Awarded Bronze for outstanding performance in the Final Year Project competition, recognizing innovation and technical execution.",
    icon: "/achievements/award.png",
    skillTags: ["FYP", "Software Engineering", "Innovation"]
  },
  {
    id: 5,
    title: "Anugerah Pencapaian Cemerlang Kategori Universiti",
    issuer: "MOHE-MDEC GOT",
    date: "July 2024",
    description:
      "Recognized at the national level for exceptional academic and extracurricular performance in the university category.",
    icon: "/achievements/malaysia.png",
    skillTags: ["National Achievement", "Excellence Award", "Leadership"]
  },
];
