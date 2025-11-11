# OmniMindia

**Unified Intelligence for Edge & Cloud Infrastructure**

OmniMindia is a production-ready full-stack platform showcasing next-generation AI infrastructure integration across edge and cloud. Built with React + Vite, FastAPI, and deployed on Vercel (frontend) and Render (backend) with Neon PostgreSQL.

---

## 🚀 Features

- **Interactive 3D Hero**: WebGL nucleus with query-animation sequences (Three.js/React Three Fiber)
- **OMNI Assistant Widget**: AI-powered assistant with Lottie animations and TTS support
- **Real-time Stats**: Animated market counters for Cloud AI, Edge AI, and Robotics markets
- **Case Studies**: Interactive warehouse, airport, and people-counting demos
- **Full API Backend**: FastAPI with health checks, stats endpoints, and contact forms
- **Production-Ready**: Docker, CI/CD, rate-limiting, accessibility, and SEO optimized

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
npm install
npm run dev
# Open http://localhost:5173
```

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
- Saffron-Orange: `#FF6A00` → `#FFA733`
- Deep Tech Blue: `#002B5C`
- Neutral Gray: `#F5F5F5`

**Fonts:**
- UI: Inter (Google Fonts)
- Code/Console: JetBrains Mono

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
