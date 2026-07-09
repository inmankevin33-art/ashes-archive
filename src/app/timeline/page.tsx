import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import TimelineItem from '@/components/TimelineItem'

export default function Timeline() {
  const timelineEvents = [
    {
      year: 1882,
      title: 'The First Ashes Series',
      description: 'Australia defeats England in England for the first time. The "Ashes" concept is born when the Sporting Times publishes a mock obituary of English cricket.',
    },
    {
      year: 1932,
      title: 'Bodyline Series',
      description: 'England\'s controversial "Bodyline" strategy under Douglas Jardine causes tension but secures victory. This series remains one of the most contentious in cricket history.',
    },
    {
      year: 1948,
      title: 'Bradman\'s Farewell Tour',
      description: 'Don Bradman leads Australia on his final Ashes tour. His extraordinary career and legacy define an era of Australian cricket excellence.',
    },
    {
      year: 1981,
      title: 'Botham\'s Ashes',
      description: 'Ian Botham\'s incredible all-round performance leads England to a stunning comeback victory. One of the most memorable series in Ashes history.',
    },
    {
      year: 2005,
      title: 'England Reclaims the Ashes',
      description: 'England wins the Ashes in Australia for the first time since 1987. Michael Vaughan\'s team delivers a dominant performance, sparking renewed interest in Test cricket.',
    },
    {
      year: 2023,
      title: 'Modern Era Continues',
      description: 'The Ashes rivalry remains as fierce as ever, with both nations competing at the highest level. New stars emerge while the tradition of excellence continues.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        title="The Ashes Timeline"
        subtitle="140+ Years of Cricket History"
        description="Follow the complete history of The Ashes from 1882 to today"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Major Moments in Ashes History"
          description="Key series and events that shaped the rivalry"
        />

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.year}
              year={event.year}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  )
}