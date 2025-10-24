# React Component Library

A modern, reusable React component library built with Vite, TypeScript, Tailwind CSS, and comprehensive testing with Jest and React Testing Library. Perfect for building consistent UIs across multiple projects.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite
- **Styled with Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Fully Tested**: Comprehensive test coverage with Jest and React Testing Library
- **TypeScript Support**: Full type safety and IntelliSense support
- **GitHub Pages Deployment**: Easy deployment to showcase your components
- **Development Ready**: Hot module replacement for fast development

## 📦 Components

### Button Component

A versatile button component with multiple variants, sizes, and states.

**Props:**

- `children`: React.ReactNode - Button content
- `variant`: 'primary' | 'secondary' | 'danger' - Button style variant
- `size`: 'sm' | 'md' | 'lg' - Button size
- `disabled`: boolean - Disabled state
- `onClick`: () => void - Click handler
- `className`: string - Additional CSS classes

**Example:**

```tsx
import { Button } from 'component-library';

<Button variant="primary" size="lg" onClick={() => console.log('Clicked!')}>
  Click me!
</Button>;
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:lib` - Build library for distribution
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/          # Reusable components
│   └── Button/         # Button component
│       ├── Button.tsx     # Component implementation
│       ├── Button.test.tsx # Component tests
│       └── index.ts       # Component exports
├── lib/                # Library exports
│   └── index.ts        # Main library export file
├── App.tsx             # Demo application
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🧪 Testing

This project uses Jest and React Testing Library for testing. All components include comprehensive tests covering:

- Rendering behavior
- User interactions
- Props validation
- Accessibility features

Run tests:

```bash
npm test
```

Generate coverage report:

```bash
npm run test:coverage
```

## 🚀 Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

The demo application will be available at `https://yourusername.github.io/component-library/`

### Using as a Library

To use this component library in other projects:

1. Build the library: `npm run build:lib`
2. Publish to npm or use as a local package
3. Import components: `import { Button } from 'your-component-library'`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Run tests: `npm test`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔧 Configuration

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.js` and processes all files in the `src` directory.

### TypeScript

TypeScript configuration is split into:

- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.test.json` - Test-specific settings
- `tsconfig.node.json` - Node.js tooling settings

### Jest

Jest is configured in `jest.config.json` with support for:

- TypeScript compilation
- JSX transformation
- CSS module mocking
- DOM testing environment

### Vite

Vite configuration supports both:

- Development server with HMR
- Library building for distribution
- GitHub Pages deployment with correct base path
