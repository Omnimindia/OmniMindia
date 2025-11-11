import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroNucleus from '../components/HeroNucleus'
import OmniWidget from '../components/OmniWidget'
import StatsCounters from '../components/StatsCounters'
import ServicesGrid from '../components/ServicesGrid'

export default function Home() {
  const [showResults, setShowResults] = useState(false)

  const handleQueryComplete = () => {
    setShowResults(true)
  }

  const handleAnalyzeStack = (data) => {
    console.log('Stack analysis data:', data)
    // Handle stack analysis results
  }

  return (
    <main className="min-h-screen bg-omni-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Unified Intelligence
            <br />
            <span className="text-omni-gray-400">for Edge & Cloud</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-omni-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hardware-aware AI infrastructure integrating edge computing, cloud services, and
            intelligent robotics. Built for the future of distributed intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <Link to="/services" className="btn btn-primary text-base sm:text-lg px-8 py-4">
              Explore Services
            </Link>
            <Link to="/docs" className="btn btn-outline text-base sm:text-lg px-8 py-4">
              View Documentation
            </Link>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group p-8 rounded-lg border border-omni-gray-800 hover:border-omni-gray-600 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Low Latency</h3>
              <p className="text-sm text-omni-gray-400 leading-relaxed">Process at the edge for real-time decisions with minimal overhead</p>
            </div>
            <div className="group p-8 rounded-lg border border-omni-gray-800 hover:border-omni-gray-600 transition-all duration-300">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-sm text-omni-gray-400 leading-relaxed">Data stays local with edge processing, ensuring maximum privacy</p>
            </div>
            <div className="group p-8 rounded-lg border border-omni-gray-800 hover:border-omni-gray-600 transition-all duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Hardware Aware</h3>
              <p className="text-sm text-omni-gray-400 leading-relaxed">Intelligent workload orchestration across your infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounters />

      {/* Services Section */}
      <ServicesGrid />

      {/* Case Studies Preview */}
      <section className="py-24 bg-omni-dark-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 'warehouse',
                title: 'Warehouse Automation',
                description: 'AI-powered robotics reduced picking time by 60% and improved accuracy to 99.8%',
                metric: '60% faster',
              },
              {
                id: 'airport',
                title: 'Airport Fleet Management',
                description: 'Real-time vehicle tracking and optimization across 200+ ground support vehicles',
                metric: '200+ vehicles',
              },
              {
                id: 'people-counting',
                title: 'Smart People Counting',
                description: 'Edge AI analytics for occupancy management with 99.5% accuracy',
                metric: '99.5% accurate',
              },
            ].map((study) => (
              <Link
                key={study.id}
                to={`/case-study/${study.id}`}
                className="group block p-6 rounded-lg border border-omni-gray-800 hover:border-omni-gray-600 transition-all duration-300"
              >
                <div className="aspect-video bg-omni-dark-200 rounded-lg mb-6 flex items-center justify-center border border-omni-gray-800 group-hover:border-omni-gray-700 transition-all duration-300">
                  <span className="text-white text-3xl font-bold">{study.metric}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-omni-gray-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-omni-gray-500 text-sm leading-relaxed">{study.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-omni-dark border-t border-omni-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-lg sm:text-xl text-omni-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the next generation of hardware-aware, human-first AI infrastructure.
          </p>
          <Link to="/docs" className="btn btn-primary text-base sm:text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>

      {/* OMNI Widget */}
      <OmniWidget onAnalyzeStack={handleAnalyzeStack} />
    </main>
  )
}
