import { useState } from 'react';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { COMPONENT_NAMES } from '../../components/registry';

interface CodeExampleProps {
  code: string;
  title?: string;
}

export const CodeExample = ({ code, title = 'Example' }: CodeExampleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Safe syntax highlighting that won't break HTML structure
  const highlightCode = (codeStr: string) => {
    let result = codeStr;

    // Escape HTML entities first to prevent conflicts
    result = result
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    // Only highlight strings - keep it simple
    result = result.replace(
      /&quot;(.*?)&quot;/g,
      '<span style="color: #4ade80">&quot;$1&quot;</span>'
    );

    // Highlight component names (Icon, Button, etc.)
    result = result.replace(
      new RegExp(`\\b(${COMPONENT_NAMES.join('|')})\\b`, 'gi'),
      '<span class="text-blue-400 font-medium">$1</span>'
    );

    // Highlight HTML tags
    result = result.replace(
      /&lt;(\/?(?:button|div|span|p|h1|h2|h3|input|form|img|a|ul|li|nav|header|footer|section|article))\b/g,
      '<span style="color: #f472b6">&lt;$1</span>'
    );

    // Highlight curly braces
    result = result.replace(/\{|\}/g, '<span style="color: #fbbf24">$&</span>');

    return result;
  };

  const displayCode = highlightCode(code);

  return (
    <div className='mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-150'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-left text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between transition-all duration-150'
      >
        <span>
          {isExpanded
            ? title.replace('Expand', 'Collapse')
            : title.replace('Show', 'Expand')}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      {isExpanded && (
        <div className='bg-gray-900 dark:bg-gray-950 text-gray-100 relative'>
          <div className='flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-600'>
            <span className='px-2 py-1 rounded bg-blue-600 text-white text-xs'>
              TS
            </span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(code);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
              size='xs'
              variant='outline'
              color='info'
            >
              {isCopied ? (
                <>
                  Copied
                  <Icon name='CheckIcon' size='sm' />
                </>
              ) : (
                'Copy'
              )}
            </Button>
          </div>
          <div className='p-4 overflow-x-auto'>
            <pre className='text-sm text-left'>
              <code dangerouslySetInnerHTML={{ __html: displayCode }} />
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
