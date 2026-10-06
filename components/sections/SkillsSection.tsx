import { skills } from '@/data/skills'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function SkillsSection() {
  const entries = Object.entries(skills)

  return (
    <section id="skills" className="section-y bg-background">
      <div className="container-site">
        <Reveal>
          <SectionHeader eyebrow="Skills" title="Technologies I Work With" />
        </Reveal>

        <div className="space-y-6">
          {entries.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.04}>
              <div className="grid gap-3 border-b border-border pb-6 md:grid-cols-[180px_1fr] md:items-start">
                <h3 className="font-heading text-base font-bold text-text">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary transition hover:border-primary/30 hover:text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
