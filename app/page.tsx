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
import { LuLightbulb } from 'react-icons/lu'
import { LuMapPin, LuLink, LuZap, LuExternalLink } from 'react-icons/lu'

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
    <main className="relative min-h-screen bg-[#FBF6E2] dark:bg-[#1A1213] text-[#8C1D24] dark:text-[#F3E5AB] overflow-hidden px-6 pt-32 pb-20 transition-colors duration-300">
      {/* 1. Background Ambient Glow (Tamarillo Red & Butter Yellow) */}
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
                <span 
                  // style={{ fontFamily: 'var(--font-cursive), cursive' }}
                  // className="text-[2em] leading-none inline-block px-1 text-[#8C1D24] dark:text-[#F3E5AB]"
                >
                  Kyla
                </span>
                , i like to create & build some {' '}
                <span className="bg-gradient-to-r from-[#8C1D24] via-[#C84A31] to-[#D9822B] bg-clip-text text-transparent">
                  cool
                </span>{' '}
                stuff
              </span>
              <p className="mt-4 text-xs sm:text-sm text-[#A85854] dark:text-[#D4C49E] font-mono tracking-wide">
                Philippines | UTC/GMT +8
              </p>
            </div>

            {/* Profile Photo Avatar with Glow */}
            <div className="relative group self-center md:self-auto shrink-0">
              <div className="absolute -inset-2 rounded-full bg-[#8C1D24]/20 dark:bg-[#F3E5AB]/10 blur-xl group-hover:opacity-100 transition duration-500" />

              <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52 rounded-full overflow-hidden ring-4 ring-[#EADCB1] dark:ring-[#3D2527] shadow-xl bg-[#FFFDF5] dark:bg-[#251A1B]">
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
                  {/* Card Tag */}
                  <div className="flex items-center gap-2 text-xs text-[#A85854] dark:text-[#D4C49E] font-medium mb-4">
                    <LuLightbulb className="w-3.5 h-3.5 shrink-0 opacity-100" />
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

          {/* "See all projects" Button */}
          <FadeIn delay={200}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] hover:border-[#8C1D24]/40 dark:hover:border-[#F3E5AB]/40 shadow-xs transition"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight text-[#8C1D24] dark:text-[#FBF6E2] mb-10">
              About Me
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {/* 1. Location Card with Globe */}
            <FadeIn delay={100} className="md:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-6 flex flex-col justify-between shadow-xs min-h-[340px] h-full">
                <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E]">
                  <LuMapPin className="w-3.5 h-3.5 opacity-100 shrink-0" />
                  <span>Location</span>
                </div>

                <div className="relative flex items-center justify-center my-auto">
                  <Globe />
                  <div className="absolute px-3 py-1 rounded-full bg-[#8C1D24] text-[#FFFDF5] text-xs font-semibold shadow-md flex items-center gap-1.5 z-10 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#F3E5AB] animate-pulse" />
                    Philippines
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 2. Connect Card with SVG Icons */}
            <FadeIn delay={200} className="md:col-span-1 lg:col-span-2">
              <div className="rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-6 shadow-xs flex flex-col justify-between h-full">
                <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E] mb-4">
                  <LuLink className="w-3.5 h-3.5 opacity-100 shrink-0" />
                  <span>Connect</span>
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
                        className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#F5EBC4]/50 dark:hover:bg-[#2D1F20] transition-all text-sm font-medium text-[#8C1D24] dark:text-[#F3E5AB]"
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

            {/* 3. Tech Stacks Card with Infinite Marquee */}
            <FadeIn delay={300} className="md:col-span-2 lg:col-span-4">
              <div className="rounded-3xl border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] p-6 shadow-xs flex flex-col justify-between h-full overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#A85854] dark:text-[#D4C49E] mb-6">
                  <LuZap className="w-3.5 h-3.5 opacity-100 shrink-0" />
                  <span>Stacks</span>
                </div>

                {/* Marquee Container with Masking aligned to card surface */}
                <div className="relative w-full overflow-hidden py-2 space-y-6">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#FFFDF5] dark:from-[#221819] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#FFFDF5] dark:from-[#221819] to-transparent" />

                  {/* Row 1 */}
                  <div className="animate-marquee flex gap-10 sm:gap-12 items-center">
                    {[...row1, ...row1].map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={`${item.name}-${index}`}
                          title={item.name}
                          className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] hover:scale-115 transition-transform duration-200 cursor-pointer shrink-0"
                        >
                          <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                        </div>
                      )
                    })}
                  </div>

                  {/* Row 2 */}
                  <div className="animate-marquee flex gap-10 sm:gap-12 items-center" style={{ animationDuration: '30s' }}>
                    {[...row2, ...row2].map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={`${item.name}-${index}`}
                          title={item.name}
                          className="text-[#8C1D24]/85 dark:text-[#F3E5AB]/85 hover:text-[#8C1D24] dark:hover:text-[#FFFDF5] hover:scale-115 transition-transform duration-200 cursor-pointer shrink-0"
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
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] transition shadow-xs"
              >
                <span>Download Full CV</span>
                <LuExternalLink className="w-3 h-3 shrink-0"/>
              </a>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  )
}