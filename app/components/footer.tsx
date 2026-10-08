import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#EADCB1]/80 dark:border-[#3D2527]/80 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Links Grid: Aligned to the left with custom column spacing */}
        <div className="flex flex-row justify-start gap-20 sm:gap-32">
          {/* Column 1: Internal Pages */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A85854] dark:text-[#D4C49E] mb-4">
              Navigation
            </p>
            <ul className="space-y-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/Reambonanza_Kyla_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: External Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A85854] dark:text-[#D4C49E] mb-4">
              Connect
            </p>
            <ul className="space-y-6 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/kyla-reambonanza-889a7135b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition inline-flex items-center gap-1"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kay-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition inline-flex items-center gap-1"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kayluvxx_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition inline-flex items-center gap-1"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/ajq0gc3yb2piriihvzldi3nip?si=2111d493490248c0d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D4F4C] dark:text-[#D4C49E] hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition inline-flex items-center gap-1"
                >
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-14 pt-8 border-t border-[#EADCB1]/80 dark:border-[#3D2527]/80 text-xs text-[#A85854] dark:text-[#D4C49E]">
          <p>© {new Date().getFullYear()} All rights reserved | by kay</p>
        </div>
      </div>
    </footer>
  )
}