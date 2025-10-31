import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders an outline icon by default', () => {
    render(<Icon name='PlusIcon' aria-label='Plus icon' />);
    const icon = screen.getByLabelText('Plus icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('w-5', 'h-5'); // default md size
  });

  it('renders a solid icon when variant is solid', () => {
    render(<Icon name='PlusIcon' variant='solid' aria-label='Plus icon' />);
    const icon = screen.getByLabelText('Plus icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(
      <Icon name='PlusIcon' size='sm' aria-label='Plus icon' />
    );
    let icon = screen.getByLabelText('Plus icon');
    expect(icon).toHaveClass('w-4', 'h-4');

    rerender(<Icon name='PlusIcon' size='lg' aria-label='Plus icon' />);
    icon = screen.getByLabelText('Plus icon');
    expect(icon).toHaveClass('w-6', 'h-6');

    rerender(<Icon name='PlusIcon' size='xl' aria-label='Plus icon' />);
    icon = screen.getByLabelText('Plus icon');
    expect(icon).toHaveClass('w-8', 'h-8');
  });

  it('applies custom className', () => {
    render(
      <Icon name='PlusIcon' className='text-blue-500' aria-label='Plus icon' />
    );
    const icon = screen.getByLabelText('Plus icon');
    expect(icon).toHaveClass('text-blue-500');
  });

  it('uses default aria-label when not provided', () => {
    render(<Icon name='PlusIcon' />);
    const icon = screen.getByLabelText('PlusIcon icon');
    expect(icon).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Icon name='PlusIcon' aria-label='Add item' />);
    const icon = screen.getByLabelText('Add item');
    expect(icon).toHaveAttribute('role', 'img');
  });

  it('handles non-existent icon gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    render(<Icon name={'NonExistentIcon' as any} />);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Icon "NonExistentIcon" not found in outline variant'
    );
    consoleSpy.mockRestore();
  });
});
