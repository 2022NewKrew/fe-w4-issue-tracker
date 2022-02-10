import React from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { labelInfoAtom, milestoneInfoAtom } from '@atoms';
import styled from 'styled-components';
import { ITabElement, ILabel, IMilestone } from '@types';
import { Button } from './assets';
import { Tabs, FilterBar } from '@components';
import { ReactComponent as TagIcon } from '@icons/Tag.svg';
import { ReactComponent as MilestoneIcon } from '@icons/Milestone.svg';

export const IssueListMenu = () => {
    const [labelInfo] = useRecoilStateLoadable<ILabel[]>(labelInfoAtom);
    const [milestoneInfo] = useRecoilStateLoadable<IMilestone[]>(milestoneInfoAtom);

    const getTabElementProperties = (): ITabElement[] => {
        const labelCount = labelInfo.state === 'hasValue' ? labelInfo.contents.length : 0;
        const milestoneCount =
            milestoneInfo.state === 'hasValue' ? milestoneInfo.contents.length : 0;
        return [
            { icon: TagIcon(), title: '레이블', count: labelCount, href: '/labellist' },
            {
                icon: MilestoneIcon(),
                title: '마일스톤',
                count: milestoneCount,
                href: '/milestonelist',
            },
        ];
    };

    return (
        <Wrapper>
            <FilterBar placeholder="Search all issues" onFocusPlaceholder="is:issue is:open" />
            <RightButtons>
                <Tabs TabElementProperties={getTabElementProperties()} />
                <EmptySpace />
                <Button innerText="이슈 작성" buttonType="small-standard" />
            </RightButtons>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const RightButtons = styled.div`
    display: flex;
`;

const EmptySpace = styled.div`
    width: 16px;
`;
