import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExpensesPage, ExpensesPageProps } from '.';

export default {
  component: ExpensesPage,
  title: 'Widgets/ExpensesPage',
} as Meta;

const Template: Story<ExpensesPageProps> = (args) => <ExpensesPage {...args} />;

export const Default = Template.bind({});
Default.arg = {};
