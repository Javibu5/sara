import { Meta, Story } from '@storybook/react';
import React from 'react';

import LastChecks, { LastChecksProps } from './last-checks';

export default {
  component: LastChecks,
  title: 'Widgets/LastChecks',
} as Meta;

const Template: Story<LastChecksProps> = (args) => <LastChecks {...args} />;

const today = new Date();

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
  working: false,
  checks: [],
};

export const withOpenCheck = Template.bind({});
withOpenCheck.args = {
  date: new Date(),
  working: true,
  checks: [{ id: '1', inAt: new Date(today.setHours(8)) }],
};

export const withCloseCheck = Template.bind({});
withCloseCheck.args = {
  date: new Date(),
  working: false,
  checks: [
    {
      id: '1',
      inAt: new Date(today.setHours(8)),
      outAt: new Date(today.setHours(14)),
    },
  ],
};

export const withMultipleChecks = Template.bind({});
withMultipleChecks.args = {
  date: new Date(),
  working: true,
  checks: [
    {
      id: '1',
      inAt: new Date(today.setHours(8)),
      outAt: new Date(today.setHours(14)),
    },
    { id: '2', inAt: new Date(today.setHours(16)) },
  ],
};
