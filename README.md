# ♻️ Recycling & Waste Management Platform

## 🌍 Live Demo
[Recycling & Waste Management Platform](https://recycling-seven.vercel.app)

---

## 📜 Overview
The **Recycling & Waste Management Platform** is a web application designed to promote sustainable waste disposal and recycling practices. The app allows users to access educational resources, and engage with the community. Admins can manage users, posts, and comments efficiently.

---

## ✨ Features

### ✅ Waste Management & User Services
- 📚 Access educational resources on proper waste disposal.
- 🗣️ Community discussions for sharing best practices.

### ✅ Admin Dashboard
- 👥 Manage user accounts (activate/deactivate users).
- 📝 Add and moderate posts related to waste management.
- 💬 Oversee user comments and engagement.

### ✅ Authentication & Security
- 🔐 User registration, login, and logout.
- 🔑 Secure authentication with JWT.
- 🔒 API routes to ensure data security.

---

## 🛠 Tech Stack Used

### Frontend:
- ⚛️ React
- 🎨 CSS

### Backend:
- 🖥️ Node.js, Express.js

### Database:
- 🗄️ MongoDB with Mongoose

### Authentication:
- 🔐 JWT-based authentication

---

## 🚀 Getting Started

### 🔧 Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/recycling-platform.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd recycling-platform
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```

---

## 📡 API Endpoints

### 🔑 Authentication
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Authenticate user

### 🗑️ Waste Management
- `GET /api/posts` → Fetch all posts
- `POST /api/posts` → Create a new post (Admin only)

### 👥 User Management
- `GET /api/users` → Fetch all users (Admin only)
- `PATCH /api/users/:id` → Activate/deactivate a user (Admin only)

---

## 📸 Screenshots
![Dashboard Preview](./screenshots/dashboard.png)

---

## ⭐ Community & Contributions
- 🌟 If you like this project, consider giving it a **star**!
- 👀 Watch the repository to stay updated with new features and improvements.
- 🤝 Contributions are welcome! Follow these steps:
  1. Fork the project.
  2. Create a new branch (`feature-new`).
  3. Commit changes (`git commit -m "Add new feature"`).
  4. Push to GitHub and create a pull request.

---

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact
For inquiries, reach out via email: [your-email@example.com](mailto:your-email@example.com)
