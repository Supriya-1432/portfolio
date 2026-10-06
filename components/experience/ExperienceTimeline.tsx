'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { experience, impactHighlights } from '@/data/experience'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function ExperienceTimeline() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="section-y bg-surface">
      <div className="container-site">
        <Reveal>
          <SectionHeader eyebrow="Experience" title="My Professional Journey" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <ol className="relative space-y-10 border-l border-border pl-8">
            {experience.map((job, index) => (
              <motion.li
                key={job.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[2.4rem] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-primary/20" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
                </span>

                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {job.period}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-text">{job.role}</h3>
                <p className="mt-1 text-text-secondary">
                  {job.company} · {job.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 text-sm leading-relaxed text-text-secondary before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <aside className="h-fit rounded-[var(--radius-xl)] border border-primary/15 bg-[linear-gradient(180deg,#F5F3FF_0%,#FFFFFF_100%)] p-6 shadow-[var(--shadow-soft)] lg:sticky lg:top-24">
              <h3 className="font-heading text-lg font-bold text-text">Work Highlights</h3>
              <ul className="mt-5 space-y-4">
                {impactHighlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
