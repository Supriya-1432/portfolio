import Link from 'next/link'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/data/profile'
import { skills } from '@/data/skills'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const techIcons = [
  ...skills.Frontend.slice(0, 2),
  ...skills.Backend.slice(0, 2),
  ...skills.Cloud.slice(0, 2),
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-bold">{profile.initials}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Full Stack Developer building reliable real-time systems and production dashboards.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-[var(--radius-sm)] border border-white/15 p-2 text-white/80 transition hover:border-primary hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-[var(--radius-sm)] border border-white/15 p-2 text-white/80 transition hover:border-primary hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-[var(--radius-sm)] border border-white/15 p-2 text-white/80 transition hover:border-primary hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techIcons.map((item) => (
              <span
                key={item}
                className="rounded-[var(--radius-sm)] border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary-light" aria-hidden />
              {profile.location}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary-light" aria-hidden />
              <a href={`tel:${profile.phone}`} className="hover:text-white">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary-light" aria-hidden />
              <a href={`mailto:${profile.email}`} className="hover:text-white">
                {profile.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>Built with care and lots of coffee.</p>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:bg-primary/20"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
