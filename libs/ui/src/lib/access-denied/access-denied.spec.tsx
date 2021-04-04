import { render } from '@testing-library/react';
import React from 'react';

import AccessDenied from './access-denied';

describe('AccessDenied', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccessDenied />);
    expect(baseElement).toBeTruthy();
  });
});
