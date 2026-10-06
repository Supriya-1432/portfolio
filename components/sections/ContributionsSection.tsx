import { contributions } from '@/data/certifications'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function ContributionsSection() {
  return (
    <section id="contributions" className="section-y bg-background">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="Contributions"
            title="Impact beyond the job title"
            description="Production ownership, debugging depth, and collaboration that shows up in client environments."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {contributions.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <article className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]">
                <h3 className="font-heading text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
