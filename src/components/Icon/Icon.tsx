import * as HeroiconsOutline from '@heroicons/react/24/outline';
import * as HeroiconsSolid from '@heroicons/react/24/solid';
import React from 'react';

// Create type-safe icon name type from available icons
type HeroIconName = keyof typeof HeroiconsOutline;

export interface IconProps {
  /** Icon name from Heroicons */
  name: HeroIconName;
  /** Icon variant - outline or solid */
  variant?: 'outline' | 'solid';
  /** Icon size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom className for additional styling */
  className?: string;
  /** Accessible label for screen readers */
  'aria-label'?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
} as const;

/**
 * Icon component using Heroicons with consistent sizing and styling.
 * Provides type-safe icon names and responsive sizing options.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  variant = 'outline',
  size = 'md',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  // Get the icon component from the appropriate icon set
  const IconComponent =
    variant === 'solid' ? HeroiconsSolid[name] : HeroiconsOutline[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in ${variant} variant`);
    return null;
  }

  const classes = `${sizeClasses[size]} ${className}`.trim();

  return (
    <IconComponent
      className={classes}
      aria-label={ariaLabel || `${name} icon`}
      role='img'
      {...props}
    />
  );
};
