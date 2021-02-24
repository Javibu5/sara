import { UserDto } from "@sara/contracts";
import { Meta, Story } from "@storybook/react";
import React from 'react';

import GreetingsUser, { GreetingsUserProps } from "./greetings-user";

export default {
    component: GreetingsUser,
    title: 'Widgets/GreetingsUser'
} as Meta;

const Template: Story<GreetingsUserProps> = (args) => <GreetingsUser {...args} />

const user: UserDto = {
    id: 'id',
    username: 'username',
    roles: [],
}

export const Default = Template.bind({});
Default.arg = {
    username: "Jose Raul"
}