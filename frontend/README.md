# We Gather - Frontend

This is a React + TypeScript application built with Vite and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **thirdweb** - Web3 wallet connection and NFT claiming

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

3. Update the environment variables in `.env`:
   - `VITE_THIRDWEB_CLIENT_ID` - Your thirdweb client ID
   - `VITE_CONTRACT_ADDRESS` - Your NFT contract address
   - `VITE_BACKEND_URL` - Backend API URL (default: http://localhost:3001)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable React components
├── pages/          # Page components (Home, Claim)
├── App.tsx         # Main app component with routes
├── main.tsx        # Application entry point
├── index.css       # Global styles with Tailwind
└── vite-env.d.ts   # Vite environment types
```

## Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the application via `import.meta.env`.

