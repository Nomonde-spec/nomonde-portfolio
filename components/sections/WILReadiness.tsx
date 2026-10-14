"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { experienceData } from "@/constants/education";
import { profileData } from "@/constants/profile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
  Zap,
  Target,
  FileCheck2,
  GraduationCap,
} from "lucide-react";

export function WILReadiness() {
  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="success">
              <Zap className="w-3.5 h-3.5" /> Industry Placement & Readiness
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Work Integrated Learning (WIL) & Graduate Readiness
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Equipped with complete academic credits from Tshwane University of Technology and ready to contribute immediately to enterprise development teams.
            </p>
          </div>

          {/* Readiness Pillars Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeIn("up", 0.1)}>
              <Card className="p-6 space-y-4 border-l-4 border-l-blue-500 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Academic Compliance
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  All theoretical coursework for National Diploma in Computer Science at TUT complete. Fully eligible for WIL placement endorsement.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.2)}>
              <Card className="p-6 space-y-4 border-l-4 border-l-emerald-500 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Production Mindset
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Focus on maintainable code architecture, comprehensive technical documentation, SQL normalization, and strict Git version control.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="p-6 space-y-4 border-l-4 border-l-sky-500 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Target Roles
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {profileData.targetRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Timeline Experience Breakdown */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center md:text-left">
              Academic Experience & Practical Capstone Roles
            </h3>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div key={exp.id} variants={fadeIn("up", 0.1 * idx)}>
                  <Card className="p-6 sm:p-8 relative overflow-hidden border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="blue" size="sm">
                            {exp.type}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                          Key Deliverables & Methodologies
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {exp.keyDeliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
