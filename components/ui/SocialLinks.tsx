import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { profile } from '@/data/profile'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

type SocialIcon = LucideIcon | typeof GithubIcon

const socials: { label: string; href: string; Icon: SocialIcon }[] = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

type SocialLinksProps = {
  tone?: 'light' | 'dark'
  className?: string
}

export function SocialLinks({ tone = 'dark', className = '' }: SocialLinksProps) {
  const base =
    tone === 'dark'
      ? 'border-white/20 text-white hover:border-primary hover:bg-primary/20'
      : 'border-border text-text-secondary hover:border-primary hover:text-primary'

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border transition ${base}`}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function ContactMeta({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const color = tone === 'dark' ? 'text-white/75' : 'text-text-secondary'
  const items = [
    { Icon: MapPin, text: profile.location, href: undefined },
    { Icon: Phone, text: profile.phone, href: `tel:${profile.phone}` },
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
  ]

  return (
    <ul className={`space-y-2.5 text-sm ${color}`}>
      {items.map(({ Icon, text, href }) => (
        <li key={text} className="flex items-center gap-2.5">
          <Icon className="h-4 w-4 shrink-0 text-primary-light" aria-hidden />
          {href ? (
            <a href={href} className="hover:text-primary-light transition">
              {text}
            </a>
          ) : (
            <span>{text}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
