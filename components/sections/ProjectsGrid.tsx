"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projectsData } from "@/constants/projects";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { GithubIcon } from "@/components/ui/Icons";
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const categories = ["All", "Web Applications", "AI & ML", "Security & Systems", "Database Systems"];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-50/70 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="blue">
              <FolderGit2 className="w-3.5 h-3.5" /> Software Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Academic & Independent Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Explore systems engineered with object-oriented paradigms, AI computer vision, normalized database schemas, and cryptographic algorithms.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div key={project.id} variants={fadeIn("up", 0.1 * idx)}>
                <Card className="h-full flex flex-col justify-between p-6 hover:shadow-xl transition-all duration-300 border-slate-200/80 dark:border-slate-800">
                  <div className="space-y-4">
                    {/* Header line */}
                    <div className="flex items-center justify-between">
                      <Badge variant="blue" size="sm">
                        {project.category}
                      </Badge>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      iconPosition="right"
                      className="w-full justify-center"
                    >
                      System Details & Spec
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Badge variant="blue">{selectedProject.category}</Badge>
              <span className="text-xs text-slate-500">{selectedProject.subtitle}</span>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Problem & Engineering Objective
              </h4>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedProject.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Architectural Solution
              </h4>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedProject.solution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Core Deliverables & Features
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {selectedProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.metrics && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {selectedProject.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-center"
                  >
                    <div className="text-base font-bold text-blue-600 dark:text-blue-400 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                    Open Live Project
                  </Button>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                    View Repository
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
