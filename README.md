# Gitsmoke Pro

A high-performance, full-stack web application template built with Cloudflare Workers, Hono, React, and Vite. This project leverages the Cloudflare ecosystem to provide a seamless developer experience and global scalability.

[cloudflarebutton]

## Overview

Gitsmoke Pro is designed to help developers launch production-ready applications on the edge. It combines a powerful TypeScript backend (Cloudflare Workers) with a modern, responsive frontend (React + Tailwind CSS + Shadcn UI), all unified under a single repository structure.

## Key Features

- **Edge-First Architecture**: Built on Cloudflare Workers for ultra-low latency and global distribution.
- **Hono API**: Fast, lightweight web framework for the backend routing and middleware.
- **Vite-Powered Frontend**: Lightning-fast development and optimized production builds.
- **Modern UI Components**: Pre-configured with Tailwind CSS, Shadcn UI, and Lucide icons.
- **Type Safety**: End-to-end TypeScript integration for both frontend and worker code.
- **Integrated Tooling**: Ready-to-use configurations for ESLint, PostCSS, and Wrangler.
- **Error Reporting**: Built-in client-side and server-side error logging and handling.

## Technology Stack

### Backend
- **Cloudflare Workers**: Edge computing platform.
- **Hono**: Ultrafast web framework for the edge.
- **Wrangler**: Command-line tool for Cloudflare Workers.

### Frontend
- **React 18**: Component-based UI library.
- **Vite**: Modern frontend build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn UI**: High-quality, accessible UI components.
- **TanStack Query**: Powerful asynchronous state management.
- **Zustand**: Small, fast, and scalable state management.

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine.
- A Cloudflare account for deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd gitsmoke-pro
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: React frontend application.
  - `components/`: UI components and layout logic.
  - `hooks/`: Custom React hooks.
  - `pages/`: Application page components.
  - `lib/`: Utility functions and shared logic.
- `worker/`: Cloudflare Worker backend.
  - `index.ts`: Main entry point and core middleware.
  - `userRoutes.ts`: Define your API endpoints here.
  - `core-utils.ts`: Internal environment types and utilities.
- `shared/`: (Optional) Shared types or logic between frontend and backend.

## Development

### Adding API Routes
Modify `worker/userRoutes.ts` to add new endpoints. The API is accessible via the `/api/*` prefix.

```typescript
app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from the edge!' });
});
```

### UI Customization
The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js` and add new components using the Shadcn UI library.

## Deployment

Deploying your application to Cloudflare is straightforward.

### Manual Deployment

1. Build the frontend and deploy the worker:
   ```bash
   bun run deploy
   ```

### Automatic Deployment

[cloudflarebutton]

Cloudflare Pages and Workers will automatically handle the routing for your assets and API. Ensure your `wrangler.jsonc` is configured correctly for your Cloudflare environment.

## Scripts

- `bun run dev`: Start Vite development server for both frontend and backend.
- `bun run build`: Build the frontend assets.
- `bun run deploy`: Build and deploy to Cloudflare.
- `bun run lint`: Run ESLint to check for code quality issues.

## License

This project is licensed under the MIT License.