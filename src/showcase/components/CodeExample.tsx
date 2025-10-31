import { useState } from 'react';
import { COMPONENT_NAMES } from '../../components/registry';

interface CodeExampleProps {
  code: string;
  jsCode?: string;
  title?: string;
}

export const CodeExample = ({
  code,
  jsCode,
  title = 'Example',
}: CodeExampleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState<'ts' | 'js'>('ts');

  const currentCode = language === 'js' && jsCode ? jsCode : code;

  // Safe syntax highlighting that won't break HTML structure
  const highlightCode = (code: string) => {
    let result = code;

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

    return result;
  };

  const displayCode = highlightCode(currentCode);

  return (
    <div className='mt-4 border border-gray-200 rounded-lg overflow-hidden'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 text-left text-sm font-medium text-gray-700 flex items-center justify-between transition-colors'
      >
        <span>
          {isExpanded
            ? title.replace('Expand', 'Collapse')
            : title.replace('Show', 'Expand')}
        </span>
        <div className='flex items-center gap-2'>
          {(jsCode || language === 'js') && (
            <div className='flex bg-white border border-gray-300 rounded text-xs overflow-hidden'>
              <button
                onClick={e => {
                  e.stopPropagation();
                  setLanguage('ts');
                }}
                className={`px-2 py-1 transition-colors ${
                  language === 'ts'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                TS
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  setLanguage('js');
                }}
                className={`px-2 py-1 transition-colors ${
                  language === 'js'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                JS
              </button>
            </div>
          )}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
        </div>
      </button>
      {isExpanded && (
        <div className='bg-gray-900 text-gray-100 relative'>
          <div className='flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700'>
            <div className='flex items-center gap-2 text-xs text-gray-400'>
              <span
                className={`px-2 py-1 rounded ${
                  language === 'ts' ? 'bg-blue-600 text-white' : 'bg-gray-700'
                }`}
              >
                {language.toUpperCase()}
              </span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(currentCode)}
              className='px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors'
            >
              Copy
            </button>
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
