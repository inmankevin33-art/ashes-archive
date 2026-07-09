interface HeroProps {
  title: string
  subtitle?: string
  description?: string
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-ashes-charcoal to-ashes-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-ashes-gold mb-6">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg text-ashes-light-grey max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}