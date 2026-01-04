# 🎯 Complete Setup for VS Code

This guide walks you through setting up and running the Category Dashboard in VS Code from start to finish.

---

## Step 1: Open Project in VS Code

### Option A: Open Existing Folder
1. Open VS Code
2. Click **File** → **Open Folder**
3. Navigate to: `C:\Users\212g1\Downloads\category-dashboard`
4. Click **Select Folder**

### Option B: Open from Terminal
```bash
# Windows PowerShell
code "C:\Users\212g1\Downloads\category-dashboard"

# Mac/Linux Terminal
code ~/Downloads/category-dashboard
```

---

## Step 2: Set Up Integrated Terminals

VS Code has built-in terminals. Use them to run backend and frontend.

### Open First Terminal
1. Press **Ctrl + `** (backtick)
2. Or: **View** → **Terminal**

### Split Terminal (for 2 terminals side-by-side)
1. With terminal open, click the split icon (or right-click → Split)
2. Or press: **Ctrl + Shift + 5**

---

## Step 3: Install Dependencies

### Terminal 1: Backend Installation
```bash
cd backend
npm install
```

**You should see:**
```
added XXX packages in X.XXs
```

### Terminal 2: Frontend Installation
```bash
cd frontend
npm install
```

**You should see:**
```
added XXX packages in X.XXs
```

---

## Step 4: Configure Environment

### Open Backend .env File

1. In **Explorer** (left sidebar), open `backend` folder
2. Find `.env` file
3. Click to open
4. Verify contents:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/category-dashboard
JWT_SECRET=your_super_secret_jwt_key_change_in_production_12345
NODE_ENV=development
```

### If MongoDB Atlas (Cloud):
Update `MONGODB_URI`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/category-dashboard
```

---

## Step 5: Start MongoDB

### Option A: Local MongoDB

**Windows (open new PowerShell):**
```powershell
mongod
```

**Mac (Terminal):**
```bash
brew services start mongodb-community
```

**Linux (Terminal):**
```bash
sudo systemctl start mongodb
```

### Option B: MongoDB Atlas
No setup needed - just ensure your connection string is in `.env`

### Verify MongoDB Connection
```bash
mongosh
# If connected, you'll see: test>
# Type: exit
```

---

## Step 6: Start Backend Server

### In Terminal 1 (Backend Directory)

```bash
npm run dev
```

### Expected Output
```
MongoDB connected ✓
Server running on port 5000 ✓
```

### If it fails:
- Check MongoDB is running: `mongosh`
- Check .env file is correct
- Check port 5000 is not in use
- See INSTALLATION.md for troubleshooting

---

## Step 7: Start Frontend Server

### In Terminal 2 (Frontend Directory)

```bash
npm start
```

### Expected Output
```
Compiled successfully!

You can now view category-dashboard-frontend in the browser.
  Local:            http://localhost:3000
```

A browser window should automatically open to `http://localhost:3000`

---

## Step 8: Test the Application

### Create Your First Account

1. **On the Login page**, click **"Sign Up"**
2. **Enter:**
   - Name: `John Doe`
   - Email: `john@example.com`
   - Password: `Test123!`
3. Click **Sign Up**
4. You're logged in! 🎉

### Add a Category

1. Click **"+ Add Category"** button
2. **Fill in:**
   - Category Name: `Summer Clothes`
   - Item Count: `26`
   - Upload Image: Choose any JPG or PNG file
3. Click **Save Category**
4. You should see the category in the grid!

### Test All Features

- ✅ **Edit:** Click "Edit" on a category
- ✅ **Delete:** Click "Delete" and confirm
- ✅ **View:** See all your categories on dashboard
- ✅ **Logout:** Click "Logout" button
- ✅ **Login Again:** Use your credentials to log back in

---

## Step 9: VS Code Tips & Extensions

### Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save file |
| `Ctrl + ~` | Toggle terminal |
| `Ctrl + Shift + ~` | New terminal |
| `Ctrl + /` | Comment/uncomment |
| `Shift + Alt + F` | Format code |
| `Ctrl + F` | Find |
| `Ctrl + H` | Find & Replace |
| `F12` | Browser DevTools |

### Recommended Extensions

**Install from Extensions (Ctrl + Shift + X):**

1. **ES7+ React/Redux/React-Native snippets**
   - Search: "es7-react-js-snippets"
   - Install: `dsznajder.es7-react-js-snippets`

2. **Prettier - Code formatter**
   - Search: "prettier"
   - Install: `esbenp.prettier-vscode`

3. **MongoDB for VS Code**
   - Search: "mongodb"
   - Install: `mongodb.mongodb-vscode`

4. **Thunder Client** (or Postman)
   - For testing APIs without leaving VS Code

### Install Extension Example
1. Click **Extensions** icon (Ctrl + Shift + X)
2. Search for extension name
3. Click **Install**

---

## Step 10: File Navigation

### Quick File Opening

**Open files quickly:**
1. Press `Ctrl + P`
2. Type filename: `Login.js`, `Category.js`, etc.
3. Press Enter

### File Explorer
- Left sidebar shows all files
- Click to open, double-click to keep open
- Right-click for options (delete, rename, etc.)

---

## Step 11: Debugging

### Frontend Debugging

**In VS Code:**
1. Press `F5` or go to **Run** → **Start Debugging**
2. Choose **Chrome** debugger
3. Set breakpoints by clicking line numbers
4. Browser DevTools will open

**In Browser:**
1. Press `F12` to open DevTools
2. Go to **Console** tab
3. Check for errors (red messages)
4. Use **Network** tab to see API calls

### Backend Debugging

**View Logs in Terminal:**
- Look at Terminal 1 where backend is running
- Errors appear in red
- Info appears in normal color

**Add Logging:**
```javascript
console.log('Debug:', value);
console.error('Error:', error);
```

---

## Step 12: Git Integration (Optional)

### Initialize Git Repository

1. **Open Terminal**
2. Run:
```bash
git init
git add .
git commit -m "Initial commit"
```

### VS Code Git UI
- Click **Source Control** icon (Ctrl + Shift + G)
- See changes, stage, commit from GUI

---

## Step 13: Running Commands Summary

### All Essential Commands

**Backend:**
```bash
cd backend
npm install      # First time only
npm run dev      # Start development server
npm start        # Start production server
```

**Frontend:**
```bash
cd frontend
npm install      # First time only
npm start        # Start development server
npm run build    # Build for production
```

**Database:**
```bash
mongod           # Start MongoDB
mongosh          # Connect to MongoDB shell
```

---

## Step 14: Common Issues in VS Code

### Issue: Terminal Not Found
**Solution:** Restart VS Code (`Ctrl + Shift + P` → `Reload Window`)

### Issue: npm Not Found
**Solution:** Restart VS Code, Node.js may not be in PATH

### Issue: Module Not Found
**Solution:** Run `npm install` in that directory

### Issue: Port Already in Use
**Solution:** Check .env file, change PORT, or kill process

### Issue: Cannot Read Files
**Solution:** Check file permissions, restart VS Code

---

## Step 15: File Editing Best Practices

### Code Formatting

**Automatic on Save:**
1. Open **Settings** (Ctrl + ,)
2. Search: "Format on Save"
3. Enable checkbox

### Import Organization

**Auto-organize imports:**
1. Right-click in file
2. Choose "Organize Imports"
3. Or use Quick Fix (Ctrl + .)

### Error Checking

**Red squiggly lines** = errors
- Hover over to see message
- Click light bulb icon for suggestions

---

## Step 16: Making Your First Change

### Edit Frontend Logo

1. Open `frontend/src/App.js`
2. Find the h1 tag in Dashboard component
3. Change `📦 Category Dashboard` to your title
4. Save (`Ctrl + S`)
5. Frontend automatically reloads! (hot reload)

### Edit Colors

1. Open `frontend/src/App.css`
2. Find `#667eea` (purple color)
3. Change to `#ff6b6b` (red) or any hex color
4. Save and see live update!

---

## Step 17: Terminal Tips

### Multiple Tasks

**Keep terminals visible:**
1. Open 2+ terminals side-by-side
2. Right-click → Split
3. Run backend in one, frontend in another

### Scroll in Terminal
- Use arrow keys or scroll wheel
- Clear screen: `clear` (Mac/Linux) or `cls` (Windows)

### Copy from Terminal
- Select text
- Right-click → Copy
- Or Ctrl + C (while not running commands)

---

## Step 18: Deployment Readiness

### Before Deploying

1. **Test locally:**
   - ✅ Sign up works
   - ✅ Login works
   - ✅ Add category works
   - ✅ Edit/Delete works

2. **Check errors:**
   - No red errors in console
   - Network requests working

3. **Build frontend:**
   ```bash
   cd frontend
   npm run build
   ```
   Creates `frontend/build/` folder

4. **Follow DEPLOYMENT.md** for live deployment

---

## Step 19: Useful VS Code Shortcuts

### Navigation
- `Ctrl + P` - Quick file open
- `Ctrl + G` - Go to line
- `Ctrl + D` - Select next occurrence
- `Ctrl + K Ctrl + 0` - Fold all

### Editing
- `Ctrl + Shift + K` - Delete line
- `Alt + Up/Down` - Move line up/down
- `Shift + Alt + Up/Down` - Duplicate line

### View
- `Ctrl + B` - Toggle sidebar
- `Ctrl + Shift + E` - Explorer
- `Ctrl + Shift + X` - Extensions
- `Ctrl + Shift + D` - Debugger

---

## Step 20: Getting Help

### From VS Code
1. Click **Help** menu
2. Choose **Welcome** or **Getting Started**
3. Access documentation

### In Project
1. Read README.md
2. Check INSTALLATION.md
3. See API_DOCUMENTATION.md
4. Review QUICK_START.md

### Online
- Google your error message
- Check Stack Overflow
- Read official docs (React, Express, MongoDB)

---

## Final Checklist ✅

Before considering setup complete:

- [ ] Folders open in VS Code
- [ ] Backend and frontend terminals running
- [ ] No errors in either terminal
- [ ] Browser opens to http://localhost:3000
- [ ] Can sign up and create account
- [ ] Can add category with image
- [ ] Can edit and delete categories
- [ ] Can logout and login again

---

## 🎉 You're All Set!

Your development environment is ready! 

### Next Steps:
1. Explore the code
2. Make small changes to see hot reload
3. Test all features
4. Read other documentation files
5. Deploy when ready

### Quick Links:
- **Frontend Code:** `frontend/src/`
- **Backend Code:** `backend/routes/`
- **Database Models:** `backend/models/`
- **Documentation:** Check all `.md` files in root

---

## 🚀 Ready to Deploy?

When your app is complete and tested:
1. Follow `DEPLOYMENT.md`
2. Push to GitHub
3. Deploy to Vercel (frontend) + Render (backend)
4. Share your live URL!

---

**Happy Coding! You've got this! 🚀**

Remember: If something breaks, check the terminal for error messages - they usually tell you exactly what's wrong!
