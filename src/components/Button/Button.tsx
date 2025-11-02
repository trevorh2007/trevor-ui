import React from 'react';
import { Icon } from '../Icon';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  color = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses =
    'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer';

  const variantClasses = {
    primary: 'border-2 border-transparent',
    outline: 'bg-transparent border-2',
  };

  const colorClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary:
      'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
    danger:
      'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',
    success:
      'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600',
    info: 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600',
    warning:
      'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500',
  };

  const outlineColorClasses = {
    primary:
      'border-blue-600 hover:border-blue-700 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:ring-blue-500',
    secondary:
      'border-gray-400 hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:ring-gray-500',
    danger:
      'border-red-600 hover:border-red-700 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 focus:ring-red-500',
    success:
      'border-green-600 hover:border-green-700 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 focus:ring-green-500',
    info: 'border-cyan-600 hover:border-cyan-700 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 focus:ring-cyan-500',
    warning:
      'border-yellow-500 hover:border-yellow-600 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 focus:ring-yellow-500',
  };

  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses =
    disabled || loading
      ? 'opacity-50 cursor-not-allowed hover:cursor-not-allowed'
      : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${variant === 'primary' ? colorClasses[color] : outlineColorClasses[color]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const renderIcon = (iconElement: React.ReactNode) => {
    return <span className='shrink-0'>{iconElement}</span>;
  };

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type='button'
    >
      <div className='flex items-center justify-center gap-2 relative'>
        {loading && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <Icon name='ArrowPathIcon' className='animate-spin' />
          </div>
        )}
        {icon && iconPosition === 'left' && (
          <span className={loading ? 'invisible' : ''}>{renderIcon(icon)}</span>
        )}
        {children && (
          <span className={loading ? 'invisible' : ''}>{children}</span>
        )}
        {icon && iconPosition === 'right' && (
          <span className={loading ? 'invisible' : ''}>{renderIcon(icon)}</span>
        )}
      </div>
    </button>
  );
};
