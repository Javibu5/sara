import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import { OfficeTask, OfficeTaskProps } from './office-task';

export default {
  component: OfficeTask,
  title: 'Widgets/OfficeTask',
  decorators: [withNextRouter],
} as Meta;

const Template: Story<OfficeTaskProps> = (args) => <OfficeTask {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const withTasks = Template.bind({});
withTasks.args = {
  tasks: [
    { id: '1', name: 'Documentacion', cluster: '44', isFinished: false },
    { id: '2', name: 'Documentacion', cluster: '44', isFinished: true },
  ],
};
