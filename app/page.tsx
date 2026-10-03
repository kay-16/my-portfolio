import Link from 'next/link'
import Globe from './components/globe'
import { allProjects } from 'lib/projects'
import FadeIn from './components/fade-in'
import { 
  SiNextdotjs, 
  SiReact, 
  SiPython, 
  SiTypescript, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTailwindcss,
  SiVercel, 
  SiPytorch, 
  SiLaravel, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiSpotify, 
  SiFigma, 
  SiInstagram 
} from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { LiaLinkedin } from 'react-icons/lia'
import { LuMapPin, LuLink, LuZap, LuExternalLink, LuLightbulb, LuMusic, LuArrowRight } from 'react-icons/lu'

export const metadata = {
  title: 'Kyla Reambonanza | Portfolio',
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
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
]

const row2 = [
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Figma', icon: SiFigma },
  { name: 'Vercel', icon: SiVercel },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
]

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#FBF6E2] dark:bg-[#1A1213] text-[#8C1D24] dark:text-[#F3E5AB] overflow-hidden px-6 pt-32 pb-20 transition-colors duration-300">
      {/* 1. Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-10 h-96 w-full max-w-2xl bg-gradient-to-bl from-[#8C1D24]/20 via-[#F3E5AB]/40 to-transparent blur-3xl opacity-80"
      />

      <div className="max-w-4xl mx-auto">
        {/* 2. Hero Section */}
        <FadeIn delay={100}>
          <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 pb-20">
            <div className="max-w-xl">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] leading-tight">
                i’m{' '}
                <span>
                  Kyla
                </span>
                , i strive to build & create while{' '}
                <span className="bg-gradient-to-r from-[#8C1D24] via-[#C84A31] to-[#D9822B] bg-clip-text text-transparent">
                  learning
                </span>{' '}
                along the way
              </span>
              <p className="mt-4 text-xs sm:text-sm text-[#A85854] dark:text-[#D4C49E] font-mono tracking-wide">
                Philippines | UTC/GMT +8
              </p>
            </div>

            {/* Profile Photo Avatar with Glow */}
            <div className="relative group self-center md:self-auto shrink-0">
              <div className="absolute -inset-2 rounded-full bg-[#8C1D24]/20 dark:bg-[#F3E5AB]/10 blur-xl group-hover:opacity-100 transition duration-500" />

              <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 rounded-full overflow-hidden ring-2 ring-[#8C1D24] dark:ring-[#8C1D24] shadow-xl bg-[#FFFDF5] dark:bg-[#251A1B]">
                <img
                  src="/images/portfolio_photo.jpg"
                  alt="Kyla Reambonanza"
                  className="h-full w-full object-cover object-center contrast-105 group-hover:scale-105 transition-all duration-500 ease-out"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 3. Selected Projects Section */}
        <section id="projects" className="pt-6">
          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] mb-10">
              some of my projects
            </h2>
          </FadeIn>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.slice(0, 2).map((project, index) => (
              <FadeIn key={project.slug} delay={index * 150} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col h-full rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-6 shadow-[0_2px_16px_rgba(140,29,36,0.04)] hover:shadow-xl hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-xs text-[#A85854] dark:text-[#D4C49E] font-medium mb-4">
                    <LuLightbulb className="w-3.5 h-3.5 opacity-100 shrink-0" />
                    <span>{project.tag}</span>
                  </div>

                  <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-[#E2D29E]/60 dark:border-[#2E1D1E] bg-[#F0E4BA]/50 dark:bg-[#150E0F]">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-mono text-[#8C1D24]/70 dark:text-[#D4C49E]/70 text-xs">
                          [ View Case Study ]
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[#8C1D24] dark:text-[#FBF6E2] group-hover:text-[#B22933] dark:group-hover:text-[#FFFDF5] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[#A85854] group-hover:translate-x-1 group-hover:text-[#8C1D24] dark:group-hover:text-[#F3E5AB] transition-all">
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 shadow-xs transition"
              >
                <span>See all my projects</span>
                <LuArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* 4. About Me Bento Grid (Tightened gap-3 to mirror the reference) */}
        <section id="about" className="scroll-mt-28 mt-24">
          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] mb-8">
              about me
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">

            {/* 1. Location Card with Globe Dome */}
            <FadeIn delay={100} className="h-full">
              <Globe />
            </FadeIn>

            {/* 2. Connect Card */}
            <FadeIn delay={200} className="h-full">
              <div className="rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full min-h-[250px]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E] mb-2">
                  <LuLink className="w-3.5 h-3.5 opacity-100 shrink-0" />
                  <span>Connect</span>
                </div>

                <div className="flex flex-col gap-1 my-auto">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-3 py-1.5 rounded-xl hover:bg-[#F5EBC4]/50 dark:hover:bg-[#2D1F20] transition-all text-xs sm:text-sm font-medium text-[#8C1D24] dark:text-[#F3E5AB]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#A85854] group-hover:text-[#8C1D24] dark:group-hover:text-[#FFFDF5] transition-colors">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="group-hover:text-[#8C1D24] dark:group-hover:text-[#FFFDF5] transition-colors">
                            {social.name}
                          </span>
                        </div>
                        <span className="text-[#A85854] group-hover:text-[#8C1D24] dark:group-hover:text-[#FFFDF5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                          ↗
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </FadeIn>

            {/* 3. Tech Stacks Card (Directly beneath Location, tight 12px gap, compact height) */}
            <FadeIn delay={300} className="h-full">
              <div className="rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-5 pb-5 sm:p-6 sm:pb-6 shadow-xs flex flex-col justify-between h-56 sm:h-60 overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E]">
                  <LuZap className="w-3.5 h-3.5 opacity-100 shrink-0" />
                  <span>Stacks</span>
                </div>

                {/* Marquee Container with balanced spacing */}
                <div className="relative w-full overflow-hidden my-auto space-y-3">
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#FFFDF5] dark:from-[#221819] to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#FFFDF5] dark:from-[#221819] to-transparent" />

                  {/* Row 1: Dual Track (Moves Left) */}
                  <div className="marquee-row flex w-full overflow-hidden">
                    <div 
                      className="animate-marquee flex shrink-0 items-center gap-7 sm:gap-8 pr-7 sm:pr-8"
                      style={{ animationDuration: '32s' }}
                    >
                      {row1.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={`row1-a-${item.name}-${index}`}
                            title={item.name}
                            className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition-colors duration-200 cursor-default shrink-0"
                          >
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                          </div>
                        )
                      })}
                    </div>
                    <div 
                      aria-hidden="true" 
                      className="animate-marquee flex shrink-0 items-center gap-7 sm:gap-8 pr-7 sm:pr-8"
                      style={{ animationDuration: '32s' }}
                    >
                      {row1.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={`row1-b-${item.name}-${index}`}
                            title={item.name}
                            className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition-colors duration-200 cursor-default shrink-0"
                          >
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Row 2: Dual Track (Moves Right) */}
                  <div className="marquee-row flex w-full overflow-hidden">
                    <div 
                      className="animate-marquee-reverse flex shrink-0 items-center gap-7 sm:gap-8 pr-7 sm:pr-8"
                      style={{ animationDuration: '36s' }}
                    >
                      {row2.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={`row2-a-${item.name}-${index}`}
                            title={item.name}
                            className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition-colors duration-200 cursor-default shrink-0"
                          >
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                          </div>
                        )
                      })}
                    </div>
                    <div 
                      aria-hidden="true" 
                      className="animate-marquee-reverse flex shrink-0 items-center gap-7 sm:gap-8 pr-7 sm:pr-8"
                      style={{ animationDuration: '36s' }}
                    >
                      {row2.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={`row2-b-${item.name}-${index}`}
                            title={item.name}
                            className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] transition-colors duration-200 cursor-default shrink-0"
                          >
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* 4. Currently Playing Spotify Card */}
            <FadeIn delay={400} className="h-full">
              <a
                href="https://open.spotify.com/user/ajq0gc3yb2piriihvzldi3nip?si=2111d493490248c0d"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#8C1D24]/5 dark:bg-[#8C1D24]/30 border-[#8C1D24]/30 dark:border-[#8C1D24]/40 p-5 sm:p-6 shadow-xs flex flex-col justify-between h-56 sm:h-60 hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-xs font-medium text-[#A85854] dark:text-[#D4C49E]">
                  <div className="flex items-center gap-2">
                    <LuMusic className="w-3.5 h-3.5 opacity-100 shrink-0" />
                    <span>On Repeat</span>
                  </div>
                  <SiSpotify className="w-4 h-4 text-[#1DB954]" />
                </div>

                <div className="my-auto flex items-center gap-3.5 py-1">
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl bg-[#F0E4BA] dark:bg-[#2E1D1E] shadow-sm">
                    <img 
                      src="/images/spotify-play.jpg" 
                      alt="Album Artwork" 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#A85854] dark:text-[#D4C49E]">
                        Spotify
                      </span>
                      <span className="flex items-end gap-0.5 h-2.5">
                        <span className="w-0.5 h-full bg-[#1DB954] rounded-full animate-pulse" />
                        <span className="w-0.5 h-2/3 bg-[#1DB954] rounded-full animate-bounce" />
                        <span className="w-0.5 h-full bg-[#1DB954] rounded-full animate-pulse" />
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#8C1D24] dark:text-[#FBF6E2] truncate group-hover:text-[#B22933] transition-colors mt-0.5">
                      "Heroes"
                    </h4>
                    <p className="text-xs text-[#7D4F4C] dark:text-[#D4C49E] truncate">
                      David Bowie
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#A85854] dark:text-[#D4C49E] pt-2 border-t border-[#EADCB1]/60 dark:border-[#3D2527]/60">
                  <span className="font-mono">Listen along</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </a>
            </FadeIn>

          </div>
          <FadeIn delay={150}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 shadow-xs transition"
              >
                <span>more of me</span>
                <LuArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>

          {/* 5. Credentials & Call to Action Section */}
          <section id="contact" className="mt-28 mb-16">
            <FadeIn delay={150}>
              <div className="flex flex-col items-center justify-center text-center">
              
                {/* High-Impact Headline inspired by "Let's work together →" */}
                <a
                  href="mailto:kayreambonanza@gmail.com"
                  className="group inline-flex items-center gap-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] hover:text-[#B22933] transition-colors"
                >
                  <span>Let&apos;s work together</span>
                  <LuArrowRight className="font-mono transition-transform duration-300 group-hover:translate-x-2" />
                </a>

                {/* Subtitle */}
                <p className="mt-3 text-sm sm:text-base text-[#7D4F4C] dark:text-[#D4C49E] max-w-md">
                  Download my resume here to view my full background and technical experience.
                </p>

                {/* Pill Button */}
                <div className="mt-4">
                  <a
                    href="/reambonanza_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-xs font-semibold border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/50 dark:hover:bg-[#2D1F20] hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 shadow-xs transition-all duration-200"
                  >
                    <span>View full Resume</span>
                    <LuExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </section>

        </section>
      </div>
    </main>
  )
}