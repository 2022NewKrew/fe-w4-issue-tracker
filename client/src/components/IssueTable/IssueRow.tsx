import React from 'react';
import styled from 'styled-components';
import { TextSmall, TableData, SmallIcon } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { TimeStampMessage, SmallLabel } from '@components/assets';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';

interface IProps {
    issueData: IIssue;
    selectMode: boolean;
}

const renderRightAria = (selectMode: boolean, issue: IIssue | undefined) => {
    if (selectMode) return <EmptySpace />;
    return (
        <>
            <Assignee></Assignee>
            <EmptySpace />
            <EmptySpace />
            <Author></Author>
        </>
    );
    // TODO: issue의 작성자, 담당자 정보를 받아 렌더
};

export const IssueRow = ({ issueData: { title, id, timeStamp, status }, selectMode }: IProps) => {
    return (
        <>
            <CheckBox>
                <input type="checkbox" />
            </CheckBox>
            <IssueItem>
                <IssueItemUpperArea>
                    <Alertcircle />
                    <div>{title}</div>
                    <SmallLabel type="light-text" title="documentation" color="blue" />
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
            {renderRightAria(selectMode)}
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
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
`;

const IssueItemUpperArea = styled.div`
    display: flex;
    ${SmallIcon('var(--primary1-color)', 'var(--primary2-color)')}
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
