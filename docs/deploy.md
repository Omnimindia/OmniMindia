# Deployment Guide

Complete step-by-step guide for deploying OmniMindia to production.

## Prerequisites

- GitHub account
- Vercel account (free tier)
- Render account (free tier)
- Neon account (free tier) or any PostgreSQL provider
- Docker Hub account
- GoDaddy account with domain registered

## Step 1: Database Setup (Neon)

### 1.1 Create Neon Project

1. Go to [neon.tech](https://neon.tech) and sign up
2. Click "Create a project"
3. Choose:
   - **Name**: omnimindia
   - **Region**: Choose closest to your users
   - **PostgreSQL version**: 15 (latest)
4. Click "Create project"

### 1.2 Get Connection String

1. In your Neon dashboard, go to "Connection Details"
2. Copy the connection string (it looks like):
   ```
   postgresql://user:password@ep-xxxxx.region.aws.neon.tech/neondb?sslmode=require
   ```
3. **Save this** - you'll need it for Render

### Alternative: Supabase

If you prefer Supabase:
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database → Connection string

## Step 2: Backend Deployment (Render)

### 2.1 Prepare Docker Hub

1. Go to [hub.docker.com](https://hub.docker.com)
2. Sign in with username: `darkratio`
3. Create access token:
   - Account Settings → Security → New Access Token
   - Name: "GitHub Actions"
   - Save token securely

### 2.2 Create Render Web Service

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Choose "Deploy an existing image from a registry"
4. Configure:
   - **Image URL**: `darkratio/omnimindia-backend:latest`
   - **Name**: `omnimindia-backend`
   - **Region**: Choose closest to your database
   - **Instance Type**: Free
   - **Environment Variables** (Add these):
     ```
     DATABASE_URL=<your-neon-connection-string>
     ALLOWED_ORIGINS=https://www.omnimindia.com,https://omnimindia.vercel.app
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=<your-email>
     SMTP_PASS=<your-app-password>
     ```
5. Click "Create Web Service"
6. Wait for deployment (5-10 minutes)
7. Note your backend URL: `https://omnimindia-backend.onrender.com`

### 2.3 Test Backend

```bash
curl https://omnimindia-backend.onrender.com/api/health
# Should return: {"status":"ok","time":"..."}
```

## Step 3: Frontend Deployment (Vercel)

### 3.1 Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New" → "Project"
3. Import your GitHub repository: `omnimindia`
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**:
     ```
     VITE_API_URL=https://omnimindia-backend.onrender.com
     ```
5. Click "Deploy"
6. Wait for deployment (2-3 minutes)
7. Your site will be live at: `https://omnimindia.vercel.app`

### 3.2 Add Custom Domain

1. In Vercel project settings, go to "Domains"
2. Click "Add"
3. Enter: `www.omnimindia.com`
4. Vercel will provide DNS records to add

## Step 4: DNS Configuration (GoDaddy)

### 4.1 Update DNS Records

1. Log in to [GoDaddy](https://godaddy.com)
2. Go to "My Products" → "Domains" → Manage your domain
3. Click "DNS" or "Manage DNS"
4. Add/update these records:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

5. Save changes (propagation takes 5-60 minutes)

### 4.2 Verify Domain

1. Back in Vercel, click "Verify" on your domain
2. Wait for DNS propagation
3. Vercel will automatically provision SSL certificate

## Step 5: CI/CD Setup (GitHub Actions)

### 5.1 Add GitHub Secrets

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret" for each:

**Required Secrets:**
```
DOCKERHUB_USERNAME=darkratio
DOCKERHUB_TOKEN=<your-docker-hub-token>
VERCEL_TOKEN=<your-vercel-token>
```

**Optional Secrets (for auto-deploy):**
```
RENDER_API_KEY=<your-render-api-key>
RENDER_SERVICE_ID=<your-render-service-id>
VERCEL_ORG_ID=<your-vercel-org-id>
VERCEL_PROJECT_ID=<your-vercel-project-id>
```

### 5.2 Get Vercel Token

```bash
# Install Vercel CLI
npm i -g vercel

# Login and get token
vercel login
vercel --token

# In Vercel dashboard:
# Settings → Tokens → Create Token
```

### 5.3 Get Render API Key

1. Render Dashboard → Account Settings
2. API Keys → Create API Key
3. Copy and save

### 5.4 Enable Workflows

1. Uncomment deployment steps in:
   - `.github/workflows/frontend-deploy.yml`
   - `.github/workflows/backend-deploy.yml`
2. Commit and push to `main`
3. Watch Actions tab for deployments

## Step 6: Verification

### 6.1 Test Frontend

```bash
curl -I https://www.omnimindia.com
# Should return 200 OK with SSL

# Test in browser
open https://www.omnimindia.com
```

### 6.2 Test API

```bash
# Health check
curl https://www.omnimindia.com/api/health

# Stats endpoint
curl https://www.omnimindia.com/api/stats

# Contact form (with rate limiting)
curl -X POST https://www.omnimindia.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### 6.3 Check OMNI Widget

1. Visit homepage
2. Click OMNI assistant button (bottom right)
3. Click "Analyze my stack"
4. Should fetch and display stats

## Step 7: Monitoring

### 7.1 Vercel Analytics

1. Vercel Dashboard → Your Project → Analytics
2. View Web Vitals, page views, etc.

### 7.2 Render Metrics

1. Render Dashboard → Your Service
2. View CPU, memory, request metrics

### 7.3 Neon Metrics

1. Neon Dashboard → Your Project
2. View query performance, connections

## Troubleshooting

### Frontend not loading

- Check Vercel deployment logs
- Verify environment variables
- Check browser console for errors
- Ensure API URL is correct

### Backend 502/503 errors

- Render free tier has cold starts (can take 30s)
- Check Render logs for errors
- Verify DATABASE_URL is correct
- Test database connection

### Database connection failed

- Check connection string format
- Ensure IP allowlist includes Render IPs (Neon auto-allows)
- Test connection from Render shell

### CORS errors

- Add frontend URL to ALLOWED_ORIGINS
- Redeploy backend
- Check browser network tab

### CI/CD not deploying

- Check GitHub Actions logs
- Verify all secrets are added
- Ensure branch name is `main`
- Check workflow file syntax

## Cost Breakdown (Free Tier)

- **Vercel**: Free (100 GB bandwidth/month)
- **Render**: Free (750 hours/month, sleeps after 15min)
- **Neon**: Free (3 GB storage, 100 hours compute/month)
- **Docker Hub**: Free (unlimited public pulls)
- **GitHub Actions**: Free (2000 minutes/month)

**Total: $0/month**

## Upgrade Paths

### When to upgrade:

1. **Vercel Pro** ($20/mo) - More bandwidth, analytics
2. **Render Starter** ($7/mo) - No sleep, faster cold starts
3. **Neon Scale** ($19/mo) - More storage, compute
4. **Docker Hub Pro** ($5/mo) - Private repos

## Security Checklist

- [ ] All secrets stored in environment variables
- [ ] No hardcoded credentials in code
- [ ] HTTPS enabled on all endpoints
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Database connection uses SSL
- [ ] Regular security updates
- [ ] GitHub branch protection rules

## Maintenance

### Regular tasks:

- **Weekly**: Check logs for errors
- **Monthly**: Update dependencies
- **Quarterly**: Review and rotate secrets
- **Annually**: Renew domain, review costs

### Updating the application:

1. Make changes locally
2. Test thoroughly
3. Commit and push to `main`
4. GitHub Actions automatically deploys
5. Verify deployment successful
6. Monitor for errors

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **Neon Docs**: https://neon.tech/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **React Docs**: https://react.dev/
