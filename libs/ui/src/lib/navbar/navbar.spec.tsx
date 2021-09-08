import { render } from '@testing-library/react';
import React from 'react';

import Navbar from './navbar';

describe('Navbar', () => {
  xit('should render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
