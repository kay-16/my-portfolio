'use client'

import { useEffect, useState } from 'react'

interface SectionItem {
  id: string
  label: string
}

export default function TableOfContents({ sections }: { sections: SectionItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' } // Detects elements when they enter reading view
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <aside className="hidden lg:block w-48 sticky top-36 h-fit text-sm">
      <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        On this page
      </p>
      <ul className="space-y-2 border-l border-neutral-200 dark:border-neutral-800 pl-3">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block transition-colors duration-150 ${
                  isActive
                    ? 'font-bold text-neutral-950 dark:text-white -ml-[13px] pl-3 border-l-2 border-neutral-950 dark:border-white'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}