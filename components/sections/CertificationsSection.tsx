import { Award, Code2, Globe2, Brain } from 'lucide-react'
import { certifications } from '@/data/certifications'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

const icons = {
  purple: Globe2,
  blue: Brain,
  green: Award,
  amber: Code2,
}

const tones = {
  purple: 'bg-primary/10 text-primary',
  blue: 'bg-indigo/10 text-indigo',
  green: 'bg-success/10 text-success',
  amber: 'bg-warning/10 text-warning',
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-y bg-surface">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="Certifications"
            title="Credentials & Achievements"
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((item, index) => {
            const Icon = icons[item.tone]
            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <article className="flex gap-4 rounded-[var(--radius-lg)] border border-border bg-background p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] ${tones[item.tone]}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
