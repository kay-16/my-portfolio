import Link from 'next/link'
import { allProjects } from 'lib/projects'

export const metadata = {
  title: 'Projects | Kyla ',
  description: 'A complete collection of my projects and work.',
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="pt-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-neutral-950 dark:text-neutral-100 mb-10">
            My works
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer"
              >
                {/* Card Tag */}
                <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                  <img 
                    src="/lightbulb.svg" 
                    alt=""
                    className="w-3.5 h-3.5 opacity-100" 
                  />
                  <span>{project.tag}</span>
                </div>

                {/* Black Thumbnail Box */}
                <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-black transition-transform duration-300 group-hover:scale-[1.01]">
                  <span className="font-mono text-neutral-500 text-xs">
                  [ View Case Study ]
              </span>
                </div>

                {/* Card Text Content */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    {/* Subtle arrow indicator that moves on hover */}
                    <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-all">
                      ↗
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
    </section>
  )
}

