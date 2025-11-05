# 🧠 MERN Image Search App

A full-stack **MERN** application that allows users to log in using **Google, GitHub, or Facebook OAuth**,  
search for images from the **Unsplash API**, and view their personal search history.

---

## ⚙️ Tech Stack

**Frontend:** React + Tailwind CSS + Axios  
**Backend:** Node.js + Express.js + MongoDB + Passport.js  
**API:** Unsplash API  

---

## 🚀 Setup Instructions

### 🧩 1. Clone the repository
```bash
git clone https://github.com/sarrastogi/mern-image-search-app.git
cd mern-image-search-app
```

---

### ⚙️ 2. Backend Setup

#### 📁 Navigate to backend
```bash
cd Backend
npm install
```

#### 🧾 Create a `.env` file
```env
PORT=5004
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key

# OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# Unsplash API Key
UNSPLASH_ACCESS_KEY=your_unsplash_api_key

# Frontend URL
CLIENT_URL=http://localhost:5173
```

#### ▶️ Run the backend
```bash
npm run dev
```
Backend runs at ➜ `http://localhost:5004`

---

### 💻 3. Frontend Setup

#### 📁 Navigate to frontend
```bash
cd ../Frontend
npm install
```

#### ▶️ Run frontend
```bash
npm run dev
```
Frontend runs at ➜ `http://localhost:5173`

---

## 🗂 Folder Structure

### 📦 Backend
```

Backend/
├── node_modules/
│
├── src/
│   ├── Config/
│   │   ├── passport.js          # Passport OAuth configuration (Google, GitHub, Facebook)
│   │   └── Db/
│   │       └── Index.js         
│   ├── Model/
│   │   ├── search_model.js     
│   │   └── user_model.js        
│   ├── Route/
│   │   ├── api.js               
│   │   ├── auth.js              
│   │   └── topsearch.js         
│   ├── utils/
│   │   ├── unsplash.js         
│   │   └── constant.js          
│   └── index.js                
├── .env                         
├── .gitignore                   
├── package.json                 
├── package-lock.json
└── README.md                   

```

### 🌐 Frontend
```
Frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── Component/
│   │   ├── Footer.jsx
│   │   ├── HistorySidebar.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── Notfound.jsx
│   │   └── SearchPage.jsx
│   ├── Context/
│   │   └── Authcontext.jsx
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
│   └── index.html
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔑 API Endpoints (Backend: `http://localhost:5004`)

### 🔐 Authentication Routes (`/auth`)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/auth/google` | Login via Google |
| **GET** | `/auth/github` | Login via GitHub |
| **GET** | `/auth/facebook` | Login via Facebook |
| **POST** | `/auth/logout` | Logout current user |

---

### 👤 User Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/api/me` | Get current logged-in user info |


---

## 🧰 cURL / Postman Examples

### 🔹 Search (POST)
```bash
curl -X POST http://localhost:5004/api/search   -H "Content-Type: application/json"   -d '{"term": "nature"}'   --cookie "connect.sid=<your-session-cookie>"
```

### 🔹 Get History
```bash
curl -X GET http://localhost:5004/api/history   --cookie "connect.sid=<your-session-cookie>"
```

### 🔹 Top Searches
```bash
curl -X GET http://localhost:5004/api/top-searches
```

---

## ✅ Postman Collection (Recommended)

| Folder | Endpoint | Method | Auth Required |
|--------|-----------|--------|----------------|
| **Auth** | `/auth/google` | GET | ❌ |
| | `/auth/github` | GET | ❌ |
| | `/auth/facebook` | GET | ❌ |
| | `/auth/logout` | POST | ✅ |
| **User** | `/api/me` | GET | ✅ |
| **Search** | `/api/search` | POST | ✅ |
| | `/api/history` | GET | ✅ |
| | `/api/top-searches` | GET | ❌ |

---

## 🧾 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
**Sarthak Rastogi**  
🎓 AKTU | 💻 MERN Stack Developer | 
