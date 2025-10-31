import { useState } from 'react';
import { Button } from '../../components/Button';

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium mb-3'>Variants</h3>
        <div className='flex gap-4 flex-wrap'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='danger'>Danger</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Sizes</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>States</h3>
        <div className='flex gap-4 flex-wrap'>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-3'>Interactive Example</h3>
        <div className='flex gap-4 items-center flex-wrap'>
          <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
          <Button variant='secondary' onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
