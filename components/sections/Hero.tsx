"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/constants/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="mt-[58px] flex min-h-[calc(100vh-58px)] items-center overflow-hidden bg-gradient-to-r from-[#5d6be5] to-[#9b4fe4] py-6 text-white"
    >
      <div className="mx-auto grid w-full max-w-[960px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[500px_1fr] lg:gap-[100px] lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-[460px]"
        >
          <p className="mb-5 text-base font-semibold">👋 Hello, I&apos;m</p>
          <h1 className="mb-5 text-[44px] font-extrabold leading-[1.6] tracking-tight">
            Nomonde Mitchelle
            <br />
            Mhlanga
          </h1>
          <p className="mb-6 text-[22px] font-semibold">
            I&apos;m a <span className="text-[#ffdc68]">AI Enthusiast</span>
            <span className="ml-2 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-white/30" aria-hidden="true" />
          </p>
          <p className="max-w-[460px] text-[14px] font-medium leading-[26px] text-white/95">
            Motivated Computer Science student at Tshwane University of
            Technology (all academic requirements completed) with a strong
            foundation in software development, databases, and problem-solving.
            Seeking a Work Integrated Learning (WIL) opportunity to apply
            technical expertise in Java, PL/SQL, and JavaScript while
            contributing to innovative projects. Passionate about coding,
            collaborative problem-solving, and continuous learning in a dynamic
            tech environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#ffdc68] px-6 text-sm font-bold text-slate-900 transition-colors hover:bg-[#ffe58a]"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border-2 border-white px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              View Work
            </a>
            <a
              href={profileData.resumePath}
              download
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border-2 border-[#ffdc68] px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative aspect-square w-64 overflow-hidden rounded-full border-2 border-white/70 shadow-xl">
            <Image
              src="/profile.jpeg"
              alt="Nomonde Mitchelle Mhlanga"
              fill
              priority
              sizes="256px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
