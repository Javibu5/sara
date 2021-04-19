import { render } from '@testing-library/react';
import React from 'react';

import CheckButtonsGroup from './check-buttons-group';

describe('CheckButtonsGroup', () => {
  xit('should render successfully', () => {
    const { baseElement } = render(<CheckButtonsGroup working={true} />);
    expect(baseElement).toBeTruthy();
  });
});
