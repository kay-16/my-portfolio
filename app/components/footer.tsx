import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-150 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Links Grid: Aligned to the left with custom column spacing */}
        <div className="flex flex-row justify-start gap-20 sm:gap-32">
          {/* Column 1: Internal Pages */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Navigation
            </p>
            <ul className="space-y-6 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: External Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Connect
            </p>
            <ul className="space-y-6 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/kyla-reambonanza-889a7135b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition inline-flex items-center gap-1"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kay-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition inline-flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kayluvxx_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition inline-flex items-center gap-1"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/user/ajq0gc3yb2piriihvzldi3nip?si=2111d493490248c0d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition inline-flex items-center gap-1"
                >
                  Spotify ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-14 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/80 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} All rights reserved · by kay</p>
        </div>
      </div>
    </footer>
  )
}