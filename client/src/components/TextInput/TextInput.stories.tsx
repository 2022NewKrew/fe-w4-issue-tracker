import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '@components/TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: '아이디',
};

export const WithValueEvaluator = Template.bind({});
WithValueEvaluator.args = {
  type: 'text',
  placeholder: '우리 집 강아지',
  valueEvaluator: (value: string) => value === 'coco',
  successMessage: '강아지 이름은 코코입니다.',
  errorMessage: '잘못된 강아지 이름입니다.',
};
