#!/bin/bash

# Category Dashboard Setup Script
# This script installs all dependencies and prepares the project

echo "🚀 Category Dashboard Setup"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Backend setup
echo ""
echo "📦 Setting up Backend..."
cd backend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed"
else
    echo "❌ Backend installation failed"
    exit 1
fi

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file..."
    cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/category-dashboard
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
EOF
    echo "✅ .env file created"
fi

cd ..

# Frontend setup
echo ""
echo "⚛️  Setting up Frontend..."
cd frontend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "❌ Frontend installation failed"
    exit 1
fi

cd ..

echo ""
echo "================================"
echo "✅ Setup Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Ensure MongoDB is running"
echo "2. Terminal 1: cd backend && npm run dev"
echo "3. Terminal 2: cd frontend && npm start"
echo "4. Open http://localhost:3000 in browser"
echo ""
echo "📚 Read README.md for more details"
