import Link from 'next/link'

export const metadata = {
  title: 'Projects | Kyla ',
  description: 'A complete collection of my projects and work.',
}

const projects = [
  {
    tag: 'Project',
    title: 'Real-Time Visual Clutter & Risk Assessment of Electrical Posts Using Deep Learning V2',
    description: 'an updated version of the project I made for our Deep Learning subject back in uni. An end-to-end segmentation that addresses false positives issues using YOLO instance segmentation',
    icon: (
      <svg className="w-10 h-10 text-neutral-400 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.864-9.864a4.5 4.5 0 00-6.364 0l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    link: '#',
  },
  {
    tag: 'Project',
    title: 'Full-Stack Web App',
    description: 'Dynamic web application with custom authentication, responsive UI, and REST APIs.',
    icon: (
      <svg className="w-10 h-10 text-neutral-400 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="18" x2="14" y2="18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: '#',
  },
  {
    tag: 'Project',
    title: 'Artfolio',
    description: 'Dynamic web application with custom authentication, responsive UI, and REST APIs.',
    icon: (
      <svg className="w-10 h-10 text-neutral-400 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="18" x2="14" y2="18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: '#',
  },
  {
    tag: 'Project',
    title: 'Real-Time Visual Clutter & Risk Assessment of Electrical Posts Using Deep Learning V1',
    description: 'Dynamic web application with custom authentication, responsive UI, and REST APIs.',
    icon: (
      <svg className="w-10 h-10 text-neutral-400 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="18" x2="14" y2="18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: '#',
  },
]

export default function ProjectsPage() {
  return (
    <section id="projects" className="pt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-neutral-950 dark:text-neutral-100 mb-10">
            Some of my projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group flex flex-col rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer"
              >
                {/* Card Tag */}
                <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                  <span>💡</span>
                  <span>{project.tag}</span>
                </div>

                {/* Black Thumbnail Box */}
                <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-black transition-transform duration-300 group-hover:scale-[1.01]">
                  {project.icon}
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

