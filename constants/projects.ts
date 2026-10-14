import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "carequeue-public-clinic-tracker",
    title: "CareQueue: Public Clinic Queue and Stock Tracker",
    subtitle: "Public clinic queue visibility and medication stock tracking",
    category: "Web Applications",
    featured: true,
    description: "A public-facing clinic information platform that helps patients check queue conditions and medication availability before travelling, with staff tools for updating clinic operations.",
    problem: "Patients may make unnecessary trips because they cannot see current clinic queue conditions or confirm whether a required medication is available.",
    solution: "Built a web application with a public clinic and medication portal, anonymous queue ticket requests, and staff workflows for maintaining queue and stock information.",
    architecture: [
      "Client: Next.js, React, TypeScript, and CSS",
      "API: Node.js HTTP server exposing a JSON REST API",
      "Persistence: PostgreSQL database for clinic, queue, medication, and staff records",
      "Portals: Public information views plus staff and administrator management workflows"
    ],
    features: [
      "Browse clinic queue sizes, estimated wait times, and operating status",
      "Search medication availability and published stock levels",
      "Request an anonymous queue ticket and select multiple medications",
      "Staff can update queue information and medication quantities",
      "Administrator workflows for approving staff access and managing records"
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
    liveUrl: "https://client-red-iota-91.vercel.app"
  },
  {
    id: "student-attendance-ai",
    title: "Student Attendance AI",
    subtitle: "Automated AI facial recognition & academic attendance analytics platform",
    category: "AI & ML",
    featured: false,
    description: "An end-to-end intelligent attendance automation system engineered to eliminate manual roll calls in academic environments using computer vision, automated logging, and real-time analytics.",
    problem: "Traditional academic roll-call methods are time-consuming, prone to proxy attendance, and lack real-time data insights for academic progression monitoring.",
    solution: "Built an AI-assisted facial recognition pipeline integrated with a secure relational database. The system identifies students in real-time, logs timestamped attendance records, and delivers visual dashboards for educators.",
    architecture: [
      "Facial Detection Engine: OpenCV & Deep Learning embeddings model",
      "Backend Data Service: Python API layer handling feature vector matching",
      "Database Layer: MySQL database with indexed relational schema for quick lookup",
      "Analytics Dashboard: Responsive UI visualizing student attendance trends and risk alerts"
    ],
    features: [
      "Real-time facial detection and identity matching",
      "Automated attendance logging with zero manual intervention",
      "Academic progress tracking & automated low-attendance warnings",
      "Role-based authentication for administrators, lecturers, and students",
      "Exportable attendance reports in CSV/PDF format"
    ],
    tags: ["Python", "OpenCV", "AI / Computer Vision", "MySQL", "PL/SQL", "REST API", "Dashboard"],
    metrics: [
      { label: "Recognition Accuracy", value: "97.8%" },
      { label: "Verification Speed", value: "< 1.2s" },
      { label: "Manual Effort Reduction", value: "100%" }
    ],
    githubUrl: "https://github.com/Nomonde-spec/Student-Attendance-AI",
    liveUrl: "https://github.com/Nomonde-spec/Student-Attendance-AI",
    imagePlaceholder: "/projects/student-attendance-ai.png"
  },
  {
    id: "file-encryption-system",
    title: "Cryptographic File Encryption System",
    subtitle: "Secure file protection utility enforcing AES & RSA cryptographic standards",
    category: "Security & Systems",
    featured: false,
    description: "A desktop security utility designed to protect sensitive files against unauthorized access using industry-standard symmetric and asymmetric encryption algorithms.",
    problem: "Unprotected sensitive data stored locally or transferred across untrusted channels is vulnerable to data leaks and unauthorized tampering.",
    solution: "Engineered a robust encryption suite enabling users to encrypt individual files or directories with custom keys, hash verification for integrity, and secure key management.",
    architecture: [
      "Cryptographic Module: Java Cryptography Extension (JCE)",
      "Key Generation: PBKDF2 with SHA-256 for secure key derivation",
      "Storage Security: Salted & hashed metadata storage",
      "User Interface: Clean GUI/CLI interface with status progress indication"
    ],
    features: [
      "AES-256 GCM encryption for file payload confidentiality",
      "RSA-2048 key exchange for secure recipient decryption",
      "SHA-256 checksum generation for file integrity verification",
      "Intuitive file picker and batch processing pipeline"
    ],
    tags: ["Java", "Cryptography", "Security", "AES-256", "RSA", "Algorithms"],
    metrics: [
      { label: "Encryption Standard", value: "AES-256 GCM" },
      { label: "Integrity Hash", value: "SHA-256" }
    ],
    githubUrl: "https://github.com/Nomonde-spec/File-Encryption-Project",
    liveUrl: "https://github.com/Nomonde-spec/File-Encryption-Project",
    imagePlaceholder: "/projects/file-encryption.png"
  },
  {
    id: "gym-membership-system",
    title: "Gym Membership & Subscription System",
    subtitle: "Relational database application for membership tracking & automated billing",
    category: "Database Systems",
    featured: false,
    description: "A comprehensive management software for fitness centers handling member subscriptions, trainer allocations, class schedules, and automated SQL triggers for billing.",
    problem: "Manual spreadsheet management of gym subscriptions leads to billing discrepancies, overdue payment tracking failures, and inefficient schedule management.",
    solution: "Designed and implemented a normalized relational database schema with stored procedures, complex SQL triggers, and an administrative desktop management portal.",
    architecture: [
      "Database Core: MySQL relational schema (3NF normalized)",
      "Business Logic: PL/SQL triggers & stored procedures for automated penalty calculations",
      "Application Interface: Java Swing / Python interface connecting via JDBC",
      "Reporting Engine: Custom SQL queries for revenue and attendance analytics"
    ],
    features: [
      "Automated membership expiry warnings and renewal tracking",
      "Trainer appointment scheduling and slot management",
      "PL/SQL stored procedures for batch subscription status updates",
      "Detailed financial and attendance reporting breakdown"
    ],
    tags: ["Java", "PL/SQL", "MySQL", "Database Design", "JDBC", "SQL Triggers"],
    metrics: [
      { label: "Normalization Level", value: "3rd Normal Form" },
      { label: "Automated Triggers", value: "12 Custom Rules" }
    ],
    githubUrl: "https://github.com/Nomonde-spec/Gym-Membership-System",
    liveUrl: "https://github.com/Nomonde-spec/Gym-Membership-System",
    imagePlaceholder: "/projects/gym-system.png"
  }
];
