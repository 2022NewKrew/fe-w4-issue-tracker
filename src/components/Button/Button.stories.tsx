import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/Button';
import Icon from '@icon';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span>Button</span>
  </Button>
);

const IconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Icon icon="Plus" />
    <span>Button</span>
  </Button>
);

export const Large = Template.bind({});
Large.args = {
  type: 'Large',
};

export const MediumStandard = Template.bind({});
MediumStandard.args = {
  type: 'MediumStandard',
};

export const SmallStandard = IconTemplate.bind({});
SmallStandard.args = {
  type: 'SmallStandard',
};

export const SmallSecondary = IconTemplate.bind({});
SmallSecondary.args = {
  type: 'SmallSecondary',
};
