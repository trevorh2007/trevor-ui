import { useState } from 'react';
import { Button } from '../../components/Button';
import { CodeExample } from './CodeExample';

// Simple icon components for demo
const PlusIcon = () => (
  <svg
    className='w-full h-full'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 4v16m8-8H4'
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    className='w-full h-full'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20 12H4'
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className='w-full h-full'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
    />
  </svg>
);

const SaveIcon = () => (
  <svg
    className='w-full h-full'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
    />
  </svg>
);

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-3'>Variants</h3>
        <div className='flex gap-4 flex-wrap'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='danger'>Danger</Button>
        </div>
        <CodeExample
          title='Expand variants code'
          code={`<Button variant='primary'>Primary</Button>
<Button variant='secondary'>Secondary</Button>
<Button variant='danger'>Danger</Button>`}
          jsCode={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Sizes</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
        <CodeExample
          title='Expand sizes code'
          code={`<Button size='sm'>Small</Button>
<Button size='md'>Medium</Button>
<Button size='lg'>Large</Button>`}
          jsCode={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>With Icons</h3>
        <div className='flex gap-4 flex-wrap'>
          <Button icon={<PlusIcon />}>Add Item</Button>
          <Button icon={<MinusIcon />} variant='danger'>
            Remove
          </Button>
          <Button icon={<DownloadIcon />} variant='secondary'>
            Download
          </Button>
          <Button icon={<SaveIcon />} iconPosition='right'>
            Save Changes
          </Button>
        </div>
        <CodeExample
          title='Expand icons code'
          code={`<Button icon={<PlusIcon />}>Add Item</Button>
<Button icon={<MinusIcon />} variant='danger'>Remove</Button>
<Button icon={<DownloadIcon />} variant='secondary'>Download</Button>
<Button icon={<SaveIcon />} iconPosition='right'>Save Changes</Button>`}
          jsCode={`<Button icon={<PlusIcon />}>Add Item</Button>
<Button icon={<MinusIcon />} variant="danger">Remove</Button>
<Button icon={<DownloadIcon />} variant="secondary">Download</Button>
<Button icon={<SaveIcon />} iconPosition="right">Save Changes</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Icon Sizes</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button icon={<PlusIcon />} size='sm'>
            Small Icon
          </Button>
          <Button icon={<PlusIcon />} size='md'>
            Medium Icon
          </Button>
          <Button icon={<PlusIcon />} size='lg'>
            Large Icon
          </Button>
        </div>
        <CodeExample
          title='Expand icon sizes code'
          code={`<Button icon={<PlusIcon />} size='sm'>Small Icon</Button>
<Button icon={<PlusIcon />} size='md'>Medium Icon</Button>
<Button icon={<PlusIcon />} size='lg'>Large Icon</Button>`}
          jsCode={`<Button icon={<PlusIcon />} size="sm">Small Icon</Button>
<Button icon={<PlusIcon />} size="md">Medium Icon</Button>
<Button icon={<PlusIcon />} size="lg">Large Icon</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Icon Positions</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button icon={<SaveIcon />} iconPosition='left'>
            Left Icon
          </Button>
          <Button icon={<SaveIcon />} iconPosition='right'>
            Right Icon
          </Button>
        </div>
        <CodeExample
          title='Expand icon positions code'
          code={`<Button icon={<SaveIcon />} iconPosition='left'>Left Icon</Button>
<Button icon={<SaveIcon />} iconPosition='right'>Right Icon</Button>`}
          jsCode={`<Button icon={<SaveIcon />} iconPosition="left">Left Icon</Button>
<Button icon={<SaveIcon />} iconPosition="right">Right Icon</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>States</h3>
        <div className='flex gap-4 flex-wrap'>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button icon={<SaveIcon />} disabled>
            Disabled with Icon
          </Button>
        </div>
        <CodeExample
          title='Expand states code'
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button icon={<SaveIcon />} disabled>Disabled with Icon</Button>`}
          jsCode={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button icon={<SaveIcon />} disabled>Disabled with Icon</Button>`}
        />
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Interactive Example</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button icon={<PlusIcon />} onClick={() => setCount(count + 1)}>
            Count: {count}
          </Button>
          <Button
            icon={<MinusIcon />}
            variant='secondary'
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
        <CodeExample
          title='Expand interactive code'
          code={`const [count, setCount] = useState(0);

<Button icon={<PlusIcon />} onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>
<Button icon={<MinusIcon />} variant='secondary' onClick={() => setCount(0)}>
  Reset
</Button>`}
          jsCode={`const [count, setCount] = useState(0);

<Button icon={<PlusIcon />} onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>
<Button icon={<MinusIcon />} variant="secondary" onClick={() => setCount(0)}>
  Reset
</Button>`}
        />
      </div>
    </div>
  );
};
