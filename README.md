# Real-Time Chat Application

A modern, real-time chat application built with React, Node.js, and Socket.IO, featuring a clean and responsive user interface.

## Screenshots

### Login Page
- Clean, modern login form with email/password fields.
- Call to action to join the community.

### Profile Page
- User can view and update their profile photo, name, and email.
- Account status and member since information displayed.

### Chat UI
- Sidebar with user avatars and online status (green dot indicator).
- Chat window with online/offline status, message bubbles, and image attachments.
- Real-time updates for messages and online status.
- Responsive design for desktop and mobile.

![Login Page]
![Screenshot 2025-05-21 211202](https://github.com/user-attachments/assets/749fd7a5-aba6-45a4-8f2b-81860e008c43)
![Profile Page]
![Screenshot 2025-05-21 211256](https://github.com/user-attachments/assets/20145e65-0ccc-495f-bfe4-145ac291898d)
![Chat Offline]
![Screenshot 2025-05-21 211326](https://github.com/user-attachments/assets/276fc502-caf1-4621-a520-cd22770dc513)
![Chat Online]
![Screenshot 2025-05-21 211742](https://github.com/user-attachments/assets/a55adac9-db74-4ad0-badf-f9ad03240199)
![Image Attachment]
![Screenshot 2025-05-21 211846](https://github.com/user-attachments/assets/9bdc4146-d3df-4265-a632-1eb7a5e9b513)

## Features

- Real-time messaging
- User authentication
- Responsive design
- Modern UI with Tailwind CSS
- Message history
- Online user status (green dot and "Online" text)
- Typing indicators
- Image attachments in chat

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Socket.IO Client

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
