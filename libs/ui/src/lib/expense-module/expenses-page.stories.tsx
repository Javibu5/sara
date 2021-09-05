import { ExpensesPage, ExpensesPageProps } from ".";
import React from 'react';
import { Story, Meta } from "@storybook/react";

export default {
    component: ExpensesPage,
    title: 'Widgets/ExpensesPage'
} as Meta;

const Template: Story<ExpensesPageProps> = (args) => (
    <ExpensesPage {...args} />
);

export const Default = Template.bind({});
Default.arg = {};