# TedBus - RedBus Clone

TedBus is a clone of the popular bus booking platform, RedBus. This project is built using the MEAN stack, which includes MongoDB, Express.js, Angular, and Node.js. TedBus provides a comprehensive solution for booking bus tickets, managing routes, and viewing booking history.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live demo: [TedBus Demo](#)

## Features

- User authentication and authorization
- Search and book bus tickets
- View booking history
- Admin dashboard for managing routes and bookings
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Other Packages**: body-parser, cors, mongoose, nodemon

## Installation

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (v4.x or later)
- Angular CLI (v11.x or later)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tedbus.git
   cd tedbus/backend
Install backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add your MongoDB connection string and JWT secret:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm run dev
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install frontend dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200

Usage
Register as a new user or log in with existing credentials.
Search for available bus routes and book tickets.
View your booking history.
Admin users can log in to the admin dashboard to manage routes and bookings.
Project Structure
go
Copy code
tedbus/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   ├── angular.json
│   └── package.json
└── README.md
backend/models: Mongoose models for MongoDB
backend/routes: Express routes
backend/controllers: Controllers for handling requests
frontend/src: Angular application source code
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
Name: GIRISH MAHARANA
Email: girishmaharana42@gmail.com
GitHub: bithead
