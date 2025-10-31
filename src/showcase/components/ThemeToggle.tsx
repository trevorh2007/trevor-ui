import { Icon } from '../../components/Icon';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className='group p-2 rounded-lg transition-all duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 cursor-pointer'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className='transition-all duration-300 ease-in-out group-hover:rotate-12'>
        {theme === 'light' ? (
          <Icon
            name='MoonIcon'
            className='w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-150'
          />
        ) : (
          <Icon
            name='SunIcon'
            className='w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-150'
          />
        )}
      </div>
    </button>
  );
};
