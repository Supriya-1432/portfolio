'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type StatCardProps = {
  stats: { label: string; value: string; icon?: ReactNode }[]
}

export function StatCard({ stats }: StatCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: 0.15 }}
      className="rounded-[var(--radius-xl)] border border-white/10 bg-dark-surface/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            {stat.icon ? (
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-primary/15 text-primary-light">
                {stat.icon}
              </div>
            ) : null}
            <p className="font-heading text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
