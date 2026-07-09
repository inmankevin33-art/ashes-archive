interface TimelineItemProps {
  year: string | number
  title: string
  description: string
  isLeft?: boolean
}

export default function TimelineItem({
  year,
  title,
  description,
  isLeft = false,
}: TimelineItemProps) {
  return (
    <div className={`flex mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center mr-6 md:mr-12">
        <div className="w-4 h-4 bg-ashes-gold rounded-full mb-4 mt-2"></div>
        <div className="w-1 h-24 bg-gradient-to-b from-ashes-gold to-transparent"></div>
      </div>

      {/* Content */}
      <div className="bg-ashes-charcoal rounded-lg p-6 flex-1 hover:bg-opacity-75 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold">
        <p className="text-ashes-gold font-bold text-lg mb-2">{year}</p>
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-ashes-light-grey">{description}</p>
      </div>
    </div>
  )
}