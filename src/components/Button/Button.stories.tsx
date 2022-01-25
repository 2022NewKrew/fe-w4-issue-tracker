import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Text = <span>Button</span>;

export const MediumStandard = Template.bind({});
MediumStandard.args = {
  type: 'MediumStandard',
  children: Text,
};

export const SmallStandard = Template.bind({});
SmallStandard.args = {
  type: 'SmallStandard',
  children: Text,
};

export const Large = Template.bind({});
Large.args = {
  type: 'Large',
  children: Text,
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  type: 'SmallSecondary',
  children: Text,
};
