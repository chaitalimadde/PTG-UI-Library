import { render, fireEvent } from '@testing-library/react';

import DragNDrop from './drag-n-drop';
import DragExampleOne from './dragExampleOne';
import DragExampleTwo from './dragExampleTwo';

//test case for DragNDrop
describe('DragNDrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DragNDrop />);
    expect(baseElement).toBeTruthy();
  });
});

//test case for DragExampleOne
describe('DragExampleOne', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  let innerContainer: any;
  it('should render successfully', async () => {
    const component = render(<DragExampleOne />);
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;
    expect(component.baseElement).toBeTruthy();
    const rangeDate = container.querySelector('#drag1 i');
    fireEvent.mouseDown(rangeDate);
    fireEvent.mouseUp(rangeDate);
  });
});

//test case for DragExampleTwo
describe('DragExampleTwo', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('should render successfully', () => {
    const component = render(<DragExampleTwo />);
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;
    expect(component.baseElement).toBeTruthy();
  });
});
