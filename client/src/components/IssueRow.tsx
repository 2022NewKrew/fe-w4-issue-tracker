import React from 'react';
import styled from 'styled-components';
import { TextSmall, TableData, SmallIcon, AlignXCenter } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { TimeStampMessage } from '@components/assets';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';

interface IProps {
    issueData: IIssue;
}

export const IssueRow = ({ issueData: { title, id, timeStamp, status } }: IProps) => {
    return (
        <>
            <CheckBox>
                <input type="checkbox" />
            </CheckBox>
            <IssueItem>
                <IssueItemUpperArea>
                    <Alertcircle />
                    <div>{title}</div>
                </IssueItemUpperArea>
                <IssueItemBelowArea>
                    <div>#{id}</div>
                    <div>
                        <TimeStampMessage
                            timeStamp={timeStamp}
                            current={new Date().getTime()}
                            type={status}
                            author="임시유저"
                        />
                    </div>
                </IssueItemBelowArea>
            </IssueItem>
            <Assignee></Assignee>
            <EmptySpace />
            <EmptySpace />
            <Author></Author>
        </>
    );
};

const Wrapper = styled.div`
    ${TableData}
    padding: 16px;
    height: 68px;
    grid-column: 1 / -1;
`;

const CheckBox = styled.div`
    ${TableData}
    padding: 24px 20px 0 32px;
    & input {
        width: 16px;
        height: 16px;
    }
`;

const IssueItem = styled.div`
    ${TableData}
    padding: 12px;
`;

const IssueItemUpperArea = styled.div`
    display: flex;
    ${SmallIcon}
    & svg {
        fill: var(--primary2-color);
        path {
            stroke: var(--primary1-color);
        }
    }
`;

const IssueItemBelowArea = styled.div`
    ${TextSmall}
    color: var(--label-color);
    display: flex;
`;

const Assignee = styled.div`
    ${TableData}
`;

const EmptySpace = styled.div`
    ${TableData}
`;

const Author = styled.div`
    ${TableData}
`;
