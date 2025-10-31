import React from 'react';

export interface SectionHeaderProps {
  /** The text content of the section header */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** HTML heading level (default: h3) */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * A styled section header component with consistent typography and dark mode support.
 * Provides semantic heading structure with customizable levels and styling.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className = '',
  level = 'h3',
}) => {
  const Component = level;

  const baseClasses =
    'font-medium text-gray-900 dark:text-white transition-colors duration-150';

  // Different sizes for different heading levels
  const levelClasses = {
    h1: 'text-3xl mb-6',
    h2: 'text-2xl mb-5',
    h3: 'text-lg mb-3',
    h4: 'text-base mb-3',
    h5: 'text-sm mb-2',
    h6: 'text-xs mb-2',
  };

  const classes = `${baseClasses} ${levelClasses[level]} ${className}`.trim();

  return <Component className={classes}>{children}</Component>;
};
