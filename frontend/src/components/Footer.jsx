import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-omni-dark border-t border-omni-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">OmniMindia</h3>
            <p className="text-omni-gray-400 text-sm">
              Unified Intelligence for Edge & Cloud Infrastructure
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-omni-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-omni-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-omni-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="font-semibold mb-3">Case Studies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/case-study/warehouse" className="text-omni-gray-400 hover:text-white transition-colors">
                  Warehouse Automation
                </Link>
              </li>
              <li>
                <Link to="/case-study/airport" className="text-omni-gray-400 hover:text-white transition-colors">
                  Airport Fleet Management
                </Link>
              </li>
              <li>
                <Link to="/case-study/people-counting" className="text-omni-gray-400 hover:text-white transition-colors">
                  People Counting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/omnimindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-omni-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://hub.docker.com/r/darkratio/omnimindia-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-omni-gray-400 hover:text-white transition-colors"
                >
                  Docker Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-omni-gray-800 pt-8 text-center text-sm">
          <p className="text-omni-gray-400 mb-2">
            Hardware-aware & human-first design — we follow ethical AI guidelines.
          </p>
          <p className="text-omni-gray-500">
            © {currentYear} OmniMindia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
