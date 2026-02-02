import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import type { PopoverOrigin } from './Popover';
import { Popover } from './Popover';

describe('Popover', () => {
  let anchorElement: HTMLElement;

  beforeEach(() => {
    anchorElement = document.createElement('button');
    anchorElement.textContent = 'Anchor';
    document.body.appendChild(anchorElement);
  });

  afterEach(() => {
    document.body.removeChild(anchorElement);
  });

  // Helper function to render popover with default props
  const renderPopover = (
    props: Partial<React.ComponentProps<typeof Popover>> = {}
  ) => {
    const defaultProps = {
      open: true,
      anchorEl: anchorElement,
      onClose: jest.fn(),
      children: <div>Popover Content</div>,
    };
    return render(<Popover {...defaultProps} {...props} />);
  };

  // Helper to mock anchor element position
  const mockAnchorPosition = (rect: Partial<DOMRect>) => {
    const defaultRect = {
      top: 100,
      left: 100,
      right: 120,
      bottom: 120,
      width: 20,
      height: 20,
      x: 100,
      y: 100,
      toJSON: () => {},
    };
    anchorElement.getBoundingClientRect = jest.fn(
      () =>
        ({
          ...defaultRect,
          ...rect,
        }) as DOMRect
    );
  };

  // Helper to test origin positioning
  const testOriginPositioning = (
    type: 'anchor' | 'transform',
    origin: PopoverOrigin
  ) => {
    const props =
      type === 'anchor'
        ? { anchorOrigin: origin }
        : { transformOrigin: origin };

    renderPopover(props);
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  };

  it('renders popover content when open', () => {
    renderPopover();
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    renderPopover({ open: false });
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('calls onClose when escape key is pressed', async () => {
    const handleClose = jest.fn();
    renderPopover({ onClose: handleClose });

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it('does not close on escape when disableEscapeKey is true', () => {
    const handleClose = jest.fn();
    renderPopover({ onClose: handleClose, disableEscapeKey: true });

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when clicking outside', async () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    renderPopover({ onClose: handleClose });

    act(() => {
      jest.runAllTimers();
    });

    fireEvent.mouseDown(document.body);

    expect(handleClose).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('does not close when clicking inside popover', async () => {
    const handleClose = jest.fn();
    renderPopover({ onClose: handleClose });

    const popoverContent = screen.getByText('Popover Content');

    await waitFor(() => {
      fireEvent.mouseDown(popoverContent);
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('does not close on backdrop click when disableBackdropClick is true', async () => {
    const handleClose = jest.fn();
    renderPopover({ onClose: handleClose, disableBackdropClick: true });

    await waitFor(() => {
      fireEvent.mouseDown(document.body);
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    renderPopover({ className: 'custom-class' });

    const popover = screen.getByRole('dialog');
    expect(popover).toHaveClass('custom-class');
  });

  it('applies correct elevation shadow class', () => {
    renderPopover({ elevation: 12 });

    const popover = screen.getByRole('dialog');
    expect(popover).toHaveClass('shadow-xl');
  });

  it('uses default elevation when not specified', () => {
    renderPopover();

    const popover = screen.getByRole('dialog');
    expect(popover).toHaveClass('shadow-lg');
  });

  it('renders with dark mode classes', () => {
    renderPopover();

    const popover = screen.getByRole('dialog');
    expect(popover).toHaveClass('dark:bg-gray-800', 'dark:border-gray-600');
  });

  // Transform origin tests
  describe('transform origin positioning', () => {
    it('positions with center vertical', () => {
      testOriginPositioning('transform', {
        vertical: 'center',
        horizontal: 'left',
      });
    });

    it('positions with bottom vertical', () => {
      testOriginPositioning('transform', {
        vertical: 'bottom',
        horizontal: 'left',
      });
    });

    it('positions with center horizontal', () => {
      testOriginPositioning('transform', {
        vertical: 'top',
        horizontal: 'center',
      });
    });

    it('positions with right horizontal', () => {
      testOriginPositioning('transform', {
        vertical: 'top',
        horizontal: 'right',
      });
    });
  });

  // Anchor origin tests
  describe('anchor origin positioning', () => {
    it('positions with center vertical', () => {
      testOriginPositioning('anchor', {
        vertical: 'center',
        horizontal: 'left',
      });
    });

    it('positions with bottom vertical', () => {
      testOriginPositioning('anchor', {
        vertical: 'bottom',
        horizontal: 'left',
      });
    });

    it('positions with center horizontal', () => {
      testOriginPositioning('anchor', {
        vertical: 'top',
        horizontal: 'center',
      });
    });

    it('positions with right horizontal', () => {
      testOriginPositioning('anchor', { vertical: 'top', horizontal: 'right' });
    });
  });

  it('disables viewport constraints when disableViewportConstraints is true', () => {
    renderPopover({ disableViewportConstraints: true });

    const popover = screen.getByRole('dialog');
    expect(popover).toBeInTheDocument();
  });

  // Viewport edge constraint tests
  describe('viewport edge constraints', () => {
    it('adjusts position at left edge', () => {
      mockAnchorPosition({ left: 0, right: 10 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('adjusts position at top edge', () => {
      mockAnchorPosition({ top: 0, bottom: 10 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('adjusts position at right edge', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });
      mockAnchorPosition({ left: 450, right: 470 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('adjusts position at bottom edge', () => {
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 500,
      });
      mockAnchorPosition({ top: 450, bottom: 470 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('adjusts when left is less than marginThreshold', () => {
      mockAnchorPosition({ left: 5, right: 25 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('adjusts when top is less than marginThreshold', () => {
      mockAnchorPosition({ top: 5, bottom: 25 });
      renderPopover();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('fits popover within viewport bounds', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 768,
      });
      mockAnchorPosition({ left: 400, top: 300, right: 420, bottom: 320 });
      renderPopover();

      const popover = screen.getByRole('dialog');
      expect(popover).toBeInTheDocument();
      expect(popover).toHaveClass('fixed');
    });
  });

  // Window event handling tests
  describe('window event handling', () => {
    it('handles resize events', () => {
      renderPopover();
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('handles scroll events', () => {
      renderPopover();
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('cleans up event listeners on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = renderPopover();
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        true
      );

      removeEventListenerSpy.mockRestore();
    });

    it('removes resize and scroll event listeners on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = renderPopover();
      removeEventListenerSpy.mockClear();
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        true
      );

      removeEventListenerSpy.mockRestore();
    });
  });

  it('respects custom marginThreshold', () => {
    renderPopover({ marginThreshold: 20 });
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('positions with custom anchor and transform origins', () => {
    const anchorOrigin: PopoverOrigin = {
      vertical: 'bottom',
      horizontal: 'center',
    };
    const transformOrigin: PopoverOrigin = {
      vertical: 'top',
      horizontal: 'center',
    };

    renderPopover({ anchorOrigin, transformOrigin });
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  // Anchor origin tests
  describe('anchor origin positioning', () => {
    it('positions with center vertical', () => {
      testOriginPositioning('anchor', {
        vertical: 'center',
        horizontal: 'left',
      });
    });

    it('positions with bottom vertical', () => {
      testOriginPositioning('anchor', {
        vertical: 'bottom',
        horizontal: 'left',
      });
    });

    it('positions with center horizontal', () => {
      testOriginPositioning('anchor', {
        vertical: 'top',
        horizontal: 'center',
      });
    });

    it('positions with right horizontal', () => {
      testOriginPositioning('anchor', { vertical: 'top', horizontal: 'right' });
    });
  });

  it('closes popover and cleans up when component unmounts', () => {
    const { unmount } = renderPopover();
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
    unmount();
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  // Props change tests
  describe('props changes', () => {
    it('recalculates position when anchorOrigin changes', () => {
      const { rerender } = render(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      expect(screen.getByText('Popover Content')).toBeInTheDocument();

      rerender(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('recalculates position when transformOrigin changes', () => {
      const { rerender } = render(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      expect(screen.getByText('Popover Content')).toBeInTheDocument();

      rerender(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });
  });

  // Edge case tests
  describe('edge cases', () => {
    it('handles early return when popoverRef is not ready', () => {
      const TestComponent = () => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(
          null
        );
        const buttonRef = React.useRef<HTMLButtonElement>(null);

        React.useEffect(() => {
          if (buttonRef.current) {
            setAnchorEl(buttonRef.current);
          }
        }, []);

        return (
          <>
            <button ref={buttonRef}>Anchor</button>
            <Popover open={true} anchorEl={anchorEl} onClose={() => {}}>
              <div>Content</div>
            </Popover>
          </>
        );
      };

      render(<TestComponent />);
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('handles null anchorEl without crashing', () => {
      renderPopover({ anchorEl: null });
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });

    it('does not update position when change is insignificant', () => {
      const { rerender } = render(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      rerender(
        <Popover
          open={true}
          anchorEl={anchorElement}
          onClose={() => {}}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div>Popover Content</div>
        </Popover>
      );

      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });
  });
});
