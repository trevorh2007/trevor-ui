import React from 'react';
import { useLocation } from 'react-router-dom';
import type { ComponentItem } from './Sidebar';

interface MainContentProps {
  components: ComponentItem[];
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({
  components,
  children,
}) => {
  const location = useLocation();
  const activeComponent = location.pathname.split('/').pop() || '';
  const currentComponent = components.find(c => c.id === activeComponent);

  return (
    <div className='flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-all duration-150'>
      <div className='max-w-4xl mx-auto px-6 py-8 pt-20 md:pt-8'>
        {activeComponent && currentComponent && (
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-150'>
              {currentComponent.name}
            </h1>
            <p className='text-gray-600 dark:text-gray-300 transition-colors duration-150'>
              {currentComponent.description}
            </p>
          </div>
        )}

        {/* Component Demo */}
        <div
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-150 ${activeComponent ? 'p-6' : 'p-0 border-0 shadow-none bg-transparent dark:bg-transparent'}`}
        >
          {children}
        </div>

        {/* Footer - only show when viewing a specific component */}
        {activeComponent && (
          <div className='mt-8 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-150'>
            <p>Built with Vite, React, TypeScript, and Tailwind CSS</p>
          </div>
        )}
      </div>
    </div>
  );
};
