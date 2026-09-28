'use client'

import Link from 'next/link'
import { ThemeToggle } from './themetoggle'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/75 dark:bg-neutral-950/75 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Left: Brand Logo & Main Nav Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-neutral-950 dark:text-neutral-50 hover:opacity-80 transition"
          >
            {/* Small subtle circular mark or initial */}
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-xs text-white dark:text-neutral-950 font-mono font-bold">
              K
            </span>
            <span className="tracking-tight text-sm font-semibold">Home</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            <Link
              href="/projects"
              className="hover:text-neutral-950 dark:hover:text-neutral-100 transition"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-neutral-950 dark:hover:text-neutral-100 transition"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right: Quick Actions, Resume, & Command / Links */}
        <div className="flex items-center gap-3">
          {/* Quick Search / Command Pill */}
          {/* <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 text-xs text-neutral-400">
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 shadow-2xs">
              ⌘K
            </kbd>
          </div> */}
        

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 px-2 py-1 transition"
          >
            Resume
          </a>

          {/* GitHub Icon Link */}
          {/* <a
            href="https://github.com/kay-16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <img
              src="/github.svg"
              alt=""
              className="w-4 h-4 opacity-80 hover:opacity-100 dark:invert"
            />
          </a> */}
        </div>

      </div>
    </header>
  )
}