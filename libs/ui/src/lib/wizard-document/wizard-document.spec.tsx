import { render } from '@testing-library/react';

import WizardDocument from './wizard-document';

describe('WizardDocument', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WizardDocument />);
    expect(baseElement).toBeTruthy();
  });
});
