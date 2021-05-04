import { render } from '@testing-library/react';
import React from 'react';

import EmployeeTask from './employee-task';

describe('EmployeeTask', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeTask />);
    expect(baseElement).toBeTruthy();
  });
});
