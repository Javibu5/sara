import { render } from '@testing-library/react';

import EmployeeDocuments from './employee-documents';

describe('EmployeeDocuments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeDocuments />);
    expect(baseElement).toBeTruthy();
  });
});
