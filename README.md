# 🏡 Horizon Homes — React SPA

**Horizon Homes** is a single-page React application for browsing properties, signing up/logging in, purchasing properties (demo flow), and managing a user profile with transaction history.  

🔗 **Live Demo:** [Horizon Homes](https://arpitgupta9953.github.io/Horizon-Homes/)
---

## ✨ Features
- **User Authentication**: Signup with validation & duplicate email prevention, Login with session persistence, Logout & account deletion  
- **Profile Management**: Editable profile fields (name, email, phone, bio, address), Transaction history  
- **Property Browsing & Purchase Flow**: Featured & On Sale listings, Property details with “Buy Now” demo flow, Protected actions (login required)  
- **Navigation & Routing**: Auth-aware Navbar, Smooth scroll, Scroll restoration, Protected routes  
- **Contact Form**: Controlled inputs with validation, Toast success notifications  
- **UI/UX**: Mobile responsive, Toast notifications for all actions, Tailwind-style utility classes  

---

## 🛠 Tech Stack
- React (functional components + hooks)  
- React Router  
- Context API  
- localStorage  
- react-hot-toast  
- Tailwind-style utilities  

---

## 📂 Project Structure
Horizon-Homes/
│
├── public/
│ └── (index.html, favicon, images, etc.)
│
├── src/
│ ├── assets/ # images, icons, static resources
│ ├── components/ # reusable UI components
│ │ ├── footer.js
│ │ ├── navbar.js
│ │ └── ProtectedRoute.js
│ │
│ ├── pages/ # all main page components
│ │ ├── about.js
│ │ ├── clients.js
│ │ ├── contact.js
│ │ ├── demo.js
│ │ ├── features.js
│ │ ├── home.js
│ │ ├── login.js
│ │ ├── onsale.js
│ │ ├── profile.js
│ │ ├── propertyDetails.js
│ │ ├── service.js
│ │ └── signup.js
│ │
│ ├── context/
│ │ └── AuthContext.js # global auth state
│ │
│ ├── App.js # main app component
│ └── index.js # React entry point
│
└── package.json


---

## 🚀 Getting Started
### Prerequisites
- Node.js (LTS recommended)  
- npm  

### Installation
```bash
git clone https://github.com/ArpitGupta9953/Horizon-Homes.git
cd Horizon-Homes
npm install
npm start    
Runs on: http://localhost:3000


