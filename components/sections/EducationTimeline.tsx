"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { educationData, certificatePlaceholderData } from "@/constants/education";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";

export function EducationTimeline() {
  return (
    <section id="education" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
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
            <Badge variant="blue">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Qualification
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Education & Computer Science Specializations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Tshwane University of Technology (TUT) National Diploma curriculum and continuous professional learning goals.
            </p>
          </div>

          {/* Education Card */}
          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div key={edu.id} variants={fadeIn("up", 0.2 * idx)}>
                <Card className="p-6 sm:p-8 space-y-6 border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="success">{edu.status}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {edu.qualification}
                      </h3>
                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-xs text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.summary}
                  </p>

                  {/* Core Modules Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                      Core Academic Modules Completed
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {edu.coreModules.map((mod, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                      Key Academic Milestones
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certificates & Professional Growth */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Continuous Learning & Planned Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificatePlaceholderData.map((cert, idx) => (
                <motion.div key={cert.id} variants={fadeIn("up", 0.1 * idx)}>
                  <Card className="p-6 space-y-3 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                    <div className="flex items-center justify-between">
                      <Badge variant="blue" size="sm">
                        {cert.status}
                      </Badge>
                      <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
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
