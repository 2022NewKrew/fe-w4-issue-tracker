/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '@icon';

import Dropdown from '@components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} css={{ marginLeft: 100 }} />
);

const icon = <Icon icon="UserImageSmall" />;

export const Default = Template.bind({});
Default.args = {
  label: '마일스톤',
  selected: 0,
  onSelect: (index: number) => console.log(index),
  options: ['마일스톤이 없는 필터', '마스터즈 코스'],
  images: [icon, icon],
};
