# Project Title

🍽️ EthnicBite
EthnicBite is a web application designed to connect immigrants and international students in Canada with authentic, home-cooked meals that reflect their cultural heritage. It serves as a bridge between individuals seeking comfort food from home and local home chefs offering traditional cuisines.

# Overview

EthnicBite is a web application designed to connect immigrants and international students in Canada with home-cooked meals from their cultural backgrounds. It serves as a bridge between individuals seeking traditional meals and local caterers or skilled home cooks who specialize in specific cuisines.
Problem Space

# Problem Space

Many immigrants and international students struggle to find affordable and authentic home-cooked meals that reflect their cultural heritage. Restaurants may offer commercialized versions of ethnic dishes, but they often lack the authentic flavors, preparation methods, and affordability of home cooking. EthnicBite aims to address this issue by providing a platform where people can request and order traditional home-cooked meals from verified caterers or home chefs.

# User Profile

Meal Seekers:

Immigrants, international students, and anyone looking for authentic ethnic home-cooked meals.

Need access to affordable and traditional home-cooked meals.

Require a user-friendly way to browse, request, and order meals.

Caterers/Home Cooks:

Skilled individuals offering home-cooked meals for their community.

Need an easy way to showcase their meals, availability, and pricing.

Require a system to receive and manage meal requests/orders.

Special Considerations:

Ensuring a seamless and intuitive user experience.

Implementing trust and safety features, such as user reviews and verified caterers.

Supporting diverse dietary preferences and restrictions (e.g., vegetarian, halal, gluten-free options)

# Features

Current Features
Landing Page: Welcomes users and highlights key features.

Find a Home Chef: Directs users to a list of available caterers/home chefs.

Caterers List Page: Displays all caterers with their cuisine specialties.

Caterer Profile Page:

About Me section

Meals Offered with meal images and pricing

Customer Reviews

Option to select meals and proceed to order

Order Page: Displays selected meals, total price, and a form to collect user information for placing the order (no payment functionality yet).

Note: User authentication and login/signup are planned for future development.

## Implementation

### Tech Stack

Frontend: HTML, SCSS, JavaScript, React.js

Backend: Node.js, Express.js

Database: MySQL

Version Control: Git/GitHub

### APIs

Backend Server.

### Sitemap

Homepage: Hero section, cuisine carousel, and more

Caterers List Page (/caterers): List of all chefs

Caterer Profile Page (/caterer/:id): Details about the chef, meals, and reviews

Order Page (/order): Order summary and user info form

### Mockups

Home Page

(See PDF in mockups)

### Data

Users (Meal Seekers & Caterers) :

id, name, email, role, profilePicture, location

Meals :

id, name, description, price, cuisineType, catererId, availability

Orders :

id, mealId, seekerId, catererId, status, timestamp

Reviews :

id, mealId, seekerId, rating, comment

### Endpoints

User Authentication

POST /users/register

Register a new user

Parameters:

name: User's name (string)

email: User's email (string)

password: User's password (string)

Response:

{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }

POST /users/login

Authenticate a user

Parameters:

email: User's email (string)

password: User's password (string)

Response:

{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }

Meal Listings

GET /meals

Retrieve all meals

Response:

[ { "id": 1, "name": "Jollof Rice", "description": "A delicious West African dish", "price": 15, "cuisineType": "Nigerian", "availability": true } ]

POST /meals

Create a new meal (Caterers only)

Parameters:

name: Meal name (string)

description: Meal description (string)

price: Price (number)

cuisineType: Cuisine category (string)

availability: Availability status (boolean)

Response:

{ "id": 2, "name": "Biryani", "description": "Aromatic rice dish", "price": 12, "cuisineType": "Indian", "availability": true }

GET /meals/:id

Retrieve meal details

Response:

{ "id": 2, "name": "Biryani", "description": "Aromatic rice dish", "price": 12, "cuisineType": "Indian", "availability": true }

Orders

POST /orders

Place a new order

Parameters:

mealId: Meal ID (number)

seekerId: User ID (number)

Response:

{ "orderId": 101, "mealId": 2, "status": "Pending" }

GET /orders/:id

Retrieve order details

Response:

{ "orderId": 101, "mealId": 2, "status": "Pending" }

## Roadmap

Sprint 1: Week 1 (March 11 - March 17)

Finalize project scope and wireframes

Set up repository, project structure, and environment

Implement basic authentication (Firebase or JWT-based auth)

Develop Home Page UI and static content

Sprint 2: Week 2 (March 18 - March 24)

Develop Login/Signup Page with authentication

Create Meal Listings Page (UI only, minimal interactivity)

Implement backend API for meal listings

Connect frontend to backend for fetching meals

Sprint 3: Week 3 (March 25 - March 27)

Implement basic order functionality (Minimal UI interaction)

Add styling refinements and responsive design improvements

Test core features and fix critical bugs

Prepare presentation and demo

Scope for Presentation:

Showcase Home Page, Login/Signup Page, and Meal Listings Page

Demonstrate limited functionality (authentication, fetching meal listings, minimal ordering system)

Explain future development plans

## Future Implementations

User Authentication (Signup/Login)

Meal filtering (by cuisine, price, dietary restrictions)

Customer review submission & ratings

Payment Integration (Stripe/PayPal)

Chef dashboard to manage meals and orders

Multilingual support

Mobile App
