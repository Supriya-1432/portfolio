export type Certification = {
  id: string
  title: string
  description: string
  tone: 'purple' | 'blue' | 'green' | 'amber'
}

export const certifications: Certification[] = [
  {
    id: 'leetcode',
    title: 'LeetCode — 190+ Problems',
    description: 'Consistent problem-solving practice across data structures and algorithms.',
    tone: 'amber',
  },
  {
    id: 'codechef',
    title: 'CodeChef Certified — DSA',
    description: 'Certified in Data Structures & Algorithms with strong contest fundamentals.',
    tone: 'green',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Full-stack web fundamentals spanning modern frontend and backend workflows.',
    tone: 'purple',
  },
  {
    id: 'problemsolving',
    title: 'Problem Solving',
    description: 'Credentialed recognition for analytical problem solving and coding fluency.',
    tone: 'blue',
  },
]

export const contributions = [
  {
    id: 'production',
    title: 'Production Deployments',
    description:
      'Strong track record shipping and supporting client-facing systems in manufacturing environments.',
  },
  {
    id: 'debugging',
    title: 'System Debugging',
    description:
      'Hands-on ownership of latency, throughput, and reliability issues across real-time pipelines.',
  },
  {
    id: 'performance',
    title: 'Performance Tuning',
    description:
      'Query rewriting, indexing, and architecture changes that materially improved dashboard load times.',
  },
  {
    id: 'leadership',
    title: 'Team Leadership',
    description: 'Mentored engineers, ran code reviews, and kept delivery quality high under production pressure.',
  },
]

export const architectureNodes = [
  { id: 'ingest', label: 'Inspection Data', detail: '8k+ daily records' },
  { id: 'bus', label: 'NATS / Redis', detail: 'Event-driven pub/sub' },
  { id: 'api', label: 'Node.js APIs', detail: 'Auth · RBAC · Alerts' },
  { id: 'ui', label: 'React Dashboards', detail: 'Realtime analytics' },
  { id: 'cloud', label: 'Azure / AWS', detail: 'Docker deployments' },
]
