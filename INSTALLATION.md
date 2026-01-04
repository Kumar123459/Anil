# Installation & Running Instructions 📝

## Complete Step-by-Step Guide

---

## Prerequisites ✅

Before you start, ensure you have:

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **MongoDB** (choose one):
   - **Local:** https://docs.mongodb.com/manual/installation/
   - **Atlas (Cloud):** https://www.mongodb.com/cloud/atlas (free account)

3. **Git** (optional, for version control)
   - Download: https://git-scm.com/

4. **Code Editor** (VS Code recommended)
   - Download: https://code.visualstudio.com/

---

## Installation on Windows 🪟

### 1. Open PowerShell or Command Prompt

Press `Win + R`, type `powershell` or `cmd`

### 2. Navigate to Project
```powershell
cd C:\Users\212g1\Downloads\category-dashboard
```

### 3. Run Setup Script
```powershell
.\setup.bat
```

This will:
- Install backend dependencies
- Install frontend dependencies
- Create `.env` file

**Or install manually:**

#### Backend Setup
```powershell
cd backend
npm install
```

#### Frontend Setup
```powershell
cd frontend
npm install
```

---

## Installation on Mac/Linux 🍎🐧

### 1. Open Terminal

Press `Cmd + Space`, type `terminal` (Mac) or `Ctrl + Alt + T` (Linux)

### 2. Navigate to Project
```bash
cd ~/Downloads/category-dashboard
```

### 3. Run Setup Script
```bash
chmod +x setup.sh
./setup.sh
```

**Or install manually:**

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

---

## MongoDB Setup 🍃

### Option A: Local MongoDB

#### Windows
1. Download: https://www.mongodb.com/try/download/community
2. Run installer
3. Choose "Install MongoDB Community Server"
4. Installation path: `C:\Program Files\MongoDB\Server\7.0`
5. Run services:
   ```powershell
   net start MongoDB
   ```

#### Mac
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

**Verify MongoDB is running:**
```bash
mongosh
# Should open MongoDB shell
```

### Option B: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create account
3. Create free cluster
4. Create database user
5. Get connection string
6. Update `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/category-dashboard
```

---

## Configure Environment Variables 🔐

### Backend Configuration

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/category-dashboard
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
```

**If using MongoDB Atlas:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/category-dashboard
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
```

### Frontend Configuration

The frontend is already configured to connect to localhost:5000. For production, you would update `frontend/src/api.js`.

---

## Running the Application 🚀

### Terminal 1: Start Backend

#### Windows
```powershell
cd C:\Users\212g1\Downloads\category-dashboard\backend
npm run dev
```

#### Mac/Linux
```bash
cd ~/Downloads/category-dashboard/backend
npm run dev
```

**Expected Output:**
```
MongoDB connected
Server running on port 5000
```

### Terminal 2: Start Frontend

#### Windows
```powershell
cd C:\Users\212g1\Downloads\category-dashboard\frontend
npm start
```

#### Mac/Linux
```bash
cd ~/Downloads/category-dashboard/frontend
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view category-dashboard-frontend in the browser.
Local: http://localhost:3000
```

A browser tab will automatically open at `http://localhost:3000`

---

## Using the Application 📱

### First Time Setup

1. **Create Account**
   - Click "Sign Up"
   - Enter your name, email, password
   - Click "Sign Up"

2. **Login**
   - Use your credentials
   - You're redirected to dashboard

3. **Add Category**
   - Click "+ Add Category" button
   - Fill in category name (e.g., "Summer Clothes")
   - Enter item count (e.g., 26)
   - Upload image (optional)
   - Click "Save Category"

4. **View Categories**
   - Categories appear in grid layout
   - Each shows image, name, and item count

5. **Edit Category**
   - Click "Edit" on any category card
   - Update information
   - Click "Save Category"

6. **Delete Category**
   - Click "Delete" on any category
   - Confirm deletion

7. **Logout**
   - Click "Logout" button in top-right

---

## Available Scripts 🔧

### Backend
```bash
cd backend

# Development (with auto-reload)
npm run dev

# Production
npm start
```

### Frontend
```bash
cd frontend

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## Testing with Sample Data 🧪

### Create Test Account
```
Name: John Doe
Email: john@example.com
Password: Test123!
```

### Add Test Category
```
Name: Summer Clothes
Item Count: 26
Image: (any JPG/PNG/GIF)
```

### API Testing (cURL)

**Sign Up:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"Test User\",
    \"email\": \"test@test.com\",
    \"password\": \"TestPass123\"
  }"
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"test@test.com\",
    \"password\": \"TestPass123\"
  }"
```

---

## Common Issues & Solutions 🔧

### Issue: "MongoDB connection failed"

**Solution:**
1. Check if MongoDB is running:
   ```bash
   mongosh
   ```
2. If not running:
   - Windows: `net start MongoDB`
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongodb`
3. Check MONGODB_URI in `.env`

### Issue: "Port 5000 already in use"

**Solution:**
1. Change PORT in `backend/.env`:
   ```
   PORT=5001
   ```
2. Or kill the process:
   - Windows:
     ```powershell
     netstat -ano | findstr :5000
     taskkill /PID <PID> /F
     ```
   - Mac/Linux:
     ```bash
     lsof -i :5000
     kill -9 <PID>
     ```

### Issue: "Port 3000 already in use"

**Solution:**
```bash
cd frontend
npm start -- --port 3001
```

### Issue: "npm: command not found"

**Solution:**
- Reinstall Node.js
- Verify: `node --version` and `npm --version`
- Add Node to PATH if needed

### Issue: "Cannot find module"

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "CORS error in console"

**Solution:**
1. Check backend is running
2. Check API URL in frontend/src/api.js
3. Restart both servers

### Issue: "Image upload fails"

**Solution:**
1. Check file size (max 5MB)
2. Check file type (JPG, PNG, GIF)
3. Ensure `/backend/uploads` folder exists
4. Check backend logs

---

## Directory Structure 📁

After setup, you should have:

```
category-dashboard/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── node_modules/       (created by npm install)
│   ├── uploads/            (created when uploading)
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── node_modules/       (created by npm install)
│   ├── package.json
│   ├── .gitignore
│   └── .env.local          (if needed)
│
├── README.md
├── QUICK_START.md
├── API_DOCUMENTATION.md
├── DEPLOYMENT.md
├── setup.bat
├── setup.sh
└── INSTALLATION.md         (this file)
```

---

## Next Steps 🚀

1. ✅ Complete setup following this guide
2. ✅ Run backend and frontend
3. ✅ Create account and test features
4. ✅ Read API_DOCUMENTATION.md for API details
5. ✅ Check DEPLOYMENT.md to deploy to production
6. ✅ Share with team or deploy live

---

## Support & Resources 💬

- **Backend Issues:** Check backend console logs
- **Frontend Issues:** Open browser DevTools (F12)
- **Database Issues:** Check MongoDB connection
- **API Testing:** Use cURL or Postman
- **Documentation:** Read README.md and API_DOCUMENTATION.md

---

## Keyboard Shortcuts 🎮

**VS Code:**
- `Ctrl + Shift + ~` - Open terminal
- `Ctrl + /` - Comment code
- `Shift + Alt + F` - Format code
- `Ctrl + S` - Save file

**Browser DevTools:**
- `F12` - Open DevTools
- `Ctrl + Shift + I` - Inspect element
- `Ctrl + Shift + J` - Console

---

**You're all set! Happy coding! 🎉**
