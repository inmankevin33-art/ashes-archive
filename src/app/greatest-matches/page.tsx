import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import MatchCard from '@/components/MatchCard'

export default function GreatestMatches() {
  const matches = [
    {
      title: 'Headingley 1981',
      summary: 'England vs Australia at Headingley Cricket Ground',
      winner: 'England',
      memorable: 'Ian Botham\'s extraordinary 149 not out in the second innings turned the match around, followed by Bob Willis taking 8 wickets in the final innings.',
    },
    {
      title: 'Melbourne 2010',
      summary: 'Australia vs England at Melbourne Cricket Ground',
      winner: 'Australia',
      memorable: 'Australia\'s dominant victory showcased their strength at home, with outstanding bowling performances and solid batting.',
    },
    {
      title: 'The Oval 2005',
      summary: 'England vs Australia at The Oval',
      winner: 'England',
      memorable: 'England\'s victory clinched the Ashes series in Australia for the first time in 18 years, with Kevin Pietersen\'s brilliant batting leading the charge.',
    },
    {
      title: 'Perth 2021',
      summary: 'Australia vs England at Perth Stadium',
      winner: 'Australia',
      memorable: 'Australia\'s powerful performance demonstrated their dominance in Test cricket, with strong performances from Smith and Labuschagne.',
    },
    {
      title: 'Headingley 2019',
      summary: 'England vs Australia at Headingley Cricket Ground',
      winner: 'England',
      memorable: 'Ben Stokes\' legendary 135 not out partnered with Jack Leach\'s grit in a miraculous partnership secured an incredible one-wicket victory for England.',
    },
    {
      title: 'Brisbane 1994',
      summary: 'Australia vs England at Brisbane Cricket Ground',
      winner: 'Australia',
      memorable: 'Steve Waugh\'s match-winning innings and Australia\'s bowling attack proved too strong for England.',
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
            <MatchCard
              key={match.title}
              title={match.title}
              summary={match.summary}
              winner={match.winner}
              memorable={match.memorable}
            />
          ))}
        </div>
      </section>
    </div>
  )
}