import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import PlayerCard from '@/components/PlayerCard'

export default function Legends() {
  const legends = [
    {
      name: 'Don Bradman',
      role: 'Batsman',
      nationality: 'Australia',
      biography: 'Widely regarded as the greatest batsman of all time, Bradman dominated The Ashes with an extraordinary career average.',
      achievements: 'Ashes average: 89.78 | Multiple series wins | Leading Australia to dominance in the 1930s and 1940s',
    },
    {
      name: 'Sir Jack Hobbs',
      role: 'Batsman',
      nationality: 'England',
      biography: 'A legendary opening batsman who represented England for over two decades and was instrumental in many Ashes victories.',
      achievements: 'Ashes average: 56.94 | 15 Ashes series appearances | Over 3,000 Test runs in The Ashes',
    },
    {
      name: 'Shane Warne',
      role: 'Bowler (Leg-spin)',
      nationality: 'Australia',
      biography: 'Revolutionized leg-spin bowling and dominated The Ashes with his unplayable deliveries and cricket intelligence.',
      achievements: 'Over 195 Ashes Test wickets | Multiple Man of the Series awards | Key to Australia\'s success in the 1990s-2000s',
    },
    {
      name: 'Ian Botham',
      role: 'All-rounder',
      nationality: 'England',
      biography: 'One of the greatest all-rounders in cricket history, Botham produced some of the most memorable Ashes performances ever witnessed.',
      achievements: 'Ashes average: 32.39 with bat | Over 80 Ashes Test wickets | Iconic 1981 Ashes series',
    },
    {
      name: 'Steve Smith',
      role: 'Batsman',
      nationality: 'Australia',
      biography: 'Modern-era master batsman who has consistently dominated The Ashes with technical brilliance and consistency.',
      achievements: 'Current era dominant performer | Ashes average over 70 | Key to recent Australian victories',
    },
    {
      name: 'Joe Root',
      role: 'Batsman',
      nationality: 'England',
      biography: 'England\'s modern batting mainstay who carries the responsibility of leading England\'s charge in The Ashes.',
      achievements: 'Over 1,000 Test runs in The Ashes | Consistent performer across multiple series | Leading England\'s batting unit',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        title="Ashes Legends"
        subtitle="Icons of Cricket History"
        description="Meet the greatest players who have defined The Ashes rivalry"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Cricket's Greatest Players"
          description="These legendary performers have shaped the history of The Ashes"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legends.map((player) => (
            <PlayerCard
              key={player.name}
              name={player.name}
              role={player.role}
              nationality={player.nationality}
              biography={player.biography}
              achievements={player.achievements}
            />
          ))}
        </div>
      </section>
    </div>
  )
}