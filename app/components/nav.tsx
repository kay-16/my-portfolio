'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#EADCB1]/80 dark:border-[#3D2527]/80 bg-[#FBF6E2]/80 dark:bg-[#1A1213]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Left: Brand Logo & Main Nav Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-[#8C1D24] dark:text-[#FBF6E2] hover:opacity-85 transition"
          >
            {/* Small circular mark / initial */}
            <span className="tracking-tight text-sm font-semibold">Home</span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6 text-sm sm:text-sm text-[#7D4F4C] dark:text-[#D4C49E] font-medium">
            <Link
              href="/projects"
              className="hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Right: Quick Actions, Resume, & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Resume Link */}
          <a
            href="/reambonanza_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] px-2.5 py-1 rounded-lg hover:bg-[#F5EBC4]/50 dark:hover:bg-[#2D1F20] transition"
          >
            Resume
          </a>
        </div>

      </div>
    </header>
  )
}