"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/smart-room-finder", label: "Smart Room Finder" },
  { href: "/lost-and-found", label: "Lost & Found" },
  { href: "/quick-polls", label: "Quick Polls" },
  { href: "/study-buddy-match", label: "Study Buddy Match" },
  { href: "/voice-box", label: "Voice Box" },
  { href: "/announcements", label: "Announcements" },
  { href: "/health", label: "Health Check" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            CampusPulse
          </Link>
          <p className="text-sm text-slate-500">Campus community hub</p>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>

        <nav className="hidden flex-1 min-w-0 items-center justify-end gap-2 text-sm sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`${open ? "max-h-screen" : "max-h-0"} overflow-hidden border-t border-slate-200 sm:hidden`}>
        <nav className="space-y-1 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
