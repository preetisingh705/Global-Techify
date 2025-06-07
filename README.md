# 🎓 Student E-Learning Platform

A full-stack web application that allows students to register, browse development courses, purchase access, and learn online. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## 📌 Features

✅ User Authentication  
✅ Browse Development Courses  
✅ Purchase & Access Courses  
✅ Admin Panel for Course Management  
✅ RESTful APIs with Node.js & Express  
✅ MongoDB for Storing Users & Courses  
✅ Responsive UI using React.js  
✅ Secure with JWT Tokens

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Authentication |
|----------|---------|----------|-----------------|
| React.js | Node.js | MongoDB  | JWT, bcrypt     |

---

## 🧑‍💻 User Roles

- **Student**:  
  - Register/Login  
  - Browse & purchase courses  
  - Watch enrolled content

- **Admin**:  
  - Add, edit, delete courses  
  - Manage student access

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/e-learning-platform.git
cd e-learning-platform

# 2. Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 3. Create .env files in both backend and frontend
# Example: backend/.env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# 4. Run backend
cd backend
npm run dev

# 5. Run frontend
cd ../frontend
npm start
