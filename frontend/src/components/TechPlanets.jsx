/**
 * Animated tech planets representing OmniMindia's technology stack
 * Planets orbit in space representing: CV, GenAI, ML, LLM, Robotics, Machine Vision
 */
export default function TechPlanets() {
  const planets = [
    { name: 'Computer Vision', abbr: 'CV', color: 'from-cyan-500 to-blue-500', delay: '0s', size: 'w-24 h-24' },
    { name: 'Generative AI', abbr: 'GenAI', color: 'from-purple-500 to-pink-500', delay: '1s', size: 'w-28 h-28' },
    { name: 'Machine Learning', abbr: 'ML', color: 'from-green-500 to-emerald-500', delay: '2s', size: 'w-20 h-20' },
    { name: 'Large Language Models', abbr: 'LLM', color: 'from-orange-500 to-red-500', delay: '3s', size: 'w-26 h-26' },
    { name: 'Robotics', abbr: 'Robotics', color: 'from-yellow-500 to-amber-500', delay: '4s', size: 'w-22 h-22' },
    { name: 'Machine Vision', abbr: 'Vision', color: 'from-indigo-500 to-violet-500', delay: '5s', size: 'w-24 h-24' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        {/* Central sun/core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-omni-orange/30 to-transparent blur-3xl w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            {/* Core */}
            <div className="relative w-32 h-32 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-omni-orange via-orange-400 to-red-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">OmniMindia<br/>Core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting planets */}
        {planets.map((planet, index) => (
          <div
            key={planet.abbr}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `orbit ${20 + index * 5}s linear infinite`,
              animationDelay: planet.delay,
              width: `${300 + index * 80}px`,
              height: `${300 + index * 80}px`,
            }}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.size} group cursor-pointer`}
              style={{ animation: `reverseSpin ${20 + index * 5}s linear infinite` }}
            >
              {/* Planet glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>

              {/* Planet */}
              <div className={`relative w-full h-full bg-gradient-to-br ${planet.color} rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-xs sm:text-sm text-center px-2">{planet.abbr}</span>
              </div>

              {/* Label on hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-white text-xs bg-black/70 px-3 py-1 rounded-full">{planet.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          Our Technology Universe
        </h2>
        <p className="text-omni-gray-400 text-lg max-w-2xl mx-auto">
          Explore the interconnected ecosystem of AI technologies powering OmniMindia's intelligent solutions
        </p>
      </div>
    </section>
  )
}
