"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { profileData } from "@/constants/profile";
import { projectsData } from "@/constants/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import {
  GitCommit,
  GitBranch,
  Star,
  Terminal,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function GitHubFeed() {
  const languageStats = [
    { name: "Java", percentage: 38, color: "bg-amber-500" },
    { name: "Python", percentage: 32, color: "bg-blue-500" },
    { name: "PL/SQL & MySQL", percentage: 18, color: "bg-sky-400" },
    { name: "TypeScript / JS", percentage: 12, color: "bg-emerald-400" },
  ];

  return (
    <section id="github" className="py-24 relative bg-slate-900 text-slate-100 dark:bg-slate-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-3">
              <Badge variant="blue">
                <GithubIcon className="w-3.5 h-3.5" /> Live Code Activity
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                GitHub Repository Matrix
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                Explore source code repositories, commits, and engineering language distribution on GitHub (@Nomonde-spec).
              </p>
            </div>

            <a href={profileData.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" icon={<GithubIcon className="w-4 h-4" />}>
                Follow @Nomonde-spec
              </Button>
            </a>
          </div>

          {/* Stats & Languages Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Language Breakdown */}
            <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-6 flex">
              <Card className="w-full p-6 bg-slate-950 border-slate-800 text-slate-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      Language Distribution Across Projects
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Primary Tech</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Repository codebase breakdown calculated from active project commits and module development.
                  </p>

                  {/* Multi-color Progress Bar */}
                  <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
                    {languageStats.map((lang, idx) => (
                      <div
                        key={idx}
                        className={`h-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                        title={`${lang.name}: ${lang.percentage}%`}
                      />
                    ))}
                  </div>

                  {/* Language Legend */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {languageStats.map((lang, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                          <span className="font-medium text-slate-200">{lang.name}</span>
                        </div>
                        <span className="font-mono text-slate-400">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-emerald-400" />
                    <span>Active Branching & Version Control</span>
                  </div>
                  <span className="text-emerald-400">PUBLIC REPOS</span>
                </div>
              </Card>
            </motion.div>

            {/* Featured Repos List */}
            <motion.div variants={fadeIn("left", 0.3)} className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-400" />
                Featured Repositories
              </h3>

              <div className="space-y-3">
                {projectsData.map((project) => (
                  <a
                    key={project.id}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/50 transition-all duration-200 flex items-center justify-between">
                      <div className="space-y-1 pr-4">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                          <Badge variant="blue" size="sm">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
