import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterBar from '@components/FilterBar';

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = (args) => <FilterBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: 0,
  onSelect: (index) => console.log(index),
  options: [
    '열린 이슈',
    '내가 작성한 이슈',
    '나에게 할당된 이슈',
    '내가 댓글을 남긴 이슈',
    '닫힌 이슈',
  ],
  customName: '이슈 필터',
  placeholder: 'Search all issues',
};
