"""
Test stats endpoint
"""

import pytest
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_get_stats():
    """Test that stats endpoint returns market data"""
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/stats")
    
    assert response.status_code == 200
    data = response.json()
    assert "data" in data
    assert "timestamp" in data
    assert "count" in data
    
    # Check that we have expected market data
    market_data = data["data"]
    assert "cloudAI2024" in market_data
    assert "edgeAI2024" in market_data
    
    # Verify structure of a data point
    cloud_ai = market_data["cloudAI2024"]
    assert "value" in cloud_ai
    assert "unit" in cloud_ai
    assert "year" in cloud_ai
    assert cloud_ai["value"] == 77.0
