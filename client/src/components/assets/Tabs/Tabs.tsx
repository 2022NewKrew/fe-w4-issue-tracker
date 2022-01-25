import React from 'react';
import styled from 'styled-components';
import { RoundBorderDiv } from '@styles/styleTemplates';
import { ITabElement } from '@types';
import { TabElement } from './TabElement';
import { ReactComponent as TagIcon } from '@icons/Tag.svg';
import { ReactComponent as MilestoneIcon } from '@icons/Milestone.svg';

const TabElementProperties: ITabElement[] = [
    { icon: TagIcon(), title: '레이블', count: 0 },
    { icon: MilestoneIcon(), title: '마일스톤', count: 0 },
];

export const Tabs = () => {
    const renderTabElements = (TabElementProperties: ITabElement[]) => {
        return TabElementProperties.map(({ icon, title, count }: ITabElement, i) => {
            const isLast = i === TabElementProperties.length - 1 ? true : false;
            return <TabElement icon={icon} title={title} count={count} key={i} isLast={isLast} />;
        });
    };
    return <TabsBorder>{renderTabElements(TabElementProperties)}</TabsBorder>;
};

const TabsBorder = styled(RoundBorderDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 320px;
`;
