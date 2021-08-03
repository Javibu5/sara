import { Meta, Story } from '@storybook/react';
import React from 'react';

import GreetingsUser, { GreetingsUserProps } from './greetings-user';

export default {
  component: GreetingsUser,
  title: 'Widgets/GreetingsUser',
} as Meta;

const Template: Story<GreetingsUserProps> = (args) => (
  <GreetingsUser {...args} />
);

export const Default = Template.bind({});
Default.arg = {};

export const LoguedIn = Template.bind({});
LoguedIn.args = {
  username: 'Raul',
};

export const LoguedInWorking = Template.bind({});
LoguedInWorking.args = {
  username: 'Raul',
  working: true,
};
