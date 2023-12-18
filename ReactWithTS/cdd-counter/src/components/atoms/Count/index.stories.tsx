import { StoryFn, Meta } from '@storybook/react';

import { Count } from '.';

export default {
  title: 'Atoms/Count',
  component: Count,
} as Meta<typeof Count>;

const Template: StoryFn<typeof Count> = (args) => <Count {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0,
};
