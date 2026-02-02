import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface PopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  className?: string;
  elevation?: number;
  disableBackdropClick?: boolean;
  disableEscapeKey?: boolean;
  marginThreshold?: number;
  disableViewportConstraints?: boolean;
}

interface Position {
  top: number;
  left: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const Popover: React.FC<PopoverProps> = ({
  open,
  anchorEl,
  onClose,
  children,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  className = '',
  elevation = 8,
  disableBackdropClick = false,
  disableEscapeKey = false,
  marginThreshold = 16,
  disableViewportConstraints = false,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const prevPositionRef = useRef<Position>({ top: 0, left: 0 });
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
  });

  // Calculate position based on anchor and transform origins
  const calculatePosition = (): Position => {
    /* istanbul ignore next */
    if (!anchorEl || !popoverRef.current) {
      return { top: 0, left: 0 };
    }

    const anchorRect = anchorEl.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    // Calculate anchor point (getBoundingClientRect is relative to viewport)
    let anchorTop = anchorRect.top;
    let anchorLeft = anchorRect.left;

    switch (anchorOrigin.vertical) {
      case 'center':
        anchorTop += anchorRect.height / 2;
        break;
      case 'bottom':
        anchorTop += anchorRect.height;
        break;
    }

    switch (anchorOrigin.horizontal) {
      case 'center':
        anchorLeft += anchorRect.width / 2;
        break;
      case 'right':
        anchorLeft += anchorRect.width;
        break;
    }

    // Calculate transform offset
    let offsetTop = 0;
    let offsetLeft = 0;

    switch (transformOrigin.vertical) {
      case 'center':
        offsetTop = popoverRect.height / 2;
        break;
      case 'bottom':
        offsetTop = popoverRect.height;
        break;
    }

    switch (transformOrigin.horizontal) {
      case 'center':
        offsetLeft = popoverRect.width / 2;
        break;
      case 'right':
        offsetLeft = popoverRect.width;
        break;
    }

    let top = anchorTop - offsetTop;
    let left = anchorLeft - offsetLeft;

    // Skip viewport constraints if disabled
    if (disableViewportConstraints) {
      return { top, left };
    }

    // Calculate available space and max dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let maxWidth: number | undefined;
    let maxHeight: number | undefined;

    // Adjust horizontal position and width
    if (left < marginThreshold) {
      left = marginThreshold;
      maxWidth = viewportWidth - marginThreshold * 2;
    } else {
      // Always constrain to available space (whether it extends beyond or fits)
      maxWidth = viewportWidth - left - marginThreshold - 20;
    }

    // Adjust vertical position and height
    if (top < marginThreshold) {
      top = marginThreshold;
      maxHeight = viewportHeight - marginThreshold * 2;
    } else {
      // Always constrain to available space (whether it extends beyond or fits)
      maxHeight = viewportHeight - top - marginThreshold;
    }

    return { top, left, maxWidth, maxHeight };
  };

  // Update position when popover opens or when dependencies change
  useEffect(() => {
    if (!open || !anchorEl || !popoverRef.current) return;

    const updatePosition = () => {
      const newPosition = calculatePosition();
      const prev = prevPositionRef.current;

      // Only update if position has meaningfully changed (more than 1px)
      const hasChanged =
        Math.abs(newPosition.top - prev.top) > 1 ||
        Math.abs(newPosition.left - prev.left) > 1 ||
        newPosition.maxWidth !== prev.maxWidth ||
        newPosition.maxHeight !== prev.maxHeight;

      if (hasChanged) {
        prevPositionRef.current = newPosition;
        setPosition(newPosition);
      }
    };

    // Immediate calculation
    updatePosition();

    // Recalculate after a small delay to ensure proper measurement
    const timer = setTimeout(() => {
      updatePosition();
    }, 10);
    /* istanbul ignore next */
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    open,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    marginThreshold,
    disableViewportConstraints,
  ]);

  // Handle window resize
  useEffect(() => {
    if (!open) return;

    const handleResize = () => {
      const newPosition = calculatePosition();
      const prev = prevPositionRef.current;

      // Only update if position has meaningfully changed (more than 1px)
      const hasChanged =
        Math.abs(newPosition.top - prev.top) > 1 ||
        Math.abs(newPosition.left - prev.left) > 1 ||
        newPosition.maxWidth !== prev.maxWidth ||
        newPosition.maxHeight !== prev.maxHeight;

      if (hasChanged) {
        /* istanbul ignore next */
        prevPositionRef.current = newPosition;
        /* istanbul ignore next */
        setPosition(newPosition);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, true);

    /* istanbul ignore next */
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    open,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    marginThreshold,
    disableViewportConstraints,
  ]);

  // Handle escape key
  useEffect(() => {
    if (!open || disableEscapeKey) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    /* istanbul ignore next */
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose, disableEscapeKey]);

  // Handle click outside
  useEffect(() => {
    if (!open || disableBackdropClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Use setTimeout to avoid closing immediately after opening
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    /* istanbul ignore next */
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose, anchorEl, disableBackdropClick]);

  if (!open) return null;

  const elevationClasses = {
    0: '',
    1: 'shadow-sm',
    2: 'shadow',
    4: 'shadow-md',
    8: 'shadow-lg',
    12: 'shadow-xl',
    16: 'shadow-2xl',
  };

  const shadowClass =
    elevationClasses[elevation as keyof typeof elevationClasses] ||
    elevationClasses[8];

  return createPortal(
    <div
      ref={popoverRef}
      className={`fixed z-60 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600 ${shadowClass} ${className}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        maxWidth: position.maxWidth ? `${position.maxWidth}px` : undefined,
        maxHeight: position.maxHeight ? `${position.maxHeight}px` : undefined,
        boxSizing: 'border-box',
      }}
      role='dialog'
      aria-modal='true'
    >
      {children}
    </div>,
    document.body
  );
};
