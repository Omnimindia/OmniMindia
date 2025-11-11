import { useParams, Link } from 'react-router-dom'

const CASE_STUDIES = {
  warehouse: {
    title: 'Warehouse Automation',
    industry: 'Logistics & Supply Chain',
    challenge: 'A major e-commerce fulfillment center needed to process 50,000+ orders daily with high accuracy and minimal human intervention.',
    solution: 'Deployed AI-powered robotic picking systems with edge computing for real-time decision making. Integrated computer vision for item recognition and path optimization.',
    results: [
      { metric: '60%', label: 'Faster picking times' },
      { metric: '99.8%', label: 'Picking accuracy' },
      { metric: '40%', label: 'Labor cost reduction' },
      { metric: '24/7', label: 'Continuous operation' },
    ],
    technologies: ['Edge AI', 'Computer Vision', 'Robotic Process Automation', 'Real-time Analytics'],
    pdfLink: '/case-study-warehouse.pdf',
  },
  airport: {
    title: 'Airport Fleet Management',
    industry: 'Aviation & Transportation',
    challenge: 'International airport managing 200+ ground support vehicles needed real-time tracking, predictive maintenance, and optimized routing.',
    solution: 'Implemented edge AI-powered fleet management system with GPS tracking, sensor fusion, and predictive analytics for maintenance scheduling.',
    results: [
      { metric: '200+', label: 'Vehicles tracked' },
      { metric: '35%', label: 'Fuel savings' },
      { metric: '50%', label: 'Reduced downtime' },
      { metric: '99.9%', label: 'System uptime' },
    ],
    technologies: ['Edge Computing', 'IoT Sensors', 'Predictive Analytics', 'Real-time Optimization'],
    pdfLink: '/case-study-airport.pdf',
  },
  'people-counting': {
    title: 'Smart People Counting',
    industry: 'Retail & Hospitality',
    challenge: 'Shopping mall chain needed accurate occupancy monitoring for capacity management, traffic analysis, and resource optimization across 50 locations.',
    solution: 'Deployed edge AI vision systems with privacy-preserving people counting. Real-time analytics dashboard for facility managers.',
    results: [
      { metric: '99.5%', label: 'Counting accuracy' },
      { metric: '50', label: 'Locations deployed' },
      { metric: '<100ms', label: 'Processing latency' },
      { metric: '100%', label: 'Privacy compliant' },
    ],
    technologies: ['Edge AI', 'Computer Vision', 'Privacy-Preserving ML', 'Real-time Dashboards'],
    pdfLink: '/case-study-people-counting.pdf',
  },
}

export default function CaseStudy() {
  const { id } = useParams()
  const study = CASE_STUDIES[id]

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-omni-blue to-omni-blue-light text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-white/90">{study.industry}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-omni-blue">The Challenge</h2>
            <p className="text-omni-gray-400 text-lg">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-omni-blue">Our Solution</h2>
            <p className="text-omni-gray-400 text-lg">{study.solution}</p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-omni-blue">Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.results.map((result, idx) => (
                <div key={idx} className="card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{result.metric}</div>
                  <div className="text-sm text-omni-gray-400">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-omni-blue">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-omni-orange/10 text-omni-orange rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Download PDF */}
          <div className="card bg-omni-gray-50 text-center">
            <h3 className="font-semibold mb-4">Download Full Case Study</h3>
            <a
              href={study.pdfLink}
              download
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
