import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { GithubIcon } from '@/components/ui/BrandIcons'

export function GithubSection() {
  return (
    <section id="github" className="section-y bg-surface">
      <div className="container-site">
        <Reveal>
          <SectionHeader
            eyebrow="GitHub"
            title="Open work & repositories"
            action={
              <Button href={profile.github} variant="secondary">
                <GithubIcon className="h-4 w-4" aria-hidden />
                View GitHub
              </Button>
            }
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[var(--radius-lg)] border border-border bg-background p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
              >
                <p className="font-heading text-base font-bold text-text">{project.title}</p>
                <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  github.com
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
