interface RecordCardProps {
  rank: number
  player: string
  stat: string
  nation?: string
}

export default function RecordCard({ rank, player, stat, nation }: RecordCardProps) {
  return (
    <div className="bg-ashes-charcoal rounded-lg p-4 hover:bg-opacity-75 transition-all duration-300 border border-ashes-charcoal hover:border-ashes-gold">
      <div className="flex items-center gap-4">
        <div className="text-ashes-gold font-bold text-2xl w-12 h-12 flex items-center justify-center bg-ashes-dark rounded-lg">
          {rank}
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold">{player}</p>
          <p className="text-ashes-light-grey text-sm">{stat}</p>
          {nation && <p className="text-ashes-gold text-xs mt-1">{nation}</p>}
        </div>
      </div>
    </div>
  )
}