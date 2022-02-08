import React from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { milestoneInfoAtom } from '@atoms';
import styled from 'styled-components';
import { AlignXYCenter, SmallIcon } from '@styles/styleTemplates';
import { ReactComponent as Milestone } from '@icons/Milestone.svg';
import { IMilestone } from '@types';

interface IProps {
    id: number | undefined;
}

export const MilestoneTag = ({ id }: IProps) => {
    const [milestoneInfo] = useRecoilStateLoadable<IMilestone[]>(milestoneInfoAtom);
    if (!id) return <div></div>;
    if (milestoneInfo.state === 'loading') return <div>loading...</div>;
    if (milestoneInfo.state === 'hasError') return <div>milestone fetch failed</div>;
    if (milestoneInfo.state === 'hasValue') {
        const milestoneTarget = milestoneInfo.contents.find(
            (milestone: IMilestone) => milestone.id === id
        );
        if (!milestoneTarget) return <div></div>;
        return (
            <MilestoneName>
                <Milestone />
                <div>{milestoneTarget.name}</div>
            </MilestoneName>
        );
    }
};

const MilestoneName = styled.div`
    ${AlignXYCenter};
    ${SmallIcon('var(--label-color)', '8px')}
`;
