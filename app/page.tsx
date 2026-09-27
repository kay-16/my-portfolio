import Link from 'next/link'
import Globe from './components/Globe'
import { allProjects } from 'lib/projects'
import FadeIn from './components/FadeIn'

export const metadata = {
  title: 'Kyla Reambonanza | Software Engineer',
  description: 'Software Engineer and Computer Science graduate portfolio',
}

const stacks = [
  'Next.js',
  'React',
  'Python',
  'Tailwind CSS',
  'Laravel',
  'TypeScript',
  'PyTorch',
  'Git',
  'MySQL',
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/kay-16' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kyla-reambonanza-889a7135b/' },
  { name: 'Email', url: 'mailto:kayreambonanza@gmail.com' },
  { name: 'Spotify', url: 'https://open.spotify.com/user/ajq0gc3yb2piriihvzldi3nip?si=2111d493490248c0d' },
  { name: 'Instagram', url: 'https://www.instagram.com/kayluvxx_/' },
]

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900 overflow-hidden px-6 pt-32 pb-20">
      {/* 1. Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-10 h-96 w-full max-w-2xl bg-gradient-to-bl from-purple-200/50 via-rose-100/40 to-transparent blur-3xl opacity-70"
      />

      <div className="max-w-4xl mx-auto">
        {/* 2. Hero Section */}
        <FadeIn delay={100}>
          <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 pb-20">
            <div className="max-w-xl">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                I’m Kyla, a Software Engineer and ML Engineer on the side building{' '}
                <span className="bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                  cool
                </span>{' '}
                stuff
              </span>
              <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-mono tracking-wide">
                Philippines • UTC/GMT +8
              </p>
            </div>

            {/* Glowing Avatar / Initials */}
            <div className="relative group self-center md:self-auto">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-400 to-rose-400 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />
              <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-black shadow-xl">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white select-none">
                  K
                </span>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 3. Selected Projects Section */}
        <section id="projects" className="pt-6">
          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-neutral-950 dark:text-neutral-100 mb-10">
              Some of my projects
            </h2>
          </FadeIn>

          {/* Projects Grid with Staggered Cascading Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.slice(0, 2).map((project, index) => (
              <FadeIn key={project.slug} delay={index * 150} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col h-full rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer"
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
                  <div className="mt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-neutral-400 group-hover:translate-x-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-all">
                          ↗
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* "See all projects" Button */}
          <FadeIn delay={200}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm transition"
              >
                <span>See all my projects</span>
                <span className="font-mono text-xs">→</span>
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* 4. About Me Bento Grid */}
        <section id="about" className="scroll-mt-28 mt-24">
          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-neutral-950 dark:text-neutral-50 mb-10">
              About Me
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {/* 1. Location Card with Globe */}
            <FadeIn delay={100} className="md:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 flex flex-col justify-between shadow-sm min-h-[340px] h-full">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                  <span>Location</span>
                    <img 
                      src="/map-pinned.svg" 
                      alt="" 
                      className="w-3.5 h-3.5 opacity-100"
                   />
                </div>

                <div className="relative flex items-center justify-center my-auto">
                  <Globe />
                  <div className="absolute px-3 py-1 rounded-full bg-black text-white text-xs font-semibold shadow-md flex items-center gap-1.5 z-10 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Philippines
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 2. Connect Links */}
            <FadeIn delay={200} className="md:col-span-1 lg:col-span-2">
              <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-sm flex flex-col justify-between h-full">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4">
                  <span>Connect</span>
                  <img 
                    src="/link.svg" 
                    alt="" 
                    className="w-3.5 h-3.5 opacity-100"
                  />
                </div>

                <div className="flex flex-col gap-2 my-auto">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-sm font-medium text-neutral-800 dark:text-neutral-200"
                    >
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 3. Tech Stacks */}
            <FadeIn delay={300} className="md:col-span-2 lg:col-span-4">
              <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-sm flex flex-col justify-between h-full">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-6">
                  <span>Stacks</span>
                  <img 
                    src="/layers.svg" 
                    alt="" 
                    className="w-3.5 h-3.5 opacity-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2.5 items-center justify-center py-4">
                  {stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3.5 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Download CV CTA */}
          <FadeIn delay={150}>
            <div className="mt-10 flex justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Download Full CV</span>
                <img 
                  src="/external-link.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
              </a>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  )
}