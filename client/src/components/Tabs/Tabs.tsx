import React from 'react';
import styled from 'styled-components';
import { RoundBorderDiv } from '@styles/styleTemplates';
import { ITabElement } from '@types';
import { TabElement } from './TabElement';

interface IProps {
    TabElementProperties: ITabElement[];
}

const renderTabElements = (TabElementProperties) => {
    return TabElementProperties.map((tabProperty, i) => {
        const isLast = i === TabElementProperties.length - 1 ? true : false;
        return <TabElement tabProperty={tabProperty} key={i} isLast={isLast} />;
    });
};

export const Tabs = ({ TabElementProperties }: IProps) => {
    return <TabsBorder>{renderTabElements(TabElementProperties)}</TabsBorder>;
};

const TabsBorder = styled(RoundBorderDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    max-width: fit-content;
`;
