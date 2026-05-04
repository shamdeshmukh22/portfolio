# Modern Full-Stack Personal Portfolio

A stunning, production-ready personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB.

## Features ✨

- **Modern UI/UX**: Premium design with glassmorphism, dynamic animations, and vibrant colors.
- **Dark/Light Mode**: Full theme switching support with `localStorage` persistence.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing.
- **Projects Showcase**: Filterable project gallery with beautiful cards and hover effects.
- **Functional Contact Form**: Connects to a Node.js/Express backend to save messages directly to MongoDB.
- **SEO Optimized**: semantic HTML, proper headings, and modern typography (Google Outfit font).
- **Interactive Animations**: Smooth scroll and reveal animations powered by Framer Motion.

## Tech Stack 🛠️

**Frontend:**
- React 18 (via Vite)
- Tailwind CSS v4
- Framer Motion
- React Hook Form
- Axios
- Lucide React (Icons)

**Backend:**
- Node.js & Express
- MongoDB & Mongoose
- Cors
- Dotenv

## Folder Structure 📁

```text
/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── App.jsx     # Main layout and assembly
│   │   └── main.jsx    # Entry point & Providers
│   └── index.html      # HTML template with SEO tags
│
└── server/          # Node.js backend API
    ├── models/         # Mongoose schemas (Message.js)
    ├── routes/         # Express routes (contact.js)
    ├── index.js        # Server entry point
    └── .env            # Environment variables
```

## Getting Started 🚀

### Prerequisites
- Node.js (v16+)
- MongoDB (Local instance or MongoDB Atlas cluster)

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `server/.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *(Server will run on http://localhost:5000)*

### 2. Frontend Setup

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(App will run on http://localhost:5173)*

### 3. Add your Resume
Place your resume PDF file inside `client/public/` and name it `resume.pdf` so the "Download CV" button functions properly.

## Deployment Guide 🌍

### Frontend (Vercel)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Set the Framework Preset to **Vite**.
5. Set the Root Directory to `client`.
6. Add an Environment Variable: `VITE_API_URL` pointing to your deployed backend URL (e.g., `https://your-backend-url.onrender.com/api`).
7. Deploy!

### Backend (Render / Railway)
1. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster and get your connection string.
2. Go to Render or Railway and create a new Web Service.
3. Connect your GitHub repository.
4. Set the Root Directory to `server`.
5. Build Command: `npm install`
6. Start Command: `node index.js`
7. Add Environment Variables:
   - `MONGODB_URI` = Your MongoDB Atlas connection string.
   - `PORT` = 5000
8. Deploy!

## API Endpoints 📡

- `POST /api/contact` - Saves a new contact message (Expects JSON: `{ name, email, message }`).
- `GET /api/messages` - Retrieves all contact messages (Sorted by newest first).

## Customization

To personalize the portfolio, simply update:
- `src/components/Hero.jsx` - Your name, intro, and social links.
- `src/components/About.jsx` - Your skills, timeline, and education.
- `src/components/Projects.jsx` - Your portfolio projects data.
- `src/components/Contact.jsx` - Your email, location, and phone number.

---
*Built by a Senior Full-Stack Developer.*
