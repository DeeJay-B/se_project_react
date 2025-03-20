# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Backend
The backend for this project is available at: [WTWR (What to Wear?) Backend](git@github.com:DeeJay-B/se_project_express.git)

Overview

This project is a complete full-stack application combining React (frontend) and Express (backend). It implements user registration, authorization, profile editing, and dynamic functionality for managing clothing items (adding, deleting, and liking items).

Features

User registration, sign-in, and sign-out functionality

Profile management (edit user name and avatar)

Context management for current user data

Authorization-based UI and functionality restrictions

Like and dislike functionality for clothing items

Secure backend routes with JWT-based authentication

Technologies Used

Frontend: React, JSX, Context API

Backend: Node.js, Express, MongoDB, Mongoose

Authentication: JWT, bcrypt

Styling: BEM methodology

Other packages: CORS, Validator

Setup Instructions

Prerequisites

Ensure you have the following installed:

Node.js (v14+)

MongoDB

npm or yarn

Installation

Clone the frontend repo:

Clone the backend repo:

Install dependencies:

Running the Application

Start MongoDB:

Run the backend server:

Run the frontend server:

Ensure the frontend and backend run on different ports (e.g., 3000 and 3001). Adjust API requests in the frontend to point to http://localhost:3001.

API Endpoints

Auth Endpoints

POST /signup — Register a new user

POST /signin — Sign in and receive a JWT

User Endpoints

GET /users/me — Get current user’s data

PATCH /users/me — Update user’s name and avatar

Clothing Item Endpoints

GET /items — Get all clothing items

POST /items — Add a new clothing item (requires authorization)

DELETE /items/:id — Delete a clothing item (only by the owner)

PUT /items/:id/likes — Like a clothing item

DELETE /items/:id/likes — Unlike a clothing item

Context and State Management

CurrentUserContext: Stores user data globally

isLoggedIn: Boolean state tracking user’s authorization status

JWT Authorization

JWT is stored in localStorage after sign-in

On app load, the token is verified with the backend

Protected routes redirect unauthorized users

Error Handling

401 Unauthorized for invalid credentials or missing token

403 Forbidden for unauthorized actions (e.g., deleting others' items)

409 Conflict for duplicate email registration

Future Improvements

Implement user interface updates on login state change

Add loading and error states for better UX

Expand clothing item features (e.g., categories, filtering)