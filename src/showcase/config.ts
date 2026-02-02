import type { ComponentItem } from './components/Sidebar';

export const showcaseComponents: ComponentItem[] = [
  {
    id: 'button',
    name: 'Button',
    description:
      'Interactive button component with multiple variants and sizes',
  },
  {
    id: 'icon',
    name: 'Icon',
    description:
      'Heroicons-based icon component with multiple sizes and variants',
  },
  {
    id: 'popover',
    name: 'Popover',
    description:
      'Flexible popover component with adjustable anchor positioning',
  },
  // Example future components - these will automatically update the count!
  // {
  //   id: 'input',
  //   name: 'Input',
  //   description: 'Text input component with validation and styling options',
  // },
  // {
  //   id: 'modal',
  //   name: 'Modal',
  //   description: 'Overlay dialog component for focused user interactions',
  // },
  // Add new components here as they're created
];
