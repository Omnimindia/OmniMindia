"""
OmniMindia Backend API
FastAPI application with health checks, stats endpoints, and contact forms
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import os
from dotenv import load_dotenv

from app.api import health, stats, contact
from app.db import engine, Base

# Load environment variables
load_dotenv()

# Rate limiter
limiter = Limiter(key_func=get_remote_address)

# Initialize FastAPI app
app = FastAPI(
    title="OmniMindia API",
    description="Unified Intelligence for Edge & Cloud Infrastructure",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# CORS configuration
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate limiting
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Include routers
app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(stats.router, prefix="/api", tags=["Stats"])
app.include_router(contact.router, prefix="/api", tags=["Contact"])

# Create database tables
@app.on_event("startup")
async def startup():
    """Initialize database tables on startup"""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "OmniMindia API",
        "version": "1.0.0",
        "docs": "/api/docs",
    }
