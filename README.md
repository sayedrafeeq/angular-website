# My Angular App

A modern Angular application built with Angular 21, featuring Angular Material for UI components and server-side rendering (SSR) support.

## 🚀 Features

- **Angular 21** - Latest version of Angular framework
- **Angular Material** - Beautiful and accessible UI components
- **Server-Side Rendering (SSR)** - Improved SEO and performance
- **TypeScript** - Type-safe development
- **Vitest** - Modern testing framework

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v11.10.0 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd angular-website
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🏗️ Build

Build the application for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run the unit tests:
```bash
npm test
```

## 📦 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run watch` - Builds the application in watch mode for development
- `npm test` - Runs the unit tests
- `npm run serve:ssr:my-angular-app` - Runs the SSR server

## 🎨 Project Structure

```
src/
├── app/                 # Angular application components
├── assets/              # Static assets
├── environments/        # Environment configurations
├── main.ts              # Application entry point
├── main.server.ts       # SSR entry point
├── server.ts            # SSR server configuration
├── material-theme.scss  # Angular Material theme
└── styles.css           # Global styles
```

## 🧭 Dependencies

### Core Dependencies
- `@angular/core` - Angular framework core
- `@angular/common` - Angular common utilities
- `@angular/router` - Angular routing
- `@angular/forms` - Angular forms
- `@angular/material` - Angular Material UI components
- `@angular/cdk` - Angular Component Development Kit
- `@angular/ssr` - Angular Server-Side Rendering
- `express` - Node.js web framework

### Development Dependencies
- `@angular/cli` - Angular command-line interface
- `@angular/build` - Angular build tools
- `typescript` - TypeScript compiler
- `vitest` - Modern testing framework
- `jsdom` - DOM implementation for testing

## 🔧 Configuration

### Code Formatting
This project uses Prettier for code formatting with the following configuration:
- Print width: 100 characters
- Single quotes
- Angular parser for HTML files

### Build Configuration
- Development mode: No optimization, source maps enabled
- Production mode: Full optimization, output hashing enabled
- Budget limits configured for bundle size monitoring

## 🌐 Deployment

### Vercel Deployment
This project is configured for easy deployment to Vercel. See `VERCEL_DEPLOYMENT.md` for detailed instructions.

**Quick Deploy:**
```bash
npm i -g vercel
vercel
```

### Other Deployment Options
For other deployment methods, refer to the `DEPLOYMENT_FILES_GUIDE.md` file in the project root.

## 📄 License

This project is private.

---

Built with ❤️ using Angular 21
