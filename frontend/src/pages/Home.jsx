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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-omni-blue via-omni-blue-light to-omni-orange-dark overflow-hidden">
        {/* Background nucleus */}
        <div className="absolute inset-0 opacity-30">
          <HeroNucleus onQueryComplete={handleQueryComplete} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Unified Intelligence
            <br />
            <span className="gradient-text">for Edge & Cloud</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Hardware-aware AI infrastructure integrating edge computing, cloud services, and
            intelligent robotics. Built for the future of distributed intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn btn-primary text-lg">
              Explore Services
            </Link>
            <Link to="/docs" className="btn btn-outline text-lg bg-white/10 border-white text-white hover:bg-white hover:text-omni-blue">
              View Documentation
            </Link>
          </div>

          {/* Key features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-morphism p-6 rounded-xl">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Low Latency</h3>
              <p className="text-sm text-white/80">Process at the edge for real-time decisions</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-white/80">Data stays local with edge processing</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Hardware Aware</h3>
              <p className="text-sm text-white/80">Intelligent workload orchestration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounters />

      {/* Services Section */}
      <ServicesGrid />

      {/* Case Studies Preview */}
      <section className="py-16 bg-omni-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
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
                className="card group hover:shadow-2xl transition-all duration-200"
              >
                <div className="aspect-video bg-gradient-to-br from-omni-orange to-omni-blue rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{study.metric}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-omni-orange transition-colors">
                  {study.title}
                </h3>
                <p className="text-omni-gray-400 text-sm">{study.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-omni-orange to-omni-orange-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the next generation of hardware-aware, human-first AI infrastructure.
          </p>
          <Link to="/docs" className="btn bg-white text-omni-orange hover:bg-omni-gray-50">
            Get Started
          </Link>
        </div>
      </section>

      {/* OMNI Widget */}
      <OmniWidget onAnalyzeStack={handleAnalyzeStack} />
    </main>
  )
}
