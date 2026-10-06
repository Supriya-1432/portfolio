import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContributionsSection } from '@/components/sections/ContributionsSection'
import { GithubSection } from '@/components/sections/GithubSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <CertificationsSection />
      <ContributionsSection />
      <GithubSection />
    </>
  )
}
