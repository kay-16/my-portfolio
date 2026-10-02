import Link from 'next/link'
import { LuChevronsLeft } from 'react-icons/lu'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 text-[#8C1D24] dark:text-[#F3E5AB]">
      {/* Editorial Eyebrow */}
      <span className="font-mono text-xs uppercase tracking-widest text-[#A85854] dark:text-[#D4C49E] mb-3">
        Error 404
      </span>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#8C1D24] dark:text-[#FBF6E2]">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="max-w-md text-base text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed mb-8">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] transition shadow-xs"
      >
        <LuChevronsLeft className="w-4 h-4 shrink-0" />
        <span>Return Home</span>
      </Link>
    </div>
  )
}