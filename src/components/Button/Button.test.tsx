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

  it('applies color classes correctly', () => {
    render(<Button color='danger'>Danger Button</Button>);
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

    it('applies shrink-0 class to icon wrapper', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} size='sm'>
          Small button
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const iconWrapper = contentDiv.querySelector(
        'span.shrink-0'
      ) as HTMLElement;

      expect(iconWrapper).toHaveClass('shrink-0');
      expect(iconWrapper).toBeInTheDocument();
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

  describe('Variant functionality', () => {
    it('applies outline variant classes correctly', () => {
      render(<Button variant='outline'>Outline Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent', 'border-2');
    });

    it('applies outline variant with different colors', () => {
      render(
        <Button variant='outline' color='danger'>
          Outline Danger
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-red-600', 'text-red-600');
    });
  });

  describe('Loading state', () => {
    it('shows loading spinner when loading is true', () => {
      render(<Button loading>Loading Button</Button>);
      const button = screen.getByRole('button');

      // Button should be disabled
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');

      // Text should be invisible
      const textSpan = screen.getByText('Loading Button');
      expect(textSpan).toHaveClass('invisible');
    });

    it('hides loading spinner when loading is false', () => {
      render(<Button loading={false}>Normal Button</Button>);
      const button = screen.getByRole('button');

      // Button should not be disabled
      expect(button).not.toBeDisabled();

      // Text should be visible
      const textSpan = screen.getByText('Normal Button');
      expect(textSpan).not.toHaveClass('invisible');
    });

    it('makes icon invisible when loading', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} loading>
          Loading with Icon
        </Button>
      );

      const button = screen.getByRole('button');
      const contentDiv = button.firstChild as HTMLElement;
      const iconSpan = contentDiv.querySelector(
        'span:has([data-testid="test-icon"])'
      ) as HTMLElement;

      expect(iconSpan).toHaveClass('invisible');
    });

    it('prevents click events when loading', () => {
      const handleClick = jest.fn();
      render(
        <Button loading onClick={handleClick}>
          Loading Button
        </Button>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      // Click should not trigger because button is disabled
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('shows loading spinner with right positioned icon', () => {
      const icon = <span data-testid='test-icon'>🚀</span>;
      render(
        <Button icon={icon} iconPosition='right' loading>
          Loading
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      // Both text and icon should be invisible
      const textSpan = screen.getByText('Loading');
      expect(textSpan).toHaveClass('invisible');
    });
  });
});
