import { render } from '@testing-library/react';
import React from 'react';

import WizardUploadDocument from './wizard-upload-document';

describe('WizardUploadDocument', () => {
  xit('should render successfully', () => {
    const { baseElement } = render(<WizardUploadDocument />);
    expect(baseElement).toBeTruthy();
  });
});
