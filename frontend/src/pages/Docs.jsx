import { Link } from 'react-router-dom'

export default function Docs() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-omni-blue to-omni-blue-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get started with OmniMindia infrastructure platform
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Quick Start</h2>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
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

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Configuration</h3>
            <p className="text-omni-gray-400 mb-4">
              Set up your environment variables in <code className="console-text">backend/.env</code>:
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

          <h2 className="text-3xl font-bold mb-6 mt-12">API Reference</h2>

          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-mono">
                  GET
                </span>
                <code className="font-mono">/api/health</code>
              </div>
              <p className="text-omni-gray-400 mb-3">Health check endpoint</p>
              <div className="console-text text-xs">
                <code>
                  {JSON.stringify({ status: 'ok', time: '2025-01-01T00:00:00Z' }, null, 2)}
                </code>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-mono">
                  GET
                </span>
                <code className="font-mono">/api/stats</code>
              </div>
              <p className="text-omni-gray-400 mb-3">Market statistics and data sources</p>
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

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-mono">
                  POST
                </span>
                <code className="font-mono">/api/contact</code>
              </div>
              <p className="text-omni-gray-400 mb-3">Submit contact form</p>
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

          <h2 className="text-3xl font-bold mb-6 mt-12">Architecture</h2>
          <div className="card">
            <p className="text-omni-gray-400 mb-4">
              OmniMindia follows a modern microservices architecture:
            </p>
            <ul className="space-y-2 text-omni-gray-400">
              <li>• <strong>Frontend:</strong> React + Vite + TailwindCSS (Vercel)</li>
              <li>• <strong>Backend:</strong> FastAPI + PostgreSQL (Render)</li>
              <li>• <strong>Database:</strong> Neon PostgreSQL (Serverless)</li>
              <li>• <strong>CI/CD:</strong> GitHub Actions</li>
              <li>• <strong>Container Registry:</strong> Docker Hub</li>
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
