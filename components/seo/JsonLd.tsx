import React from "react";
import { profileData } from "@/constants/profile";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: "Software Engineer",
    description: profileData.tagline,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Tshwane University of Technology (TUT)",
    },
    knowsAbout: [
      "Software Engineering",
      "Java Programming",
      "Python Development",
      "PL/SQL & Relational Databases",
      "MySQL",
      "Computer Vision & Facial Recognition",
      "Next.js & Web Development",
      "Agile Development Practices",
    ],
    url: "https://nomonde-portfolio.vercel.app",
    sameAs: [profileData.github, profileData.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria / Johannesburg",
      addressCountry: "South Africa",
    },
    email: `mailto:${profileData.email}`,
    seeking: [
      "Work Integrated Learning (WIL)",
      "Graduate Software Engineering Role",
      "Junior Software Developer Position",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
    name: `${profileData.name} - Software Engineer Portfolio`,
    description: "Official developer portfolio and WIL candidate showcase for Nomonde Mitchelle Mhlanga.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
