import React from 'react';
import { Meta, Story } from '@storybook/react';
import EmployeeTask, { EmployeeTaskProps } from './employee-task';



export default {
    component: EmployeeTask,
    title: 'Widgets/EmployeeTask',
} as Meta;


const Template: Story<EmployeeTaskProps> = (args) => <EmployeeTask {...args} />

export const Default = Template.bind({});
Default.args = {
    // tasks: []
}

export const withTask = Template.bind({});
withTask.args = {
    tasks: [{ id: '1', name: 'Caja 48', cluster: '44', isFinished: true }]
}

export const withTasks = Template.bind({});
withTasks.args = {
    tasks: [{ id: '1', name: 'Caja 48', cluster: '44', isFinished: true },
    { id: '2', name: 'Caja 35', cluster: '44', isFinished: true }]
}