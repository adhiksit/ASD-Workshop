# Express Product API with Caching

A simple Express.js Product Management API with caching, cache invalidation, and a 1-minute TTL.

## Features

- Express.js REST API
- Layered architecture
- GET all products
- GET product by ID
- POST a product
- PUT a product
- PATCH a product
- DELETE a product
- In-memory caching
- Cache HIT/MISS headers
- 1-minute cache TTL
- Cache invalidation after data modification
- JSON file as the database
- Nodemon for development

## Project Structure

```text
ASD-Workshop/
│
├── controllers/
│   └── productController.js
│
├── database/
│   └── productDatabase.js
│
├── middleware/
│   └── cacheMiddleware.js
│
├── routes/
│   └── productRoutes.js
│
├── services/
│   └── productService.js
│
├── db.json
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── server.js