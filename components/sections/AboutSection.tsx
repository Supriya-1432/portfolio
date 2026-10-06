import { Lightbulb, Hammer, Users } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

const toneMap = {
  purple: {
    wrap: 'bg-primary/10 text-primary',
    Icon: Lightbulb,
  },
  blue: {
    wrap: 'bg-indigo/10 text-indigo',
    Icon: Hammer,
  },
  green: {
    wrap: 'bg-success/10 text-success',
    Icon: Users,
  },
}

export function AboutSection() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title={profile.aboutHeadline}
            description={profile.aboutBody}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {profile.strengths.map((item, index) => {
            const tone = toneMap[item.tone]
            const Icon = tone.Icon
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]">
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] ${tone.wrap}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
