import React from 'react';
import styled from 'styled-components';
import { IIssue } from '@types';

interface IProps {
    issueData: IIssue;
}

export const IssueRow = ({ issueData: { title } }: IProps) => {
    return <Wrapper>{title}</Wrapper>;
};

const Wrapper = styled.div`
    padding: 16px;
    height: 64px;
`;
