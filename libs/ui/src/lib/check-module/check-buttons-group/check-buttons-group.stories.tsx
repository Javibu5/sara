import { Meta, Story } from '@storybook/react';
import React from 'react';

import CheckButtonsGroup, {
  CheckButtonsGroupProps,
} from './check-buttons-group';

export default {
  component: CheckButtonsGroup,
  title: 'Widgets/CheckButtonsGroup',
} as Meta;

const Template: Story<CheckButtonsGroupProps> = (args) => (
  <CheckButtonsGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  working: false,
};

export const DoCheckIn = Template.bind({});
DoCheckIn.args = {
  working: true,
};

export const DoCheckout = Template.bind({});
DoCheckout.args = {
  working: false,
};
