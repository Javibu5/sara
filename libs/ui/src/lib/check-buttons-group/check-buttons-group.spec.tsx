import { render } from '@testing-library/react';
import React from 'react';

import CheckButtonsGroup from './check-buttons-group';

describe('CheckButtonsGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckButtonsGroup />);
    expect(baseElement).toBeTruthy();
  });
});
