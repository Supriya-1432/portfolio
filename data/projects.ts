export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  url: string
  tags: string[]
  image: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'healthcare-ai',
    title: 'AI-Based Healthcare System',
    description:
      'ResNet50 deep learning pipeline detecting COVID-19, pneumonia, and TB with ~93% test accuracy.',
    longDescription:
      'Built a full-stack medical imaging workflow with a ResNet50 model and a React + Node.js + MongoDB interface for web-based prediction and result review.',
    url: 'https://github.com/Supriya-1432/major_project',
    tags: ['React', 'Node.js', 'MongoDB', 'Deep Learning'],
    image: '/images/AI-In-Healthcare.webp',
    highlights: [
      '~93% test accuracy across three disease classes',
      'End-to-end prediction UI with model integration',
      'MongoDB-backed request and result storage',
    ],
  },
  {
    id: 'language-translator',
    title: 'Language Translator',
    description:
      'Node.js + Python multilingual translator using Groq/Ollama LLMs with a real-time web dashboard.',
    longDescription:
      'Developed a multilingual translation system powered by LLM APIs, exposed through a responsive dashboard for live translation workflows.',
    url: 'https://github.com/Supriya-1432/Language-Translator',
    tags: ['Node.js', 'Python', 'LLM', 'Realtime'],
    image: '/images/Language-Translator.jpg',
    highlights: [
      'Groq / Ollama LLM integrations',
      'Realtime multilingual dashboard',
      'Node.js + Python service composition',
    ],
  },
  {
    id: 'educatsy',
    title: 'Freelance Educational Platform',
    description:
      'Scalable Next.js + TypeScript education platform focused on performance and reusable UI architecture.',
    longDescription:
      'Building Educatsy as a performance-minded Next.js application with typed components, reusable UI patterns, and production-ready frontend architecture.',
    url: 'https://github.com/indexty-in/educatsy-supriya',
    tags: ['Next.js', 'TypeScript', 'Performance'],
    image: '/images/Education.jpg',
    highlights: [
      'Next.js + TypeScript application shell',
      'Reusable UI architecture',
      'Performance-focused frontend patterns',
    ],
  },
]
