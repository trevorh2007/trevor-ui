import { useState } from 'react';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-gray-100 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
          Component Library Demo
        </h1>

        <div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Button Component</h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-medium mb-2'>Variants</h3>
              <div className='flex gap-4'>
                <Button variant='primary'>Primary</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='danger'>Danger</Button>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Sizes</h3>
              <div className='flex gap-4 items-center'>
                <Button size='sm'>Small</Button>
                <Button size='md'>Medium</Button>
                <Button size='lg'>Large</Button>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>States</h3>
              <div className='flex gap-4'>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium mb-2'>Interactive Example</h3>
              <div className='flex gap-4 items-center'>
                <Button onClick={() => setCount(count + 1)}>
                  Count: {count}
                </Button>
                <Button variant='secondary' onClick={() => setCount(0)}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center text-gray-600'>
          <p>
            This is a demo of the component library built with Vite, React,
            TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
