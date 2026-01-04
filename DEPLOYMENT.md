# Deployment Guide 🚀

This guide covers deploying the Category Dashboard to production using Vercel (frontend) and Render (backend).

---

## Table of Contents
1. [Prepare for Deployment](#prepare-for-deployment)
2. [Deploy Backend to Render](#deploy-backend-to-render)
3. [Deploy Frontend to Vercel](#deploy-frontend-to-vercel)
4. [Configure Environment Variables](#configure-environment-variables)
5. [Testing Production](#testing-production)
6. [Troubleshooting](#troubleshooting)

---

## Prepare for Deployment

### 1. Create GitHub Repository
```bash
cd category-dashboard
git init
git add .
git commit -m "Initial commit: Category Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/category-dashboard.git
git push -u origin main
```

### 2. Create .gitignore (if not present)
Already included - both backend and frontend have .gitignore files

### 3. Prepare MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/Login
3. Create a cluster
4. Get connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Should look like: `mongodb+srv://user:pass@cluster.mongodb.net/category-dashboard`

---

## Deploy Backend to Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up (recommend GitHub login)
3. Verify email

### Step 2: Create Web Service
1. Dashboard → New → Web Service
2. Connect GitHub account (authorize Render)
3. Select your `category-dashboard` repository
4. Configure:
   - **Name:** category-dashboard-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (or paid for production)

### Step 3: Set Environment Variables
Before deploying, click "Environment" and add:
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/category-dashboard
JWT_SECRET=your_secure_random_key_min_32_chars_long
NODE_ENV=production
```

To generate JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 4: Deploy
1. Click "Deploy"
2. Wait 3-5 minutes
3. Copy the deployed URL (e.g., `https://category-dashboard-backend.onrender.com`)

### Verify Backend
```bash
curl https://category-dashboard-backend.onrender.com/api/health
# Should respond: {"status":"Server is running"}
```

---

## Deploy Frontend to Vercel

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up (recommend GitHub login)
3. Authorize Vercel to access GitHub

### Step 2: Deploy Project
1. Go to Vercel Dashboard
2. Click "Add New..." → "Project"
3. Select your `category-dashboard` repository
4. Configure:
   - **Framework:** Create React App
   - **Root Directory:** `./frontend`
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`

### Step 3: Set Environment Variables
Add environment variable:
```
REACT_APP_API_URL=https://category-dashboard-backend.onrender.com/api
```

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. Copy your Vercel URL (e.g., `https://category-dashboard.vercel.app`)

### Step 5: Update Frontend Code
Update `frontend/src/api.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

---

## Configure Environment Variables

### Backend (Render)
- Go to Service Settings → Environment
- Add all variables from backend `.env`

### Frontend (Vercel)
- Go to Settings → Environment Variables
- Add `REACT_APP_API_URL`

### Backend CORS Update
Update `backend/server.js` to allow your Vercel URL:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://category-dashboard.vercel.app'],
  credentials: true
}));
```

---

## Testing Production

### Test Backend
```bash
# Replace with your Render URL
curl https://your-backend.onrender.com/api/health

# Test sign up
curl -X POST https://your-backend.onrender.com/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "testpass123"
  }'
```

### Test Frontend
1. Open https://your-frontend.vercel.app
2. Create account
3. Add category
4. Check dashboard

---

## Production Checklist

- [ ] JWT_SECRET changed in production
- [ ] MongoDB Atlas connection working
- [ ] CORS configured for Vercel URL
- [ ] Backend environment variables set
- [ ] Frontend environment variables set
- [ ] Images uploading to backend
- [ ] Login/Logout working
- [ ] Category CRUD working
- [ ] Mobile responsive tested
- [ ] No console errors

---

## Monitoring & Maintenance

### Backend Logs (Render)
- Dashboard → Service → Logs
- Shows real-time errors and requests

### Frontend Errors (Vercel)
- Dashboard → Analytics
- Shows deployment history and errors

### Performance
- Render: Monitor CPU and Memory usage
- Vercel: Check build and request metrics

---

## Custom Domain (Optional)

### Render Backend
1. Settings → Custom Domain
2. Add your domain
3. Add CNAME record to DNS

### Vercel Frontend
1. Settings → Domains
2. Add your domain
3. Follow DNS instructions

Example:
- Frontend: `app.example.com`
- Backend: `api.example.com`

---

## Cost Estimate

| Service | Free Tier | Paid |
|---------|-----------|------|
| Vercel | $0/month | $20+/month |
| Render | $0/month* | $7+/month |
| MongoDB Atlas | $0/month | $57+/month |

*Render free tier: limited uptime & resources

---

## Troubleshooting Deployment

### Backend won't start
1. Check environment variables
2. Check MongoDB URI
3. View logs in Render dashboard
4. Test locally: `npm start`

### Frontend shows blank page
1. Check API URL in .env
2. Check browser console for errors
3. Check if backend is accessible
4. Check CORS settings

### Images not loading
1. Check uploads folder exists
2. Check file permissions
3. Check backend logs
4. Test image upload locally

### Database connection fails
1. Add IP to MongoDB Atlas whitelist (0.0.0.0/0 for development)
2. Check connection string
3. Check username/password
4. Test connection locally

---

## Security in Production

✅ Use environment variables for secrets
✅ Enable HTTPS (auto on Vercel & Render)
✅ Set MongoDB to production cluster
✅ Use strong JWT_SECRET
✅ Enable rate limiting
✅ Add input validation
✅ Log errors securely
✅ Monitor for suspicious activity

---

## Rollback

If something goes wrong:

### Vercel
1. Dashboard → Deployments
2. Find last good deployment
3. Click "Redeploy"

### Render
1. Dashboard → Events
2. Find previous deployment
3. Click "Deploy Commit"

---

## Next Steps

1. ✅ Deploy both services
2. ✅ Test all features
3. ✅ Share URL with team
4. ✅ Monitor logs
5. ✅ Plan scaling if needed

---

**Your app is now live! 🎉**

Frontend: https://your-app.vercel.app
Backend: https://your-backend.onrender.com

For support, check logs and error messages!
