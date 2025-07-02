# 🛒 NextBuy_Ecommerce

A full-stack, feature-rich E-Commerce platform built with **React.js**, **Node.js**, **Express**, **Sequelize (PostgreSQL)**, and **Tailwind CSS**. This platform includes separate interfaces for users and admins, providing complete control over products, orders, and user management.

---

## 📁 Project Structure

```
NextBuy_Ecommerce/
│
├── admin/              # Admin Panel (React + Vite)
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
│
├── client/             # Customer Frontend (React + Vite)
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── ...
│
├── server/             # Backend API (Node.js + Express + PostgreSQL)
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
└── README.md
```

---

## 🚀 Features

### 👤 User Side (Client)
- Product browsing and filtering
- Cart management with size and quantity options
- Authentication and protected routes
- Order placement with delivery address
- Payment method selection (COD / Stripe / Razorpay)
- Order tracking and history

### 🛠 Admin Side
- Product CRUD (Create, Read, Update, Delete)
- View and update order statuses
- Manage user orders
- Dashboard with insights

---

## 🔧 Tech Stack

| Frontend       | Backend        | Database     | Styling        |
| -------------- | -------------- | ------------ | -------------- |
| React.js       | Node.js        | PostgreSQL   | Tailwind CSS   |
| React Router   | Express.js     | Sequelize ORM| CSS Modules    |
| Axios          | JWT Auth       |              |                |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js & npm
- PostgreSQL
- Git

### Clone the repository
```bash
git clone https://github.com/Bala1884/NextBuy-Ecommerce.git
cd NextBuy_Ecommerce
```

### Setup Client
```bash
cd client
npm install
npm run dev
```

### Setup Admin
```bash
cd admin
npm install
npm run dev
```

### Setup Server
```bash
cd server
npm install
# Set up your DB credentials in /config/db.js or .env
npm run start
```

---

## 🛡️ Environment Variables

Create a `.env` file in the `server/` directory and configure:
```
PORT=4000
CLOUDINARY_API_KEY="your_key"
CLOUDINARY_SECRET_KEY="your_key"
CLOUDINARY_NAME="your_cloudinary_name"
ADMIN_EMAIL="admin_email"
ADMIN_PASSWORD="admin_password"

JWT_SECRET='NextBuySecret'
```

Also set Vite environment variables in both `client/.env` and `admin/.env`:
```
VITE_BACKEND_URL=http://localhost:4000
```

---


## 👨‍💻 Author

Developed by **[Bala1884](https://github.com/Bala1884)**

Feel free to ⭐ this repo and contribute!
