import Link from 'next/link'
import { allProjects } from 'lib/projects'
import { LuLightbulb } from 'react-icons/lu'
import FadeIn from 'app/components/FadeIn'

export const metadata = {
  title: 'Projects | Kyla',
  description: 'A complete collection of my projects and work.',
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="pt-32 pb-20">
      <FadeIn delay={100}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] mb-10">
          My works
        </h2>
      </FadeIn>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project, index) => (
          <FadeIn key={project.title} delay={150 + index * 100} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col h-full rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-6 shadow-[0_2px_16px_rgba(140,29,36,0.04)] hover:shadow-xl hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 transition-all duration-300 cursor-pointer"
            >
              {/* Card Tag */}
              <div className="flex items-center gap-2 text-xs text-[#A85854] dark:text-[#D4C49E] font-medium mb-4">
                <LuLightbulb className="w-3.5 h-3.5 shrink-0 opacity-85" />
                <span>{project.tag}</span>
              </div>

              {/* Thumbnail Box */}
              <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-[#E2D29E]/60 dark:border-[#2E1D1E] bg-[#F0E4BA]/50 dark:bg-[#150E0F]">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* Fallback if an image isn't provided */
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-mono text-[#8C1D24]/70 dark:text-[#D4C49E]/70 text-xs">
                      [ View Case Study ]
                    </span>
                  </div>
                )}
              </div>

              {/* Card Text Content */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#8C1D24] dark:text-[#FBF6E2] group-hover:text-[#B22933] dark:group-hover:text-[#FFFDF5] transition-colors">
                    {project.title}
                  </h3>
                  {/* Subtle arrow indicator that moves on hover */}
                  <span className="text-[#A85854] group-hover:translate-x-1 group-hover:text-[#8C1D24] dark:group-hover:text-[#F3E5AB] transition-all">
                    
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}