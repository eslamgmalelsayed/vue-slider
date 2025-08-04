# React Image Slider 🎠

A modern, responsive image slider built with React, TypeScript, Vite, and Tailwind CSS. Fully containerized with Docker for consistent development and deployment.

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS
- ⚡ **Fast Development** - Powered by Vite with HMR
- 🔧 **TypeScript** - Full type safety
- 🐳 **Docker Ready** - Containerized development and production
- 🔄 **Hot Reloading** - Instant updates during development

## 🚀 Quick Start

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (for VS Code IntelliSense)

### Development Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd react-slider
   ```

2. **Install dependencies for VS Code IntelliSense:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run docker:compose-dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:5173/](http://localhost:5173/)

## 🐳 Docker Commands

### Development

```bash
# Start development server with hot reloading
npm run docker:compose-dev

# Stop all containers
npm run docker:compose-down
```

### Production

```bash
# Build and serve production version
npm run docker:compose

# Force rebuild and start
npm run docker:compose-build
```

### Manual Docker Commands

```bash
# Build development image
npm run docker:build-dev

# Build production image
npm run docker:build

# Run development container
npm run docker:run-dev

# Run production container
npm run docker:run
```

## 📁 Project Structure

```
react-slider/
├── src/
│   ├── components/
│   │   └── ImageSlider.tsx    # Main slider component
│   ├── App.tsx                # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/
│   └── vite.svg              # Static assets
├── Dockerfile                # Production build
├── Dockerfile.dev            # Development build
├── docker-compose.yml        # Service orchestration
├── nginx.conf                # Production web server config
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🛠️ Development Workflow

1. **Start development environment:**

   ```bash
   npm run docker:compose-dev
   ```

2. **Edit your code:**

   - Make changes to files in `src/`
   - See instant updates at [http://localhost:5173/](http://localhost:5173/)

3. **Add new dependencies:**

   ```bash
   npm install new-package
   npm run docker:compose-down
   npm run docker:compose-dev  # Restart to include new deps
   ```

4. **Stop development:**
   ```bash
   npm run docker:compose-down
   ```

## 🔧 Technology Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Containerization:** Docker & Docker Compose
- **Web Server:** Nginx (production)
- **Node.js:** v20 (Alpine Linux)

## 📦 Available Scripts

| Command                        | Description                           |
| ------------------------------ | ------------------------------------- |
| `npm run dev`                  | Start Vite dev server (local)         |
| `npm run build`                | Build for production                  |
| `npm run preview`              | Preview production build              |
| `npm run lint`                 | Run ESLint                            |
| `npm run docker:build`         | Build production Docker image         |
| `npm run docker:build-dev`     | Build development Docker image        |
| `npm run docker:run`           | Run production container              |
| `npm run docker:run-dev`       | Run development container             |
| `npm run docker:compose`       | Start production with docker-compose  |
| `npm run docker:compose-dev`   | Start development with docker-compose |
| `npm run docker:compose-build` | Force rebuild and start               |
| `npm run docker:compose-down`  | Stop all containers                   |

## 🌐 Deployment

### Production Build

The production build creates an optimized, multi-stage Docker image:

1. **Build stage:** Compiles and bundles the React app
2. **Production stage:** Serves static files with Nginx

```bash
# Build and test production locally
npm run docker:compose

# Access at http://localhost:3000
```

### Cloud Deployment

The Docker image can be deployed to any cloud platform:

- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Heroku Container Registry**

## 🎨 Customization

### Adding New Images

Edit `src/components/ImageSlider.tsx` and update the `sliderImages` array:

```tsx
const sliderImages = [
  "https://your-image-url-1.jpg",
  "https://your-image-url-2.jpg",
  // Add more images...
];
```

### Styling

The project uses Tailwind CSS. Modify classes in components or add custom styles to `src/index.css`.

### Configuration

- **Vite:** Edit `vite.config.ts`
- **TypeScript:** Edit `tsconfig.json`
- **Docker:** Modify `Dockerfile` or `Dockerfile.dev`
- **Nginx:** Update `nginx.conf` for production server settings

## 🐛 Troubleshooting

### Docker Issues

```bash
# Clean Docker system
docker system prune -a

# Rebuild containers
npm run docker:compose-build
```

### Port Already in Use

```bash
# Check what's using the port
netstat -ano | findstr :5173  # Windows
lsof -i :5173                 # macOS/Linux

# Stop containers
npm run docker:compose-down
```

### Node.js Version Issues

The project uses Node.js 20 in Docker. If you encounter compatibility issues, the Docker environment handles this automatically.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Docker](https://www.docker.com/) - Containerization
- [Lorem Picsum](https://picsum.photos/) - Demo images

---

**Happy coding! 🚀**

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
