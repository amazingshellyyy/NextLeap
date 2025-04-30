# Job Application Tracking System

A comprehensive system to help job seekers manage their job applications, interviews, and professional connections.

## Project Structure

```
├── client/           # Next.js frontend application
├── server/           # Node.js backend application
└── packages/         # Shared packages and types
```

## Features

- Track job applications and their statuses
- Manage company contacts and communications
- Schedule and prepare for interviews
- Document management for resumes and cover letters
- Analytics and insights dashboard

## Tech Stack

### Frontend

- Next.js 14+
- TypeScript
- TailwindCSS
- React Query
- React Hook Form

### Backend

- Node.js with Express
- TypeScript
- PostgreSQL with Prisma
- JWT Authentication
- Redis for caching

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Redis (optional for caching)

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd job-application-tracker
```

2. Install dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Set up environment variables

```bash
# Frontend
cp client/.env.example client/.env.local

# Backend
cp server/.env.example server/.env
```

4. Start development servers

```bash
# Frontend (in client directory)
npm run dev

# Backend (in server directory)
npm run dev
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8000

## License

MIT
