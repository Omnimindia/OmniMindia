import { Link } from 'react-router-dom'
import ServicesGrid from '../components/ServicesGrid'

export default function Services() {
  return (
    <main className="min-h-screen bg-omni-dark">
      {/* Hero */}
      <section className="bg-omni-dark border-b border-omni-gray-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-omni-gray-400 max-w-3xl mx-auto">
            Comprehensive infrastructure solutions for edge computing, cloud integration, and
            intelligent robotics.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Detailed Service Sections */}
      <section className="py-24 bg-omni-dark-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-20">
            {/* Edge AI */}
            <div id="edge-ai" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4">Edge AI Infrastructure</h2>
              <p className="text-omni-gray-400 mb-8 leading-relaxed">
                Deploy intelligent processing capabilities directly at the edge of your network.
                Reduce latency, enhance privacy, and optimize bandwidth with hardware-aware AI.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-omni-gray-800">
                  <h3 className="font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-sm text-omni-gray-400">
                    <li>• Sub-10ms response times</li>
                    <li>• 90% reduction in cloud costs</li>
                    <li>• Enhanced data privacy</li>
                    <li>• Offline operation capability</li>
                  </ul>
                </div>
                <div className="p-6 rounded-lg border border-omni-gray-800">
                  <h3 className="font-semibold mb-4">Use Cases</h3>
                  <ul className="space-y-3 text-sm text-omni-gray-400">
                    <li>• Industrial IoT</li>
                    <li>• Autonomous vehicles</li>
                    <li>• Smart cities</li>
                    <li>• Healthcare devices</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cloud Integration */}
            <div id="cloud-integration" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4">Cloud Integration</h2>
              <p className="text-omni-gray-400 mb-8 leading-relaxed">
                Seamlessly orchestrate workloads across multiple cloud providers with unified
                management, monitoring, and cost optimization.
              </p>
              <div className="console-text">
                <code>
                  # Multi-cloud deployment example
                  <br />
                  omni deploy --clouds aws,azure,gcp \
                  <br />
                  &nbsp;&nbsp;--region auto \
                  <br />
                  &nbsp;&nbsp;--optimize cost
                </code>
              </div>
            </div>

            {/* Intelligent Robotics */}
            <div id="intelligent-robotics" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4">Intelligent Robotics</h2>
              <p className="text-omni-gray-400 mb-8 leading-relaxed">
                AI-powered robotic systems for warehouses, logistics, and autonomous operations.
                Real-time decision making at scale.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-omni-gray-800 text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.8%</div>
                  <div className="text-sm text-omni-gray-400">Picking Accuracy</div>
                </div>
                <div className="p-6 rounded-lg border border-omni-gray-800 text-center">
                  <div className="text-3xl font-bold text-white mb-2">60%</div>
                  <div className="text-sm text-omni-gray-400">Time Reduction</div>
                </div>
                <div className="p-6 rounded-lg border border-omni-gray-800 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-omni-gray-400">Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-omni-dark border-t border-omni-gray-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Interested in Our Services?</h2>
          <p className="text-omni-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss how we can help transform your infrastructure.
          </p>
          <Link to="/docs" className="btn btn-primary">
            View Documentation
          </Link>
        </div>
      </section>
    </main>
  )
}
