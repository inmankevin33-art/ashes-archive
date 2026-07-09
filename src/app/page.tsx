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

      {/* Head-to-Head Record Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Head-to-Head Record"
          description="England vs Australia in The Ashes"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* England Card */}
          <div className="bg-ashes-charcoal rounded-lg p-8 border border-ashes-gold hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-ashes-gold mb-6">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-ashes-light-grey text-sm mb-1">Series Wins</p>
                  <p className="text-4xl font-bold text-white">32</p>
                </div>
                <div className="border-t border-ashes-dark pt-4">
                  <p className="text-ashes-light-grey text-sm mb-1">Test Wins</p>
                  <p className="text-3xl font-bold text-ashes-gold">116</p>
                </div>
              </div>
            </div>
          </div>

          {/* VS Card */}
          <div className="bg-ashes-charcoal rounded-lg p-8 border border-ashes-light-grey flex items-center justify-center">
            <div className="text-center">
              <p className="text-ashes-gold font-bold text-lg mb-4">All Time</p>
              <p className="text-5xl font-bold text-white mb-4">VS</p>
              <p className="text-ashes-light-grey text-sm">Since 1882</p>
              <p className="text-2xl font-bold text-ashes-gold mt-4">71 Series</p>
            </div>
          </div>

          {/* Australia Card */}
          <div className="bg-ashes-charcoal rounded-lg p-8 border border-ashes-gold hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-ashes-gold mb-6">🇦🇺 Australia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-ashes-light-grey text-sm mb-1">Series Wins</p>
                  <p className="text-4xl font-bold text-white">34</p>
                </div>
                <div className="border-t border-ashes-dark pt-4">
                  <p className="text-ashes-light-grey text-sm mb-1">Test Wins</p>
                  <p className="text-3xl font-bold text-ashes-gold">125</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 bg-ashes-charcoal rounded-lg p-8 border border-ashes-charcoal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-ashes-gold font-bold text-sm mb-2">DRAWN SERIES</p>
              <p className="text-3xl font-bold text-white">5</p>
            </div>
            <div>
              <p className="text-ashes-gold font-bold text-sm mb-2">TOTAL TEST MATCHES</p>
              <p className="text-3xl font-bold text-white">350+</p>
            </div>
            <div>
              <p className="text-ashes-gold font-bold text-sm mb-2">DRAWS</p>
              <p className="text-3xl font-bold text-white">109</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
