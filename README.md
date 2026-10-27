ManageHub – MERN Stack User Management

A simple User Management application built as my first MERN stack project during my self-learning journey.

The project focuses on understanding how a React frontend communicates with a Node.js/Express backend and a MongoDB database through REST APIs.

🚀 Features

- View all users
- Add a new user
- Edit existing user details
- Delete users
- Search users
- REST API integration
- MongoDB database storage
- Responsive and simple user interface

🛠️ Technologies Used

Frontend

- React.js
- JavaScript
- CSS
- Axios

Backend

- Node.js
- Express.js
- REST API

Database

- MongoDB

Development Tools

- Git & GitHub
- Visual Studio Code
- Postman
- MongoDB Atlas

📂 Project Structure

Internal-IT-Asset-Manager/
│
├── client/
│   ├── public/
│   └── src/
│       ├── getuser/
│       ├── userform/
│       ├── api.js
│       ├── App.js
│       └── App.css
│
├── server/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── .env
│   └── index.js
│
└── README.md

🔄 How It Works

The application follows a simple full-stack request flow:

React Frontend
      ↓
   Axios API
      ↓
Express.js Server
      ↓
   API Routes
      ↓
   Controllers
      ↓
MongoDB Database
      ↓
   API Response
      ↓
React UI

For example, when a user is added:

1. The user enters their information in the React form.
2. React sends the data to the backend through an API request.
3. Express receives the request.
4. The backend processes the request.
5. The user data is stored in MongoDB.
6. The server sends a response back to the frontend.
7. React updates the user interface.

🔌 API Operations

The application uses REST API operations for user management.

Method| Operation| Purpose
GET| Get Users| Retrieve users
GET| Get User| Retrieve a specific user
POST| Create User| Add a new user
PUT| Update User| Update user information
DELETE| Delete User| Remove a user

🧪 API Testing

I used Postman to test the backend API endpoints and verify that requests and responses were working correctly.

🗄️ Database

The application uses MongoDB to store user information.

Example user data:

{
  "name": "Demo User",
  "email": "demo@gmail.com",
  "address": "Canada"
}

⚙️ Running the Project Locally

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Install backend dependencies

cd server
npm install

3. Configure environment variables

Create a ".env" file inside the "server" directory.

MONGO_URI=your_mongodb_connection_string
PORT=8000

Do not upload your actual MongoDB connection string or other sensitive credentials to GitHub.

4. Start the backend

npm run dev

The backend will run on:

http://localhost:8000

5. Install frontend dependencies

Open another terminal:

cd client
npm install

6. Start the React application

npm start

The frontend will normally run on:

http://localhost:3000

📚 What I Learned

As my first MERN stack project, this project helped me understand:

- The basic structure of a MERN application
- React components and state
- "useEffect()" and handling data from APIs
- Axios and HTTP requests
- REST API concepts
- Express.js routes and controllers
- CRUD operations
- Connecting Node.js/Express with MongoDB
- Working with MongoDB documents
- Testing APIs with Postman
- Using Git and GitHub for project management

This project is part of my ongoing self-learning journey in full-stack development, and I plan to continue improving my understanding by building more projects independently.

🔮 Future Improvements

Some features I would like to explore in future versions include:

- User authentication and authorization
- Better form validation
- Pagination
- Improved error handling
- Loading states
- More advanced search and filtering
- Better UI/UX
- Deployment

👨‍💻 About

This project was created as part of my self-learning journey in MERN stack development.

I am currently continuing to learn full-stack development and building projects to strengthen my practical understanding.

---

⭐ Thanks for checking out the project!
