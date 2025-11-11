import { Link } from 'react-router-dom'

export default function Docs() {
  return (
    <main className="min-h-screen bg-omni-dark">
      {/* Hero */}
      <section className="bg-omni-dark border-b border-omni-gray-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-lg sm:text-xl text-omni-gray-400 max-w-3xl mx-auto">
            Get started with OmniMindia infrastructure platform
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>

          <div className="p-8 rounded-lg border border-omni-gray-800 mb-8">
            <h3 className="text-xl font-semibold mb-6">Installation</h3>
            <div className="console-text">
              <code>
                # Clone the repository
                <br />
                git clone https://github.com/your-username/omnimindia.git
                <br />
                cd omnimindia
                <br />
                <br />
                # Start with Docker Compose
                <br />
                docker-compose up --build
              </code>
            </div>
          </div>

          <div className="p-8 rounded-lg border border-omni-gray-800 mb-8">
            <h3 className="text-xl font-semibold mb-6">Configuration</h3>
            <p className="text-omni-gray-400 mb-6">
              Set up your environment variables in <code className="px-2 py-1 bg-omni-dark-200 text-omni-gray-200 rounded font-mono text-sm">backend/.env</code>:
            </p>
            <div className="console-text">
              <code>
                DATABASE_URL=postgresql://user:pass@host:5432/db
                <br />
                ALLOWED_ORIGINS=https://www.omnimindia.com
                <br />
                SMTP_HOST=smtp.gmail.com
                <br />
                SMTP_USER=your-email@gmail.com
              </code>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">API Reference</h2>

          <div className="space-y-6">
            <div className="p-8 rounded-lg border border-omni-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-mono border border-green-500/30">
                  GET
                </span>
                <code className="font-mono text-white">/api/health</code>
              </div>
              <p className="text-omni-gray-400 mb-4">Health check endpoint</p>
              <div className="console-text text-xs">
                <code>
                  {JSON.stringify({ status: 'ok', time: '2025-01-01T00:00:00Z' }, null, 2)}
                </code>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-omni-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-mono border border-green-500/30">
                  GET
                </span>
                <code className="font-mono text-white">/api/stats</code>
              </div>
              <p className="text-omni-gray-400 mb-4">Market statistics and data sources</p>
              <div className="console-text text-xs">
                <code>
                  {JSON.stringify(
                    {
                      cloudAI2024: { value: 77.0, unit: 'billion USD', year: 2024 },
                      edgeAI2024: { value: 18.3, unit: 'billion USD', year: 2024 },
                    },
                    null,
                    2
                  )}
                </code>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-omni-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-mono border border-blue-500/30">
                  POST
                </span>
                <code className="font-mono text-white">/api/contact</code>
              </div>
              <p className="text-omni-gray-400 mb-4">Submit contact form</p>
              <div className="console-text text-xs">
                <code>
                  {JSON.stringify(
                    { name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
                    null,
                    2
                  )}
                </code>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">Architecture</h2>
          <div className="p-8 rounded-lg border border-omni-gray-800">
            <p className="text-omni-gray-400 mb-6">
              OmniMindia follows a modern microservices architecture:
            </p>
            <ul className="space-y-3 text-omni-gray-400">
              <li>• <strong className="text-white">Frontend:</strong> React + Vite + TailwindCSS (Vercel)</li>
              <li>• <strong className="text-white">Backend:</strong> FastAPI + PostgreSQL (Render)</li>
              <li>• <strong className="text-white">Database:</strong> Neon PostgreSQL (Serverless)</li>
              <li>• <strong className="text-white">CI/CD:</strong> GitHub Actions</li>
              <li>• <strong className="text-white">Container Registry:</strong> Docker Hub</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
