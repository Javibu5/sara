import React from 'react';
import { render } from '@testing-library/react';

import UIcheckModule from './uicheck-module';

describe('UIcheckModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UIcheckModule />);
    expect(baseElement).toBeTruthy();
  });
});
