# MERN AI Chat App

## Overview
The MERN AI Chat App is a real-time chat application integrated with AI capabilities. Users can chat with an AI, ask coding-related questions, and receive intelligent responses. The application is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and utilizes Socket.IO for real-time communication. Additional features include syntax highlighting for code, modern UI components with Remix Icons, and efficient state management through React.

---

## Features

- **AI-Powered Chat**: Users can interact with AI for assistance with coding problems and queries.
- **Real-Time Communication**: Powered by Socket.IO, enabling seamless two-way communication.
- **Syntax Highlighting**: Code snippets are displayed with proper formatting using `highlight.js`.
- **Modern UI**: Built with React and styled using TailwindCSS and Remix Icons.
- **Persistent Data**: MongoDB ensures scalable and efficient data storage.
- **Secure Authentication**: Implements JSON Web Tokens (JWT) and bcrypt for user authentication.

---

## Tech Stack

### Frontend
- **React**: Component-based UI.
- **Vite**: Fast build tool for modern web apps.
- **Socket.IO Client**: Real-time updates.
- **Axios**: Simplified HTTP requests.
- **Remix Icons**: A modern icon library.
- **TailwindCSS**: Utility-first CSS framework.

### Backend
- **Node.js**: JavaScript runtime.
- **Express.js**: Backend framework.
- **Socket.IO**: Enables real-time communication.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object data modeling (ODM) library for MongoDB.
- **ioredis**: Redis client for caching and session management.
- **JWT**: Secure authentication.
- **Bcrypt**: Password hashing.
- **Google Generative AI SDK**: AI capabilities.

---

## Prerequisites

- **Node.js**: Version 22.11.0 or later.
- **MongoDB**: Running instance of MongoDB.

---

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

---

## Folder Structure

### Backend
- **`models/`**: Mongoose models.
- **`routes/`**: Express routes.
- **`controllers/`**: Logic for handling requests.
- **`server.js`**: Entry point for the backend.

### Frontend
- **`src/`**: React application code.
  - **`components/`**: Reusable UI components.
  - **`pages/`**: Different pages of the app.
  - **`assets/`**: Static files and images.

---

## Usage
1. Start both the backend and frontend servers.
2. Open the frontend in your browser at `http://localhost:5173`.
3. Register or log in to start chatting with the AI.

---

## Dependencies

### Backend
```json
"dependencies": {
  "@google/generative-ai": "^0.21.0",
  "bcrypt": "^5.1.1",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "express-validator": "^7.2.0",
  "ioredis": "^5.4.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.8.4",
  "morgan": "^1.10.0",
  "socket.io": "^4.8.1"
}
```

### Frontend
```json
"dependencies": {
  "@webcontainer/api": "^1.5.1-internal.4",
  "axios": "^1.7.9",
  "highlight.js": "^11.11.0",
  "markdown-to-jsx": "^7.7.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.0.2",
  "remixicon": "^4.5.0",
  "socket.io-client": "^4.8.1"
}
```

---

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a Pull Request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---


