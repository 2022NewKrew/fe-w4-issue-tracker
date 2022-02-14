/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/react';
import Icon, { IconType } from '@icon';
import { theme } from '@styles/theme';
import { ButtonType } from '@/types';

import Button from '@components/Button';
import FilterBar from '@components/FilterBar';
import Tap from '@components/Tap';
import Dropdown from '@components/Dropdown';
import Label from '@components/Label';

interface Issue {
  title: string;
  label: string;
  number: number;
  writer: string;
  timestamp: Date;
  milestone: string;
}

const IssueListPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState<null | number>(null);
  const [selectedAssignee, setSelectedAssignee] = useState<null | number>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<null | number>(null);
  const [selectedWriter, setSelectedWriter] = useState<null | number>(null);

  const handleSelectFilter = (index) => setSelectedFilter(index);
  const handleSelectLabel = (index) => setSelectedLabel(index);
  const handleSelectAssignee = (index) => setSelectedAssignee(index);
  const handleSelectMilestone = (index) => setSelectedMilestone(index);
  const handleSelectWriter = (index) => setSelectedWriter(index);

  const handleClickTap = (index) => console.log(index);
  const handleClickNewIssue = () => console.log('new issue');

  const issueList: Issue[] = [
    {
      title: 'FE 이슈트래커 개발',
      label: 'documentation',
      number: 1,
      writer: 'Oni',
      timestamp: new Date(+new Date() - 8 * 60 * 1000),
      milestone: '마스터즈 코스',
    },
    {
      title: 'PR 보내기',
      label: 'documentation',
      number: 2,
      writer: 'h-yes-oo',
      timestamp: new Date(+new Date() - 10 * 60 * 1000),
      milestone: '마스터즈 코스',
    },
  ];

  const filterList = [
    '열린 이슈',
    '내가 작성한 이슈',
    '나에게 할당된 이슈',
    '내가 댓글을 남긴 이슈',
    '닫힌 이슈',
  ];

  const filterPlaceholder = [
    'is:issue is:open',
    'is:issue written by:me',
    'is:issue assigned to:me',
    'is:issue has comment written by:me',
    'is:issue is:close',
  ];

  const assignees = ['Oni', 'Daniel'];

  const labels = ['bug', 'documentation'];

  const milestones = ['마스터즈 코스'];

  const FilterBarProps = {
    selected: selectedFilter,
    onSelect: handleSelectFilter,
    options: filterList,
    customName: '이슈 필터',
    placeholder: filterPlaceholder[selectedFilter],
  };

  const TapProps = {
    options: [
      {
        name: '레이블',
        icon: 'Tag' as IconType,
        count: 0,
      },
      {
        name: '마일스톤',
        icon: 'Milestone' as IconType,
        count: 0,
      },
    ],
    selected: -1,
    onClickOption: handleClickTap,
  };

  const NewIssueButtonProps = {
    type: ButtonType.SmallStandard,
    onClick: handleClickNewIssue,
  };

  const AssigneeProps = {
    label: '담당자',
    selected: selectedAssignee,
    onSelect: handleSelectAssignee,
    options: ['담당자가 없는 이슈', ...assignees],
  };

  const WrtierProps = {
    label: '작성자',
    selected: selectedWriter,
    onSelect: handleSelectWriter,
    options: assignees,
  };

  const LabelProps = {
    label: '레이블',
    selected: selectedLabel,
    onSelect: handleSelectLabel,
    options: ['레이블이 없는 이슈', ...labels],
  };

  const MilestoneProps = {
    label: '마일스톤',
    selected: selectedMilestone,
    onSelect: handleSelectMilestone,
    options: ['레이블이 없는 이슈', ...milestones],
  };

  const issueEl = issueList.map(({ title, label, number, writer, timestamp, milestone }) => {
    const timeDiff = Math.floor((+new Date() - +timestamp) / (1000 * 60));
    return (
      <li key={number} css={[Issue, Content]}>
        <div css={FlexColumn}>
          <div css={[FlexAlignCenter, linkMedium]}>
            <input type="checkbox" css={CheckBox} />
            <Icon icon="AlertCircle" />
            <span css={{ margin: '0 8px' }}>{title}</span>
            <Label type="DarkText" name={label} />
          </div>
          <span css={issueInfo}>
            #{number} 이 이슈가 {timeDiff}분 전 {writer}에 의해 작성되었습니다{' '}
            <Icon icon="Milestone" /> {milestone}
          </span>
        </div>
        <Icon icon="UserImageSmall" />
      </li>
    );
  });

  return (
    <div css={[BigWrapper, FlexColumn]}>
      <div css={[SmallWrapper, TopWrapper]}>
        <Icon icon="LogotypeMedium" />
        <Icon icon="UserImageLarge" />
      </div>
      <div css={[SmallWrapper]}>
        <FilterBar {...FilterBarProps} />
        <div css={Flex}>
          <Tap {...TapProps} css={{ marginRight: 16 }} />
          <Button {...NewIssueButtonProps}>
            <Icon icon="Plus" />
            이슈 작성
          </Button>
        </div>
      </div>
      <ul css={[FlexColumn, { width: 1280, marginTop: 24 }, IssueWrapper]}>
        <li css={[Issue, Title]}>
          <div css={FlexAlignCenter}>
            <input type="checkbox" css={CheckBox} />
            <Button type={ButtonType.MediumText} css={{ marginRight: 24 }}>
              <Icon icon="AlertCircle" />
              열린 이슈({issueList.length})
            </Button>
            <Button type={ButtonType.MediumText}>
              <Icon icon="Archive" />
              닫힌 이슈(0)
            </Button>
          </div>
          <div css={DropdownWrapper}>
            <Dropdown type="Text" {...AssigneeProps} />
            <Dropdown type="Text" {...LabelProps} />
            <Dropdown type="Text" {...MilestoneProps} />
            <Dropdown type="Text" {...WrtierProps} />
          </div>
        </li>
        {issueEl}
      </ul>
    </div>
  );
};

const { background, line, offWhite, label } = theme.greyScale;
const { textSmall, linkMedium } = theme.textStyles;

const CheckBox = css`
  background: ${offWhite};
  border: 1px solid ${line};
  box-sizing: border-box;
  border-radius: 2px;
  margin: 0 32px 0 0;
`;

const Flex = css`
  display: flex;
`;

const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const BigWrapper = css`
  align-items: center;
  background: ${background};
  min-height: 100vh;
`;

const SmallWrapper = css`
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const TopWrapper = css`
  margin: 27px 0 57px;
`;

const IssueWrapper = css`
  width: 1280px;
  margin-top: 24px;
  padding: 0;
  li:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const Issue = css`
  width: 100%;
  display: flex;
  height: 64px;
  box-sizing: border-box;
  border: 1px solid ${line};
  justify-content: space-between;
`;

const Title = css`
  align-items: center;
  background: ${background};
  border-radius: 16px 16px 0px 0px;
  padding: 0 32px;
`;

const Content = css`
  height: 100px;
  background: ${offWhite};
  padding: 17px 54px 0 32px;
  border-top: none;
`;

const DropdownWrapper = css`
  display: flex;
  & > div {
    margin-left: 32px;
  }
`;

const issueInfo = css`
  margin-left: 48px;
  color: ${label};
  ${textSmall};
  white-space: break-spaces;
`;

export default IssueListPage;
