import { StoryFn, Meta } from '@storybook/react';

import { Home } from '.';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta<typeof Home>;

const Template: StoryFn<typeof Home> = () => <Home />;

export const Default = Template.bind({});
