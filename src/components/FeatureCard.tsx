interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-ashes-charcoal rounded-lg p-6 hover:bg-opacity-75 transition-all duration-300 hover:shadow-lg hover:shadow-ashes-gold/20 border border-ashes-charcoal hover:border-ashes-gold">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-ashes-light-grey">{description}</p>
    </div>
  )
}