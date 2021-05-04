import { render } from '@testing-library/react';
import React from "react";

import OfficeTask from './office-task';

describe('OfficeTask', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OfficeTask />);
    expect(baseElement).toBeTruthy();
  });
});
