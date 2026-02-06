import { Navbar } from "@/components/navbar"
import { Anagram } from "@/components/anagram"
import { HeaderSection } from "@/components/header-section"
import { ProfileSection } from "@/components/profile-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { MembershipsSection } from "@/components/memberships-section"
import { EducationSection } from "@/components/education-section"
import { EducationChart, MediumStatsChart } from "@/components/charts-section"
import { ResearchSection } from "@/components/research-section"
import { ArticlesSection } from "@/components/articles-section"
import { SkillsSection } from "@/components/skills-section"
import { LanguagesSection } from "@/components/languages-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { QuoteSection } from "@/components/quote-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Anagram />
        <HeaderSection />
        <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
          <ProfileSection />
          <ExpertiseSection />
          <ExperienceSection />
          <CertificationsSection />
          <MembershipsSection />
          <EducationSection />
          <EducationChart />
          <ResearchSection />
          <ArticlesSection />
          <MediumStatsChart />
          <SkillsSection />
          <LanguagesSection />
          <HobbiesSection />
          <QuoteSection />
        </div>
      </main>
    </>
  )
}
