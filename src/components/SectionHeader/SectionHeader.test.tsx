import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders children correctly', () => {
    render(<SectionHeader>Test Header</SectionHeader>);
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('renders as h3 by default', () => {
    render(<SectionHeader>Test Header</SectionHeader>);
    const header = screen.getByRole('heading', { level: 3 });
    expect(header).toBeInTheDocument();
  });

  it('renders with custom heading level', () => {
    render(<SectionHeader level='h2'>Test Header</SectionHeader>);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SectionHeader className='custom-class'>Test Header</SectionHeader>);
    const header = screen.getByText('Test Header');
    expect(header).toHaveClass('custom-class');
  });

  it('applies default styling classes', () => {
    render(<SectionHeader>Test Header</SectionHeader>);
    const header = screen.getByText('Test Header');
    expect(header).toHaveClass('font-medium');
    expect(header).toHaveClass('text-gray-900');
    expect(header).toHaveClass('dark:text-white');
  });
});
