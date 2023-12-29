import { render } from '@testing-library/react';
import TooltipExample from './tooltip';

global.URL.createObjectURL = jest.fn();

describe('TooltipExample', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<TooltipExample />);
    expect(baseElement).toBeTruthy();
  });
});
