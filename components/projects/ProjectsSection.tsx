'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import { profile } from '@/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-y bg-surface">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="Things I’ve Built"
            action={
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-primary transition hover:text-indigo"
              >
                View on GitHub →
              </a>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-background shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]">
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="relative block overflow-hidden text-left"
                  aria-label={`Open details for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-dark/70 text-white">
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold text-text">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? <ProjectModal project={active} onClose={() => setActive(null)} /> : null}
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-dark/55 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-xl)] bg-background p-6 shadow-[var(--shadow-lift)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="project-modal-title" className="font-heading text-2xl font-bold text-text">
              {project.title}
            </h3>
            <p className="mt-2 text-text-secondary">{project.longDescription}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-[var(--radius-sm)] border border-border p-2 text-text-secondary hover:text-text"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="text-sm text-text-secondary before:mr-2 before:content-['•']">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={project.url} variant="primary">
            View Repository
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
