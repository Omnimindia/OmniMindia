import { useState, useEffect, useRef } from 'react'
import { MARKET_SOURCES, STATS_CONFIG } from '../constants/sources'

/**
 * Animated counter with tooltip showing source citation
 */
function StatCounter({ config, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const source = MARKET_SOURCES[config.sourceKey]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = config.animationDuration
      const steps = 60
      const increment = source.value / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= source.value) {
          setCount(source.value)
          clearInterval(interval)
        } else {
          setCount(current)
        }
      }, duration / steps)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [source.value, config.animationDuration, delay])

  return (
    <div className="card text-center relative group">
      <div className="text-4xl font-bold gradient-text mb-2">
        {config.prefix}
        {count.toFixed(count < 10 ? 2 : 1)}
        {config.suffix}
      </div>
      <p className="text-omni-gray-400 text-sm mb-1">{config.description}</p>
      <p className="text-omni-gray-300 text-xs">{source.year}</p>

      {/* Info icon */}
      <button
        className="absolute top-2 right-2 text-omni-gray-300 hover:text-omni-orange transition-colors focus-visible-ring rounded-full"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={`Source: ${source.source}`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute top-10 right-2 w-64 p-3 bg-omni-gray-500 text-white text-xs rounded-lg shadow-xl z-10"
          role="tooltip"
        >
          <p className="font-semibold mb-1">{source.source}</p>
          <p className="mb-2">{source.citation}</p>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-omni-orange-light hover:underline"
          >
            View source →
          </a>
        </div>
      )}
    </div>
  )
}

/**
 * Grid of animated market statistics
 * Fetches real-time data from /api/stats endpoint
 */
export default function StatsCounters() {
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch stats from API
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        setApiData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch stats:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-omni-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Intelligence</h2>
          <div className="text-center text-omni-gray-400">Loading market data...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-omni-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Intelligence</h2>
          <div className="text-center text-omni-gray-400">
            Unable to load market data. Using fallback values.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-omni-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Market Intelligence</h2>
        <p className="text-center text-omni-gray-400 mb-12 max-w-2xl mx-auto">
          Real-time market data showing the explosive growth of AI infrastructure, edge computing,
          and intelligent robotics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {STATS_CONFIG.map((config, index) => (
            <StatCounter key={config.id} config={config} delay={index * 100} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-omni-gray-300">
            Data sources: Market Research Future, Allied Market Research, Market.us, Precedence
            Research
          </p>
        </div>
      </div>
    </section>
  )
}
