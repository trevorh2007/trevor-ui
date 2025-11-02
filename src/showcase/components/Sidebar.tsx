import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export interface ComponentItem {
  id: string;
  name: string;
  description: string;
}

interface SidebarProps {
  components: ComponentItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  const location = useLocation();
  const activeComponent = location.pathname.split('/').pop() || '';

  return (
    <div className='w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transition-all duration-150'>
      <div className='p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between transition-colors duration-150'>
        <div>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white transition-colors duration-150'>
            Trevor UI
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-150'>
            Component Library
          </p>
        </div>
        <ThemeToggle />
      </div>

      <nav className='p-4'>
        <div className='mb-6'>
          <Link
            to='/'
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 ${
              location.pathname === '/'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            🏠 Home
          </Link>
        </div>

        <h2 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-colors duration-150'>
          Components
        </h2>
        <ul className='space-y-1'>
          {components.map(component => (
            <li key={component.id}>
              <Link
                to={`/components/${component.id}`}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-150 ${
                  activeComponent === component.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {component.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-8 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-150'>
          <p className='text-xs text-gray-600 dark:text-gray-300 transition-colors duration-150'>
            More components coming soon...
          </p>
        </div>
      </nav>
    </div>
  );
};
