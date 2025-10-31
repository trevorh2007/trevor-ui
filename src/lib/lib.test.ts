import type { ButtonProps } from '../lib';
import { Button } from '../lib';

describe('Library Exports', () => {
  it('should export Button component', () => {
    expect(Button).toBeDefined();
    expect(typeof Button).toBe('function');
  });

  it('should export ButtonProps type', () => {
    // TypeScript will catch if ButtonProps is not exported correctly
    const props: ButtonProps = {
      children: 'Test',
      variant: 'primary',
      size: 'md',
    };
    expect(props).toBeDefined();
  });
});
