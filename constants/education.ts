import { CertificateItem, EducationItem, ExperienceItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: "tut-national-diploma",
    institution: "Tshwane University of Technology (TUT)",
    qualification: "National Diploma in Computer Science",
    period: "Completed Academic Requirements",
    location: "Pretoria, South Africa",
    status: "Graduate / WIL Candidate",
    summary: "Rigorous 3-year higher education program focused on core computer science disciplines, software engineering principles, algorithms, data structures, and database systems engineering.",
    highlights: [
      "Specialized in Object-Oriented Programming with Java & C++",
      "Mastered Relational Database Management Systems (RDBMS) with MySQL & PL/SQL",
      "Led student project teams in capstone software development modules",
      "Applied Agile software development methodologies and version control practices"
    ],
    coreModules: [
      "Technical Programming (Java / C++)",
      "Database Systems & PL/SQL Architecture",
      "Software Engineering & System Analysis",
      "Operating Systems & Network Principles",
      "Information Systems & Data Analytics",
      "Web Management & Client-Side Scripting"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "wil-candidate-tut",
    role: "Software Engineering WIL Candidate",
    organization: "Tshwane University of Technology - Academic Projects",
    period: "Academic Development & Capstones",
    type: "WIL Candidate",
    location: "Pretoria, South Africa",
    description: "Prepared for industry placement through intensive hands-on software development coursework, collaborative team capstones, and architectural design assignments.",
    keyDeliverables: [
      "Architected and deployed full-stack academic solutions using Java, Python, and relational SQL databases.",
      "Engineered automated computer vision algorithms for biometric attendance processing.",
      "Implemented strict database normalization standards and PL/SQL automated business triggers.",
      "Utilized Git version control for team code management, feature branching, and collaborative problem solving."
    ],
    technologies: ["Java", "Python", "PL/SQL", "MySQL", "OpenCV", "Git", "Agile Methodologies"]
  },
  {
    id: "academic-collaborative-projects",
    role: "Student Lead & Peer Collaborator",
    organization: "TUT Faculty of Information & Communication Technology",
    period: "Coursework & Laboratory Projects",
    type: "Academic Project",
    location: "Pretoria, South Africa",
    description: "Collaborated in small software teams to model, build, test, and document modular software systems adhering to prescribed software engineering life-cycle standards.",
    keyDeliverables: [
      "Facilitated sprint planning and task distribution across academic project members.",
      "Presented technical system architectures, database schemas, and demo prototypes to faculty evaluators.",
      "Applied structured testing and debugging methodologies to verify logic correctness and edge-case resilience."
    ],
    technologies: ["Java", "SQL", "Algorithm Design", "Technical Documentation", "VS Code"]
  }
];

export const certificatePlaceholderData: CertificateItem[] = [
  {
    id: "cert-in-progress-1",
    title: "AWS Certified Cloud Practitioner / Software Engineering Specialty",
    issuer: "Professional Learning Roadmap",
    status: "In Progress",
    date: "Expected 2025",
    description: "Currently pursuing cloud infrastructure and backend microservices certification to complement computer science fundamentals."
  },
  {
    id: "cert-in-progress-2",
    title: "Meta Front-End Developer & Modern JavaScript Systems",
    issuer: "Professional Learning Roadmap",
    status: "Planned",
    date: "Expected 2025",
    description: "Expanding full-stack engineering proficiency with component-driven architecture, TypeScript, and state management."
  }
];
