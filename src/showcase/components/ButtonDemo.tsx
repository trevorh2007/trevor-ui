import { useState } from 'react';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { SectionHeader } from '../../components/SectionHeader';
import { CodeExample } from './CodeExample';

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='space-y-8'>
      <div>
        <SectionHeader>Variants</SectionHeader>
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
        <SectionHeader>Sizes</SectionHeader>
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
        <SectionHeader>With Icons</SectionHeader>
        <div className='flex gap-4 flex-wrap'>
          <Button icon={<Icon name='PlusIcon' />}>Add Item</Button>
          <Button icon={<Icon name='MinusIcon' />} variant='danger'>
            Remove
          </Button>
          <Button icon={<Icon name='ArrowDownTrayIcon' />} variant='secondary'>
            Download
          </Button>
          <Button
            icon={<Icon name='DocumentArrowDownIcon' />}
            iconPosition='right'
          >
            Save Changes
          </Button>
        </div>
        <CodeExample
          title='Expand icons code'
          code={`<Button icon={<Icon name="PlusIcon" />}>Add Item</Button>
<Button icon={<Icon name="MinusIcon" />} variant='danger'>Remove</Button>
<Button icon={<Icon name="ArrowDownTrayIcon" />} variant='secondary'>Download</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition='right'>Save Changes</Button>`}
          jsCode={`<Button icon={<Icon name="PlusIcon" />}>Add Item</Button>
<Button icon={<Icon name="MinusIcon" />} variant="danger">Remove</Button>
<Button icon={<Icon name="ArrowDownTrayIcon" />} variant="secondary">Download</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition="right">Save Changes</Button>`}
        />
      </div>

      <div>
        <SectionHeader>Icon Sizes</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button icon={<Icon name='PlusIcon' />} size='sm'>
            Small Icon
          </Button>
          <Button icon={<Icon name='PlusIcon' />} size='md'>
            Medium Icon
          </Button>
          <Button icon={<Icon name='PlusIcon' />} size='lg'>
            Large Icon
          </Button>
        </div>
        <CodeExample
          title='Expand icon sizes code'
          code={`<Button icon={<Icon name="PlusIcon" />} size='sm'>Small Icon</Button>
<Button icon={<Icon name="PlusIcon" />} size='md'>Medium Icon</Button>
<Button icon={<Icon name="PlusIcon" />} size='lg'>Large Icon</Button>`}
          jsCode={`<Button icon={<Icon name="PlusIcon" />} size="sm">Small Icon</Button>
<Button icon={<Icon name="PlusIcon" />} size="md">Medium Icon</Button>
<Button icon={<Icon name="PlusIcon" />} size="lg">Large Icon</Button>`}
        />
      </div>

      <div>
        <SectionHeader>Icon Positions</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button
            icon={<Icon name='DocumentArrowDownIcon' />}
            iconPosition='left'
          >
            Left Icon
          </Button>
          <Button
            icon={<Icon name='DocumentArrowDownIcon' />}
            iconPosition='right'
          >
            Right Icon
          </Button>
        </div>
        <CodeExample
          title='Expand icon positions code'
          code={`<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition='left'>Left Icon</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition='right'>Right Icon</Button>`}
          jsCode={`<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition="left">Left Icon</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition="right">Right Icon</Button>`}
        />
      </div>

      <div>
        <SectionHeader>States</SectionHeader>
        <div className='flex gap-4 flex-wrap'>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button icon={<Icon name='DocumentArrowDownIcon' />} disabled>
            Disabled with Icon
          </Button>
        </div>
        <CodeExample
          title='Expand states code'
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} disabled>Disabled with Icon</Button>`}
          jsCode={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} disabled>Disabled with Icon</Button>`}
        />
      </div>

      <div>
        <SectionHeader>Interactive Example</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button
            icon={<Icon name='PlusIcon' />}
            onClick={() => setCount(count + 1)}
          >
            Count: {count}
          </Button>
          <Button
            icon={<Icon name='MinusIcon' />}
            variant='secondary'
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
        <CodeExample
          title='Expand interactive code'
          code={`const [count, setCount] = useState(0);

<Button icon={<Icon name="PlusIcon" />} onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>
<Button icon={<Icon name="MinusIcon" />} variant='secondary' onClick={() => setCount(0)}>
  Reset
</Button>`}
          jsCode={`const [count, setCount] = useState(0);

<Button icon={<Icon name="PlusIcon" />} onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>
<Button icon={<Icon name="MinusIcon" />} variant="secondary" onClick={() => setCount(0)}>
  Reset
</Button>`}
        />
      </div>
    </div>
  );
};
