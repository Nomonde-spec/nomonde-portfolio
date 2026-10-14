import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { WILReadiness } from "@/components/sections/WILReadiness";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { GitHubFeed } from "@/components/sections/GitHubFeed";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <ProjectsGrid />
        <WILReadiness />
        <EducationTimeline />
        <GitHubFeed />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
