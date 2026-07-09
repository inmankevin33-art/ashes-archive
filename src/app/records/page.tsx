import Hero from '@/components/Hero'
import RecordCard from '@/components/RecordCard'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Records | The Ashes Archive',
  description: 'Explore historic records and statistics from The Ashes cricket series.',
}

export default function RecordsPage() {
  return (
    <>
      <Hero
        title="Ashes Records"
        subtitle="Historic statistics and achievements"
        description="Discover the record-breaking performances that have defined The Ashes."
      />

      {/* Most Runs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Most Runs in The Ashes"
          description="The batsmen who have scored the most runs in Ashes Test cricket"
        />
        <div className="space-y-4">
          <RecordCard
            rank={1}
            player="Steve Smith"
            stat="2,839 runs"
            nation="Australia"
          />
          <RecordCard
            rank={2}
            player="Joe Root"
            stat="2,547 runs"
            nation="England"
          />
          <RecordCard
            rank={3}
            player="Don Bradman"
            stat="2,334 runs"
            nation="Australia"
          />
          <RecordCard
            rank={4}
            player="Jack Hobbs"
            stat="2,266 runs"
            nation="England"
          />
          <RecordCard
            rank={5}
            player="Ricky Ponting"
            stat="2,065 runs"
            nation="Australia"
          />
        </div>
      </section>

      {/* Most Wickets Section */}
      <section className="bg-ashes-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Most Wickets in The Ashes"
            description="The bowlers who have taken the most wickets in Ashes Test cricket"
          />
          <div className="space-y-4">
            <RecordCard
              rank={1}
              player="James Anderson"
              stat="188 wickets"
              nation="England"
            />
            <RecordCard
              rank={2}
              player="Shane Warne"
              stat="145 wickets"
              nation="Australia"
            />
            <RecordCard
              rank={3}
              player="Dennis Lillee"
              stat="114 wickets"
              nation="Australia"
            />
            <RecordCard
              rank={4}
              player="Bob Willis"
              stat="106 wickets"
              nation="England"
            />
            <RecordCard
              rank={5}
              player="Brett Bowes"
              stat="95 wickets"
              nation="Australia"
            />
          </div>
        </div>
      </section>

      {/* Most Hundreds Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Most Hundreds in The Ashes"
          description="The batsmen with the most centuries in Ashes Test cricket"
        />
        <div className="space-y-4">
          <RecordCard
            rank={1}
            player="Don Bradman"
            stat="19 centuries"
            nation="Australia"
          />
          <RecordCard
            rank={2}
            player="Jack Hobbs"
            stat="15 centuries"
            nation="England"
          />
          <RecordCard
            rank={3}
            player="Steve Smith"
            stat="13 centuries"
            nation="Australia"
          />
          <RecordCard
            rank={4}
            player="Ricky Ponting"
            stat="13 centuries"
            nation="Australia"
          />
          <RecordCard
            rank={5}
            player="Joe Root"
            stat="11 centuries"
            nation="England"
          />
        </div>
      </section>

      {/* Highest Team Scores Section */}
      <section className="bg-ashes-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Highest Team Scores"
            description="The largest team totals in Ashes Test cricket"
          />
          <div className="space-y-4">
            <RecordCard
              rank={1}
              player="England"
              stat="903 runs (1938)"
            />
            <RecordCard
              rank={2}
              player="Australia"
              stat="729 runs (1930)"
            />
            <RecordCard
              rank={3}
              player="England"
              stat="657 runs (1921)"
            />
            <RecordCard
              rank={4}
              player="Australia"
              stat="644 runs (1934)"
            />
            <RecordCard
              rank={5}
              player="England"
              stat="636 runs (1928)"
            />
          </div>
        </div>
      </section>

      {/* Best Bowling Figures Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Best Bowling Figures"
          description="The best individual bowling performances in Ashes Test cricket"
        />
        <div className="space-y-4">
          <RecordCard
            rank={1}
            player="Jim Laker"
            stat="19 wickets for 90 runs (1956)"
            nation="England"
          />
          <RecordCard
            rank={2}
            player="Arthur Mailey"
            stat="10 wickets for 141 runs (1921)"
            nation="Australia"
          />
          <RecordCard
            rank={3}
            player="Hugh Trumble"
            stat="12 wickets for 89 runs (1901-02)"
            nation="Australia"
          />
          <RecordCard
            rank={4}
            player="Sydney Barnes"
            stat="13 wickets for 163 runs (1911-12)"
            nation="England"
          />
          <RecordCard
            rank={5}
            player="Shane Warne"
            stat="12 wickets for 246 runs (1994-95)"
            nation="Australia"
          />
        </div>
      </section>
    </>
  )
}
