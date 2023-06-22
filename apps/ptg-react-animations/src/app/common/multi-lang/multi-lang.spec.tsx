import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MultiLang from './multi-lang';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown

  useTranslation: () => {
    return {
      t: (str: any) => str,

      i18n: {
        changeLanguage: () =>
          new Promise(() => {
            console.log('');
          }),
      },
    };
  },
}));

describe('MultiLang', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  let getAllByText: any;

  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <MultiLang />
      </BrowserRouter>
    );

    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getAllByText = component.getAllByText;
    getByLabelText = component.getByLabelText;
    fireEvent.click(container.querySelector('.searchBox '));
    fireEvent.click(getAllByText('French')[0]);
  });
});
