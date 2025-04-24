# AgriTrack - Farm Expense & Income Logger

A MERN stack application for tracking farm expenses and income.

## Features
- Track farm expenses and income
- Categorize transactions
- View transaction history
- Basic analytics and reporting

## Tech Stack
- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend framework
- Node.js: Runtime environment

## Project Structure
```
agritrack/
├── backend/         # Node.js + Express backend
├── frontend/        # React frontend
└── README.md
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with your MongoDB connection string
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## License
MIT 