"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { profileData } from "@/constants/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  Download,
  Terminal,
  Sparkles,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  Shield,
  Layers,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] bg-blue-600/10 dark:bg-blue-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-400/10 dark:bg-sky-400/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Text & Hero Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* WIL Status Indicator Badge */}
            <motion.div variants={fadeIn("up", 0.1)} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Work Integrated Learning (WIL) & Graduate Roles</span>
              </div>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </motion.h1>

            {/* Role Title Tags */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono text-slate-600 dark:text-slate-300"
            >
              <span className="font-bold text-blue-600 dark:text-blue-400">Software Engineer</span>
              <span className="text-slate-400">•</span>
              <span>Computer Science Graduate</span>
              <span className="text-slate-400">•</span>
              <span>Problem Solver</span>
            </motion.div>

            {/* Subtitle / Bio summary */}
            <motion.p
              variants={fadeIn("up", 0.4)}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {profileData.tagline} Focused on writing maintainable code, designing normalized relational databases, and developing AI-assisted automation platforms.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#projects">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  View Projects
                </Button>
              </a>
              <a href={profileData.resumePath} download>
                <Button variant="secondary" size="lg" icon={<Download className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </motion.div>

            {/* Key Academic Pillars */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>OOP & Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>RDBMS & PL/SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>OpenCV & AI Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>TUT CS Diploma</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Interactive Terminal / Technical Preview Card */}
          <motion.div variants={fadeIn("left", 0.3)} className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950 p-6 border border-slate-800 shadow-2xl overflow-hidden text-slate-200 font-mono text-xs sm:text-sm">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>nomonde-engineer-spec.ts</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-2 text-left leading-relaxed">
                <div>
                  <span className="text-blue-400">interface</span>{" "}
                  <span className="text-emerald-300">SoftwareEngineer</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-amber-300">"Nomonde Mitchelle Mhlanga"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{" "}
                  <span className="text-amber-300">"Tshwane University of Technology"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">qualification:</span>{" "}
                  <span className="text-amber-300">"National Diploma: Computer Science"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">primaryLanguages:</span> [
                  <span className="text-sky-300">"Java"</span>,{" "}
                  <span className="text-sky-300">"Python"</span>,{" "}
                  <span className="text-sky-300">"PL/SQL"</span>,{" "}
                  <span className="text-sky-300">"JavaScript"</span>];
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">databases:</span> [
                  <span className="text-sky-300">"MySQL"</span>,{" "}
                  <span className="text-sky-300">"Oracle SQL"</span>];
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">featuredSystem:</span>{" "}
                  <span className="text-emerald-300">"Student Attendance AI"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400 font-bold">"Ready for WIL & Graduate Placements"</span>;
                </div>
                <div>{"}"}</div>
              </div>

              {/* Live Status Command Prompt Output */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">❯</span>
                  <span className="animate-pulse">npx run-verify-candidate --strict</span>
                </div>
                <span className="text-emerald-400 font-semibold">100% READY</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
