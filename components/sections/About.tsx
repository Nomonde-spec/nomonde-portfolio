"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { profileData } from "@/constants/profile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  Code2,
  Brain,
  Rocket,
  Users,
  Target,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Computer Science Qualification",
      description:
        "Completed National Diploma in Computer Science at Tshwane University of Technology (TUT) with strong academic standing in software development & relational databases.",
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Algorithmic Problem Solving",
      description:
        "Trained in structured object-oriented programming, algorithm analysis, data structures, and systematic root-cause debugging.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Practical Software Systems",
      description:
        "Built complete systems from scratch including AI computer vision attendance automation, file encryption utilities, and PL/SQL database systems.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Collaborative Team Mindset",
      description:
        "Experienced in academic group capstones, applying Git workflows, sprint planning, technical documentation, and peer code reviews.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="blue">
              <Sparkles className="w-3.5 h-3.5" /> Professional Profile
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Driven by Software Craftsmanship & Continuous Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Bridging academic rigor with production engineering principles.
            </p>
          </div>

          {/* Bio Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Bio Story */}
            <motion.div variants={fadeIn("up", 0.2)} className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                About Nomonde Mitchelle Mhlanga
              </h3>

              {profileData.fullBio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  Engineering Principles & Work Ethic
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Systematic, clear code organization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Normalized & reliable relational database design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Proactive problem solver & fast learner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Respect for security & data integrity</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Quick Stat Cards Column */}
            <motion.div variants={fadeIn("up", 0.4)} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="flex gap-4 items-start p-5">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
