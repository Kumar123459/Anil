@echo off
REM Category Dashboard Setup Script for Windows
REM This script installs all dependencies and prepares the project

echo.
echo 🚀 Category Dashboard Setup
echo ================================

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install it first.
    exit /b 1
)

echo ✅ Node.js version:
node -v

echo ✅ npm version:
npm -v

REM Backend setup
echo.
echo 📦 Setting up Backend...
cd backend

call npm install

if errorlevel 1 (
    echo ❌ Backend installation failed
    exit /b 1
)

echo ✅ Backend dependencies installed

REM Check if .env exists
if not exist .env (
    echo ⚠️  Creating .env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/category-dashboard
        echo JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
        echo NODE_ENV=development
    ) > .env
    echo ✅ .env file created
)

cd ..

REM Frontend setup
echo.
echo ⚛️  Setting up Frontend...
cd frontend

call npm install

if errorlevel 1 (
    echo ❌ Frontend installation failed
    exit /b 1
)

echo ✅ Frontend dependencies installed

cd ..

echo.
echo ================================
echo ✅ Setup Complete!
echo.
echo 📝 Next Steps:
echo 1. Ensure MongoDB is running
echo 2. Terminal 1: cd backend ^&^& npm run dev
echo 3. Terminal 2: cd frontend ^&^& npm start
echo 4. Open http://localhost:3000 in browser
echo.
echo 📚 Read README.md for more details
echo.
pause
