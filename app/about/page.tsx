import TableOfContents from "app/components/TableOfContents"
import ProgressBar from "app/components/progressbar"

export const metadata = {
  title: 'Projects | Kyla ',
  description: 'A complete collection of my projects and work.',
}

const tocSections = [
    { id: 'bio', 'label': 'Bio'},
    { id: 'education', 'label': 'Education'},
    { id: 'research', 'label': 'Research'},
    { id: 'contact', 'label': 'Connect with Me'},
]

export default function AboutPage() {
  return (
    <>
      {/* Scroll Reading Progress Bar (Top) */}
      <ProgressBar />

      {/* 2-column layout: Left is Content, Right is Sticky Table of Contents */}
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 text-neutral-900 dark:text-neutral-100">
        
        {/* Main Content Column */}
        <main className="min-w-0">
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              About Me
            </h1>
            <p className="text-neutral-500 font-mono text-sm">
              Philippines • UTC/GMT +8
            </p>
          </header>

          {/* Bio */}
          <section id="bio" className="scroll-mt-32 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-12">
            <p>
              Hi, I’m Kyla! I graduated with a degree in Computer Science, focusing on full-stack web
              engineering and applied machine learning.
            </p>
            <p>
              My work spans building end-to-end applications with modern frontend frameworks and
              scalable backend APIs, as well as researching signal processing and computer vision systems.
            </p>
          </section>

          {/* Education */}
          <section id="education" className="scroll-mt-32 mb-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm text-neutral-500">
                  Mindanao State University – Iligan Institute of Technology (MSU-IIT)
                </p>
              </div>
            </div>
          </section>

          {/* Experience & Research */}
          <section id="research" className="scroll-mt-32 mb-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-xl font-bold mb-6 tracking-tight">Focus & Research</h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 p-5 bg-neutral-50/50 dark:bg-neutral-900/40">
                <h3 className="font-semibold text-base">Machine Learning & Acoustic Signal Processing</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  Researched and built automated detection pipelines utilizing Log-Mel Spectrograms and Convolutional Neural Networks (CNNs) paired with microcontroller telemetry.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 p-5 bg-neutral-50/50 dark:bg-neutral-900/40">
                <h3 className="font-semibold text-base">Full-Stack Web Development</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  Designing responsive web platforms with clean UI/UX, robust relational database architectures, and performant REST APIs.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Connect / Contact */}
          <section id="contact" className="scroll-mt-32 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Feel free to reach out for collaborations, project inquiries, or full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-neutral-900 dark:text-neutral-100"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-neutral-900 dark:text-neutral-100"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:your-email@example.com"
                className="hover:underline text-neutral-900 dark:text-neutral-100"
              >
                Email ↗
              </a>
            </div>
          </section>
        </main>

        {/* Sticky Table of Contents Sidebar */}
        <TableOfContents sections={tocSections} />
      </div>
    </>
  )
}