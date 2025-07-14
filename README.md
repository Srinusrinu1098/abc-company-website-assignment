🌐 Live Demo

Admin UI (Edit Heading): 👉   (https://abc-company-website-assignment-admi.vercel.app/)

User UI (View Heading): 👉    (https://abc-company-website-assignment-user.vercel.app/)

Backend API (Render): 👉      (https://abc-company-website-assignment.onrender.com)

🗂 Project Structure

abc-company-website/
├── backend/                        # Node.js Backend
├── client-frontend/                # React Frontend user
├── heading-change-frontend/        # React Frontend admin
└── README.md
📦 Technologies Used
Frontend: React, next.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MySQL

API Tools: Axios

Others: Dotenv, CORS

🧑‍💻 How to Run Locally
1. Clone the Repository

git clone https://github.com/yourusername/abc-company-website.git
cd abc-company-website
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Environment Variables (.env)

Create a .env file inside server-backend/:


DB_HOST=nozomi.proxy.rlwy.net
DB_USER=root
DB_PASS=VAwaEDQKnrihIkKBrwIunXBgWURtGcBk
DB_NAME=railway
DB_PORT=39491


Start Backend Server


npm install
nodemon index.js
3. Frontend Setup

cd ../client-frontend
npm install
npm run dev



cd ../heading-change-frontend
npm install
npm run dev


🛢 Database Schema
Run this SQL to create the database and table:


CREATE DATABASE abc_company;

USE abc_company;

CREATE TABLE heading (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sentence TEXT
);

-- Insert initial heading
UPDATE Headings SET sentence = "Welcome to ABC Company" where id = 1;
🔄 API Documentation
GET /api/operations
Fetch the current heading.

Method: GET

Response:

json
Copy
Edit
{
  "id": 1,
  "sentence": "Welcome to ABC Company"
}
PUT /api/operation/
Update the heading text.

Method: PUT

URL Parameter: id (e.g., /api/operation)

Request Body:


{
  "sentence": "New updated heading text"
}
Response:


{
  "message": "Heading updated successfully"
}
🚀 Deployment Instructions
Backend (Render)
Create a new Web Service on Render.

Connect your GitHub repo.

Set environment variables (.env) in Render Dashboard.

Use the Start Command: npm start

Render will automatically redeploy on new pushes.

Frontend (Vercel)
Go to https://vercel.com and import the frontend repo.

Set environment variable  like:

NEXT_PUBLIC_BACKEND_URL = https://abc-company-website-assignment.onrender.com

Vercel auto-deploys on push
Build the frontend with:


cd client-frontend
npm run build
Serve the frontend using Nginx or a static file server by copying dist/ to your server's web root.

Ensure CORS is enabled and your frontend can reach the backend API.

✅ Features
Dynamic heading display

Editable text area to update the heading

Axios integration for API calls

Persistent storage using MySQL



