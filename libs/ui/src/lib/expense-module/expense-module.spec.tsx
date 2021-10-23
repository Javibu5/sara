import { render } from '@testing-library/react';

import ExpenseModule from './expense-module';

describe('ExpenseModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseModule />);
    expect(baseElement).toBeTruthy();
  });
});
