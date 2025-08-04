# Docker Instructions for React Slider

This project includes Docker support for both development and production environments.

## Quick Start

### Production Build

```bash
# Build and run with Docker Compose
npm run docker:compose

# Or manually
npm run docker:build
npm run docker:run
```

The app will be available at http://localhost:3000

### Development with Hot Reload

```bash
# Run development server with Docker Compose
npm run docker:compose-dev

# Or manually
npm run docker:build-dev
npm run docker:run-dev
```

The app will be available at http://localhost:5173

## Docker Commands

### Production

- `npm run docker:build` - Build production Docker image
- `npm run docker:run` - Run production container
- `npm run docker:compose` - Start with docker-compose
- `npm run docker:compose-build` - Build and start with docker-compose

### Development

- `npm run docker:build-dev` - Build development Docker image
- `npm run docker:run-dev` - Run development container
- `npm run docker:compose-dev` - Start development server with docker-compose

### General

- `npm run docker:compose-down` - Stop all containers

## Manual Docker Commands

### Production

```bash
# Build the production image
docker build -t react-slider .

# Run the production container
docker run -p 3000:80 react-slider
```

### Development

```bash
# Build the development image
docker build -f Dockerfile.dev -t react-slider-dev .

# Run the development container with volume mounting
docker run -p 5173:5173 -v ./src:/app/src react-slider-dev
```

## Docker Compose

### Production

```bash
docker-compose up
```

### Development

```bash
docker-compose --profile dev up react-slider-dev
```

## File Structure

- `Dockerfile` - Production multi-stage build
- `Dockerfile.dev` - Development environment with hot reload
- `docker-compose.yml` - Docker Compose configuration
- `nginx.conf` - Nginx configuration for production
- `.dockerignore` - Files to exclude from Docker context

## Notes

- Production build uses Nginx to serve static files
- Development build includes hot reloading
- Volume mounting is configured for development workflow
- The app uses Vite with polling enabled for Windows Docker compatibility
