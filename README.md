# OmniMindia

**AI Solutions Powered by Computer Vision, GenAI, Machine Learning, LLM, Robotics & Machine Vision**

OmniMindia is a production-ready full-stack platform showcasing cutting-edge AI solutions with spectacular cosmic animations. Specializing in Computer Vision, Generative AI, Machine Learning, Large Language Models, Robotics, and Machine Vision. Built with React + Vite, Three.js, GSAP, FastAPI, and deployed on Vercel.

---

## 🚀 Features

### 🌌 Spectacular Animations
- **3D Nucleus Hero**: Three.js/React Three Fiber with orbiting electrons, hover interactions, ready for query→big-bang animation
- **Cosmic Background**: Canvas-based nebula bursts, particle explosions, 300 twinkling stars with glow effects
- **Tech Planets**: 6 orbiting planets representing tech stack (CV, GenAI, ML, LLM, Robotics, Vision) with visible orbital paths
- **Network Web**: 50 connected nodes with dynamic linking visualization
- **GSAP Animations**: Scroll-triggered animations for smooth user experience

### 💼 Core Features
- **OMNI Assistant Widget**: AI-powered assistant with Lottie animations, TTS support, and interactive transcript
- **Vision & Mission**: Company vision and mission statements with gradient cards
- **Product Line**: 3 flagship products (OmniEdge AI, OmniCloud Orchestrator, OmniVision Suite)
- **Consultancy Services**: 8 comprehensive AI consultancy services
- **Case Studies**: Interactive demos (warehouse automation, airport fleet, people counting)
- **Full API Backend**: FastAPI with health checks, stats endpoints, and contact forms
- **Production-Ready**: SEO optimized, security headers, Vercel deployment config, JSON-LD structured data

### 🎨 Technology Stack
- **Frontend**: React 18, Vite 5, TailwindCSS, Three.js, @react-three/fiber, GSAP, Lottie
- **Backend**: FastAPI, PostgreSQL (Neon)
- **Deployment**: Vercel (frontend), comprehensive CI/CD
- **Design**: Dark minimal theme (#000000) with orange accent (#FF6A00)

---

## 📁 Repository Structure

```
omnimindia/
├── frontend/          # React + Vite + TailwindCSS
├── backend/           # FastAPI + PostgreSQL
├── .github/workflows/ # CI/CD pipelines
└── docs/              # Architecture, deployment, brand guide
```

---

## 🏃 Quickstart (Local Development)

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Docker & Docker Compose (optional)

### Option A: Docker Compose (Recommended)

```bash
# Clone repository
git clone https://github.com/<your-username>/omnimindia.git
cd omnimindia

# Set up backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your values

# Start all services
docker-compose up --build

# Frontend: http://localhost:5173
# Backend:  http://localhost:8000
# Postgres: localhost:5432
```

### Option B: Manual Setup

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with DATABASE_URL and other secrets
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
cd frontend
npm install  # Installs: React, Vite, TailwindCSS, Three.js, GSAP, Lottie, and more
npm run dev
# Open http://localhost:5173
```

**Key Frontend Dependencies:**
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber
- `gsap` - Professional-grade animation library
- `lottie-react` - Lottie animations for React

---

## 🌐 Production Deployment

Full step-by-step instructions in [`docs/deploy.md`](./docs/deploy.md).

### Quick Overview

1. **Database**: Create Neon PostgreSQL instance → copy `DATABASE_URL`
2. **Backend**: Deploy to Render using Docker Hub image `darkratio/omnimindia-backend`
3. **Frontend**: Deploy to Vercel, connect `www.OmniMindia.com`
4. **DNS**: Update GoDaddy with Vercel DNS records
5. **CI/CD**: Add GitHub secrets for automated deployments

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
```
DATABASE_URL=postgresql://user:pass@host:5432/db
ALLOWED_ORIGINS=https://www.omnimindia.com,http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### GitHub Actions Secrets
Add these in **Settings → Secrets and variables → Actions**:
- `DOCKERHUB_USERNAME` - Docker Hub username (darkratio)
- `DOCKERHUB_TOKEN` - Docker Hub access token
- `VERCEL_TOKEN` - Vercel deployment token
- `RENDER_API_KEY` - Render API key (optional, for auto-deploy)
- `NEON_DATABASE_URL` - Production database URL

---

## 🧪 Testing

**Backend:**
```bash
cd backend
pytest
```

**Frontend:**
```bash
cd frontend
npm test
```

---

## 📋 Post-Generation Tasks (Manual)

After cloning/generating this repository, complete these steps:

- [ ] **1. Create GitHub Repository** - Push code to `https://github.com/<username>/omnimindia`
- [ ] **2. Add GitHub Secrets** - Add all 5 secrets listed above to Actions settings
- [ ] **3. Create Neon Database** - Sign up at neon.tech, create DB, copy connection string
- [ ] **4. Deploy Backend to Render**:
  - Create new Web Service
  - Connect to Docker Hub: `darkratio/omnimindia-backend:latest`
  - Add environment variables (DATABASE_URL, ALLOWED_ORIGINS, etc.)
- [ ] **5. Deploy Frontend to Vercel**:
  - Import GitHub repository
  - Framework preset: Vite
  - Root directory: `frontend`
  - Build command: `npm run build`
  - Output directory: `dist`
- [ ] **6. Configure Custom Domain on Vercel**:
  - Add domain: `www.omnimindia.com`
  - Copy DNS records provided by Vercel
- [ ] **7. Update GoDaddy DNS**:
  - A record: `@` → `76.76.21.21`
  - CNAME record: `www` → `cname.vercel-dns.com`
- [ ] **8. Set Docker Hub Credentials**:
  - Create access token at hub.docker.com
  - Add to GitHub secrets

---

## 🎨 Brand Guidelines

See [`docs/brand-guide.md`](./docs/brand-guide.md) for colors, typography, and logo usage.

**Colors:**
- **Primary Orange**: `#FF6A00` (omni-orange), Light: `#FFA733`, Dark: `#CC5500`
- **Dark Theme**: `#000000` (pure black background)
- **Dark Accents**: `#0A0A0A` to `#3C3C3C` (omni-dark shades)
- **Gray Scale**: `#F5F5F5` to `#0A0A0A` (omni-gray palette)
- **Tech Planets Colors**:
  - Cyan (CV): `#22d3ee`
  - Purple (GenAI): `#a855f7`
  - Green (ML): `#10b981`
  - Orange (LLM): `#f97316`
  - Yellow (Robotics): `#eab308`
  - Indigo (Vision): `#6366f1`

**Fonts:**
- UI: Inter (Google Fonts)
- Code/Console: JetBrains Mono

**Design Philosophy:**
- Dark minimal aesthetic inspired by AetherInc
- High contrast with vibrant accent colors
- Cosmic/space theme with particle effects and animations

---

## 📚 Documentation

- [Architecture Overview](./docs/architecture.md)
- [Deployment Guide](./docs/deploy.md)
- [Brand Guidelines](./docs/brand-guide.md)
- [OMNI Assistant Copy](./docs/omni-copy.md)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

---

## 🔗 Links

- **Website**: [www.omnimindia.com](https://www.omnimindia.com)
- **Docker Hub**: [darkratio/omnimindia-backend](https://hub.docker.com/r/darkratio/omnimindia-backend)
- **Documentation**: [docs/](./docs/)

---

**Built with ❤️ for hardware-aware, human-first AI infrastructure.**

*Hardware-aware & human-first design — we follow ethical AI guidelines.*
