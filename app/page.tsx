import Link from 'next/link'
import Globe from './components/Globe'
import { allProjects } from 'lib/projects'
import FadeIn from './components/FadeIn'
import { 
  SiNextdotjs, 
  SiReact, 
  SiPython, 
  SiPostgresql, 
  SiTypescript, 
  SiHtml5, 
  SiCss, 
  SiCloudflare, 
  SiMarkdown, 
  SiVercel, 
  SiJavascript, 
  SiPytorch, 
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
  SiSpotify,
  SiInstagram,
  SiTailwindcss
} from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { LiaLinkedin } from 'react-icons/lia'

export const metadata = {
  title: 'Kyla Reambonanza | Software Engineer',
  description: 'Software Engineer and Computer Science graduate portfolio',
}

const socials = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/kay-16', 
    icon: SiGithub 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/kyla-reambonanza-889a7135b/', 
    icon: LiaLinkedin 
  },
  { 
    name: 'Email', 
    url: 'mailto:kayreambonanza@gmail.com', 
    icon: HiOutlineMail 
  },
  { 
    name: 'Spotify', 
    url: 'https://open.spotify.com/user/ajq0gc3yb2piriihvzldi3nip?si=2111d493490248c0d', 
    icon: SiSpotify 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/kayluvxx_/', 
    icon: SiInstagram 
  },
]

const row1 = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Python', icon: SiPython },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
]

const row2 = [
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Cloudflare', icon: SiCloudflare },
  { name: 'Markdown', icon: SiMarkdown },
  { name: 'Vercel', icon: SiVercel },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
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
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
                  i’m{' '}
                  <span 
                    style={{ fontFamily: 'var(--font-cursive), cursive' }}
                    className="font-normal text-[2em] leading-none inline-block px-1 -rotate-2 text-neutral-950 dark:text-neutral-50"
                  >
                    Kyla
                  </span>
                  , i like to create, build and some {' '}
                  <span className="bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                    cool
                  </span>{' '}
                  stuff
                </span>
              <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-mono tracking-wide">
                Philippines | UTC/GMT +8
              </p>
            </div>

            {/* Profile Photo Avatar with Glow & Speech Badge */}
            <div className="relative group self-center md:self-auto shrink-0">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-2 rounded-full" />

              {/* Circular Avatar Container */}
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-neutral-900 shadow-xl bg-neutral-100 dark:bg-neutral-800">
                <img
                  src="/images/portfolio_photo.jpg"
                  alt="Kyla Reambonanza"
                  className="h-full w-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
              </div>

              {/* Floating Speech / Greeting Pill Bubble
              <div className="absolute -bottom-1 -right-3 sm:bottom-1 sm:-right-4 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-neutral-800 dark:text-neutral-200 shadow-md flex items-center gap-1 select-none pointer-events-none transition-transform group-hover:scale-105">
                <span>Kay!</span>
              </div> */}
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

            {/* 2. Connect Card with SVG Icons */}
          <FadeIn delay={200} className="md:col-span-1 lg:col-span-2">
            <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-xs flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4">
                <span>Connect</span>
                <img src="/link.svg" alt="" className="w-3.5 h-3.5 opacity-80 dark:invert" />
              </div>

              <div className="flex flex-col gap-1.5 my-auto">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-all text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </div>
                      <span className="text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                        ↗
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          {/* 3. Tech Stacks Card (Icon Showcase like Reference) */}
          <FadeIn delay={300} className="md:col-span-2 lg:col-span-4">
            <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-xs flex flex-col justify-between h-full overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-6">
                <img src="/layers.svg" alt="" className="w-3.5 h-3.5 opacity-80 dark:invert" />
                <span>Stacks</span>
              </div>

              {/* Marquee Container with Left & Right Gradient Blur Masks */}
              <div className="relative w-full overflow-hidden py-2 space-y-6">
                {/* Left Fade Mask */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-[#0d0d0d] to-transparent" />
                {/* Right Fade Mask */}
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-[#0d0d0d] to-transparent" />

                {/* Row 1 */}
                <div className="animate-marquee flex gap-10 sm:gap-12 items-center">
                  {/* Render twice for continuous loop */}
                  {[...row1, ...row1].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={`${item.name}-${index}`}
                        title={item.name}
                        className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:scale-115 transition-transform duration-200 cursor-pointer shrink-0"
                      >
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                      </div>
                    )
                  })}
                </div>

                {/* Row 2 */}
                <div className="animate-marquee flex gap-10 sm:gap-12 items-center" style={{ animationDuration: '30s' }}>
                  {/* Render twice for continuous loop */}
                  {[...row2, ...row2].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={`${item.name}-${index}`}
                        title={item.name}
                        className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:scale-115 transition-transform duration-200 cursor-pointer shrink-0"
                      >
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                      </div>
                    )
                  })}
                </div>
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