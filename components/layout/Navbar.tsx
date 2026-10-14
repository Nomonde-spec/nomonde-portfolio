"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 h-[58px] bg-white text-slate-800 shadow-sm dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto flex h-full max-w-[960px] items-center justify-between px-6">
          <Link
            href="#hero"
            aria-label="Nomonde Mhlanga home"
            className="text-2xl font-extrabold leading-none tracking-tight text-[#6965e8]"
          >
            NM
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-[#6965e8] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#6965e8]"
                      : "text-slate-800 hover:text-[#6965e8] dark:text-slate-200"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="rounded-md p-2 text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}
