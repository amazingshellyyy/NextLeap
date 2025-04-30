import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()

// Initialize Prisma client
export const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(express.json())

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Job Application Tracker API' })
})

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
  }
)

// Start server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
