export type ExperienceItem = {
  id: string
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'eternal-fsd-1',
    role: 'Full Stack Developer – 1',
    company: 'Eternal Robotics',
    location: 'Hyderabad',
    period: 'Jul 2024 – Present',
    current: true,
    highlights: [
      'Built and deployed scalable dashboard platforms processing 8,000+ daily inspection records with real-time analytics.',
      'Delivered 10+ production projects and on-site deployments across manufacturing clients using Docker.',
      'Migrated system communication from ROS → NATS, improving throughput and reducing latency in real-time pipelines.',
      'Implemented event-driven pub/sub systems using NATS, ROS, and Redis for high-frequency data processing.',
      'Optimized backend performance via query rewriting and indexing, significantly reducing dashboard load times.',
      'Implemented Active Directory (LDAP) authentication, RBAC, shift analytics, and automated alerts.',
      'Led a team of 2 engineers, conducting code reviews and mentoring; ensured security via VAPT testing.',
    ],
  },
  {
    id: 'eternal-intern',
    role: 'Full Stack Developer Intern',
    company: 'Eternal Robotics',
    location: 'Hyderabad',
    period: 'Jun 2023 – Jun 2024',
    highlights: [
      'Designed and deployed industrial dashboard applications with real-time monitoring using React and Node.js with REST APIs.',
      'Contributed to core architecture, feature development, and deployment of internal company platforms (hypervise.ai, CSAT).',
    ],
  },
]

export const impactHighlights = [
  'Real-time dashboards processing 8,000+ daily records',
  '10+ production projects & on-site deployments',
  'ROS → NATS migration for lower latency',
  'Event-driven pub/sub with NATS, ROS & Redis',
  'LDAP auth, RBAC, alerts & VAPT hardening',
]
