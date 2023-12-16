import { StoryFn, Meta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
