import { StoryFn, Meta } from '@storybook/react';

import { Counter } from '.';

export default {
  title: 'Organisms/Counter',
  component: Counter,
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = () => <Counter />;

export const Default = Template.bind({});
