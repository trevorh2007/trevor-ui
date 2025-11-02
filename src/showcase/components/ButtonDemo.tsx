import { useState } from 'react';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { SectionHeader } from '../../components/SectionHeader';
import { CodeExample } from './CodeExample';

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);
  const [loading, setIsLoading] = useState(false);

  return (
    <div className='space-y-8'>
      <div>
        <SectionHeader>Variants</SectionHeader>
        <div className='flex gap-4 flex-wrap'>
          <Button variant='primary'>Primary (Filled)</Button>
          <Button variant='outline'>Outline</Button>
        </div>
        <CodeExample
          title='Expand variants code'
          code={`<Button variant="primary">Primary (Filled)</Button>
<Button variant="outline">Outline</Button>`}
        />
      </div>

      <div>
        <SectionHeader>Colors</SectionHeader>
        <div className='space-y-3'>
          <div className='flex gap-4 flex-wrap'>
            <Button color='primary'>Primary</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='success'>Success</Button>
            <Button color='danger'>Danger</Button>
            <Button color='warning'>Warning</Button>
            <Button color='info'>Info</Button>
          </div>
          <div className='flex gap-4 flex-wrap'>
            <Button variant='outline' color='primary'>
              Primary
            </Button>
            <Button variant='outline' color='secondary'>
              Secondary
            </Button>
            <Button variant='outline' color='success'>
              Success
            </Button>
            <Button variant='outline' color='danger'>
              Danger
            </Button>
            <Button variant='outline' color='warning'>
              Warning
            </Button>
            <Button variant='outline' color='info'>
              Info
            </Button>
          </div>
        </div>
        <CodeExample
          title='Expand colors code'
          code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>

<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="secondary">Secondary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="danger">Danger</Button>
<Button variant="outline" color="warning">Warning</Button>
<Button variant="outline" color="info">Info</Button>`}
        />
      </div>

      <div>
        <SectionHeader>Sizes</SectionHeader>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button size='xs'>Extra Small</Button>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
        <CodeExample
          title='Expand sizes code'
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </div>

      <div>
        <SectionHeader>With Icons</SectionHeader>
        <div className='flex gap-4 flex-wrap'>
          <Button icon={<Icon name='PlusIcon' />}>Add Item</Button>
          <Button icon={<Icon name='MinusIcon' />} color='danger'>
            Remove
          </Button>
          <Button icon={<Icon name='ArrowDownTrayIcon' />} color='secondary'>
            Download
          </Button>
          <Button
            icon={<Icon name='DocumentArrowDownIcon' />}
            iconPosition='right'
          >
            Save Changes
          </Button>
          <Button
            color='success'
            icon={<Icon name='CheckIcon' />}
            iconPosition='right'
          >
            Success
          </Button>
        </div>
        <CodeExample
          title='Expand icons code'
          code={`<Button icon={<Icon name="PlusIcon" />}>Add Item</Button>
<Button icon={<Icon name="MinusIcon" />} color="danger">Remove</Button>
<Button icon={<Icon name="ArrowDownTrayIcon" />} color="secondary">Download</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition="right">Save Changes</Button>
<Button icon={<Icon name="CheckIcon" />} iconPosition="right">Success</Button>`}
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
          code={`<Button icon={<Icon name="DocumentArrowDownIcon" />} iconPosition="left">Left Icon</Button>
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
          <Button
            loading={loading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            }}
          >
            Click to Load
          </Button>
        </div>
        <CodeExample
          title='Expand states code'
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button icon={<Icon name="DocumentArrowDownIcon" />} disabled>Disabled with Icon</Button>

const [loading, setLoading] = useState(false);

<Button loading={loading} onClick={() => { setLoading(true); setTimeout(() => { setLoading(false); }, 2000); }}>Click to Load</Button>`}
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
            color='secondary'
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
<Button icon={<Icon name="MinusIcon" />} color="secondary" onClick={() => setCount(0)}>
  Reset
</Button>`}
        />
      </div>
    </div>
  );
};
