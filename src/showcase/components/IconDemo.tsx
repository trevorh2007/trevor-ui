import { Icon } from '../../components/Icon';
import { CodeExample } from './CodeExample';

export const IconDemo = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-3'>Basic Icons</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Icon name='PlusIcon' />
          <Icon name='MinusIcon' />
          <Icon name='HomeIcon' />
          <Icon name='UserIcon' />
          <Icon name='CogIcon' />
          <Icon name='HeartIcon' />
        </div>
        <CodeExample
          title='Expand basic icons code'
          code={`<Icon name="PlusIcon" />
<Icon name="MinusIcon" />
<Icon name="HomeIcon" />
<Icon name="UserIcon" />
<Icon name="CogIcon" />
<Icon name="HeartIcon" />`}
          jsCode={`<Icon name="PlusIcon" />
<Icon name="MinusIcon" />
<Icon name="HomeIcon" />
<Icon name="UserIcon" />
<Icon name="CogIcon" />
<Icon name="HeartIcon" />`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Icon Sizes</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Icon name='StarIcon' size='sm' />
          <Icon name='StarIcon' size='md' />
          <Icon name='StarIcon' size='lg' />
          <Icon name='StarIcon' size='xl' />
        </div>
        <CodeExample
          title='Expand sizes code'
          code={`<Icon name="StarIcon" size="sm" />
<Icon name="StarIcon" size="md" />
<Icon name="StarIcon" size="lg" />
<Icon name="StarIcon" size="xl" />`}
          jsCode={`<Icon name="StarIcon" size="sm" />
<Icon name="StarIcon" size="md" />
<Icon name="StarIcon" size="lg" />
<Icon name="StarIcon" size="xl" />`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Icon Variants</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Icon name='HeartIcon' variant='outline' />
          <Icon name='HeartIcon' variant='solid' />
          <Icon name='StarIcon' variant='outline' />
          <Icon name='StarIcon' variant='solid' />
        </div>
        <CodeExample
          title='Expand variants code'
          code={`<Icon name="HeartIcon" variant="outline" />
<Icon name="HeartIcon" variant="solid" />
<Icon name="StarIcon" variant="outline" />
<Icon name="StarIcon" variant="solid" />`}
          jsCode={`<Icon name="HeartIcon" variant="outline" />
<Icon name="HeartIcon" variant="solid" />
<Icon name="StarIcon" variant="outline" />
<Icon name="StarIcon" variant="solid" />`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Colored Icons</h3>
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
          jsCode={`<Icon name="CheckCircleIcon" className="text-green-500" />
<Icon name="XCircleIcon" className="text-red-500" />
<Icon name="ExclamationTriangleIcon" className="text-yellow-500" />
<Icon name="InformationCircleIcon" className="text-blue-500" />`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Interactive Icons</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <button className='p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer'>
            <Icon
              name='PencilIcon'
              className='text-gray-600 hover:text-gray-800'
            />
          </button>
          <button className='p-2 rounded hover:bg-red-50 transition-colors cursor-pointer'>
            <Icon
              name='TrashIcon'
              className='text-red-500 hover:text-red-700'
            />
          </button>
          <button className='p-2 rounded hover:bg-blue-50 transition-colors cursor-pointer'>
            <Icon
              name='ShareIcon'
              className='text-blue-500 hover:text-blue-700'
            />
          </button>
        </div>
        <CodeExample
          title='Expand interactive icons code'
          code={`<button className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer">
  <Icon name="PencilIcon" className="text-gray-600 hover:text-gray-800" />
</button>
<button className="p-2 rounded hover:bg-red-50 transition-colors cursor-pointer">
  <Icon name="TrashIcon" className="text-red-500 hover:text-red-700" />
</button>
<button className="p-2 rounded hover:bg-blue-50 transition-colors cursor-pointer">
  <Icon name="ShareIcon" className="text-blue-500 hover:text-blue-700" />
</button>`}
          jsCode={`<button className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer">
  <Icon name="PencilIcon" className="text-gray-600 hover:text-gray-800" />
</button>
<button className="p-2 rounded hover:bg-red-50 transition-colors cursor-pointer">
  <Icon name="TrashIcon" className="text-red-500 hover:text-red-700" />
</button>
<button className="p-2 rounded hover:bg-blue-50 transition-colors cursor-pointer">
  <Icon name="ShareIcon" className="text-blue-500 hover:text-blue-700" />
</button>`}
        />
      </div>
    </div>
  );
};
