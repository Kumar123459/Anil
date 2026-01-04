# 🖥️ Terminal Commands Reference

Quick reference of all commands needed to run this project.

---

## 📍 Navigation Commands

### Windows (PowerShell/Command Prompt)
```powershell
# Navigate to project
cd C:\Users\212g1\Downloads\category-dashboard

# Go to backend
cd backend

# Go to frontend
cd frontend

# Go back one level
cd ..

# List files
dir

# Clear screen
cls
```

### Mac/Linux (Terminal/Bash)
```bash
# Navigate to project
cd ~/Downloads/category-dashboard

# Go to backend
cd backend

# Go to frontend
cd frontend

# Go back one level
cd ..

# List files
ls -la

# Clear screen
clear
```

---

## 🏃 Initial Setup Commands

### Automatic Setup (Recommended)

**Windows:**
```powershell
cd C:\Users\212g1\Downloads\category-dashboard
.\setup.bat
```

**Mac/Linux:**
```bash
cd ~/Downloads/category-dashboard
chmod +x setup.sh
./setup.sh
```

### Manual Setup

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

---

## 🚀 Running the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

**Expected output:**
```
MongoDB connected
Server running on port 5000
```

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```

**Expected output:**
```
Compiled successfully!
You can now view category-dashboard-frontend in the browser.
Local: http://localhost:3000
```

---

## 🐢 MongoDB Commands

### Start MongoDB (Local)

**Windows:**
```powershell
net start MongoDB
# or
mongod
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongodb
```

### Connect to MongoDB Shell
```bash
mongosh
# Show databases
show databases

# Use category-dashboard
use category-dashboard

# Show collections
show collections

# View users
db.users.find()

# View categories
db.categories.find()

# Exit
exit
```

### Stop MongoDB

**Windows:**
```powershell
net stop MongoDB
```

**Mac:**
```bash
brew services stop mongodb-community
```

**Linux:**
```bash
sudo systemctl stop mongodb
```

---

## 📦 npm Commands

### Install Packages
```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install as dev dependency
npm install --save-dev package-name

# Update packages
npm update
```

### Run Scripts

**Backend:**
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

**Frontend:**
```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Clean Install
```bash
# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## 🔌 Port Management

### Check if Port is in Use

**Windows:**
```powershell
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process by PID
taskkill /PID <PID> /F

# Or kill by port (newer Windows)
netsh int ipv4 show tcpconnections
```

**Mac/Linux:**
```bash
# Find process on port 5000
lsof -i :5000

# Kill process by PID
kill -9 <PID>

# Quick kill
pkill -f "node server.js"
```

### Change Port
Edit `backend/.env`:
```env
PORT=5001
```

---

## 🧪 Testing Commands

### Test Backend Endpoints (cURL)

**Sign Up:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test\",\"email\":\"test@test.com\",\"password\":\"Test123\"}"
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@test.com\",\"password\":\"Test123\"}"
```

**Get Categories (replace TOKEN):**
```bash
curl -X GET http://localhost:5000/api/categories \
  -H "Authorization: Bearer TOKEN"
```

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

---

## 🔧 Environment Setup

### Check Node.js Version
```bash
node --version
npm --version
```

### View Environment Variables

**Windows PowerShell:**
```powershell
$env:NODE_ENV
Get-Content backend\.env
```

**Mac/Linux:**
```bash
echo $NODE_ENV
cat backend/.env
```

### Set Environment Variable (Temporary)

**Windows:**
```powershell
$env:NODE_ENV = "development"
```

**Mac/Linux:**
```bash
export NODE_ENV=development
```

---

## 🌐 Git Commands (Optional)

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Add Remote
```bash
git remote add origin https://github.com/username/category-dashboard.git
```

### Push Code
```bash
git push -u origin main
```

### Clone Repository
```bash
git clone https://github.com/username/category-dashboard.git
cd category-dashboard
```

---

## 🐛 Debugging Commands

### View Backend Logs
```bash
# Tail logs (follow new lines)
tail -f backend/server.log

# View last 50 lines
tail -n 50 backend/server.log
```

### Browser DevTools
```
F12              - Open DevTools
Ctrl + Shift + C - Inspect element
Ctrl + Shift + K - Console
Ctrl + Shift + E - Network tab
```

### Check if Service is Running

**Backend:**
```bash
curl http://localhost:5000/api/health
```

**Frontend:**
```bash
curl http://localhost:3000
```

---

## 📤 Deployment Commands

### Build Frontend
```bash
cd frontend
npm run build
```

**Creates:** `frontend/build/` folder with production files

### Deploy to Git

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

---

## 🔒 Security Commands

### Generate JWT Secret
```bash
# Windows PowerShell
$([System.BitConverter]::ToString([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))).Replace('-','').ToLower()

# Mac/Linux
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📋 Useful npm Scripts (Already Configured)

### Root Commands
```bash
# Install all dependencies
npm run install:all

# Install root dependencies
npm install

# Start dev servers
npm run dev

# Backend only
npm run backend

# Frontend only
npm run frontend
```

---

## 🆘 Emergency Commands

### Clear npm Cache
```bash
npm cache clean --force
```

### Reset Everything
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Kill All Node Processes

**Windows:**
```powershell
taskkill /F /IM node.exe
```

**Mac/Linux:**
```bash
pkill -f node
```

---

## 📚 View Logs

### Backend Logs
```bash
cd backend
npm run dev 2>&1 | tee server.log
```

### MongoDB Logs

**Windows:**
```powershell
Get-EventLog -LogName Application -Source MongoDB
```

**Mac/Linux:**
```bash
tail -f /var/log/mongodb/mongod.log
```

---

## ✅ Checklist

Before starting, verify:
```bash
# Check Node
node --version          # Should be v16+
npm --version          # Should be v8+

# Check MongoDB
mongosh                # Should connect successfully

# Check files exist
ls -la backend/        # Should have: server.js, models/, routes/
ls -la frontend/src/   # Should have: App.js, pages/, components/
```

---

## 💡 Tips & Tricks

### Run Multiple Commands
```bash
# Mac/Linux
npm run backend & npm run frontend

# Windows - Use 2 terminals (recommended)
```

### Auto-reload on File Changes
Backend already uses nodemon for auto-reload.

### Debug with Console
```javascript
console.log('Debug:', value);
console.error('Error:', error);
console.table(data);
```

### Monitor Port
```bash
# Check all connections on port 5000
netstat -an | grep 5000    # Mac/Linux
netstat -ano | find "5000" # Windows
```

---

## 🎯 Common Workflows

### Complete Fresh Start
```bash
# 1. Clear everything
rm -rf backend/node_modules frontend/node_modules

# 2. Reinstall
npm run install:all

# 3. Start MongoDB
mongod

# 4. Terminal 1: Backend
cd backend && npm run dev

# 5. Terminal 2: Frontend
cd frontend && npm start
```

### Quick Restart
```bash
# Kill all processes
pkill -f node

# Restart
cd backend && npm run dev      # Terminal 1
cd frontend && npm start       # Terminal 2
```

### Deploy
```bash
# 1. Commit changes
git add .
git commit -m "Update features"

# 2. Push to GitHub
git push origin main

# 3. Vercel & Render auto-deploy
```

---

## 📞 Help Commands

```bash
# NPM help
npm help

# Specific command help
npm help install
npm help start

# Node help
node --help

# MongoDB help
mongosh --help
```

---

**Bookmark this page for quick reference! 🔖**

Most used commands:
- `npm run dev` (backend)
- `npm start` (frontend)
- `npm install` (dependencies)
- `mongod` (database)
