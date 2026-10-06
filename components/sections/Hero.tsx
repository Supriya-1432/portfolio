'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Activity, FolderKanban, Timer } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { ContactMeta, SocialLinks } from '@/components/ui/SocialLinks'
import { StatCard } from '@/components/ui/StatCard'

const statIcons = [
  <Timer key="t" className="h-5 w-5" aria-hidden />,
  <FolderKanban key="f" className="h-5 w-5" aria-hidden />,
  <Activity key="a" className="h-5 w-5" aria-hidden />,
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden hero-glow pt-16 md:pt-[4.25rem]">
      <div className="container-site grid items-center gap-8 pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pt-14 lg:gap-16 lg:pt-16">
        {/* Copy */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-xl"
        >
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            {profile.title}
          </span>

          <h1 className="mt-5 font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#C4B5FD]">
            {profile.name}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            Full Stack Developer specializing in scalable web applications, real-time systems, and
            industrial dashboards. Delivered 10+ production systems across manufacturing clients.
          </p>

          <div className="mt-5">
            <ContactMeta tone="dark" />
          </div>
        </motion.div>

        {/* Portrait — sized so stats never cover the face */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"
        >
          <div
            className="absolute -inset-8 rounded-full bg-primary/25 blur-3xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] border border-white/10 bg-dark-surface shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width={720}
              height={900}
              priority
              className="aspect-[3/4] h-auto w-full object-cover object-[center_10%]"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats sit below content with a light overlap into the next section */}
      <div className="container-site relative z-20 mt-10 pb-8 md:mt-12 md:pb-10">
        <StatCard
          stats={profile.stats.map((stat, index) => ({
            ...stat,
            icon: statIcons[index],
          }))}
        />
      </div>
    </section>
  )
}
