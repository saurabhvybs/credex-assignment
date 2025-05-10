# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Git

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd CREDEX_ASSIGNMENT
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the frontend directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Docker Installation

If you prefer using Docker, follow these steps:

1. Build the Docker image:
```bash
docker build -t cred-ex-frontend .
```

2. Run the container:
```bash
docker run -p 3000:3000 cred-ex-frontend
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── config/          # Configuration files
├── public/              # Static files
└── package.json         # Dependencies and scripts
```

## Troubleshooting

1. If you encounter any issues with dependencies:
```bash
rm -rf node_modules
npm install
```

2. If the development server fails to start:
```bash
npm run dev -- --port 3001
```

3. For Docker-related issues:
```bash
docker system prune -a
docker-compose up --build
```

## Support

For any installation-related issues, please:
1. Check the troubleshooting section
2. Review the error logs
3. Create an issue in the repository

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 
