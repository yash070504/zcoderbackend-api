# 🚀 ZCoder Backend

This is the backend service for **ZCoder**, a platform designed for developers to create and manage coding profiles, track competitive programming progress, and collaborate on coding challenges.  

The backend is built with **Node.js**, **Express.js**, and **MongoDB**, providing RESTful APIs for authentication, user management, tasks, and coding profiles.  

---

## 🔗 Related Repositories
- **Frontend Repository:** [ZCoder Frontend](https://github.com/yash070504/zcoder-frontend)  
- **Backend Repository:** [ZCoder Backend](https://github.com/yash070504/zcoderbackend-api)  

---

## ✨ Features
- 🔑 **Authentication & Authorization** (JWT-based)  
- 👤 **User Profile Management**  
- ✅ **Task/Assignment Management System**  
- 📊 **CRUD APIs for coding activities**  
- 🔒 **Secure password hashing with bcrypt**  
- 🗄️ **MongoDB Database Integration**  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT  
- **Other Tools:** bcrypt, dotenv  

---

## 📂 Project Structure
zcoderbackend-api/
│── config/ # Database and environment configuration
│── controllers/ # Request handlers and business logic
│── models/ # Mongoose schemas
│── routes/ # API routes
│── middlewares/ # Auth & error handling
│── utils/ # Helper functions
│── server.js # Entry point
│── package.json
│── .env.example # Sample environment variables


---

## ⚡ Getting Started

### Clone the Repository
```bash
git clone https://github.com/yash070504/zcoderbackend-api.git
cd zcoderbackend-api
