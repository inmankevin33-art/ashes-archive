interface PlayerCardProps {
  name: string
  role: string
  nationality: string
  biography: string
  achievements: string
}

export default function PlayerCard({
  name,
  role,
  nationality,
  biography,
  achievements,
}: PlayerCardProps) {
  return (
    <div className="bg-ashes-charcoal rounded-lg overflow-hidden hover:shadow-lg hover:shadow-ashes-gold/20 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold h-full">
      {/* Placeholder Image */}
      <div className="w-full h-64 bg-gradient-to-br from-ashes-gold/20 to-ashes-charcoal flex items-center justify-center">
        <span className="text-7xl">👤</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-ashes-gold mb-1">{name}</h3>
        <p className="text-ashes-light-grey text-sm mb-4">{role} • {nationality}</p>

        <p className="text-ashes-light-grey mb-4">{biography}</p>

        <div className="pt-4 border-t border-ashes-dark">
          <p className="text-ashes-gold font-semibold mb-2">Ashes Achievements</p>
          <p className="text-ashes-light-grey text-sm">{achievements}</p>
        </div>
      </div>
    </div>
  )
}