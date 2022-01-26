import React from 'react';
import styled from 'styled-components';
import { TableRowDiv } from '@styles/styleTemplates';
import { IIssue } from '@types';

interface IProps {
    issueData: IIssue;
}

export const IssueRow = ({ issueData: { title } }: IProps) => {
    return <Wrapper>{title}</Wrapper>;
};

const Wrapper = styled(TableRowDiv)`
    padding: 16px;
    height: 68px;
    grid-column: 1 / -1;
`;
