import { StoryFn, Meta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Coutner App',
};
