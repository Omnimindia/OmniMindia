# OmniMindia Architecture

## Overview

OmniMindia is built on a modern, cloud-native architecture designed for scalability, reliability, and performance. The system follows a microservices pattern with clear separation of concerns between frontend, backend, and data layers.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         User / Browser                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                   GoDaddy DNS                                   │
│                   www.omnimindia.com                            │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │
        ┌────────────────┴───────────────┐
        │                                │
        ▼                                ▼
┌──────────────────┐            ┌──────────────────┐
│   Vercel CDN     │            │  Render.com      │
│   (Frontend)     │            │  (Backend API)   │
│                  │            │                  │
│  React + Vite    │◄───REST───►│  FastAPI        │
│  Three.js        │    API     │  + Uvicorn       │
│  TailwindCSS     │            │                  │
└──────────────────┘            └────────┬─────────┘
                                         │
                                         │ SQL
                                         ▼
                                ┌──────────────────┐
                                │   Neon.tech      │
                                │   PostgreSQL     │
                                │   (Database)     │
                                └──────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      Docker Hub                                 │
│              darkratio/omnimindia-backend                       │
│                  (Container Images)                             │
└─────────────────────────────────────────────────────────────────┘
                         ▲
                         │
                         │ Push
                         │
┌─────────────────────────────────────────────────────────────────┐
│                    GitHub Actions                               │
│                    (CI/CD Pipeline)                             │
└─────────────────────────────────────────────────────────────────┘
```

## Components

### Frontend (Vercel)

- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: GSAP, Framer Motion, Lottie
- **Routing**: React Router v6

**Key Features:**
- Server-side rendering (SSR) capable
- Edge caching via Vercel CDN
- Automatic HTTPS
- Global CDN distribution
- Optimized asset delivery

### Backend (Render)

- **Framework**: FastAPI (Python 3.11)
- **Server**: Uvicorn (ASGI)
- **Database ORM**: SQLAlchemy (async)
- **Rate Limiting**: SlowAPI
- **Container**: Docker

**Endpoints:**
- `GET /api/health` - Health check
- `GET /api/stats` - Market statistics
- `POST /api/contact` - Contact form submission

**Features:**
- Automatic scaling
- Health checks
- Rate limiting (5 req/min for contact)
- CORS configuration
- Async database operations

### Database (Neon)

- **Type**: PostgreSQL 13+ (serverless)
- **Connection**: asyncpg driver
- **Features**:
  - Auto-scaling compute
  - Instant branching
  - Point-in-time recovery
  - Connection pooling

**Schema:**
- `contact_entries` - Contact form submissions

### CI/CD (GitHub Actions)

**Frontend Workflow:**
1. Trigger on push to `main` or `frontend/**` changes
2. Install Node dependencies
3. Build frontend (`npm run build`)
4. Run tests
5. Deploy to Vercel (or GitHub Pages fallback)

**Backend Workflow:**
1. Trigger on push to `main` or `backend/**` changes
2. Build Docker image
3. Tag with SHA and `latest`
4. Push to Docker Hub
5. Run tests
6. (Optional) Trigger Render deployment

## Data Flow

### User Request Flow

1. User visits `www.omnimindia.com`
2. DNS resolves to Vercel's edge network
3. Frontend assets served from nearest CDN edge
4. JavaScript initializes React application
5. API calls made to backend via `/api/*` endpoints
6. Backend processes request, queries database
7. Response returned as JSON
8. Frontend updates UI with data

### Contact Form Submission

1. User fills contact form
2. Frontend validates input
3. POST request to `/api/contact`
4. Rate limiter checks request limit
5. Backend validates payload
6. Entry saved to PostgreSQL
7. (Optional) Email notification sent via SMTP
8. Success response returned
9. Frontend displays confirmation

## Security

### HTTPS/TLS
- All traffic encrypted via TLS 1.3
- Automatic certificate management (Vercel, Render)

### CORS
- Configured allowed origins
- Credentials support
- Preflight handling

### Rate Limiting
- Per-IP rate limits
- 5 requests/minute for contact endpoint
- Prevents abuse and DoS

### Database
- Connection string stored as environment variable
- No credentials in source code
- Connection pooling for efficiency

### Secrets Management
- GitHub Actions secrets for CI/CD
- Environment variables in Render
- `.env` files excluded from git

## Scalability

### Frontend
- Edge caching reduces origin load
- Static assets with long cache times
- Code splitting for optimal bundle size

### Backend
- Horizontal scaling on Render
- Async I/O for high concurrency
- Database connection pooling

### Database
- Neon auto-scales compute
- Read replicas for read-heavy workloads
- Connection pooling built-in

## Monitoring & Observability

### Frontend
- Vercel Analytics
- Web Vitals tracking
- Error boundaries

### Backend
- Health check endpoint
- Structured logging
- Request/response timing

### Database
- Neon metrics dashboard
- Query performance insights
- Connection pool monitoring

## Deployment Strategy

### Zero-Downtime Deployment

1. New Docker image built and pushed
2. Render pulls new image
3. New containers start alongside old
4. Health checks pass
5. Traffic gradually shifted to new containers
6. Old containers shut down

### Rollback

1. Redeploy previous Docker image tag
2. Render pulls specific SHA tag
3. Automatic rollback if health checks fail

## Cost Optimization

- **Vercel**: Free tier for hobby projects
- **Render**: Free tier with auto-sleep
- **Neon**: Free tier with 3 GB storage
- **Docker Hub**: Free tier with unlimited pulls

## Future Enhancements

- [ ] Redis caching layer
- [ ] Elasticsearch for full-text search
- [ ] GraphQL API alternative
- [ ] WebSocket support for real-time features
- [ ] Kubernetes deployment option
- [ ] Multi-region deployment
