# Backend API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 1. Authentication Endpoints

### 1.1 Sign Up
- **URL:** `POST /auth/signup`
- **Description:** Create a new user account
- **Public:** Yes
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```
- **Success Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```
- **Error Response (400):**
```json
{
  "message": "User with this email already exists"
}
```

### 1.2 Login
- **URL:** `POST /auth/login`
- **Description:** Login with email and password
- **Public:** Yes
- **Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```
- **Success Response (200):**
```json
{
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```
- **Error Response (400):**
```json
{
  "message": "Invalid credentials"
}
```

### 1.3 Get Current User
- **URL:** `GET /auth/me`
- **Description:** Get authenticated user details
- **Protected:** Yes (Requires token)
- **Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-04T10:30:00Z"
}
```

---

## 2. Category Endpoints

### 2.1 Get All Categories
- **URL:** `GET /categories`
- **Description:** Get all categories for logged-in user
- **Protected:** Yes
- **Query Parameters:** None
- **Success Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Summer Clothes",
    "itemCount": 26,
    "image": "/uploads/1704361800000-summer.jpg",
    "createdBy": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-04T10:30:00Z",
    "updatedAt": "2024-01-04T10:30:00Z"
  },
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Winter Clothes",
    "itemCount": 15,
    "image": "/uploads/1704361850000-winter.jpg",
    "createdBy": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-04T10:35:00Z",
    "updatedAt": "2024-01-04T10:35:00Z"
  }
]
```

### 2.2 Get Single Category
- **URL:** `GET /categories/:id`
- **Description:** Get a specific category
- **Protected:** Yes
- **URL Parameters:**
  - `id` - Category ID
- **Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Summer Clothes",
  "itemCount": 26,
  "image": "/uploads/1704361800000-summer.jpg",
  "createdBy": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-04T10:30:00Z",
  "updatedAt": "2024-01-04T10:30:00Z"
}
```
- **Error Response (404):**
```json
{
  "message": "Category not found"
}
```

### 2.3 Create Category
- **URL:** `POST /categories`
- **Description:** Create a new category
- **Protected:** Yes
- **Content-Type:** `multipart/form-data`
- **Request Fields:**
  - `name` (string, required) - Category name
  - `itemCount` (number, required) - Number of items
  - `image` (file, optional) - Category image (max 5MB, JPG/PNG/GIF)
- **Success Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439014",
  "name": "Summer Clothes",
  "itemCount": 26,
  "image": "/uploads/1704361900000-summer.jpg",
  "createdBy": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-04T10:40:00Z",
  "updatedAt": "2024-01-04T10:40:00Z"
}
```
- **Error Response (400):**
```json
{
  "message": "Name and itemCount are required"
}
```

### 2.4 Update Category
- **URL:** `PUT /categories/:id`
- **Description:** Update an existing category
- **Protected:** Yes
- **Content-Type:** `multipart/form-data`
- **URL Parameters:**
  - `id` - Category ID
- **Request Fields:**
  - `name` (string, optional) - Updated category name
  - `itemCount` (number, optional) - Updated item count
  - `image` (file, optional) - New category image
- **Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439014",
  "name": "Updated Summer Clothes",
  "itemCount": 30,
  "image": "/uploads/1704362000000-summer-updated.jpg",
  "createdBy": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-04T10:40:00Z",
  "updatedAt": "2024-01-04T10:45:00Z"
}
```
- **Error Response (403):**
```json
{
  "message": "Not authorized"
}
```

### 2.5 Delete Category
- **URL:** `DELETE /categories/:id`
- **Description:** Delete a category
- **Protected:** Yes
- **URL Parameters:**
  - `id` - Category ID
- **Success Response (200):**
```json
{
  "message": "Category deleted successfully"
}
```
- **Error Response (404):**
```json
{
  "message": "Category not found"
}
```

---

## Error Handling

### Common Error Responses

**Unauthorized (401):**
```json
{
  "message": "No authentication token, access denied"
}
```

**Forbidden (403):**
```json
{
  "message": "Not authorized"
}
```

**Not Found (404):**
```json
{
  "message": "Category not found"
}
```

**Server Error (500):**
```json
{
  "message": "Server error",
  "error": "Detailed error message"
}
```

---

## cURL Examples

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Get All Categories
```bash
curl -X GET http://localhost:5000/api/categories \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Create Category with Image
```bash
curl -X POST http://localhost:5000/api/categories \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "name=Summer Clothes" \
  -F "itemCount=26" \
  -F "image=@/path/to/image.jpg"
```

### Update Category
```bash
curl -X PUT http://localhost:5000/api/categories/507f1f77bcf86cd799439014 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "name=Updated Name" \
  -F "itemCount=30" \
  -F "image=@/path/to/new-image.jpg"
```

### Delete Category
```bash
curl -X DELETE http://localhost:5000/api/categories/507f1f77bcf86cd799439014 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Rate Limiting
No rate limiting is currently implemented. For production, consider adding rate limiting middleware.

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Category Model
```javascript
{
  name: String,
  itemCount: Number,
  image: String (file path),
  createdBy: ObjectId (User reference),
  createdAt: Date,
  updatedAt: Date
}
```
