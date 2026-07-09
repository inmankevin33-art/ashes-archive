interface MatchCardProps {
  title: string
  summary: string
  winner: string
  memorable: string
}

export default function MatchCard({
  title,
  summary,
  winner,
  memorable,
}: MatchCardProps) {
  return (
    <div className="bg-ashes-charcoal rounded-lg overflow-hidden hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold h-full">
      {/* Placeholder Image */}
      <div className="w-full h-48 bg-gradient-to-br from-ashes-gold/20 to-ashes-charcoal flex items-center justify-center">
        <span className="text-5xl">🏏</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-ashes-gold mb-3">{title}</h3>
        <p className="text-ashes-light-grey text-sm mb-4">{summary}</p>

        <div className="space-y-3 pt-4 border-t border-ashes-dark">
          <div>
            <p className="text-ashes-gold font-semibold text-sm">Winner</p>
            <p className="text-white">{winner}</p>
          </div>
          <div>
            <p className="text-ashes-gold font-semibold text-sm">Why It Was Memorable</p>
            <p className="text-ashes-light-grey text-sm">{memorable}</p>
          </div>
        </div>
      </div>
    </div>
  )
}