import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export default function GreatestMatches() {
  const matches = [
    {
      title: 'Headingley 1981',
      summary: 'England vs Australia at Headingley Cricket Ground',
      winner: 'England',
      memorable: 'Ian Botham\'s extraordinary 149 not out in the second innings turned the match around, followed by Bob Willis taking 8 wickets in the final innings.',
      image: 'https://images.unsplash.com/photo-1461882379934-6d30c2aef11c?w=500&h=400&fit=crop',
    },
    {
      title: 'Melbourne 2010',
      summary: 'Australia vs England at Melbourne Cricket Ground',
      winner: 'Australia',
      memorable: 'Australia\'s dominant victory showcased their strength at home, with outstanding bowling performances and solid batting.',
      image: 'https://images.unsplash.com/photo-1531415074968-36d109178d10?w=500&h=400&fit=crop',
    },
    {
      title: 'The Oval 2005',
      summary: 'England vs Australia at The Oval',
      winner: 'England',
      memorable: 'England\'s victory clinched the Ashes series in Australia for the first time in 18 years, with Kevin Pietersen\'s brilliant batting leading the charge.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop',
    },
    {
      title: 'Perth 2021',
      summary: 'Australia vs England at Perth Stadium',
      winner: 'Australia',
      memorable: 'Australia\'s powerful performance demonstrated their dominance in Test cricket, with strong performances from Smith and Labuschagne.',
      image: 'https://images.unsplash.com/photo-1461882379934-6d30c2aef11c?w=500&h=400&fit=crop',
    },
    {
      title: 'Headingley 2019',
      summary: 'England vs Australia at Headingley Cricket Ground',
      winner: 'England',
      memorable: 'Ben Stokes\' legendary 135 not out partnered with Jack Leach\'s grit in a miraculous partnership secured an incredible one-wicket victory for England.',
      image: 'https://images.unsplash.com/photo-1531415074968-36d109178d10?w=500&h=400&fit=crop',
    },
    {
      title: 'Brisbane 1994',
      summary: 'Australia vs England at Brisbane Cricket Ground',
      winner: 'Australia',
      memorable: 'Steve Waugh\'s match-winning innings and Australia\'s bowling attack proved too strong for England.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        title="Greatest Ashes Matches"
        subtitle="Unforgettable Moments"
        description="Explore the most memorable and exciting moments in The Ashes history"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Classic Ashes Encounters"
          description="These matches defined the rivalry and showcased cricket at its finest"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div key={match.title} className="bg-ashes-charcoal rounded-lg overflow-hidden hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold h-full flex flex-col">
              {/* Match Image */}
              <img
                src={match.image}
                alt={match.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-ashes-gold mb-3">{match.title}</h3>
                <p className="text-ashes-light-grey text-sm mb-4">{match.summary}</p>

                <div className="space-y-3 pt-4 border-t border-ashes-dark mt-auto">
                  <div>
                    <p className="text-ashes-gold font-semibold text-sm">Winner</p>
                    <p className="text-white">{match.winner}</p>
                  </div>
                  <div>
                    <p className="text-ashes-gold font-semibold text-sm">Why It Was Memorable</p>
                    <p className="text-ashes-light-grey text-sm">{match.memorable}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}