import { Meta, Story } from '@storybook/react';
import React from 'react';

import UItaskModule, { UItaskModuleProps } from './uitask-module';

export default {
  component: UItaskModule,
  title: 'Widgets/UItaskModule',
} as Meta;

const Template: Story<UItaskModuleProps> = (args) => <UItaskModule {...args} />;
const tasks = [
  { id: '00', name: 'tarea 1', cluster: 'cluster 24', isFinished: false },
  { id: '01', name: 'tarea 2', cluster: 'cluster 45', isFinished: true },
];

export const Default = Template.bind({});
Default.args = { tasks: tasks };
