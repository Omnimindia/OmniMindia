/**
 * DRAMATICALLY Animated tech planets representing OmniMindia's technology stack
 * Planets orbit in space with VISIBLE trails: CV, GenAI, ML, LLM, Robotics, Machine Vision
 */
export default function TechPlanets() {
  const planets = [
    { name: 'Computer Vision', abbr: 'CV', color: 'from-cyan-400 to-blue-600', glowColor: 'cyan', delay: '0s', size: 'w-48 h-48 md:w-56 md:h-56', orbitSize: 350, speed: 12 },
    { name: 'Generative AI', abbr: 'GenAI', color: 'from-purple-400 to-pink-600', glowColor: 'purple', delay: '1s', size: 'w-52 h-52 md:w-64 md:h-64', orbitSize: 450, speed: 15 },
    { name: 'Machine Learning', abbr: 'ML', color: 'from-green-400 to-emerald-600', glowColor: 'green', delay: '2s', size: 'w-44 h-44 md:w-52 md:h-52', orbitSize: 550, speed: 18 },
    { name: 'Large Language Models', abbr: 'LLM', color: 'from-orange-400 to-red-600', glowColor: 'orange', delay: '3s', size: 'w-48 h-48 md:w-56 md:h-56', orbitSize: 650, speed: 21 },
    { name: 'Robotics', abbr: 'Robotics', color: 'from-yellow-400 to-amber-600', glowColor: 'yellow', delay: '4s', size: 'w-44 h-44 md:w-52 md:h-52', orbitSize: 750, speed: 24 },
    { name: 'Machine Vision', abbr: 'Vision', color: 'from-indigo-400 to-violet-600', glowColor: 'indigo', delay: '5s', size: 'w-48 h-48 md:w-56 md:h-56', orbitSize: 850, speed: 27 },
  ]

  return (
    <section className="relative py-48 overflow-hidden bg-omni-dark">
      <div className="absolute inset-0">
        {/* BRIGHT Visible Orbital Paths */}
        {planets.map((planet, index) => (
          <div
            key={`orbit-${planet.abbr}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-dashed opacity-70 animate-pulse-slow"
            style={{
              width: `${planet.orbitSize}px`,
              height: `${planet.orbitSize}px`,
              borderColor: planet.glowColor === 'cyan' ? '#22d3ee' :
                           planet.glowColor === 'purple' ? '#a855f7' :
                           planet.glowColor === 'green' ? '#10b981' :
                           planet.glowColor === 'orange' ? '#f97316' :
                           planet.glowColor === 'yellow' ? '#eab308' : '#6366f1',
              boxShadow: `0 0 20px ${planet.glowColor === 'cyan' ? '#22d3ee50' :
                           planet.glowColor === 'purple' ? '#a855f750' :
                           planet.glowColor === 'green' ? '#10b98150' :
                           planet.glowColor === 'orange' ? '#f9731650' :
                           planet.glowColor === 'yellow' ? '#eab30850' : '#6366f150'}`,
            }}
          />
        ))}

        {/* Central sun/core with MASSIVE DRAMATIC glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* MASSIVE Glow effects - HIGHLY VISIBLE */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/80 via-red-500/50 to-transparent blur-3xl w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-radial from-yellow-500/70 to-transparent blur-3xl w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent blur-2xl w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            {/* BIGGER Core */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-omni-orange via-orange-400 to-red-500 rounded-full animate-spin-slow shadow-2xl shadow-orange-500/80"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-xl md:text-2xl text-center leading-tight drop-shadow-lg">OmniMindia<br/>CORE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting planets with DRAMATIC TRAILS */}
        {planets.map((planet, index) => (
          <div
            key={planet.abbr}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `orbit ${planet.speed}s linear infinite`,
              animationDelay: planet.delay,
              width: `${planet.orbitSize}px`,
              height: `${planet.orbitSize}px`,
            }}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.size} group cursor-pointer z-10`}
              style={{ animation: `reverseSpin ${planet.speed}s linear infinite` }}
            >
              {/* MASSIVE Planet glow - SUPER BRIGHT */}
              <div className={`absolute -inset-12 bg-gradient-to-br ${planet.color} rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity animate-pulse`}></div>
              <div className={`absolute -inset-8 bg-gradient-to-br ${planet.color} rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-opacity`}></div>

              {/* Planet with HUGE shadow and border */}
              <div className={`relative w-full h-full bg-gradient-to-br ${planet.color} rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border-4 border-white/30`}
                style={{
                  boxShadow: `0 0 60px 20px ${planet.glowColor === 'cyan' ? '#22d3ee' :
                                         planet.glowColor === 'purple' ? '#a855f7' :
                                         planet.glowColor === 'green' ? '#10b981' :
                                         planet.glowColor === 'orange' ? '#f97316' :
                                         planet.glowColor === 'yellow' ? '#eab308' : '#6366f1'}`
                }}
              >
                <span className="text-white font-bold text-lg md:text-2xl text-center px-2 drop-shadow-2xl">{planet.abbr}</span>
              </div>

              {/* Label - ALWAYS VISIBLE and LARGE */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-base md:text-lg font-bold bg-black/90 px-6 py-3 rounded-full backdrop-blur-sm border-2 border-white/30 shadow-2xl">{planet.name}</span>
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
