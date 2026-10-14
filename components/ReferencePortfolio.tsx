"use client";

import { FormEvent, useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Web Developer",
  "Java Programmer",
  "Problem Solver",
];

const interests = [
  "💻 Web Development",
  "📊 Database Design",
  "☕ Java Programming",
  "🎨 UI/UX Design",
  "📱 Mobile Apps",
  "🤝 Team Collaboration",
];

const skillGroups = [
  { icon: "fa-server", title: "Backend", skills: ["Java", "Python", "Node.js"] },
  { icon: "fa-laptop-code", title: "Frontend", skills: ["React", "HTML", "CSS", "JavaScript"] },
  { icon: "fa-database", title: "Database", skills: ["PostgresSQL", "PL/SQL"] },
  { icon: "fa-toolbox", title: "Tools and Platform", skills: ["NetBeans", "Git", "Visual Studio"] },
  { icon: "fa-robot", title: "AI and Generative AI", skills: ["GitHub Copilot"] },
];

const projects = [
  {
    icon: "fa-clinic-medical",
    title: "Public Clinic Queue and Stock Tracker",
    description:
      "A public clinic platform where patients can check queue conditions and medication availability, request queue tickets, and staff can update queue and stock information.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    href: "https://client-red-iota-91.vercel.app/",
    clickableCard: true,
  },
  {
    icon: "fa-users-cog",
    title: "HR Management System",
    description:
      "Human resources management platform with a secure workspace sign-in experience for managing employee information and HR operations.",
    technologies: ["Web Application", "Authentication", "HR Management"],
    href: "https://new-hr-management-system-steel.vercel.app/",
  },
  {
    icon: "fa-clinic-medical",
    title: "Smart Clinic Management",
    description:
      "Comprehensive healthcare management system for scheduling appointments, managing patients and doctors, tracking queues, maintaining medical records, and handling billing.",
    technologies: ["Appointment Management", "Patient Records", "Clinic Operations"],
    href: "https://clinic-management-system-frontend-y.vercel.app/",
  },
  {
    icon: "fa-robot",
    title: "AI-Powered Attendance Tracking System",
    description:
      "AI-powered attendance tracking system using facial recognition to automate student attendance capture and reporting.",
    technologies: ["Google Cloud Vision API", "Bootstrap", "Postgres", "React", "Python (Django)", "OpenCV"],
    href: "https://student-attendance-tracking-system-opal.vercel.app/",
  },
  {
    icon: "fa-cut",
    title: "Salon Booking System",
    description:
      "Designed and deployed a single-page web application for salon appointment scheduling. Built dynamic React components to display real-time availability and allow seamless booking. Prioritized clean, intuitive UI/UX to improve customer engagement and ease of use.",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
    href: "#",
  },
  {
    icon: "fa-java",
    title: "Java Application Suite",
    description: "Collection of Java applications demonstrating OOP principles and algorithms.",
    technologies: ["Java", "OOP"],
    href: "#",
    brand: true,
  },
  {
    icon: "fa-database",
    title: "Database Management System",
    description: "Built using PL/SQL for efficient data management and query optimization.",
    technologies: ["PL/SQL", "Oracle"],
    href: "#",
  },
];

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const linkedinUrl = "https://www.linkedin.com/in/nomonde-mhlanga-141b241b9/";
const githubUrl = "https://github.com/Nomonde-spec/nomonde-portfolio";
const email = "mitchellnomonde7@gmail.com";
const themeStorageKey = "nomonde-portfolio-theme";

export function ReferencePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState("");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey) === "dark";
    document.body.classList.toggle("dark-mode", savedTheme);

    const onScroll = () => {
      let current = "home";
      for (const [id] of navigation) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = roles[phraseIndex];
      charIndex += deleting ? -1 : 1;
      setRole(phrase.slice(0, charIndex));

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        timeout = setTimeout(tick, 2000);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % roles.length;
        timeout = setTimeout(tick, 1100);
      } else {
        timeout = setTimeout(tick, deleting ? 50 : 100);
      }
    };

    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", nextDarkMode);
    window.localStorage.setItem(themeStorageKey, nextDarkMode ? "dark" : "light");
  };

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("Sending message...");
    window.setTimeout(() => {
      setFormStatus("✅ Message sent successfully! I'll get back to you soon.");
      form.reset();
      window.setTimeout(() => setFormStatus(""), 5000);
    }, 2000);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h2>NM</h2>
          </div>
          <ul className={`nav-links${menuOpen ? " active" : ""}`}>
            {navigation.map(([id, label]) => (
              <li key={id}>
                <a
                  className={activeSection === id ? "active" : ""}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              id="themeToggle"
              className="theme-toggle"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
              onClick={toggleTheme}
            >
              <i className="fas fa-moon" />
              <i className="fas fa-sun" />
            </button>
            <button
              className="hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <p className="greeting">👋 Hello, I&apos;m</p>
              <h1>Nomonde Mitchelle Mhlanga</h1>
              <div className="typing-container">
                <span className="prefix">I&apos;m a </span>
                <span className="typed-text">{role}</span>
                <span className="cursor">|</span>
              </div>
              <p className="bio">
                Motivated Computer Science student at Tshwane University of Technology (all academic requirements completed) with a strong foundation in software development, databases, and problem-solving. Seeking a Work Integrated Learning (WIL) opportunity to apply technical expertise in Java, PL/SQL, and JavaScript while contributing to innovative projects. Passionate about coding, collaborative problem-solving, and continuous learning in a dynamic tech environment.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn-primary">Get In Touch</a>
                <a href="#projects" className="btn-secondary">View Work</a>
                <a href="/resume.pdf" className="btn-outline" download="mitchelle_cv.pdf">Download CV</a>
              </div>
              <div className="social-links">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                <a href={`mailto:${email}`} aria-label="Email">
                  <i className="fas fa-envelope" />
                  <span className="social-text">{email}</span>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div
                className="image-placeholder"
                role="img"
                aria-label="Portrait of Nomonde Mitchelle Mhlanga"
                style={{ backgroundImage: "url('/profile.jpeg?v=4'), linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))" }}
              />
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat"><h3>3+</h3><p>Years of Study</p></div>
            <div className="stat"><h3>10+</h3><p>Projects</p></div>
            <div className="stat"><h3>5+</h3><p>Technologies</p></div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-image">
                <div className="image-frame"><i className="fas fa-code" /></div>
              </div>
              <div className="about-text">
                <p className="story">
                  Motivated Computer Science student at Tshwane University of Technology (all academic requirements completed) with a strong foundation in software development, databases, and problem-solving. Seeking a Work Integrated Learning (WIL) opportunity to apply technical expertise in Java, PL/SQL, and JavaScript while contributing to innovative projects. Passionate about coding, collaborative problem-solving, and continuous learning in a dynamic tech environment.
                </p>
                <div className="info-grid">
                  <Info icon="fa-user" label="Full Name" value="Nomonde Mhlanga" />
                  <Info icon="fa-venus-mars" label="Gender" value="Female" />
                  <Info icon="fa-globe-africa" label="Nationality" value="South African" />
                  <Info icon="fa-map-marker-alt" label="Location" value="Pretoria North, 0116, Pretoria" />
                  <Info icon="fa-phone" label="Phone" value="066 159 4153" />
                  <Info icon="fa-envelope" label="Email" value={email} />
                  <div className="info-item">
                    <i className="fab fa-linkedin" />
                    <div><strong>LinkedIn:</strong><span><a href={linkedinUrl} target="_blank" rel="noreferrer">View Profile</a></span></div>
                  </div>
                </div>
                <div className="interests">
                  <h3>What Drives Me:</h3>
                  <div className="interest-items">
                    {interests.map((interest) => <span key={interest}>{interest}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <h2 className="section-title">Education &amp; Certifications</h2>
            <div className="timeline">
              <EducationItem
                period="2021 - 2026"
                qualification="National Diploma in Computer Science"
                institution="Tshwane University of Technology, Pretoria"
                summary="Final Year Student - Expected Graduation: 2027"
                bullets={[
                  "Comprehensive education in theoretical and practical computing",
                  "Focus on software development and database systems",
                  "Actively seeking Work Integrated Learning (WIL) opportunity",
                ]}
              />
              <EducationItem
                period="2016 - 2020"
                qualification="High School Diploma"
                institution="Completed Secondary Education"
                bullets={["Mathematics and Physical Science", "Computer Applications Technology"]}
              />
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
              {skillGroups.map((group) => (
                <div className="skills-category" key={group.title}>
                  <h3><i className={`fas ${group.icon}`} /> {group.title}</h3>
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill}>
                      <div className="skill-info"><span>{skill}</span></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-container">
              {projects.map((project) => (
                <div
                  className={`project-card${project.clickableCard ? " project-card--clickable" : ""}`}
                  key={project.title}
                >
                  <div className="project-icon">
                    <i className={`${project.brand ? "fab" : "fas"} ${project.icon}`} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <a
                    className={`project-link${project.clickableCard ? " card-link" : ""}`}
                    href={project.href}
                    target={project.href === "#" ? undefined : "_blank"}
                    rel={project.href === "#" ? undefined : "noreferrer"}
                    aria-label={project.clickableCard ? `Open ${project.title}` : undefined}
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Let&apos;s Connect!</h3>
                <p>I&apos;m actively seeking Work Integrated Learning (WIL) opportunities. Feel free to reach out!</p>
                <div className="contact-details">
                  <ContactDetail icon="fa-map-marker-alt" title="Location">Pretoria North, 0116, Pretoria, South Africa</ContactDetail>
                  <ContactDetail icon="fa-envelope" title="Email">{email}</ContactDetail>
                  <ContactDetail icon="fa-phone" title="Phone">066 159 4153</ContactDetail>
                  <ContactDetail icon="fab fa-linkedin" title="LinkedIn">
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">linkedin.com/in/nomonde-mhlanga</a>
                  </ContactDetail>
                </div>
              </div>
              <form className="contact-form" onSubmit={submitContactForm}>
                <div className="form-group"><input name="name" type="text" placeholder="Your Name" required /></div>
                <div className="form-group"><input name="email" type="email" placeholder="Your Email" required /></div>
                <div className="form-group"><input name="subject" type="text" placeholder="Subject" /></div>
                <div className="form-group"><textarea name="message" placeholder="Your Message" rows={5} required /></div>
                <button type="submit" className="submit-btn">Send Message <i className="fas fa-paper-plane" /></button>
                <p
                  className="form-status"
                  role="status"
                  style={{ color: formStatus === "Sending message..." ? "#5e72e4" : "#10b981" }}
                >
                  {formStatus}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Nomonde Mitchelle Mhlanga</h3>
              <p>Computer Science Student | Aspiring Developer</p>
            </div>
            <div className="footer-links">
              {navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
            </div>
            <div className="footer-social">
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
              <a href={`mailto:${email}`} aria-label="Email"><i className="fas fa-envelope" /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Nomonde Mhlanga. All rights reserved.</p>
            <p>📍 Pretoria, South Africa</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="info-item">
      <i className={`fas ${icon}`} />
      <div><strong>{label}:</strong><span>{value}</span></div>
    </div>
  );
}

function EducationItem({
  period,
  qualification,
  institution,
  summary,
  bullets,
}: {
  period: string;
  qualification: string;
  institution: string;
  summary?: string;
  bullets: string[];
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-date">{period}</div>
      <div className="timeline-content">
        <h3>{qualification}</h3>
        <h4>{institution}</h4>
        {summary && <p>{summary}</p>}
        <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </div>
    </div>
  );
}

function ContactDetail({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  const iconClass = icon.startsWith("fab ") ? icon : `fas ${icon}`;
  return (
    <div className="contact-item">
      <div className="icon"><i className={iconClass} /></div>
      <div><h4>{title}</h4><p>{children}</p></div>
    </div>
  );
}
