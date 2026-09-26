import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProgressBar from 'app/components/progressbar'
import TableOfContents from 'app/components/TableOfContents'
import { allProjects } from 'lib/projects'

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
      <div className="pt-32 pb-48 max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 text-neutral-900 dark:text-neutral-100">

      <main className="min-w-0  ">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"
          >
            ← Back to all projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-xs font-medium uppercase tracking-wider text-pink-600 dark:text-pink-400">
            {project.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.doiUrl && (
              <a
                href={project.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <span>view paper</span>
                <img 
                  src="/external-link.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                <span>view in Github</span>
                <img 
                  src="/external-link.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-medium bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </header>

        {/* Media Preview / Thumbnail Area */}
        {/* Dynamic Project Images */}
        {project.image && project.image.length > 0 && (
          <figure className="mb-12">
            <div
              className={`grid gap-4 ${
                project.image.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {project.image.map((imgSrc, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-900"
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
              <figcaption className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
                {project.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

          {/* CARD INFO SECTION FOR TABLE OF CONTENTS */}
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-32 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-12">
            <h2 className="text-xl font-bold mb-3 tracking-tight">Project Overview</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
              {project.overview}
            </p>
          </section>

          {/* Section 2: Tech Stack Badges */}
          <section id="stack" className="scroll-mt-32 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-12">
            <h2 className="text-xl font-bold mb-3 tracking-tight">Tech Stack & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section 3: Architecture & Deliverables */}
          <section id="deliverables" className="scroll-mt-32 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-12">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Key Contributions & Architecture</h2>
            <ul className="space-y-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </main>

        {/* Sticky Table of Contents Sidebar */}
        <TableOfContents sections={tocSections} />
      </div>
    </>
  )
}

