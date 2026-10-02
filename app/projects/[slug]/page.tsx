import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProgressBar from 'app/components/progressbar'
import TableOfContents from 'app/components/TableOfContents'
import FadeIn from 'app/components/FadeIn'
import { allProjects } from 'lib/projects'
import { LuChevronsLeft, LuExternalLink } from 'react-icons/lu'

interface PageProps {
  params: Promise<{ slug: string }>
}

const tocSections = [
  { id: 'overview', 'label': 'Overview'},
  { id: 'stack', 'label': 'Tech Stack'},
  { id: 'deliverables', 'label': 'Deliverables'},
]

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  }
}

export default async function ProjectPostPage({ params }: PageProps) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProgressBar />

      {/* 2-column layout: Left for Content; Right for Table of Contents */}
      <div className="pt-32 pb-48 max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 text-[#8C1D24] dark:text-[#F3E5AB]">

      <main className="min-w-0">
        {/* Navigation Breadcrumb */}
        <FadeIn delay={50}>
          <div className="mb-8">
            <Link
              href="/projects"
              className="flex items-center gap-2 inline-flex gap-1.5 text-sm font-mono text-[#A85854] hover:text-[#8C1D24] dark:text-[#D4C49E] dark:hover:text-[#FFFDF5] transition"
            >
              <LuChevronsLeft className="w-5 h-5 shrink-0" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={100}>
          <header className="mb-10 pb-8 border-b border-[#EADCB1] dark:border-[#3D2527]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C1D24] dark:text-[#F5EBC4]">
              {project.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-4 text-[#8C1D24] dark:text-[#FBF6E2]">
              {project.title}
            </h1>
            <p className="text-base text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.doiUrl && (
                <a
                  href={project.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] transition shadow-xs"
                >
                  <span>view paper</span>
                  <LuExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] hover:bg-[#F3E5AB]/40 dark:hover:bg-[#2D1F20] transition shadow-xs"
                >
                  <span>view in Github</span>
                  <LuExternalLink className="w-3.5 h-3.5 shrink-0"/>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-[#8C1D24] text-[#FFFDF5] dark:bg-[#F3E5AB] dark:text-[#1A1213] hover:opacity-90 transition shadow-xs"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </header>
        </FadeIn>

        {/* Media Preview / Thumbnail Area */}
        {project.image && project.image.length > 0 && (
          <FadeIn delay={150}>
            <figure className="mb-12">
              <div
                className={`grid gap-4 ${
                  project.image.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {project.image.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#EADCB1] dark:border-[#3D2527] shadow-xs bg-[#FFFDF5] dark:bg-[#221819]"
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>

              {project.imageCaption && (
                <figcaption className="mt-3 text-center text-xs text-[#A85854] dark:text-[#D4C49E]">
                  {project.imageCaption}
                </figcaption>
              )}
            </figure>
          </FadeIn>
        )}

        {/* CARD INFO SECTION FOR TABLE OF CONTENTS */}
        {/* Section 1: Overview */}
        <FadeIn delay={200}>
        <section id="overview" className="scroll-mt-32 mb-12">
          <h2 className="text-xl font-bold mb-3 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
            Project Overview
          </h2>
          <div className="space-y-4 text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed text-base">
            {Array.isArray(project.overview) ? (
              project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{project.overview}</p>
            )}
          </div>
        </section>
      </FadeIn>

        {/* Section 2: Tech Stack Badges */}
        <FadeIn delay={250}>
          <section id="stack" className="scroll-mt-32 space-y-4 text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed text-base mb-12">
            <h2 className="text-xl font-bold mb-3 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
              Tech Stack & Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono border border-[#EADCB1] dark:border-[#3D2527] bg-[#FFFDF5] dark:bg-[#221819] text-[#8C1D24] dark:text-[#F3E5AB] shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Section 3: Architecture & Deliverables */}
        <FadeIn delay={300}>
          <section id="deliverables" className="scroll-mt-32 space-y-4 text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed text-base mb-12">
            <h2 className="text-xl font-bold mb-4 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
              Key Contributions & Architecture
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed text-sm">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </main>

      {/* Sticky Table of Contents Sidebar */}
      <TableOfContents sections={tocSections} />
      </div>
    </>
  )
}