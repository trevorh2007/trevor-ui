import React, { useState } from 'react';
import { Button } from '../../components/Button';
import type { PopoverOrigin } from '../../components/Popover';
import { Popover } from '../../components/Popover';
import { CodeExample } from './CodeExample';

export const PopoverDemo: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorOrigin, setAnchorOrigin] = useState<PopoverOrigin>({
    vertical: 'bottom',
    horizontal: 'left',
  });
  const [transformOrigin, setTransformOrigin] = useState<PopoverOrigin>({
    vertical: 'top',
    horizontal: 'left',
  });
  const [elevation, setElevation] = useState<number>(8);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Check if anchor and transform origins are the same
  const originsMatch =
    anchorOrigin.vertical === transformOrigin.vertical &&
    anchorOrigin.horizontal === transformOrigin.horizontal;

  const exampleCode = `import React, { useState } from 'react';
import { Popover } from 'trevor-ui';

function MyComponent() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button onClick={handleClick}>Open Popover</button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div className="p-4">
          Popover content goes here
        </div>
      </Popover>
    </>
  );
}`;

  return (
    <div className='space-y-8'>
      {/* Interactive Demo */}
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700'>
        <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
          Interactive Demo
        </h3>

        {/* Controls */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          {/* Anchor Origin Vertical */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Anchor Vertical
            </label>
            <select
              value={anchorOrigin.vertical}
              onChange={e =>
                setAnchorOrigin({
                  ...anchorOrigin,
                  vertical: e.target.value as 'top' | 'center' | 'bottom',
                })
              }
              className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
            >
              <option value='top'>Top</option>
              <option value='center'>Center</option>
              <option value='bottom'>Bottom</option>
            </select>
          </div>

          {/* Anchor Origin Horizontal */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Anchor Horizontal
            </label>
            <select
              value={anchorOrigin.horizontal}
              onChange={e =>
                setAnchorOrigin({
                  ...anchorOrigin,
                  horizontal: e.target.value as 'left' | 'center' | 'right',
                })
              }
              className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
            >
              <option value='left'>Left</option>
              <option value='center'>Center</option>
              <option value='right'>Right</option>
            </select>
          </div>

          {/* Transform Origin Vertical */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Transform Vertical
            </label>
            <select
              value={transformOrigin.vertical}
              onChange={e =>
                setTransformOrigin({
                  ...transformOrigin,
                  vertical: e.target.value as 'top' | 'center' | 'bottom',
                })
              }
              className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
            >
              <option value='top'>Top</option>
              <option value='center'>Center</option>
              <option value='bottom'>Bottom</option>
            </select>
          </div>

          {/* Transform Origin Horizontal */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Transform Horizontal
            </label>
            <select
              value={transformOrigin.horizontal}
              onChange={e =>
                setTransformOrigin({
                  ...transformOrigin,
                  horizontal: e.target.value as 'left' | 'center' | 'right',
                })
              }
              className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
            >
              <option value='left'>Left</option>
              <option value='center'>Center</option>
              <option value='right'>Right</option>
            </select>
          </div>

          {/* Elevation */}
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Elevation: {elevation}
            </label>
            <input
              type='range'
              min='0'
              max='16'
              step='4'
              value={elevation}
              onChange={e => setElevation(Number(e.target.value))}
              className='w-full'
            />
          </div>
        </div>

        {/* Demo Area */}
        <div className='flex items-center justify-center p-12 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-lg'>
          <div className='relative'>
            <button
              onClick={handleClick}
              className='px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors'
            >
              Click to Open Popover
            </button>

            {/* Anchor Origin Indicator */}
            <div
              className='absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg pointer-events-none z-10'
              style={{
                top:
                  anchorOrigin.vertical === 'top'
                    ? '0'
                    : anchorOrigin.vertical === 'center'
                      ? '50%'
                      : '100%',
                left:
                  anchorOrigin.horizontal === 'left'
                    ? '0'
                    : anchorOrigin.horizontal === 'center'
                      ? '50%'
                      : '100%',
                transform: originsMatch
                  ? 'translate(-50%, -50%) translate(-4px, -4px)'
                  : 'translate(-50%, -50%)',
              }}
              title='Anchor Origin Point'
            />
            {/* Purple dot for transform origin when both are at same spot */}
            {originsMatch && (
              <div
                className='absolute w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg pointer-events-none z-10'
                style={{
                  top:
                    anchorOrigin.vertical === 'top'
                      ? '0'
                      : anchorOrigin.vertical === 'center'
                        ? '50%'
                        : '100%',
                  left:
                    anchorOrigin.horizontal === 'left'
                      ? '0'
                      : anchorOrigin.horizontal === 'center'
                        ? '50%'
                        : '100%',
                  transform: 'translate(-50%, -50%) translate(4px, 4px)',
                }}
                title='Transform Origin Point (same as Anchor)'
              />
            )}
          </div>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            elevation={elevation}
          >
            <div className='p-6 min-w-[250px] relative'>
              {/* Transform Origin Indicator - only show when different from anchor */}
              {!originsMatch && (
                <div
                  className='absolute w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg pointer-events-none z-10'
                  style={{
                    top:
                      transformOrigin.vertical === 'top'
                        ? '0'
                        : transformOrigin.vertical === 'center'
                          ? '50%'
                          : '100%',
                    left:
                      transformOrigin.horizontal === 'left'
                        ? '0'
                        : transformOrigin.horizontal === 'center'
                          ? '50%'
                          : '100%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  title='Transform Origin Point'
                />
              )}

              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                Popover Content
              </h4>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                This popover can be positioned relative to its anchor element
                using different anchor and transform origins.
              </p>
              <Button onClick={handleClose} variant='outline' size='sm'>
                Close
              </Button>
            </div>
          </Popover>
        </div>

        {/* Legend */}
        <div className='flex items-center justify-center gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow' />
            <span>Anchor Origin (on button)</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 shadow' />
            <span>Transform Origin (on popover)</span>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className='space-y-6'>
        <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
          Examples
        </h3>

        {/* Basic Example */}
        <div>
          <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
            Basic Usage
          </h4>
          <CodeExample code={exampleCode} title='Basic Usage' />
        </div>

        {/* Positioning Examples */}
        <div>
          <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
            Position Presets
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <PositionPresetExample
              title='Bottom Left (Default)'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            />
            <PositionPresetExample
              title='Bottom Center'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
            <PositionPresetExample
              title='Top Right'
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
            <PositionPresetExample
              title='Right Center'
              anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
              transformOrigin={{ vertical: 'center', horizontal: 'left' }}
            />
          </div>
        </div>
      </div>

      {/* Props Documentation */}
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
        <h3 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>
          Props
        </h3>
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-gray-200 dark:border-gray-700'>
                <th className='py-3 px-4 text-gray-900 dark:text-white font-semibold'>
                  Prop
                </th>
                <th className='py-3 px-4 text-gray-900 dark:text-white font-semibold'>
                  Type
                </th>
                <th className='py-3 px-4 text-gray-900 dark:text-white font-semibold'>
                  Default
                </th>
                <th className='py-3 px-4 text-gray-900 dark:text-white font-semibold'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody className='text-gray-600 dark:text-gray-400'>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>open</td>
                <td className='py-3 px-4 font-mono text-sm'>boolean</td>
                <td className='py-3 px-4'>-</td>
                <td className='py-3 px-4'>
                  Controls whether the popover is visible
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>anchorEl</td>
                <td className='py-3 px-4 font-mono text-sm'>
                  HTMLElement | null
                </td>
                <td className='py-3 px-4'>-</td>
                <td className='py-3 px-4'>
                  The element to anchor the popover to
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>onClose</td>
                <td className='py-3 px-4 font-mono text-sm'>() =&gt; void</td>
                <td className='py-3 px-4'>-</td>
                <td className='py-3 px-4'>
                  Callback fired when the popover should close
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>children</td>
                <td className='py-3 px-4 font-mono text-sm'>React.ReactNode</td>
                <td className='py-3 px-4'>-</td>
                <td className='py-3 px-4'>
                  The content to display inside the popover
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>anchorOrigin</td>
                <td className='py-3 px-4 font-mono text-sm'>PopoverOrigin</td>
                <td className='py-3 px-4'>
                  {'{ vertical: "bottom", horizontal: "left" }'}
                </td>
                <td className='py-3 px-4'>
                  Point on the anchor where the popover attaches
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>transformOrigin</td>
                <td className='py-3 px-4 font-mono text-sm'>PopoverOrigin</td>
                <td className='py-3 px-4'>
                  {'{ vertical: "top", horizontal: "left" }'}
                </td>
                <td className='py-3 px-4'>
                  Point on the popover to align with anchor
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>elevation</td>
                <td className='py-3 px-4 font-mono text-sm'>
                  0 | 1 | 2 | 4 | 8 | 12 | 16
                </td>
                <td className='py-3 px-4'>8</td>
                <td className='py-3 px-4'>Shadow elevation level</td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>
                  disableBackdropClick
                </td>
                <td className='py-3 px-4 font-mono text-sm'>boolean</td>
                <td className='py-3 px-4'>false</td>
                <td className='py-3 px-4'>Prevent closing on outside click</td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>
                  disableEscapeKey
                </td>
                <td className='py-3 px-4 font-mono text-sm'>boolean</td>
                <td className='py-3 px-4'>false</td>
                <td className='py-3 px-4'>Prevent closing with Escape key</td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>marginThreshold</td>
                <td className='py-3 px-4 font-mono text-sm'>number</td>
                <td className='py-3 px-4'>16</td>
                <td className='py-3 px-4'>
                  Minimum distance from viewport edge (px)
                </td>
              </tr>
              <tr className='border-b border-gray-100 dark:border-gray-700'>
                <td className='py-3 px-4 font-mono text-sm'>
                  disableViewportConstraints
                </td>
                <td className='py-3 px-4 font-mono text-sm'>boolean</td>
                <td className='py-3 px-4'>false</td>
                <td className='py-3 px-4'>
                  Disables automatic viewport boundary detection
                </td>
              </tr>
              <tr>
                <td className='py-3 px-4 font-mono text-sm'>className</td>
                <td className='py-3 px-4 font-mono text-sm'>string</td>
                <td className='py-3 px-4'>""</td>
                <td className='py-3 px-4'>Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper component for position presets
const PositionPresetExample: React.FC<{
  title: string;
  anchorOrigin: PopoverOrigin;
  transformOrigin: PopoverOrigin;
}> = ({ title, anchorOrigin, transformOrigin }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // Find the actual button element within the container
    if (containerRef.current) {
      const buttonElement = containerRef.current.querySelector('button');
      if (buttonElement) {
        setAnchorEl(buttonElement);
      }
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700'>
      <h5 className='text-sm font-medium text-gray-900 dark:text-white mb-3'>
        {title}
      </h5>
      <div ref={containerRef}>
        <Button onClick={handleClick} variant='outline' size='sm'>
          Open
        </Button>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <div className='p-4'>
          <p className='text-sm text-gray-900 dark:text-white'>{title}</p>
        </div>
      </Popover>
    </div>
  );
};
