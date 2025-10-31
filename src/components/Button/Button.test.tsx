import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    render(<Button variant='danger'>Danger Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-600');
  });

  it('applies size classes correctly', () => {
    render(<Button size='lg'>Large Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  describe('Icon functionality', () => {
    it('renders icon when provided', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(<Button icon={icon}>Button with icon</Button>);

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Button with icon')).toBeInTheDocument();
    });

    it('renders icon on the left by default', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(<Button icon={icon}>Button text</Button>);

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const children = Array.from(contentDiv.children);

      // First child should be the icon wrapper span
      const iconWrapper = children[0] as HTMLElement;
      expect(iconWrapper.tagName).toBe('SPAN');
      expect(
        iconWrapper.querySelector('[data-testid="test-icon"]')
      ).toBeInTheDocument();

      // Second child should be the text span
      const textSpan = children[1] as HTMLElement;
      expect(textSpan.tagName).toBe('SPAN');
      expect(textSpan.textContent).toBe('Button text');
    });

    it('renders icon on the right when iconPosition is right', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} iconPosition='right'>
          Button text
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const children = Array.from(contentDiv.children);

      // First child should be the text span
      const textSpan = children[0] as HTMLElement;
      expect(textSpan.tagName).toBe('SPAN');
      expect(textSpan.textContent).toBe('Button text');

      // Second child should be the icon wrapper span
      const iconWrapper = children[1] as HTMLElement;
      expect(iconWrapper.tagName).toBe('SPAN');
      expect(
        iconWrapper.querySelector('[data-testid="test-icon"]')
      ).toBeInTheDocument();
    });

    it('applies correct icon size classes for small buttons', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} size='sm'>
          Small button
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const iconWrapper = contentDiv.querySelector(
        'span[class*="w-4"]'
      ) as HTMLElement;

      expect(iconWrapper).toHaveClass('w-4', 'h-4', 'shrink-0');
    });

    it('applies correct icon size classes for medium buttons', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} size='md'>
          Medium button
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const iconWrapper = contentDiv.querySelector(
        'span[class*="w-5"]'
      ) as HTMLElement;

      expect(iconWrapper).toHaveClass('w-5', 'h-5', 'shrink-0');
    });

    it('applies correct icon size classes for large buttons', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} size='lg'>
          Large button
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const iconWrapper = contentDiv.querySelector(
        'span[class*="w-6"]'
      ) as HTMLElement;

      expect(iconWrapper).toHaveClass('w-6', 'h-6', 'shrink-0');
    });

    it('renders button without icon when icon prop is not provided', () => {
      render(<Button>Text only button</Button>);

      expect(screen.getByText('Text only button')).toBeInTheDocument();
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });

    it('handles click events with icon present', () => {
      const handleClick = jest.fn();
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} onClick={handleClick}>
          Click me
        </Button>
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
