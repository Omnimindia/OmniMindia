/**
 * DRAMATICALLY Animated tech planets representing OmniMindia's technology stack
 * Planets orbit in space with VISIBLE trails: CV, GenAI, ML, LLM, Robotics, Machine Vision
 */
export default function TechPlanets() {
  const planets = [
    { name: 'Computer Vision', abbr: 'CV', color: 'from-cyan-400 to-blue-600', glowColor: 'cyan', delay: '0s', size: 'w-32 h-32', orbitSize: 350 },
    { name: 'Generative AI', abbr: 'GenAI', color: 'from-purple-400 to-pink-600', glowColor: 'purple', delay: '1s', size: 'w-36 h-36', orbitSize: 450 },
    { name: 'Machine Learning', abbr: 'ML', color: 'from-green-400 to-emerald-600', glowColor: 'green', delay: '2s', size: 'w-28 h-28', orbitSize: 550 },
    { name: 'Large Language Models', abbr: 'LLM', color: 'from-orange-400 to-red-600', glowColor: 'orange', delay: '3s', size: 'w-32 h-32', orbitSize: 650 },
    { name: 'Robotics', abbr: 'Robotics', color: 'from-yellow-400 to-amber-600', glowColor: 'yellow', delay: '4s', size: 'w-30 h-30', orbitSize: 750 },
    { name: 'Machine Vision', abbr: 'Vision', color: 'from-indigo-400 to-violet-600', glowColor: 'indigo', delay: '5s', size: 'w-32 h-32', orbitSize: 850 },
  ]

  return (
    <section className="relative py-48 overflow-hidden bg-omni-dark">
      <div className="absolute inset-0">
        {/* Visible Orbital Paths */}
        {planets.map((planet, index) => (
          <div
            key={`orbit-${planet.abbr}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed opacity-20"
            style={{
              width: `${planet.orbitSize}px`,
              height: `${planet.orbitSize}px`,
              borderColor: planet.glowColor === 'cyan' ? '#22d3ee' :
                           planet.glowColor === 'purple' ? '#a855f7' :
                           planet.glowColor === 'green' ? '#10b981' :
                           planet.glowColor === 'orange' ? '#f97316' :
                           planet.glowColor === 'yellow' ? '#eab308' : '#6366f1',
            }}
          />
        ))}

        {/* Central sun/core with DRAMATIC glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* HUGE Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/50 via-red-500/30 to-transparent blur-3xl w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-radial from-yellow-500/40 to-transparent blur-2xl w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

            {/* Core */}
            <div className="relative w-40 h-40 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-omni-orange via-orange-400 to-red-500 rounded-full animate-spin-slow shadow-2xl shadow-orange-500/50"></div>
              <div className="absolute inset-3 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-base text-center leading-tight">OmniMindia<br/>Core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting planets with TRAILS */}
        {planets.map((planet, index) => (
          <div
            key={planet.abbr}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `orbit ${15 + index * 3}s linear infinite`,
              animationDelay: planet.delay,
              width: `${planet.orbitSize}px`,
              height: `${planet.orbitSize}px`,
            }}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.size} group cursor-pointer z-10`}
              style={{ animation: `reverseSpin ${15 + index * 3}s linear infinite` }}
            >
              {/* HUGE Planet glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${planet.color} rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse-slow`}></div>

              {/* Planet with shadow */}
              <div className={`relative w-full h-full bg-gradient-to-br ${planet.color} rounded-full shadow-2xl flex items-center justify-center group-hover:scale-125 transition-all duration-300 border-4 border-white/20`}
                style={{
                  boxShadow: `0 0 30px ${planet.glowColor === 'cyan' ? '#22d3ee' :
                                         planet.glowColor === 'purple' ? '#a855f7' :
                                         planet.glowColor === 'green' ? '#10b981' :
                                         planet.glowColor === 'orange' ? '#f97316' :
                                         planet.glowColor === 'yellow' ? '#eab308' : '#6366f1'}`
                }}
              >
                <span className="text-white font-bold text-sm sm:text-base text-center px-2 drop-shadow-lg">{planet.abbr}</span>
              </div>

              {/* Label - always visible but larger on hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 group-hover:scale-125 transition-transform">
                <span className="text-white text-sm font-semibold bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">{planet.name}</span>
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
