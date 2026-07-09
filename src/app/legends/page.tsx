import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export default function Legends() {
  const legends = [
    {
      name: 'Don Bradman',
      role: 'Batsman',
      nationality: 'Australia',
      biography: 'Widely regarded as the greatest batsman of all time, Bradman dominated The Ashes with an extraordinary career average.',
      achievements: 'Ashes average: 89.78 | Multiple series wins | Leading Australia to dominance in the 1930s and 1940s',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=600&fit=crop&q=80',
    },
    {
      name: 'Sir Jack Hobbs',
      role: 'Batsman',
      nationality: 'England',
      biography: 'A legendary opening batsman who represented England for over two decades and was instrumental in many Ashes victories.',
      achievements: 'Ashes average: 56.94 | 15 Ashes series appearances | Over 3,000 Test runs in The Ashes',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=600&fit=crop&q=80',
    },
    {
      name: 'Shane Warne',
      role: 'Bowler (Leg-spin)',
      nationality: 'Australia',
      biography: 'Revolutionized leg-spin bowling and dominated The Ashes with his unplayable deliveries and cricket intelligence.',
      achievements: 'Over 195 Ashes Test wickets | Multiple Man of the Series awards | Key to Australia\'s success in the 1990s-2000s',
      image: 'https://images.unsplash.com/photo-1518611505868-48510c2e022f?w=500&h=600&fit=crop&q=80',
    },
    {
      name: 'Ian Botham',
      role: 'All-rounder',
      nationality: 'England',
      biography: 'One of the greatest all-rounders in cricket history, Botham produced some of the most memorable Ashes performances ever witnessed.',
      achievements: 'Ashes average: 32.39 with bat | Over 80 Ashes Test wickets | Iconic 1981 Ashes series',
      image: 'https://images.unsplash.com/photo-1506521295777-a54be1886000?w=500&h=600&fit=crop&q=80',
    },
    {
      name: 'Steve Smith',
      role: 'Batsman',
      nationality: 'Australia',
      biography: 'Modern-era master batsman who has consistently dominated The Ashes with technical brilliance and consistency.',
      achievements: 'Current era dominant performer | Ashes average over 70 | Key to recent Australian victories',
      image: 'https://images.unsplash.com/photo-1540747913199-0073a20579f3?w=500&h=600&fit=crop&q=80',
    },
    {
      name: 'Joe Root',
      role: 'Batsman',
      nationality: 'England',
      biography: 'England\'s modern batting mainstay who carries the responsibility of leading England\'s charge in The Ashes.',
      achievements: 'Over 1,000 Test runs in The Ashes | Consistent performer across multiple series | Leading England\'s batting unit',
      image: 'https://images.unsplash.com/photo-1531415074968-36d109178d10?w=500&h=600&fit=crop&q=80',
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
            <div key={player.name} className="bg-ashes-charcoal rounded-lg overflow-hidden hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold h-full flex flex-col">
              {/* Player Image */}
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-ashes-gold mb-1">{player.name}</h3>
                <p className="text-ashes-light-grey text-sm mb-4">{player.role} • {player.nationality}</p>

                <p className="text-ashes-light-grey mb-4">{player.biography}</p>

                <div className="pt-4 border-t border-ashes-dark mt-auto">
                  <p className="text-ashes-gold font-semibold mb-2">Ashes Achievements</p>
                  <p className="text-ashes-light-grey text-sm">{player.achievements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}