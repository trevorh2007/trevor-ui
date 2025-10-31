import React from 'react';
import packageJson from '../../../package.json';
import { Button } from '../../components/Button';
import { showcaseComponents } from '../config';
import { useCoverage } from '../utils/coverage';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const dependencyCount = packageJson.dependencies
    ? Object.keys(packageJson.dependencies).length
    : 0;
  const repositoryUrl =
    typeof packageJson.repository === 'string'
      ? packageJson.repository
      : packageJson.repository?.url?.replace('git+', '').replace('.git', '') ||
        'https://github.com/trevorh2007/trevor-ui';

  const coveragePercentage = useCoverage();

  return (
    <div className='max-w-4xl mx-auto px-6 py-12 text-center'>
      {/* Hero Section */}
      <div className='mb-12'>
        <h1 className='text-5xl font-bold text-gray-900 mb-4'>
          {packageJson.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
          {packageJson.description}
        </p>
        <div className='flex gap-4 justify-center'>
          <Button onClick={onGetStarted} size='lg'>
            Explore Components
          </Button>
          <Button
            variant='secondary'
            size='lg'
            onClick={() => window.open(repositoryUrl, '_blank')}
          >
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className='grid md:grid-cols-3 gap-8 mb-12'>
        <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-sm'>
          <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
            <svg
              className='w-6 h-6 text-blue-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Built for Performance
          </h3>
          <p className='text-gray-600 text-sm'>
            Optimized components with minimal bundle size and excellent runtime
            performance.
          </p>
        </div>

        <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-sm'>
          <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
            <svg
              className='w-6 h-6 text-green-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Type Safe
          </h3>
          <p className='text-gray-600 text-sm'>
            Full TypeScript support with comprehensive type definitions and
            IntelliSense.
          </p>
        </div>

        <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-sm'>
          <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
            <svg
              className='w-6 h-6 text-purple-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2M13 13V9a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H13z'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Customizable
          </h3>
          <p className='text-gray-600 text-sm'>
            Flexible components with multiple variants, sizes, and styling
            options.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className='bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900 mb-1'>
              {showcaseComponents.length}
            </div>
            <div className='text-sm text-gray-600'>Components</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900 mb-1'>100%</div>
            <div className='text-sm text-gray-600'>TypeScript</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900 mb-1'>
              {coveragePercentage}%
            </div>
            <div className='text-sm text-gray-600'>Test Coverage</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900 mb-1'>
              {dependencyCount}
            </div>
            <div className='text-sm text-gray-600'>Dependencies</div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className='text-left max-w-2xl mx-auto'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Quick Start</h2>
        <div className='bg-gray-900 rounded-lg p-4 mb-6'>
          <code className='text-green-400 text-sm'>
            npm install {packageJson.name}
          </code>
        </div>
        <div className='bg-gray-50 rounded-lg p-4'>
          <pre className='text-sm text-gray-800 overflow-x-auto'>
            {`import { Button } from '${packageJson.name}';

function App() {
  return (
    <Button variant="primary" size="lg">
      Get Started
    </Button>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};
