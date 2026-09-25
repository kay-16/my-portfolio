import Link from 'next/link'

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800 shadow-sm">
        {/* Brand / Logo */}
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          K
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition">Projects</Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">About</Link>
          <Link href="/resume.pdf" download className="hover:text-black dark:hover:text-white transition">Resume</Link>
          
          {/* Action icon */}
          <span className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-neutral-500">
            ⌘K
          </span>
        </div>
      </nav>
    </header>
  )
}