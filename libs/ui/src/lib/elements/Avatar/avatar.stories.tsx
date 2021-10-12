import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './avatar';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  user: {
    image: null,
    email: 'johndoe@example.com',
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  user: {
    image: '/assets/img/avatar.png',
    email: 'johndoe@example.com',
  },
};
