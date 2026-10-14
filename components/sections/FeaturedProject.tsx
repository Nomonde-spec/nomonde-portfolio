"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projectsData } from "@/constants/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { GithubIcon } from "@/components/ui/Icons";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";

export function FeaturedProject() {
  const featured = projectsData.find((p) => p.featured) || projectsData[0];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 relative bg-slate-900 text-slate-100 dark:bg-slate-950 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

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
                <Sparkles className="w-3.5 h-3.5" /> Flagship Engineering System
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Project: {featured.title}
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                {featured.subtitle}
              </p>
            </div>
            {featured.liveUrl ? (
              <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" icon={<ExternalLink className="w-4 h-4" />}>
                  Open Live Project
                </Button>
              </a>
            ) : featured.githubUrl ? (
              <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" icon={<GithubIcon className="w-4 h-4" />}>
                  View Source Code
                </Button>
              </a>
            ) : null}
          </div>

          {/* Featured Project Showcase Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* System Visual Architecture Box */}
            <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                    System Architecture Overview
                  </span>
                  <Badge variant="blue" size="sm">
                    {featured.category}
                  </Badge>
                </div>

                <div className="space-y-4">
                  {featured.architecture.map((layer, index) => (
                    <div key={layer}>
                      {index > 0 && (
                        <div className="flex justify-center">
                          <div className="w-0.5 h-4 bg-blue-500/40" />
                        </div>
                      )}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                          <Layers className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-semibold text-white">{layer}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metrics Footer */}
                {featured.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-center">
                    {featured.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="text-lg font-bold text-blue-400 font-mono">{m.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Column: Problem, Solution & Features */}
            <motion.div variants={fadeIn("left", 0.3)} className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {featured.subtitle}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>

              {/* Problem vs Solution Cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 text-slate-300 space-y-1">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[11px]">
                    The Challenge
                  </span>
                  <p>{featured.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-slate-300 space-y-1">
                  <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
                    The Solution
                  </span>
                  <p>{featured.solution}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Key System Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {featured.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((tag, i) => (
                  <Badge key={i} variant="blue" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Detail Modal Trigger */}
              <div className="pt-4 flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Deep Dive Architecture
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Deep Dive Architecture Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`${featured.title} - Deep Dive Architecture`}
      >
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              System Overview & Objective
            </h4>
            <p className="text-sm leading-relaxed">{featured.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Architectural Layers & Modules
            </h4>
            <ul className="space-y-2 text-sm">
              {featured.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Key System Features
            </h4>
            <ul className="space-y-2 text-sm">
              {featured.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
            {featured.liveUrl && (
              <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                  Open Live Project
                </Button>
              </a>
            )}
            {featured.githubUrl && (
              <a href={featured.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" icon={<GithubIcon className="w-4 h-4" />}>
                  Repository Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </Modal>
    </section>
  );
}
