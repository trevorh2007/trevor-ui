import React from 'react';

export interface ComponentItem {
  id: string;
  name: string;
  description: string;
}

interface SidebarProps {
  components: ComponentItem[];
  activeComponent: string;
  onComponentSelect: (componentId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  components,
  activeComponent,
  onComponentSelect,
}) => {
  return (
    <div className='w-64 bg-white shadow-lg border-r border-gray-200'>
      <div className='p-6 border-b border-gray-200'>
        <h1 className='text-xl font-bold text-gray-900'>Trevor UI</h1>
        <p className='text-sm text-gray-600 mt-1'>Component Library</p>
      </div>

      <nav className='p-4'>
        <div className='mb-6'>
          <button
            onClick={() => onComponentSelect('')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              activeComponent === ''
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            🏠 Home
          </button>
        </div>

        <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>
          Components
        </h2>
        <ul className='space-y-1'>
          {components.map(component => (
            <li key={component.id}>
              <button
                onClick={() => onComponentSelect(component.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeComponent === component.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {component.name}
              </button>
            </li>
          ))}
        </ul>

        <div className='mt-8 p-3 bg-gray-50 rounded-lg'>
          <p className='text-xs text-gray-600'>
            More components coming soon...
          </p>
        </div>
      </nav>
    </div>
  );
};
