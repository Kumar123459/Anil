# 🏪 Category Management Dashboard - Complete Project

> A professional, full-stack e-commerce category management system built with **React**, **Express**, and **MongoDB**.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node-v16+-success)

---

## ✨ Features

### 🔐 Authentication
- ✅ User signup with email validation
- ✅ Secure login with JWT tokens
- ✅ 7-day token expiration
- ✅ Session persistence (localStorage)
- ✅ Password hashing with bcryptjs

### 📦 Category Management
- ✅ Create categories with images
- ✅ View all categories in grid layout
- ✅ Edit category details
- ✅ Delete categories
- ✅ Track item count per category
- ✅ Image upload (JPG, PNG, GIF)

### 🎨 UI/UX
- ✅ Professional gradient design
- ✅ Smooth animations & transitions
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode ready
- ✅ Loading states & error messages
- ✅ Empty state screens

### 🔒 Security
- ✅ JWT authentication
- ✅ Protected API routes
- ✅ CORS enabled
- ✅ Input validation
- ✅ Password hashing
- ✅ User-specific data access

---

## 🛠️ Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Frontend** | React.js | 18.2 |
| **Backend** | Express.js | 4.18 |
| **Database** | MongoDB | 8.0 |
| **Routing** | React Router | 6.20 |
| **API Client** | Axios | 1.6 |
| **Authentication** | JWT | 9.1 |
| **File Upload** | Multer | 1.4 |

---

## 📁 Project Structure

```
category-dashboard/
├── backend/                    # Node.js + Express Server
│   ├── models/                # Database schemas
│   │   ├── User.js           # User model
│   │   └── Category.js       # Category model
│   ├── routes/                # API endpoints
│   │   ├── auth.js           # Authentication routes
│   │   └── categories.js     # Category CRUD routes
│   ├── middleware/
│   │   └── auth.js           # JWT verification
│   ├── server.js             # Main server file
│   ├── package.json
│   ├── .env                  # Environment variables
│   └── .gitignore
│
├── frontend/                   # React.js Application
│   ├── public/
│   │   └── index.html        # HTML entry point
│   ├── src/
│   │   ├── pages/            # Page components
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── Dashboard.js
│   │   ├── components/        # Reusable components
│   │   │   ├── ProtectedRoute.js
│   │   │   └── CategoryForm.js
│   │   ├── api.js            # API client
│   │   ├── App.js            # Main component
│   │   ├── App.css           # Global styles
│   │   └── index.js          # React entry point
│   ├── package.json
│   └── .gitignore
│
├── docs/                       # Documentation
│   ├── README.md             # 📖 This file
│   ├── GETTING_STARTED.md    # 🎯 Quick overview
│   ├── QUICK_START.md        # ⚡ 5-minute setup
│   ├── INSTALLATION.md       # 📝 Detailed setup
│   ├── API_DOCUMENTATION.md  # 📡 API reference
│   ├── DEPLOYMENT.md         # 🚀 Production deployment
│   └── COMMANDS_REFERENCE.md # 🖥️ Terminal commands
│
├── scripts/
│   └── start-dev.js         # Development helper
│
├── setup.bat                # Windows setup script
├── setup.sh                 # Mac/Linux setup script
├── package.json             # Root package.json
├── .gitignore
└── README.md               # This file
```

---

## 🚀 Quick Start

### Prerequisites
- ✅ Node.js v16+ ([Download](https://nodejs.org/))
- ✅ MongoDB ([Local](https://docs.mongodb.com/manual/installation/) or [Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone & Setup (5 minutes)

**Windows:**
```bash
cd C:\Users\212g1\Downloads\category-dashboard
setup.bat
```

**Mac/Linux:**
```bash
cd ~/Downloads/category-dashboard
chmod +x setup.sh
./setup.sh
```

### 2. Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
✅ Opens on http://localhost:5000

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```
✅ Opens on http://localhost:3000

### 4. Use the App
1. Sign up with email & password
2. Click "+ Add Category"
3. Upload image and submit
4. View your categories!

---

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/signup       Create account
POST   /api/auth/login        Login & get token
GET    /api/auth/me           Get current user
```

### Categories
```
GET    /api/categories        Get all categories
GET    /api/categories/:id    Get single category
POST   /api/categories        Create category
PUT    /api/categories/:id    Update category
DELETE /api/categories/:id    Delete category
```

All category endpoints require JWT token:
```
Authorization: Bearer <token>
```

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for examples.

---

## 🎨 UI Screenshots

### Login Page
- Email & password input
- Link to signup
- Error handling

### Signup Page
- Name, email, password fields
- Form validation
- Link to login

### Dashboard
- Header with user info & logout
- Category grid layout
- "+ Add Category" button
- Category cards with image, name, item count
- Edit/Delete actions

### Add/Edit Modal
- Category name input
- Item count input
- Image upload
- Preview image
- Cancel/Save buttons

---

## 🔧 Configuration

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/category-dashboard
JWT_SECRET=your_secure_key_here
NODE_ENV=development
```

### Frontend
Already configured via `proxy` in package.json.

---

## 🗄️ Database Schema

### Users
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Categories
```javascript
{
  name: String,
  itemCount: Number,
  image: String (file path),
  createdBy: ObjectId (User ref),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [QUICK_START.md](./QUICK_START.md) | Get running in 5 minutes |
| [INSTALLATION.md](./INSTALLATION.md) | Complete setup guide with troubleshooting |
| [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) | Full API reference with cURL examples |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to Vercel & Render |
| [COMMANDS_REFERENCE.md](./COMMANDS_REFERENCE.md) | Terminal commands reference |
| [GETTING_STARTED.md](./GETTING_STARTED.md) | Project overview & next steps |

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repo to [Vercel.com](https://vercel.com)
3. Deploy (automatic on push)

### Backend (Render)
1. Push to GitHub
2. Create Web Service on [Render.com](https://render.com)
3. Set environment variables
4. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🧪 Testing

### Sign Up
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Test123!"
}
```

### Add Category
```
Name: Summer Clothes
Item Count: 26
Image: Any JPG/PNG/GIF (max 5MB)
```

### cURL Examples
```bash
# Sign up
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"Test123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"Test123"}'
```

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for more examples.

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Start mongod or update MONGODB_URI in .env |
| Port already in use | Change PORT in .env or kill process on that port |
| Cannot find module | Run `npm install` in that directory |
| CORS errors | Restart backend, check frontend API URL |
| Image upload fails | Check file size (max 5MB) & format (JPG/PNG/GIF) |

See [INSTALLATION.md](./INSTALLATION.md) for detailed troubleshooting.

---

## 🔒 Security Features

✅ **Authentication**
- JWT tokens (7-day expiration)
- Password hashing with bcryptjs (10 rounds)
- Protected API routes with middleware

✅ **Data Protection**
- CORS configured for specific origins
- User can only access their own data
- Input validation on server & client
- File type & size validation

✅ **Production Ready**
- Environment variables for secrets
- Error handling & logging
- Secure headers
- Rate limiting ready (can be added)

---

## 📊 Performance

- ✅ Lazy loading for images
- ✅ Async/await for API calls
- ✅ Loading states prevent duplicate requests
- ✅ MongoDB indexes on frequently queried fields
- ✅ Minified & optimized build

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 🆘 Support

### Getting Help
1. Check [INSTALLATION.md](./INSTALLATION.md) for setup issues
2. Check [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for API questions
3. Check browser console (F12) for frontend errors
4. Check backend terminal for server errors

### Resources
- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [JWT Authentication](https://jwt.io)

---

## 🎓 Learning Outcomes

By working with this project, you'll learn:

✅ Full-stack development with MERN
✅ JWT authentication implementation
✅ RESTful API design
✅ React hooks & functional components
✅ Express.js middleware
✅ MongoDB data modeling
✅ File upload handling
✅ Responsive design
✅ Deployment best practices

---

## 🚀 Future Enhancements

Possible features to add:
- [ ] Search & filter categories
- [ ] Sort by name, date, or items
- [ ] Bulk upload via CSV
- [ ] User profile page
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Category analytics
- [ ] Dark mode
- [ ] Multi-language support

---

## 📞 Contact

**Questions or feedback?**
- Check documentation first
- Open GitHub Issue
- Contact: your-email@example.com

---

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies.

Special thanks to:
- React.js community
- Express.js team
- MongoDB team
- All open-source contributors

---

## ✅ Project Status

| Aspect | Status |
|--------|--------|
| **Development** | ✅ Complete |
| **Testing** | ✅ Ready |
| **Documentation** | ✅ Complete |
| **Deployment** | ✅ Ready |
| **Production** | ✅ Ready |

---

## 📈 Roadmap

- [x] Backend setup
- [x] Frontend setup
- [x] Authentication
- [x] Category CRUD
- [x] Image upload
- [x] Responsive design
- [x] Documentation
- [ ] Admin dashboard
- [ ] Advanced features
- [ ] Mobile app

---

## 🎯 Quick Links

- 🚀 [Quick Start](./QUICK_START.md) - Get running in 5 minutes
- 📝 [Installation Guide](./INSTALLATION.md) - Detailed setup
- 📡 [API Docs](./API_DOCUMENTATION.md) - API reference
- 🚀 [Deployment](./DEPLOYMENT.md) - Go to production
- 🖥️ [Commands](./COMMANDS_REFERENCE.md) - Terminal reference

---

**Ready to get started?** → Open [QUICK_START.md](./QUICK_START.md) now! 🚀

---

**Made with ❤️ | MIT License | 2024**
