import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import RecordCard from '@/components/RecordCard'

export default function Records() {
  const records = [
    {
      rank: 1,
      player: 'Don Bradman',
      stat: 'Highest Ashes average: 89.78',
      nation: 'Australia',
    },
    {
      rank: 2,
      player: 'Steve Smith',
      stat: 'Ashes average (modern era): 70+',
      nation: 'Australia',
    },
    {
      rank: 3,
      player: 'Jack Hobbs',
      stat: 'Most Ashes Test appearances: 15 series',
      nation: 'England',
    },
    {
      rank: 4,
      player: 'Joe Root',
      stat: 'Most Test runs for England in Ashes',
      nation: 'England',
    },
    {
      rank: 5,
      player: 'Shane Warne',
      stat: 'Most Ashes Test wickets: 195',
      nation: 'Australia',
    },
    {
      rank: 6,
      player: 'Fred Trueman',
      stat: 'Most England Ashes wickets (until Botham)',
      nation: 'England',
    },
    {
      rank: 7,
      player: 'Victor Trumper',
      stat: 'Ashes average: 47.23',
      nation: 'Australia',
    },
    {
      rank: 8,
      player: 'Wilfred Rhodes',
      stat: 'Ashes career span: 30 years',
      nation: 'England',
    },
    {
      rank: 9,
      player: 'Dennis Lillee',
      stat: 'Australia\'s greatest fast bowler',
      nation: 'Australia',
    },
    {
      rank: 10,
      player: 'Ian Botham',
      stat: 'Greatest all-rounder in Ashes history',
      nation: 'England',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        title="Ashes Records"
        subtitle="Statistics & Achievements"
        description="Explore the remarkable records and statistics of The Ashes"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Record Holders"
          description="The greatest achievements in Ashes history"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {records.map((record) => (
            <RecordCard
              key={record.rank}
              rank={record.rank}
              player={record.player}
              stat={record.stat}
              nation={record.nation}
            />
          ))}
        </div>
      </section>
    </div>
  )
}