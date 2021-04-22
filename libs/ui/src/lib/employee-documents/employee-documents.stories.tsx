import { Meta, Story } from '@storybook/react';
import React from 'react';

import EmployeeDocuments, {
  EmployeeDocumentsProps,
} from './employee-documents';

export default {
  component: EmployeeDocuments,
  title: 'Widgets/EmployeeDocuments',
} as Meta;

const Template: Story<EmployeeDocumentsProps> = (args) => (
  <EmployeeDocuments {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // documents: []
};
