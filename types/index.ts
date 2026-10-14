export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & ML" | "Security & Systems" | "Web Applications" | "Database Systems";
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholder?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  iconName: string;
  description: string;
  category: "Languages" | "Databases" | "Tools & Practices" | "Portfolio Architecture";
  isPortfolioStack?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  location: string;
  status: string;
  summary: string;
  highlights: string[];
  coreModules: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "WIL Candidate" | "Academic Project" | "Coursework & Lab";
  location: string;
  description: string;
  keyDeliverables: string[];
  technologies: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  status: "In Progress" | "Completed" | "Planned";
  date: string;
  credentialUrl?: string;
  description: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  targetRoles: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumePath: string;
  stats: { label: string; value: string }[];
}
