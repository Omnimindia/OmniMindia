import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroNucleus from '../components/HeroNucleus'
import ThreeNucleus from '../components/ThreeNucleus'
import OmniWidget from '../components/OmniWidget'
import StatsCounters from '../components/StatsCounters'
import ServicesGrid from '../components/ServicesGrid'
import CosmicBackground from '../components/CosmicBackground'
import TechPlanets from '../components/TechPlanets'
import NetworkWeb from '../components/NetworkWeb'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [showResults, setShowResults] = useState(false)
  const sectionRefs = useRef([])

  const handleQueryComplete = () => {
    setShowResults(true)
  }

  const handleAnalyzeStack = (data) => {
    console.log('Stack analysis data:', data)
    // Handle stack analysis results
  }

  // GSAP scroll-triggered animations
  useEffect(() => {
    const sections = sectionRefs.current

    sections.forEach((section, index) => {
      if (!section) return

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-omni-dark">
      {/* Hero Section - Big Bang / Cosmic Birth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic Background */}
        <CosmicBackground />

        {/* 3D Nucleus - Center Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full max-w-2xl max-h-2xl">
            <ThreeNucleus />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Big Bang Title Animation */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                OmniMindia
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-6">
              Unified Intelligence for Edge & Cloud
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <p className="text-xl sm:text-2xl text-cyan-300/90 font-semibold animate-slide-up">
              🌌 Where Innovation Meets Intelligence
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Hardware-aware AI infrastructure integrating edge computing, cloud services, and
              intelligent robotics. Built for the future of distributed intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/services" className="btn btn-primary text-lg px-10 py-4 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all">
              🚀 Explore Services
            </Link>
            <Link to="/docs" className="btn btn-outline text-lg px-10 py-4 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all">
              📚 View Documentation
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-20">
            <svg className="w-6 h-6 mx-auto text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative py-24 bg-gradient-to-b from-omni-dark via-purple-900/10 to-omni-dark overflow-hidden"
      >
        {/* Network Web Background */}
        <NetworkWeb />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To pioneer the future of distributed AI by creating seamless integration between edge computing, cloud infrastructure, and intelligent systems. We envision a world where AI is accessible, efficient, and privacy-preserving.
              </p>
            </div>

            {/* Mission */}
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To empower organizations with cutting-edge AI solutions that are hardware-aware, human-first, and environmentally conscious. We deliver end-to-end intelligent infrastructure from edge to cloud, enabling real-time decision making at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Planets Universe */}
      <TechPlanets />

      {/* Stats Section */}
      <StatsCounters />

      {/* Product Line Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="relative py-24 bg-gradient-to-b from-omni-dark via-blue-900/10 to-omni-dark overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              🎨 Product Line
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge AI products designed to transform your business operations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Product 1 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">OmniEdge AI Platform</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Edge-native AI inference platform for real-time processing with sub-10ms latency. Deploy models directly to edge devices.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✓ Real-time inference</li>
                  <li>✓ Model optimization</li>
                  <li>✓ Hardware acceleration</li>
                  <li>✓ Offline capability</li>
                </ul>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">OmniCloud Orchestrator</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Multi-cloud AI orchestration platform for seamless workload distribution across AWS, Azure, and GCP infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✓ Multi-cloud deployment</li>
                  <li>✓ Cost optimization</li>
                  <li>✓ Auto-scaling</li>
                  <li>✓ Unified dashboard</li>
                </ul>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="relative">
                <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">👁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">OmniVision Suite</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Advanced computer vision platform with pre-trained models for object detection, tracking, and facial recognition.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✓ Object detection</li>
                  <li>✓ Face recognition</li>
                  <li>✓ People counting</li>
                  <li>✓ Anomaly detection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="relative py-24 bg-gradient-to-b from-omni-dark via-orange-900/10 to-omni-dark overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(249,115,22,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
              💼 Consultancy Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expert guidance to transform your AI infrastructure and accelerate innovation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: '🎯', title: 'AI Strategy', desc: 'Custom AI roadmaps aligned with business goals', color: 'from-red-500 to-orange-500' },
              { icon: '🏗️', title: 'Infrastructure Design', desc: 'Architecture for scalable AI systems', color: 'from-orange-500 to-yellow-500' },
              { icon: '⚡', title: 'Model Optimization', desc: 'Performance tuning and acceleration', color: 'from-yellow-500 to-green-500' },
              { icon: '🔒', title: 'Security & Compliance', desc: 'Privacy-preserving AI implementation', color: 'from-green-500 to-cyan-500' },
              { icon: '📊', title: 'Data Engineering', desc: 'Pipeline design and data management', color: 'from-cyan-500 to-blue-500' },
              { icon: '🚀', title: 'MLOps & DevOps', desc: 'CI/CD for AI model deployment', color: 'from-blue-500 to-purple-500' },
              { icon: '🎓', title: 'Training & Workshops', desc: 'Upskill your team on AI technologies', color: 'from-purple-500 to-pink-500' },
              { icon: '🤝', title: 'Integration Support', desc: 'Seamless AI system integration', color: 'from-pink-500 to-red-500' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl bg-omni-dark-100 border border-omni-gray-800 hover:border-omni-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
