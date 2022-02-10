import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from '@components/Label';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  type: 'Blue',
  icon: 'AlertCircle',
  name: '열린 이슈',
};

export const Purple = Template.bind({});
Purple.args = {
  type: 'Purple',
  icon: 'Archive',
  name: '닫힌 이슈',
};

export const DarkText = Template.bind({});
DarkText.args = {
  type: 'DarkText',
  name: '레이블 이름',
};

export const LightText = Template.bind({});
LightText.args = {
  type: 'LightText',
  name: '레이블 이름',
};

export const Line = Template.bind({});
Line.args = {
  type: 'Line',
  name: '작성자',
};
