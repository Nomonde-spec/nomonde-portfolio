"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { skillCategoriesData } from "@/constants/skills";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Terminal,
  Database,
  FileCode,
  Layout,
  Server,
  Layers,
  GitBranch,
  Laptop,
  Users,
  Cpu,
  Bug,
  Globe,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Skill } from "@/types";

// Icon Resolver map
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-500" />,
  Terminal: <Terminal className="w-5 h-5 text-blue-500" />,
  Database: <Database className="w-5 h-5 text-blue-500" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-500" />,
  Layout: <Layout className="w-5 h-5 text-blue-500" />,
  Server: <Server className="w-5 h-5 text-blue-500" />,
  Layers: <Layers className="w-5 h-5 text-blue-500" />,
  GitBranch: <GitBranch className="w-5 h-5 text-blue-500" />,
  Laptop: <Laptop className="w-5 h-5 text-blue-500" />,
  Users: <Users className="w-5 h-5 text-blue-500" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-500" />,
  Bug: <Bug className="w-5 h-5 text-blue-500" />,
  Globe: <Globe className="w-5 h-5 text-sky-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-sky-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-sky-400" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & Environment" },
    { id: "engineering", label: "Software Engineering" },
    { id: "portfolio-stack", label: "Portfolio Stack" },
  ];

  // Flatten or filter skills
  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return skillCategoriesData.flatMap((cat) => cat.skills);
    }
    const cat = skillCategoriesData.find((c) => c.id === activeCategory);
    return cat ? cat.skills : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative">
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
              <Cpu className="w-3.5 h-3.5" /> Technical Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Engineering Skill Matrix & Competencies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Curated capabilities grounded in academic coursework at TUT and modern full-stack development.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white dark:bg-blue-500 shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="h-full flex flex-col justify-between p-6">
                    <div className="space-y-4">
                      {/* Skill Header & Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                            {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-blue-500" />}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                              {skill.name}
                            </h3>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        {skill.isPortfolioStack ? (
                          <Badge variant="blue" size="sm">
                            Portfolio Stack
                          </Badge>
                        ) : (
                          <Badge variant="gray" size="sm">
                            CV Core Skill
                          </Badge>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className="pt-5 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-600 dark:text-slate-400">
                          Proficiency Index
                        </span>
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            skill.isPortfolioStack
                              ? "bg-gradient-to-r from-sky-400 to-blue-500"
                              : "bg-gradient-to-r from-blue-600 to-blue-400"
                          }`}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
