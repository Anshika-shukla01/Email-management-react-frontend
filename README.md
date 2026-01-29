# Email Management Frontend (React)

A modern React + TypeScript frontend for managing user authentication and sending test emails.

This is the frontend application for an Email Management system built using **React + TypeScript**.  
It provides user authentication, a dashboard to send test emails, and a page to view sent emails.

---

## 🚀 Features

- User Authentication (Register / Login / Logout)
- Token-based authentication using JWT
- Protected routes for authenticated users
- Send test emails from the dashboard
- View sent emails with timestamps and recipients
- Responsive and modern UI

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **React Router DOM**
- **Tailwind CSS**
- Fetch API for backend communication

---

## 🎨 Styling (Tailwind CSS)

Although Tailwind CSS was not a strict requirement for this project,  
I **intentionally chose Tailwind CSS** to:

- Build a clean and modern UI efficiently
- Maintain consistent styling across components
- Improve development speed with utility-first classes

The entire UI (forms, dashboard, navbar, layouts) is styled using **Tailwind CSS**.

---

## 📂 Project Structure

src/
│── api/
│ ├── auth.ts # Authentication API calls
│ ├── email.ts # Email-related API calls
│ └── client.ts # Shared API fetch logic
│
│── components/
│ └── Navbar.tsx
│
│── pages/
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── Dashboard.tsx
│ └── Emails.tsx
│
│── App.tsx
│── main.tsx


---

## 🔐 Authentication Flow

- JWT token is stored in `localStorage`
- Token is attached automatically to API requests
- Routes like `/dashboard` and `/emails` are protected
- Users are redirected to `/login` if not authenticated

---

## ⚙️ Setup Instructions

1. Clone the repository
   ```bash
   git clone <repo-url>


Install dependencies
npm install

Start the development server
npm run dev

Make sure the backend server is running on
http://localhost:3000


Status
All core features implemented according to the save backend project(node+ hono)
Authentication and protected routing working correctly
Email sending and preview functioning as expected
UI fully styled with Tailwind CSS
