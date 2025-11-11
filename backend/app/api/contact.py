"""
Contact form endpoint
Accepts contact submissions and optionally sends emails
"""

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.ext.asyncio import AsyncSession
from slowapi import Limiter
from slowapi.util import get_remote_address
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.db import get_db
from app.models import ContactEntry

router = APIRouter()
limiter = Limiter(key_func=get_remote_address)

class ContactRequest(BaseModel):
    """Contact form request schema"""
    name: str
    email: EmailStr
    message: str

@router.post("/contact")
@limiter.limit("5/minute")
async def submit_contact(
    request: ContactRequest,
    db: AsyncSession = Depends(get_db)
):
    """
    Submit contact form
    Stores in database and optionally sends email if SMTP configured
    """
    try:
        # Create database entry
        entry = ContactEntry(
            name=request.name,
            email=request.email,
            message=request.message,
        )
        db.add(entry)
        await db.commit()
        await db.refresh(entry)

        # Send email if SMTP configured
        smtp_host = os.getenv("SMTP_HOST")
        smtp_user = os.getenv("SMTP_USER")
        smtp_pass = os.getenv("SMTP_PASS")
        
        if smtp_host and smtp_user and smtp_pass:
            try:
                send_contact_email(request, smtp_host, smtp_user, smtp_pass)
            except Exception as e:
                print(f"Failed to send email: {e}")
                # Don't fail the request if email fails

        return {
            "success": True,
            "message": "Contact form submitted successfully",
            "id": entry.id,
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit contact: {str(e)}")

def send_contact_email(request: ContactRequest, smtp_host: str, smtp_user: str, smtp_pass: str):
    """Send contact form notification email"""
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    
    msg = MIMEMultipart()
    msg["From"] = smtp_user
    msg["To"] = smtp_user
    msg["Subject"] = f"OmniMindia Contact: {request.name}"
    
    body = f"""
    New contact form submission:
    
    Name: {request.name}
    Email: {request.email}
    
    Message:
    {request.message}
    """
    
    msg.attach(MIMEText(body, "plain"))
    
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(msg)
