"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/constants/profile";
import { Code2, ArrowUp, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 dark:bg-slate-950 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight">
                Nomonde Mitchelle Mhlanga
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Early-career Software Engineer specializing in Object-Oriented Development, AI Computer Vision, Database Engineering, and Modern Web Architectures. Open for Work Integrated Learning (WIL) & Graduate Engineer placements.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About & Biography
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                  Technical Skill Matrix
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-blue-400 transition-colors">
                  WIL Readiness & Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-blue-400 transition-colors">
                  TUT Education Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Connect & Socials
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (@Nomonde-spec)</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nomonde Mitchelle Mhlanga. Engineered with Next.js 15 & Tailwind CSS 4.</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            icon={<ArrowUp className="w-3.5 h-3.5" />}
            className="text-slate-400 hover:text-slate-100"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
