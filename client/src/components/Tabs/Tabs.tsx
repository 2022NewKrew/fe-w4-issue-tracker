import React from 'react';
import styled from 'styled-components';
import { RoundBorderDiv } from '@styles/styleTemplates';
import { ITabElement } from '@types';
import { TabElement } from './TabElement';

interface IProps {
    TabElementProperties: ITabElement[];
}

export const Tabs = ({ TabElementProperties }: IProps) => {
    const renderTabElements = () => {
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
    max-width: fit-content;
`;
