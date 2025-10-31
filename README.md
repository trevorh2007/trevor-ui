# Trevor UI Component Library

A modern, reusable React component library built with Vite, TypeScript, Tailwind CSS v4, and
comprehensive testing with Jest and React Testing Library. Features a dynamic showcase system with
real-time test coverage integration and automated CI/CD workflows.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite
- **Styled with Tailwind CSS v4**: Latest utility-first CSS framework for rapid UI development
- **Dynamic Showcase System**: Interactive component showcase with sidebar navigation and landing
  page
- **Real-time Coverage Integration**: Live test coverage display that updates automatically
- **Fully Tested**: Comprehensive test coverage with Jest and React Testing Library
- **TypeScript Support**: Full type safety and IntelliSense support
- **Automated CI/CD**: GitHub Actions workflows for testing, building, and deployment
- **Manual Release Control**: Workflow dispatch for controlled NPM publishing
- **GitHub Pages Deployment**: Automated deployment with coverage integration
- **Development Ready**: Hot module replacement for fast development

## 🎨 Interactive Showcase

Experience the component library at:
[https://trevorh2007.github.io/trevor-ui/](https://trevorh2007.github.io/trevor-ui/)

The showcase features:

- **📱 Responsive Design**: Professional landing page with component statistics
- **🧭 Sidebar Navigation**: Easy browsing of all available components
- **📊 Dynamic Stats**: Real-time component count, test coverage, and dependency tracking
- **🎯 Live Demos**: Interactive component demonstrations with code examples
- **📈 Coverage Display**: Automatically updated test coverage percentages

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

<Button variant='primary' size='lg' onClick={() => console.log('Clicked!')}>
  Click me!
</Button>;
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/trevorh2007/trevor-ui.git
cd trevor-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Installation

```bash
npm install trevor-ui
```

### Usage

```tsx
import { Button } from 'trevor-ui';

function App() {
  return (
    <Button variant='primary' size='lg'>
      Get Started
    </Button>
  );
}
```

### Development Scripts

- `npm run dev` - Start development server with showcase
- `npm run build` - Build showcase for production
- `npm run build:lib` - Build library for NPM distribution
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report and copy data for showcase
- `npm run test:coverage:copy` - Copy coverage data to public directory for showcase
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Button/         # Button component
│       ├── Button.tsx     # Component implementation
│       ├── Button.test.tsx # Component tests
│       └── index.ts       # Component exports
├── lib/                # Library exports and utilities
│   ├── index.ts        # Main library export file
│   └── lib.test.ts     # Library export tests
├── showcase/           # Interactive showcase system
│   ├── components/     # Showcase-specific components
│   │   ├── ButtonDemo.tsx      # Button component demo
│   │   ├── LandingPage.tsx     # Showcase landing page
│   │   ├── MainContent.tsx     # Content wrapper
│   │   └── Sidebar.tsx         # Navigation sidebar
│   ├── utils/          # Showcase utilities
│   │   └── coverage.ts         # Dynamic coverage integration
│   ├── config.ts       # Showcase configuration
│   └── index.ts        # Showcase exports
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🧪 Testing & Coverage

This project maintains high-quality standards with comprehensive testing:

- **Unit Tests**: All components include thorough unit tests
- **Integration Tests**: Library exports and component interactions tested
- **Real-time Coverage**: Dynamic coverage display in showcase (currently **100%**)
- **Accessibility Testing**: Components tested for a11y compliance
- **Type Safety**: Full TypeScript coverage with strict mode

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report with showcase integration
npm run test:coverage
```

### Coverage Integration

The showcase automatically displays real-time test coverage:

- Coverage data is generated during tests
- Automatically copied to showcase for display
- Updates dynamically in CI/CD workflows
- Visible at both development and production URLs

## 🚀 Deployment & CI/CD

### Automated Workflows

This project includes comprehensive GitHub Actions workflows:

#### 🔄 **Pull Request Checks** (`pr-checks.yml`)

- Runs on every PR to `main`
- Type checking, linting, and formatting validation
- Full test suite with coverage generation
- Automated PR comments with test results and coverage reports
- Quality gate enforcement

#### 🚀 **GitHub Pages Deployment** (`deploy.yml`)

- Automatic deployment on push to `main`
- Builds showcase with fresh coverage data
- Available at: [https://trevorh2007.github.io/trevor-ui/](https://trevorh2007.github.io/trevor-ui/)

#### 📦 **Manual Release & NPM Publish** (`manual-release.yml`)

- Workflow dispatch for controlled releases
- Automatic or manual version bumping (patch/minor/major)
- GitHub release creation with changelog
- NPM publishing with access control
- Pre-release support

### Manual Release Process

1. Navigate to Actions → Manual Release & NPM Publish
2. Choose release type (auto/patch/minor/major)
3. Optionally mark as pre-release
4. Workflow handles versioning, GitHub release, and NPM publishing

### GitHub Pages

The showcase is automatically deployed to GitHub Pages with:

- Real-time test coverage integration
- Dynamic component statistics
- Professional landing page
- Interactive component demos

### Using as a Library

Install the published package:

```bash
npm install trevor-ui
```

Import and use components:

```tsx
import { Button } from 'trevor-ui';
// or import type { ButtonProps } from 'trevor-ui';

function MyApp() {
  return (
    <div>
      <Button variant='primary' size='lg' onClick={() => alert('Hello!')}>
        Click me!
      </Button>
    </div>
  );
}
```

### Adding New Components

To add a new component to the showcase:

1. Create your component in `src/components/ComponentName/`
2. Add comprehensive tests
3. Export from `src/lib/index.ts`
4. Add to showcase config in `src/showcase/config.ts`
5. Create a demo component in `src/showcase/components/ComponentNameDemo.tsx`

The component count and coverage will update automatically!

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-component`
3. Make your changes and add comprehensive tests
4. Ensure all quality checks pass: `npm run lint && npm run type-check && npm test`
5. Update showcase config if adding new components
6. Commit your changes: `git commit -am 'feat: add amazing component'`
7. Push to the branch: `git push origin feature/amazing-component`
8. Submit a pull request

### Pull Request Requirements

- ✅ All tests pass with maintained coverage
- ✅ TypeScript compilation succeeds
- ✅ Linting and formatting checks pass
- ✅ New components include showcase demos
- ✅ Documentation is updated as needed

The automated PR checks will validate your contribution and provide feedback!

## 📄 License

This project is licensed under the MIT License.

## 🔧 Configuration

### Tailwind CSS v4

Tailwind CSS is configured in `config/tailwind.config.js` with:

- Custom design tokens
- Component-specific utilities
- Responsive breakpoints
- Dark mode support (ready)

### TypeScript

TypeScript configuration is split across multiple files:

- `tsconfig.json` - Main configuration with strict mode
- `config/tsconfig.app.json` - Application-specific settings
- `config/tsconfig.test.json` - Test environment settings

### Jest & Testing

Jest is configured in `config/jest.config.json` with:

- TypeScript and JSX support via ts-jest
- jsdom test environment for DOM testing
- CSS module mocking
- Coverage collection from components and lib
- 80% coverage threshold enforcement

### Vite

Vite configuration in `config/vite.config.ts` supports:

- Development server with HMR
- Library building for NPM distribution
- GitHub Pages deployment with correct base path
- TypeScript path aliasing
- CSS processing with PostCSS

### GitHub Actions

Three comprehensive workflows provide:

- **PR Quality Gates**: Automated testing and reporting
- **Deployment**: Showcase deployment with coverage integration
- **Release Management**: Controlled NPM publishing with semantic versioning

## 📊 Project Stats

- **Components**: 1 (Button) - _Auto-updating in showcase_
- **Test Coverage**: 100% - _Real-time display_
- **TypeScript**: 100% type coverage
- **Dependencies**: 2 runtime (React + React DOM)
- **Bundle Size**: Optimized for tree-shaking
