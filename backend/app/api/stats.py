"""
Market statistics endpoint
Returns real-time market data for AI infrastructure
"""

from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

# Market data with sources
MARKET_DATA = {
    "cloudAI2024": {
        "value": 77.0,
        "unit": "billion USD",
        "year": 2024,
        "label": "Cloud AI Market",
        "source": "Market Research Reports",
        "url": "https://www.marketresearchfuture.com/reports/cloud-ai-market",
        "citation": "Cloud AI market valued at $77.0B in 2024",
    },
    "edgeAI2024": {
        "value": 18.3,
        "unit": "billion USD",
        "year": 2024,
        "label": "Edge AI Market",
        "source": "Allied Market Research",
        "url": "https://www.alliedmarketresearch.com/edge-ai-market",
        "citation": "Edge AI market size $18.3B in 2024",
    },
    "edgeForecast2033": {
        "value": 163.0,
        "unit": "billion USD",
        "year": 2033,
        "label": "Edge AI Forecast",
        "source": "Allied Market Research",
        "url": "https://www.alliedmarketresearch.com/edge-ai-market",
        "citation": "Edge AI projected to reach $163B by 2033",
    },
    "edgeSoftware2024": {
        "value": 1.92,
        "unit": "billion USD",
        "year": 2024,
        "label": "Edge AI Software",
        "source": "Market.us",
        "url": "https://market.us/report/edge-ai-software-market/",
        "citation": "Edge AI Software market $1.92B in 2024",
    },
    "edgeSoftware2030": {
        "value": 7.19,
        "unit": "billion USD",
        "year": 2030,
        "label": "Edge AI Software Forecast",
        "source": "Market.us",
        "url": "https://market.us/report/edge-ai-software-market/",
        "citation": "Edge AI Software forecast $7.19B by 2030",
    },
    "aiRobotics2032": {
        "value": 89.6,
        "unit": "billion USD",
        "year": 2032,
        "label": "AI Robotics Market",
        "source": "Precedence Research",
        "url": "https://www.precedenceresearch.com/ai-in-robotics-market",
        "citation": "AI Robotics market projected ~$89.6B by 2032",
    },
}

@router.get("/stats")
async def get_stats():
    """
    Get market statistics with sources
    Returns all market data points with citations
    """
    return {
        "data": MARKET_DATA,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "count": len(MARKET_DATA),
    }
