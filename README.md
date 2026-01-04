# Category Management Dashboard 🏪

A full-stack e-commerce category management platform built with React.js, Node.js, Express, and MongoDB.

## Features ✨

- **User Authentication**
  - Sign up and Login with JWT tokens
  - Session persistence
  - Password encryption with bcryptjs

- **Category Management**
  - View all categories in a grid layout
  - Create new categories with image uploads
  - Edit existing categories
  - Delete categories
  - Item count tracking

- **Professional UI**
  - Clean and modern design
  - Fully responsive (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Error handling and loading states

## Tech Stack 🛠️

### Frontend
- **React.js** 18.2 (Functional components & hooks)
- **React Router** 6.20 (Navigation)
- **Axios** 1.6 (API calls)
- **CSS3** (Styling with gradients and animations)

### Backend
- **Node.js** (Runtime)
- **Express.js** 4.18 (Web framework)
- **MongoDB** 8.0 (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **bcryptjs** (Password hashing)
- **Multer** (File uploads)

## Project Structure

```
category-dashboard/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema with password hashing
│   │   └── Category.js      # Category schema
│   ├── routes/
│   │   ├── auth.js          # Auth endpoints (signup, login, me)
│   │   └── categories.js    # Category endpoints (CRUD + file upload)
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── server.js            # Express app setup
│   ├── package.json
│   ├── .env                 # Environment variables
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │   └── index.html       # HTML entry point
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js     # Login page
│   │   │   ├── Signup.js    # Signup page
│   │   │   └── Dashboard.js # Main dashboard
│   │   ├── components/
│   │   │   ├── ProtectedRoute.js  # Route protection
│   │   │   └── CategoryForm.js    # Reusable form
│   │   ├── api.js           # API client setup
│   │   ├── App.js           # Main app component
│   │   ├── App.css          # Global styles
│   │   └── index.js         # React entry point
│   ├── package.json
│   ├── .gitignore
│   └── .env.local (if needed)
│
└── README.md
```

## Installation & Setup 🚀

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd category-dashboard
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (already provided)
# Edit .env and update MONGODB_URI if needed

# Start backend server
npm run dev    # Development with nodemon
# OR
npm start      # Production
```

Backend runs on: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start frontend dev server
npm start
```

Frontend runs on: `http://localhost:3000`

## Environment Variables 🔐

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/category-dashboard
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
```

### Frontend
The frontend is already configured to connect to `http://localhost:5000` via the `proxy` setting in package.json.

## API Endpoints 📡

### Authentication
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Categories
- `GET /api/categories` - Get all categories (protected)
- `GET /api/categories/:id` - Get single category (protected)
- `POST /api/categories` - Create category (protected, multipart form)
- `PUT /api/categories/:id` - Update category (protected, multipart form)
- `DELETE /api/categories/:id` - Delete category (protected)

## Database Setup 📊

### MongoDB Local
```bash
# Install MongoDB Community
# https://docs.mongodb.com/manual/installation/

# Start MongoDB
mongod

# MongoDB runs on mongodb://localhost:27017/
```

### MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in backend `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/category-dashboard
```

## Running the Application 🎯

### Terminal 1: Backend
```bash
cd backend
npm run dev
```
Expected output:
```
MongoDB connected
Server running on port 5000
```

### Terminal 2: Frontend
```bash
cd frontend
npm start
```
Expected output:
```
Compiled successfully!
You can now view category-dashboard-frontend in the browser.
  Local:            http://localhost:3000
```

### Access Application
Open browser → `http://localhost:3000`

## User Flow 👤

1. **Sign Up** → Create account with name, email, password
2. **Login** → Enter credentials
3. **Dashboard** → View your categories
4. **Add Category** → Click "+ Add Category" button
5. **Upload Image** → Select image (JPG, PNG, GIF, max 5MB)
6. **Edit/Delete** → Manage existing categories
7. **Logout** → Exit application

## Features Detail 📋

### Authentication
- Password hashing with bcryptjs
- JWT tokens valid for 7 days
- Token stored in localStorage
- Protected routes on frontend
- Auth middleware on backend

### File Upload
- Multer for image handling
- Stores files in `/backend/uploads/`
- File size limit: 5MB
- Supported formats: JPG, PNG, GIF
- Old images deleted when updated

### Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly buttons
- Optimized for all devices

## Deployment 🌐

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Go to vercel.com
3. Connect GitHub repository
4. Set environment variables
5. Deploy

### Backend Deployment (Render)
1. Push code to GitHub
2. Go to render.com
3. Create new Web Service
4. Connect GitHub repository
5. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
6. Deploy

### Update Frontend API URL
Change in `frontend/src/api.js`:
```javascript
const API_URL = 'https://your-backend-url.onrender.com/api';
```

## Troubleshooting 🔧

### MongoDB Connection Error
```
Check if mongod is running
Verify MONGODB_URI in .env
```

### CORS Errors
```
Ensure backend CORS is configured correctly
Check frontend API_URL matches backend URL
```

### Image Upload Failed
```
Check /backend/uploads folder exists
Verify file size < 5MB
Check file format is JPG, PNG, or GIF
```

### Port Already in Use
```bash
# Change PORT in .env or kill process
lsof -i :5000     # Find process
kill -9 <PID>     # Kill process
```

## Performance Tips ⚡

- Images are lazy loaded
- API calls use async/await
- Loading states prevent duplicate requests
- JWT tokens refresh every 7 days
- Database indexes on frequently queried fields

## Security Features 🔒

- Password hashing with bcryptjs (10 salt rounds)
- JWT authentication for protected routes
- Input validation on server and client
- CORS enabled for specific origins
- File type validation on upload
- User can only access their own data

## Testing Credentials 🧪

After signup, you can use:
```
Email: user@example.com
Password: password123
```

## Contributing 🤝

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## License 📄

This project is open source and available under the MIT License.

## Support 💬

For issues or questions:
1. Check this README
2. Check GitHub Issues
3. Contact: your-email@example.com

---

**Made with ❤️ using MERN Stack**
