import { render } from '@testing-library/react';
import React from 'react';

import GreetingsUser from './greetings-user';

describe('GreetingsStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GreetingsUser />);
    expect(baseElement).toBeTruthy();
  });
});
