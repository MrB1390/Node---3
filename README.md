Mentor-Student Management System
--------------------------------

The Mentor-Student Management System is designed to facilitate the management of mentors and students within an educational context. It allows for the creation of mentors, assignment of students to mentors, and retrieval of information related to mentors and their assigned students.

### Features

*   **Create Mentor**: Allows users to create new mentors with relevant details such as name, course, and email.
*   **List Mentors**: Provides a list of all mentors available in the system.
*   **Assign Students to Mentors**: Enables the assignment of students to specific mentors.
*   **List Students by Mentor**: Retrieves a list of students assigned to a particular mentor.
*   **Create Student**: Allows users to create new students with details like first name, last name, batch, course, and email.
*   **List Students**: Provides a list of all students registered in the system.
*   **Assign Mentor to Student**: Allows the assignment of a mentor to a particular student.
*   **Fetch Assigned Mentor for a Student**: Retrieves information about the mentor assigned to a specific student.

### Technologies Used

*   **Node.js**: JavaScript runtime for server-side logic.
*   **Express.js**: Web application framework for Node.js used to create server-side APIs.
*   **MongoDB**: NoSQL database used for storing mentor and student information.
*   **Mongoose**: MongoDB object modeling tool for Node.js.
*   **dotenv**: Module to load environment variables from a .env file.
*   **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.js.

### Project Structure

*   **Controllers**: Contains logic for handling HTTP requests and responses.
*   **Models**: Defines the schema and model for mentors and students using Mongoose.
*   **Routers**: Defines routes for mentor and student-related endpoints.
*   **Database**: Includes the module for connecting to the MongoDB database.
*   **App.js**: Main entry point of the application where Express.js configuration is defined.

### Setup Instructions

1.  Clone the repository: `git clone <repository-url>`
2.  Navigate to the project directory: `cd mentor-student-management`
3.  Install dependencies: `npm install`
4.  Create a `.env` file in the project root and define the MongoDB connection string.
5.  Start the server: `npm start`
6.  Access the application at `http://localhost:<port>`

### API Endpoints

#### Mentor Routes

*   `POST /api/mentor/create`: Create a new mentor.
*   `GET /api/mentor/mentors`: Get all mentors.
*   `PUT /api/mentor/assign/:id`: Assign students to a mentor.
*   `GET /api/mentor/ment-student/:id`: Get students assigned to a specific mentor.

#### Student Routes

*   `POST /api/student/create`: Create a new student.
*   `GET /api/student/students`: Get all students.
*   `PUT /api/student/assign/:id`: Assign a mentor to a student.
*   `GET /api/student/get-particular/:id`: Get the assigned mentor for a student.
