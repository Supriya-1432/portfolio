'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? 'border-white/10 bg-dark/90 backdrop-blur-md'
          : 'border-transparent bg-dark/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between md:h-[4.25rem]">
        <Link
          href="/#top"
          className="font-heading text-lg font-bold tracking-tight text-white"
          aria-label="Home"
        >
          {profile.initials}
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {profile.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={profile.resumeUrl} variant="onDark" download className="!py-2">
            <Download className="h-4 w-4" aria-hidden />
            Download Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/15 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-dark px-5 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {profile.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-lg font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={profile.resumeUrl}
              variant="primary"
              download
              className="mt-6 w-full"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
