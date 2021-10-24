import { render } from '@testing-library/react';

import ExpenseList from './expense-list';

describe('ExpenseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpenseList />);
    expect(baseElement).toBeTruthy();
  });
});
