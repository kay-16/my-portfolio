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
              Hi! I’m Kyla (or Kay for short). I recently graduated with a degree in Computer Science. And now I've been focusing on machine learning, 
              deep learning, and dabbling in full-stack development and research on the side. Also, been getting into UI/UX design because I get to express my
              love for art here. 
            </p>
            <p>
              My work spans building end-to-end applications with modern frontend frameworks as well as researching niche subjects where I can 
              apply computer vision systems and solve problems—even the most trivial (for a lack of better word xd) inconvenience I encounter on the daily.
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
                <p className="text-sm text-neutral-500">
                  <i>Cum Laude</i>
                </p>
              </div>
            </div>
          </section>

          {/* Experience & Research */}
          <section id="research" className="scroll-mt-32 mb-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-xl font-bold mb-6 tracking-tight">Focus & Research</h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 p-5 bg-neutral-50/50 dark:bg-neutral-900/40">
                <h3 className="font-semibold text-base">Deep Learning & Machine Learning</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  implemented an end-to-end segmentation pipeline using <i>instance segmentation</i>; 
                  researched and built automated detection pipelines utilizing log-mel spectrograms and <i>convolutional neural networks (CNNs)</i> paired with microcontroller telemetry. 
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 p-5 bg-neutral-50/50 dark:bg-neutral-900/40">
                <h3 className="font-semibold text-base">Full-Stack Web Development</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  designing responsive web platforms with responsive UI/UX, structured relational database architectures, and performant REST APIs.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Connect / Contact */}
          <section id="contact" className="scroll-mt-32 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Feel free to reach out for collaborations, project inquiries, or just connect.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a
                href="https://github.com/kay-16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300 transition"
              >
                <span>Github</span>
                <img 
                  src="/github.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kyla-reambonanza-889a7135b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300 transition"
              >
                <span>LinkedIn</span>
                <img 
                  src="/linkedin.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
              </a>
              <a
                href="mailto:kayreambonanza@gmail.com"
                className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300 transition"
              >
                <span>Email</span>
                <img 
                  src="/gmail.svg" 
                  alt="" 
                  className="w-3.5 h-3.5 opacity-100"
                />
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