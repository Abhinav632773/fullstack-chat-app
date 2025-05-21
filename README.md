# Real-Time Chat Application

A modern, real-time chat application built with React, Node.js, and Socket.IO, featuring a clean and responsive user interface.

## Features

- Real-time messaging
- User authentication
- Responsive design
- Modern UI with Tailwind CSS
- Message history
- Online user status
- Typing indicators

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Socket.IO Client
- ESLint for code quality

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB (for message storage)

## Project Structure

```
chat-app/
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static files
│   └── dist/          # Build output
├── backend/           # Node.js backend server
│   └── src/           # Server source files
└── package.json       # Root package configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (if using local database)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

4. Start the application:
   ```bash
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

## Environment Variables

### Backend (.env)
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Socket.IO for real-time communication
- Tailwind CSS for styling
- React.js for the frontend framework 