import React from 'react';
import type { ComponentItem } from './Sidebar';

interface MainContentProps {
  activeComponent: string;
  components: ComponentItem[];
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({
  activeComponent,
  components,
  children,
}) => {
  const currentComponent = components.find(c => c.id === activeComponent);

  return (
    <div className='flex-1 overflow-auto'>
      <div className='max-w-4xl mx-auto px-6 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            {currentComponent?.name || 'Component'}
          </h1>
          <p className='text-gray-600'>{currentComponent?.description}</p>
        </div>

        {/* Component Demo */}
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
          {children}
        </div>

        {/* Footer */}
        <div className='mt-8 text-center text-gray-500 text-sm'>
          <p>Built with Vite, React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};
