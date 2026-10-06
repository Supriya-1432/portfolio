import { architectureNodes } from '@/data/certifications'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowRight } from 'lucide-react'

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-y bg-background">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="Architecture"
            title="How production systems fit together"
            description="A simplified view of the real-time inspection pipeline — from ingest to cloud deployment."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
            {architectureNodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-4">
                <article className="min-w-[150px] rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-4 shadow-[var(--shadow-soft)]">
                  <p className="font-heading text-sm font-bold text-text">{node.label}</p>
                  <p className="mt-1 text-xs text-text-muted">{node.detail}</p>
                </article>
                {index < architectureNodes.length - 1 ? (
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-primary md:block"
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
