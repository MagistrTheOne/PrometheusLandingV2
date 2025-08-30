import { HeroSection } from "@/components/sections/hero"
import { MetricsSection } from "@/components/sections/metrics"
import { FeaturesSection } from "@/components/sections/features"
import { TeamSection } from "@/components/sections/team"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
