import React from 'react';
import styled from 'styled-components';
import { TextSmall, TableData, SmallIcon, AlignXYCenter } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { TimeStampMessage, SmallLabel } from '@components/assets';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';
import { ReactComponent as Milestone } from '@icons/Milestone.svg';

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

export const IssueRow = ({ issueData, selectMode }: IProps) => {
    const { title, id, timeStamp, status } = issueData;
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
                    <TimeStampMessage
                        timeStamp={timeStamp}
                        current={new Date().getTime()}
                        type={status}
                        author="임시유저"
                    />
                    <MilestoneName>
                        <Milestone />
                        <div>마일스톤</div>
                    </MilestoneName>
                </IssueItemBelowArea>
            </IssueItem>
            {renderRightAria(selectMode, issueData)}
        </>
    );
};

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
    height: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    ${SmallIcon('var(--primary1-color)', '8px', 'var(--primary2-color)')};
    & > * {
        margin-right: 8px;
    }
`;

const IssueItemBelowArea = styled.div`
    ${TextSmall}
    height: 28px;
    color: var(--label-color);
    display: flex;
    & div {
        margin-right: 16px;
    }
`;

const MilestoneName = styled.div`
    ${AlignXYCenter};
    ${SmallIcon('var(--label-color)', '8px')}
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
