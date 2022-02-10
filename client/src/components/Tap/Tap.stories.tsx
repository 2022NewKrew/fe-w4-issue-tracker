import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tap from '@components/Tap';

export default {
  title: 'Components/Tap',
  component: Tap,
} as ComponentMeta<typeof Tap>;

const Template: ComponentStory<typeof Tap> = (args) => <Tap {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      name: '레이블',
      icon: 'Tag',
      count: 0,
    },
    {
      name: '마일스톤',
      icon: 'Milestone',
      count: 0,
    },
  ],
};
