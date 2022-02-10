import React from 'react';
import { useRecoilValue } from 'recoil';
import { labelInfoAtom, userInfoAtom } from '@atoms';
import styled from 'styled-components';
import { TextSmall, TableData, SmallIcon, AlignYCenter } from '@styles/styleTemplates';
import { IIssue, ILabel, IUser } from '@types';
import { TimeStampMessage, SmallLabel, MilestoneTag } from '@components/assets';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';

interface IProps {
    issueData: IIssue;
    checkStatus: boolean;
    selectMode: boolean;
    onChangeHandler: () => void;
    isLast: boolean;
}

const renderRightArea = (selectMode: boolean, issue: IIssue | undefined, isLast: boolean) => {
    if (selectMode) return <EmptySpace isLast={isLast} />;
    return (
        <>
            <Assignee></Assignee>
            <EmptySpace />
            <EmptySpace />
            <Author isLast={isLast}></Author>
        </>
    );
    // TODO: issue의 작성자, 담당자 정보를 받아 렌더
};

export const IssueRow = ({
    issueData,
    checkStatus,
    selectMode,
    onChangeHandler,
    isLast,
}: IProps) => {
    const { title, id, userId, timeStamp, status, labelings, milestoneId } = issueData;

    const renderLabels = () => {
        const labelInfo = useRecoilValue<ILabel[]>(labelInfoAtom);
        if (labelings) {
            return labelings.map(({ labelId }) => {
                const labelTarget = labelInfo.find((label: ILabel) => label.id === labelId);
                if (!labelTarget) return <div></div>;
                return <SmallLabel type="light-text" labelInfo={labelTarget} key={labelId} />;
            });
        }
    };

    const getAuthorName = (userId: number) => {
        const userInfo = useRecoilValue<IUser[]>(userInfoAtom);

        const targetUser = userInfo.find((user) => user.id === userId);
        if (!targetUser) throw Error('유저를 찾을 수 없습니다');
        return targetUser.name;
    };

    return (
        <>
            <CheckBox isLast={isLast}>
                <input type="checkbox" checked={!!checkStatus} onChange={onChangeHandler} />
            </CheckBox>
            <IssueItem>
                <IssueItemUpperArea>
                    <Alertcircle />
                    <div>{title}</div>
                    <React.Suspense fallback={<div>loading...</div>}>
                        {renderLabels()}
                    </React.Suspense>
                </IssueItemUpperArea>
                <IssueItemBelowArea>
                    <div>#{id}</div>
                    <React.Suspense fallback={<div>loading...</div>}>
                        <TimeStampMessage
                            timeStamp={timeStamp}
                            current={new Date().getTime()}
                            type={status}
                            author={getAuthorName(userId)}
                        />
                    </React.Suspense>
                    <MilestoneTag id={milestoneId} />
                </IssueItemBelowArea>
            </IssueItem>
            {renderRightArea(selectMode, issueData, isLast)}
        </>
    );
};

const CheckBox = styled.div<{ isLast: boolean }>`
    ${TableData}
    padding: 24px 20px 0 32px;
    & input {
        width: 16px;
        height: 16px;
    }
    border-radius: ${({ isLast }) => (isLast ? '0 0 0 16px' : '0')};
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

const Author = styled.div<{ isLast: boolean }>`
    ${TableData}
    border-radius: ${({ isLast }) => (isLast ? '0 0 16px 0' : '0')};
`;
