import { render } from '@testing-library/react';

import EmployeeProfile from './employee-profile';

describe('EmployeeProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeProfile />);
    expect(baseElement).toBeTruthy();
  });
});
