import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="The Ashes Archive"
        subtitle="Cricket's Greatest Rivalry"
        description="Explore the complete history of The Ashes, the legendary cricket series between England and Australia since 1882."
      />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Explore The Ashes"
          description="Discover the rich history, legendary players, and unforgettable moments that define this iconic series"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon="📅"
            title="Timeline"
            description="From 1882 to today, follow the complete history of The Ashes series"
          />
          <FeatureCard
            icon="🏆"
            title="Greatest Matches"
            description="Relive the most memorable and exciting moments in Ashes history"
          />
          <FeatureCard
            icon="⭐"
            title="Legends"
            description="Learn about the iconic players who shaped The Ashes legacy"
          />
          <FeatureCard
            icon="📊"
            title="Records"
            description="Discover the remarkable statistics and records of The Ashes"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-ashes-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About The Ashes"
            description="The most prestigious Test cricket series in the world"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-ashes-light-grey text-lg mb-6">
              The Ashes is a Test cricket series played between the English and Australian national teams. It is one of the longest-running sporting competitions in the world, dating back to 1882.
            </p>
            <p className="text-ashes-light-grey text-lg mb-6">
              The series is named after a small urn that supposedly contains the "ashes" of English cricket, created after Australia's first victory on English soil in 1882. Since then, the two nations have competed fiercely for this symbolic trophy.
            </p>
            <p className="text-ashes-light-grey text-lg">
              The Ashes Archive is dedicated to preserving and celebrating the rich history, legendary players, and unforgettable moments that have defined this iconic rivalry over 140+ years.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}