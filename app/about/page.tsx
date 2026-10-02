import TableOfContents from "app/components/table-of-contents"
import ProgressBar from "app/components/progress-bar"
import FadeIn from "app/components/fade-in"
import { SiGithub, SiGmail } from "react-icons/si"
import { LuLinkedin } from "react-icons/lu"

export const metadata = {
  title: 'About | Kyla',
  description: 'Bio, education, focus areas, and research.',
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
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 text-[#8C1D24] dark:text-[#F3E5AB]">
        
        {/* Main Content Column */}
        <main className="min-w-0">
          <FadeIn delay={100}>
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-[#8C1D24] dark:text-[#FBF6E2]">
                About Me
              </h1>
              <p className="text-[#A85854] dark:text-[#D4C49E] font-mono text-sm">
                Philippines • UTC/GMT +8
              </p>
            </header>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={150}>
            <section id="bio" className="scroll-mt-32 space-y-4 text-[#7D4F4C] dark:text-[#D4C49E] leading-relaxed text-base mb-12">
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
          </FadeIn>

          {/* Education */}
          <FadeIn delay={100}>
            <section id="education" className="scroll-mt-32 mb-12 border-t border-[#EADCB1] dark:border-[#3D2527] pt-8">
              <h2 className="text-xl font-bold mb-4 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="font-semibold text-[#8C1D24] dark:text-[#FBF6E2]">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-sm text-[#A85854] dark:text-[#D4C49E]">
                    Mindanao State University – Iligan Institute of Technology (MSU-IIT)
                  </p>
                  <p className="text-sm text-[#A85854] dark:text-[#D4C49E]">
                    <i>Cum Laude</i>
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Experience & Research */}
          <section id="research" className="scroll-mt-32 mb-12 border-t border-[#EADCB1] dark:border-[#3D2527] pt-8">
            <FadeIn delay={100}>
              <h2 className="text-xl font-bold mb-6 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
                Focus & Research
              </h2>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={150}>
                <div className="rounded-2xl border border-[#EADCB1] dark:border-[#3D2527] p-5 bg-[#FFFDF5] dark:bg-[#221819] shadow-xs">
                  <h3 className="font-semibold text-base text-[#8C1D24] dark:text-[#FBF6E2]">
                    Deep Learning & Machine Learning
                  </h3>
                  <p className="text-sm text-[#7D4F4C] dark:text-[#D4C49E] mt-2 leading-relaxed">
                    implemented an end-to-end segmentation pipeline using <i>instance segmentation</i>; 
                    researched and built automated detection pipelines utilizing log-mel spectrograms and <i>convolutional neural networks (CNNs)</i> paired with microcontroller telemetry. 
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="rounded-2xl border border-[#EADCB1] dark:border-[#3D2527] p-5 bg-[#FFFDF5] dark:bg-[#221819] shadow-xs">
                  <h3 className="font-semibold text-base text-[#8C1D24] dark:text-[#FBF6E2]">
                    Full-Stack Web Development
                  </h3>
                  <p className="text-sm text-[#7D4F4C] dark:text-[#D4C49E] mt-2 leading-relaxed">
                    designing responsive web platforms with responsive UI/UX, structured relational database architectures, and performant REST APIs.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Quick Connect / Contact */}
          <FadeIn delay={100}>
            <section id="contact" className="scroll-mt-32 border-t border-[#EADCB1] dark:border-[#3D2527] pt-8">
              <h2 className="text-xl font-bold mb-4 tracking-tight text-[#8C1D24] dark:text-[#FBF6E2]">
                Get in Touch
              </h2>
              <p className="text-sm text-[#7D4F4C] dark:text-[#D4C49E] mb-4">
                Feel free to reach out for collaborations, project inquiries, or just connect.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href="https://github.com/kay-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8C1D24] hover:text-[#B22933] dark:text-[#F3E5AB] dark:hover:text-[#FFFDF5] transition"
                >
                  <span>Github</span>
                  <SiGithub className="w-4 h-4 shrink-0"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/kyla-reambonanza-889a7135b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8C1D24] hover:text-[#B22933] dark:text-[#F3E5AB] dark:hover:text-[#FFFDF5] transition"
                >
                  <span>LinkedIn</span>
                  <LuLinkedin className="w-4 h-4 shrink-0"/>
                </a>
                <a
                  href="mailto:kayreambonanza@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[#8C1D24] hover:text-[#B22933] dark:text-[#F3E5AB] dark:hover:text-[#FFFDF5] transition"
                >
                  <span>Email</span>
                  <SiGmail className="w-4 h-4 shrink-0"/>
                </a>
              </div>
            </section>
          </FadeIn>
        </main>

        {/* Sticky Table of Contents Sidebar */}
        <TableOfContents sections={tocSections} />
      </div>
    </>
  )
}