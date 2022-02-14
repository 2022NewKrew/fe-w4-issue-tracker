import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from '@components/Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '코멘트를 입력하세요',
  width: 340,
};
