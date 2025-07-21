# HR Dashboard Backend (Node.js + TypeScript)

A secure, scalable backend for HR dashboards, built with Express.js, TypeScript, MongoDB (Mongoose), and JWT authentication.

## Features
- RESTful APIs for candidate applications
- Fetch, filter, paginate, and sort applications
- Update application status
- JWT-based authentication for sensitive endpoints
- Ready for integration with resume parsing and AI scoring

## Tech Stack
- Node.js + TypeScript
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- dotenv, cors

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Set up environment variables:**
   - Copy `.env` and set your `MONGO_URI` and `JWT_SECRET`.
3. **Run the server (dev mode):**
   ```sh
   npx ts-node src/server.ts
   ```
   Or add a script to `package.json` for `nodemon`:
   ```json
   "scripts": {
     "dev": "nodemon src/server.ts"
   }
   ```
   Then run:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /api/applications` — List applications (supports filtering, pagination, sorting)
- `PATCH /api/applications/:id/status` — Update application status

## Folder Structure

```
src/
  controllers/
  models/
  routes/
  middleware/
  utils/
  app.ts
  server.ts
```

## Security
- All sensitive endpoints require a valid JWT in the `Authorization` header.

## License
MIT
