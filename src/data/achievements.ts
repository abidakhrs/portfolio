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
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Validated expertise in designing and deploying scalable, highly available systems on AWS.",
    icon: "/achievements/aws-logo.png",
    credentialId: "AWS-123456",
    skillTags: ["Cloud Architecture", "AWS", "Scalability"]
  },
  {
    id: 2,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2022",
    description: "Demonstrated ability to design, build, test, and maintain cloud applications on Google Cloud Platform.",
    icon: "/achievements/google-cloud-logo.png",
    credentialId: "GPCD-789012",
    skillTags: ["Cloud Development", "GCP", "Serverless"]
  },
  {
    id: 3,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    description: "Proven competency in Kubernetes cluster operations, including deployment, monitoring, and troubleshooting.",
    icon: "/achievements/kubernetes-logo.png",
    credentialId: "CKA-345678",
    skillTags: ["Kubernetes", "DevOps", "Containerization"]
  },
  {
    id: 4,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    description: "Validated skills in designing and building cloud applications and services on Microsoft Azure.",
    icon: "/achievements/azure-logo.png",
    credentialId: "AZ-204-901234",
    skillTags: ["Azure", "Cloud Development", "DevOps"]
  },
  {
    id: 5,
    title: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    date: "2020",
    description: "Demonstrated expertise in Java programming, including object-oriented principles, data structures, and algorithms.",
    icon: "/achievements/oracle-logo.png",
    credentialId: "OCP-JAVA-567890",
    skillTags: ["Java", "Object-Oriented Programming", "Algorithms"]
  },
  {
    id: 6,
    title: "Top Contributor Award",
    issuer: "Open Source Community",
    date: "2022",
    description: "Recognized for significant contributions to various open source projects and documentation.",
    icon: "/achievements/open-source-logo.png",
    skillTags: ["Open Source", "Collaboration", "Documentation"]
  }
];