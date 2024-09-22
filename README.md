# Internshala API

This repository contains a Node.js-based backend API that simulates the functionality of platforms like **Internshala**, allowing users to manage job listings, apply for jobs, and handle user authentication. The project is still in development.

## Features

- User registration and login (authentication via **JWT**)
- Create, Read, Update, Delete (CRUD) operations for job postings
- User profile management
- Job application submission

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing job listings, user data, and applications
- **JWT (JSON Web Token)**: For secure authentication
- **Mongoose**: MongoDB object modeling for Node.js
- **Postman**: API testing

## Installation

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Sachinmehar21/Internshala-api.git
    ```

2. Install dependencies:
    ```bash
    cd Internshala-api
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

4. Run the application:
    ```bash
    npm start
    ```

The API should now be running on `http://localhost:5000`.

## API Endpoints

- **Auth**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login user and return a JWT

- **Jobs**
  - `GET /api/jobs` - Get all job listings
  - `POST /api/jobs` - Create a new job (admin only)
  - `PUT /api/jobs/:id` - Update job posting (admin only)
  - `DELETE /api/jobs/:id` - Delete a job posting (admin only)

- **Applications**
  - `POST /api/jobs/:id/apply` - Apply for a job
  - `GET /api/users/:id/applications` - Get all applications for a user

## Still Working On It 🚧

This project is **currently under development**, and new features are being added regularly. Feel free to explore the code and contribute or suggest improvements.

## Future Features

- Role-based access control (admin, employer, applicant)
- File upload functionality for resumes (using Multer)
- Email notifications for job applications
- Filtering and sorting job listings
- Pagination for job listings

## Contributing

Contributions are welcome! Please fork the repository and create a pull request to propose any changes.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.
