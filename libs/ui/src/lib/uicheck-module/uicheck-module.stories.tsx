import { Meta, Story } from '@storybook/react';
import React from 'react';

import UIcheckModule, { UIcheckModuleProps } from './uicheck-module';

export default {
  component: UIcheckModule,
  title: 'Widgets/UIcheckModule',
} as Meta;

const Template: Story<UIcheckModuleProps> = (args) => (
  <UIcheckModule {...args} />
);

const user = {
  id: '1',
  username: 'Pepe',
};

export const Default = Template.bind({});
Default.args = {
  userDto: user,
  checks: [],
};
