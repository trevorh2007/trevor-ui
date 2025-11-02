import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../components/Icon';
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
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  const getLinkClasses = (isActive: boolean) =>
    `block w-full text-left px-3 py-2 rounded-md text-sm xl:text-base xl:px-4 xl:py-3 transition-all duration-150 ${
      isActive
        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`;

  return (
    <>
      {/* Mobile header with menu button and theme toggle */}
      <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center'
          aria-label='Toggle menu'
        >
          <Icon
            name={isOpen ? 'XMarkIcon' : 'Bars3Icon'}
            size='md'
            className='text-gray-900 dark:text-white'
          />
        </button>
        <h1 className='text-lg font-bold text-gray-900 dark:text-white leading-none'>
          Trevor UI
        </h1>
        <div className='flex items-center justify-center'>
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 top-[57px] bg-black/50 z-30 md:hidden'
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 xl:w-72 2xl:w-80 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Desktop header */}
        <div className='p-6 xl:p-8 border-b border-gray-200 dark:border-gray-700 hidden md:flex items-center justify-between transition-colors duration-150'>
          <div>
            <h1 className='text-xl xl:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-150'>
              Trevor UI
            </h1>
            <p className='text-sm xl:text-base text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-150'>
              Component Library
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <nav className='p-4 pt-20 md:pt-4 xl:p-6 xl:pt-6'>
          <div className='mb-6'>
            <Link
              to='/'
              onClick={closeSidebar}
              className={getLinkClasses(location.pathname === '/')}
            >
              🏠 Home
            </Link>
          </div>

          <h2 className='text-sm xl:text-base font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-colors duration-150'>
            Components
          </h2>
          <ul className='space-y-1 xl:space-y-2'>
            {components.map(component => (
              <li key={component.id}>
                <Link
                  to={`/components/${component.id}`}
                  onClick={closeSidebar}
                  className={getLinkClasses(activeComponent === component.id)}
                >
                  {component.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-8 p-3 xl:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-150'>
            <p className='text-xs xl:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-150'>
              More components coming soon...
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};
