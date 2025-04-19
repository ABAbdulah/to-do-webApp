# 📝 Todo Web Application

A full-stack, fully responsive Todo Web Application built with Next.js, PostgreSQL, and NextAuth. This app allows users to register or log in using Google or email credentials, manage their tasks in real-time, and navigate through protected routes for secure task management.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router + TypeScript)
- **Styling:** TailwindCSS + ShadCN UI
- **Authentication:** NextAuth (Google + Credentials)
- **Database:** PostgreSQL with Prisma ORM
- **Deployment:** Vercel 

---

## 🧠 Features

- User registration and login via Google or email/password
- Secure authentication with protected routes
- Add, edit, delete tasks with real-time UI updates (no page refresh)
- Edit task functionality with pre-filled form and live DB update
- Fully responsive layout (mobile, tablet, laptop, desktop)

---

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/todo-web-app.git
cd todo-web-app

npm install
npx prisma migrate dev --name init
npx prisma generate



