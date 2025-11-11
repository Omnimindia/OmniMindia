"""
Health check endpoint
"""

from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/health")
async def health_check():
    """
    Health check endpoint
    Returns status and current timestamp
    """
    return {
        "status": "ok",
        "time": datetime.utcnow().isoformat() + "Z",
    }
