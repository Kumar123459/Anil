# Quick Start Guide ⚡

## 🎯 Get Running in 5 Minutes

### Step 1: Prerequisites
✅ Node.js installed? → https://nodejs.org/
✅ MongoDB running locally or Atlas account? → https://www.mongodb.com/

### Step 2: Run Setup Script

**For Windows:**
```bash
cd c:\Users\212g1\Downloads\category-dashboard
setup.bat
```

**For Mac/Linux:**
```bash
cd ~/Downloads/category-dashboard
chmod +x setup.sh
./setup.sh
```

Or **Manual Setup:**
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### Step 3: Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
✅ You should see: `Server running on port 5000`

### Step 4: Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```
✅ Browser opens at `http://localhost:3000`

### Step 5: Create Account & Test
1. Click "Sign Up"
2. Enter: Name, Email, Password
3. Click "Sign Up"
4. Click "+ Add Category"
5. Enter: Name, Item Count, Upload Image
6. Click "Save Category"

---

## 🧪 Test Credentials (After First Signup)
```
Email: user@example.com
Password: Password123!
```

---

## 📂 Project Files Overview

### Backend Important Files
- `server.js` - Main server entry point
- `models/User.js` - User database schema
- `models/Category.js` - Category database schema
- `routes/auth.js` - Login/Signup endpoints
- `routes/categories.js` - Category CRUD endpoints
- `middleware/auth.js` - JWT verification
- `.env` - Environment variables

### Frontend Important Files
- `src/App.js` - Main app component
- `src/pages/Login.js` - Login page
- `src/pages/Signup.js` - Signup page
- `src/pages/Dashboard.js` - Main dashboard
- `src/components/CategoryForm.js` - Category form modal
- `src/api.js` - API client configuration

---

## 🚨 Troubleshooting

### Error: "Cannot connect to MongoDB"
```bash
# Make sure MongoDB is running
mongod

# Or update .env with MongoDB Atlas URL
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/category-dashboard
```

### Error: "Port 5000 already in use"
```bash
# Change PORT in backend/.env
PORT=5001

# Or kill the process
lsof -i :5000
kill -9 <PID>
```

### Error: "CORS error" or "API not responding"
```
Check if backend is running on http://localhost:5000
Check frontend api.js has correct API_URL
```

### Error: "Image upload failed"
```
- Check file size (max 5MB)
- Check file format (JPG, PNG, GIF only)
- Check /backend/uploads folder exists
```

---

## 📱 Features You Can Test

✅ Sign Up with email
✅ Login with credentials
✅ View categories in grid
✅ Add new category with image
✅ Edit category name/count/image
✅ Delete category
✅ Logout
✅ Session persistence (reload page, you stay logged in)

---

## 🌐 Deployment Ready?

### Deploy Frontend (Vercel)
1. Push to GitHub
2. Connect repo to Vercel.com
3. Deploy (takes 1 min)

### Deploy Backend (Render)
1. Push to GitHub
2. Create service on Render.com
3. Set ENV vars
4. Deploy (takes 3-5 min)

---

## 📚 Read More
- Full README.md for detailed info
- API_DOCUMENTATION.md for API details
- Check GitHub for latest updates

---

**Happy Coding! 🚀**
