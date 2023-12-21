import { StoryFn, Meta } from '@storybook/react';

import { CounterApp } from '.';

export default {
  title: 'Templates/CounterApp',
  component: CounterApp,
} as Meta<typeof CounterApp>;

const Template: StoryFn<typeof CounterApp> = () => <CounterApp />;

export const Default = Template.bind({});
