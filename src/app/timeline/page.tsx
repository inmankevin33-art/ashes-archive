import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'

export default function Timeline() {
  const timelineEvents = [
    {
      year: 1882,
      title: 'The First Ashes Series',
      description: 'Australia defeats England in England for the first time. The "Ashes" concept is born when the Sporting Times publishes a mock obituary of English cricket.',
      image: 'https://images.unsplash.com/photo-1531415074968-36d109178d10?w=600&h=400&fit=crop',
    },
    {
      year: 1932,
      title: 'Bodyline Series',
      description: 'England\'s controversial "Bodyline" strategy under Douglas Jardine causes tension but secures victory. This series remains one of the most contentious in cricket history.',
      image: 'https://images.unsplash.com/photo-1461882379934-6d30c2aef11c?w=600&h=400&fit=crop',
    },
    {
      year: 1948,
      title: 'Bradman\'s Farewell Tour',
      description: 'Don Bradman leads Australia on his final Ashes tour. His extraordinary career and legacy define an era of Australian cricket excellence.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    },
    {
      year: 1981,
      title: 'Botham\'s Ashes',
      description: 'Ian Botham\'s incredible all-round performance leads England to a stunning comeback victory. One of the most memorable series in Ashes history.',
      image: 'https://images.unsplash.com/photo-1461882379934-6d30c2aef11c?w=600&h=400&fit=crop',
    },
    {
      year: 2005,
      title: 'England Reclaims the Ashes',
      description: 'England wins the Ashes in Australia for the first time since 1987. Michael Vaughan\'s team delivers a dominant performance, sparking renewed interest in Test cricket.',
      image: 'https://images.unsplash.com/photo-1531415074968-36d109178d10?w=600&h=400&fit=crop',
    },
    {
      year: 2023,
      title: 'Modern Era Continues',
      description: 'The Ashes rivalry remains as fierce as ever, with both nations competing at the highest level. New stars emerge while the tradition of excellence continues.',
      image: 'https://images.unsplash.com/photo-1461882379934-6d30c2aef11c?w=600&h=400&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        title="The Ashes Timeline"
        subtitle="140+ Years of Cricket History"
        description="Follow the complete history of The Ashes from 1882 to today"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          title="Major Moments in Ashes History"
          description="Key series and events that shaped the rivalry"
        />

        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} gap-8 items-center`}>
              {/* Image */}
              <div className="flex-1">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-lg border-2 border-ashes-gold hover:shadow-lg hover:shadow-ashes-gold/30 transition-all duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="bg-ashes-charcoal rounded-lg p-6 border border-ashes-charcoal hover:border-ashes-gold transition-all duration-300">
                  <p className="text-ashes-gold font-bold text-lg mb-2">{event.year}</p>
                  <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-ashes-light-grey">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}