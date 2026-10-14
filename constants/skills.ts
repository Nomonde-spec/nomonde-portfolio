import { Skill, SkillCategory } from "@/types";

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        proficiency: 88,
        iconName: "Code2",
        description: "Object-oriented programming, data structures, multithreading, JDBC & enterprise software concepts.",
        category: "Languages"
      },
      {
        name: "Python",
        proficiency: 85,
        iconName: "Terminal",
        description: "Scripting, OpenCV computer vision, data manipulation, algorithm design & API integration.",
        category: "Languages"
      },
      {
        name: "PL/SQL",
        proficiency: 82,
        iconName: "Database",
        description: "Stored procedures, database triggers, cursors, packages & relational database logic.",
        category: "Languages"
      },
      {
        name: "JavaScript",
        proficiency: 84,
        iconName: "FileCode",
        description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation & client-side logic.",
        category: "Languages"
      },
      {
        name: "HTML5 & CSS3",
        proficiency: 90,
        iconName: "Layout",
        description: "Semantic web structure, responsive flexbox/grid layouts, CSS animations & accessibility standards.",
        category: "Languages"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    skills: [
      {
        name: "MySQL",
        proficiency: 88,
        iconName: "Server",
        description: "Relational schema architecture, foreign key constraints, indexing, query optimization & transaction control.",
        category: "Databases"
      },
      {
        name: "SQL & Relational Design",
        proficiency: 90,
        iconName: "Layers",
        description: "Complex join queries, normalization (1NF-3NF), ER diagram modeling & relational database integrity.",
        category: "Databases"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Developer Environment",
    skills: [
      {
        name: "Git & GitHub",
        proficiency: 85,
        iconName: "GitBranch",
        description: "Version control workflows, branching strategies, commit discipline, pull requests & code review.",
        category: "Tools & Practices"
      },
      {
        name: "VS Code & IDEs",
        proficiency: 92,
        iconName: "Laptop",
        description: "Configured developer environment, debugging tools, extensions, workspace management & linting.",
        category: "Tools & Practices"
      }
    ]
  },
  {
    id: "engineering",
    title: "Software Engineering Practices",
    skills: [
      {
        name: "Agile & Teamwork",
        proficiency: 88,
        iconName: "Users",
        description: "Iterative development cycles, sprint planning, peer collaboration & project milestone execution.",
        category: "Tools & Practices"
      },
      {
        name: "Algorithmic Problem Solving",
        proficiency: 86,
        iconName: "Cpu",
        description: "Systematic decomposition of complex requirements, time/space complexity analysis & logic optimization.",
        category: "Tools & Practices"
      },
      {
        name: "Debugging & Verification",
        proficiency: 87,
        iconName: "Bug",
        description: "Root cause analysis, stack trace inspection, log analysis & unit/integration testing strategies.",
        category: "Tools & Practices"
      }
    ]
  },
  {
    id: "portfolio-stack",
    title: "Portfolio Engineering Stack (Modern Web)",
    skills: [
      {
        name: "Next.js 15 & React 19",
        proficiency: 85,
        iconName: "Globe",
        description: "App Router, Server Components, dynamic streaming, state management & client interaction.",
        category: "Portfolio Architecture",
        isPortfolioStack: true
      },
      {
        name: "TypeScript",
        proficiency: 84,
        iconName: "ShieldCheck",
        description: "Strict static typing, interfaces, generics, type-safe APIs & compile-time error prevention.",
        category: "Portfolio Architecture",
        isPortfolioStack: true
      },
      {
        name: "Tailwind CSS 4 & Framer Motion",
        proficiency: 88,
        iconName: "Sparkles",
        description: "Design system tokens, fluid responsive layouts, micro-animations & smooth transition orchestration.",
        category: "Portfolio Architecture",
        isPortfolioStack: true
      }
    ]
  }
];
