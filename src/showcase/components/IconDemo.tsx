import { Icon } from '../../components/Icon';
import { SectionHeader } from '../../components/SectionHeader';
import { CodeExample } from './CodeExample';

// Default icon colors for dark mode compatibility
const DEFAULT_ICON_COLORS = 'text-gray-700 dark:text-gray-300';

export const IconDemo = () => {
  return (
    <div className='space-y-8'>
      <div>
        <SectionHeader>Basic Icons</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Icon name='PlusIcon' className={DEFAULT_ICON_COLORS} />
          <Icon name='MinusIcon' className={DEFAULT_ICON_COLORS} />
          <Icon name='HomeIcon' className={DEFAULT_ICON_COLORS} />
          <Icon name='UserIcon' className={DEFAULT_ICON_COLORS} />
          <Icon name='CogIcon' className={DEFAULT_ICON_COLORS} />
          <Icon name='HeartIcon' className={DEFAULT_ICON_COLORS} />
        </div>
        <CodeExample
          title='Expand basic icons code'
          code={`<Icon name="PlusIcon" className="${DEFAULT_ICON_COLORS}" />
<Icon name="MinusIcon" className="${DEFAULT_ICON_COLORS}" />
<Icon name="HomeIcon" className="${DEFAULT_ICON_COLORS}" />
<Icon name="UserIcon" className="${DEFAULT_ICON_COLORS}" />
<Icon name="CogIcon" className="${DEFAULT_ICON_COLORS}" />
<Icon name="HeartIcon" className="${DEFAULT_ICON_COLORS}" />`}
        />
      </div>

      <div>
        <SectionHeader>Icon Sizes</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
            <Icon
              key={size}
              name='StarIcon'
              size={size}
              className={DEFAULT_ICON_COLORS}
            />
          ))}
        </div>
        <CodeExample
          title='Expand sizes code'
          code={`<Icon name="StarIcon" size="sm" className="${DEFAULT_ICON_COLORS}" />
<Icon name="StarIcon" size="md" className="${DEFAULT_ICON_COLORS}" />
<Icon name="StarIcon" size="lg" className="${DEFAULT_ICON_COLORS}" />
<Icon name="StarIcon" size="xl" className="${DEFAULT_ICON_COLORS}" />`}
        />
      </div>

      <div>
        <SectionHeader>Icon Variants</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          {(['HeartIcon', 'StarIcon'] as const).map(iconName =>
            (['outline', 'solid'] as const).map(variant => (
              <Icon
                key={`${iconName}-${variant}`}
                name={iconName}
                variant={variant}
                className={DEFAULT_ICON_COLORS}
              />
            ))
          )}
        </div>
        <CodeExample
          title='Expand variants code'
          code={`<Icon name="HeartIcon" variant="outline" className="${DEFAULT_ICON_COLORS}" />
<Icon name="HeartIcon" variant="solid" className="${DEFAULT_ICON_COLORS}" />
<Icon name="StarIcon" variant="outline" className="${DEFAULT_ICON_COLORS}" />
<Icon name="StarIcon" variant="solid" className="${DEFAULT_ICON_COLORS}" />`}
        />
      </div>

      <div>
        <SectionHeader>Colored Icons</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Icon name='CheckCircleIcon' className='text-green-500' />
          <Icon name='XCircleIcon' className='text-red-500' />
          <Icon name='ExclamationTriangleIcon' className='text-yellow-500' />
          <Icon name='InformationCircleIcon' className='text-blue-500' />
        </div>
        <CodeExample
          title='Expand colored icons code'
          code={`<Icon name="CheckCircleIcon" className="text-green-500" />
<Icon name="XCircleIcon" className="text-red-500" />
<Icon name="ExclamationTriangleIcon" className="text-yellow-500" />
<Icon name="InformationCircleIcon" className="text-blue-500" />`}
        />
      </div>

      <div>
        <SectionHeader>Interactive Icons</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <button className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer'>
            <Icon
              name='PencilIcon'
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-150'
            />
          </button>
          <button className='p-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer'>
            <Icon
              name='TrashIcon'
              className='text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-150'
            />
          </button>
          <button className='p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer'>
            <Icon
              name='ShareIcon'
              className='text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-150'
            />
          </button>
        </div>
        <CodeExample
          title='Expand interactive icons code'
          code={`<button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
  <Icon name="PencilIcon" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-150" />
</button>
<button className="p-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer">
  <Icon name="TrashIcon" className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-150" />
</button>
<button className="p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors cursor-pointer">
  <Icon name="ShareIcon" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-150" />
</button>`}
        />
      </div>
    </div>
  );
};
