import React from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { labelInfoAtom } from '@atoms';
import styled from 'styled-components';
import { TextSmall, TableData, SmallIcon, AlignYCenter } from '@styles/styleTemplates';
import { IIssue, ILabel } from '@types';
import { TimeStampMessage, SmallLabel, MilestoneTag } from '@components/assets';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';

interface IProps {
    issueData: IIssue;
    checkStatus: boolean;
    selectMode: boolean;
    onChangeHandler: () => void;
}

const renderRightArea = (selectMode: boolean, issue: IIssue | undefined) => {
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

export const IssueRow = ({ issueData, checkStatus, selectMode, onChangeHandler }: IProps) => {
    const { title, id, userId, timeStamp, status, labelings, milestoneId } = issueData;
    const [labelInfo] = useRecoilStateLoadable<ILabel[]>(labelInfoAtom);

    const renderLabels = () => {
        if (labelInfo.state === 'loading') return <div>loading...</div>;
        if (labelInfo.state === 'hasError') return <div>label fetch failed</div>;
        if (labelInfo.state === 'hasValue') {
            return labelings.map(({ labelId }) => {
                const labelTarget = labelInfo.contents.find(
                    (label: ILabel) => label.id === labelId
                );
                return <SmallLabel type="light-text" labelInfo={labelTarget} key={labelId} />;
            });
        }
    };

    return (
        <>
            <CheckBox>
                <input type="checkbox" checked={!!checkStatus} onChange={onChangeHandler} />
            </CheckBox>
            <IssueItem>
                <IssueItemUpperArea>
                    <Alertcircle />
                    <div>{title}</div>
                    {renderLabels()}
                </IssueItemUpperArea>
                <IssueItemBelowArea>
                    <div>#{id}</div>
                    <TimeStampMessage
                        timeStamp={timeStamp}
                        current={new Date().getTime()}
                        type={status}
                        author="임시유저"
                    />
                    <MilestoneTag id={milestoneId} />
                </IssueItemBelowArea>
            </IssueItem>
            {renderRightArea(selectMode, issueData)}
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
    ${AlignYCenter}
    line-height: normal;
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

const Assignee = styled.div`
    ${TableData}
`;

const EmptySpace = styled.div`
    ${TableData}
`;

const Author = styled.div`
    ${TableData}
`;
