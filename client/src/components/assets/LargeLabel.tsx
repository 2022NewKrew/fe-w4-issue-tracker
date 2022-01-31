import React from 'react';
import styled, { css } from 'styled-components';
import { TextXSmall, AlignXYCenter, SmallIcon } from '@styles/styleTemplates';
import { issueStatus } from '@types';
import { ReactComponent as AlertCircle } from '@icons/AlertCircle.svg';
import { ReactComponent as Archive } from '@icons/Archive.svg';

interface IProps {
    type: issueStatus;
}

export const LargeLabel = ({ type }: IProps) => {
    const labelTitle = type === 'open' ? '열린 이슈' : '닫힌 이슈';
    const icon = type === 'open' ? <AlertCircle /> : <Archive />;
    const mainColor = type === 'open' ? 'primary' : 'secondary';
    return (
        <StyledLabel mainColor={mainColor}>
            {icon}
            <div>{labelTitle}</div>
        </StyledLabel>
    );
};

const StyledLabel = styled.div<{ mainColor: string }>`
    ${TextXSmall}
    ${AlignXYCenter}
    width: fit-content;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid;
    height: 40px;
    padding: 10px 16.5px;

    & div {
        padding-left: 4px;
    }

    ${(props) => {
        const color1 = props.mainColor + '1';
        const color2 = props.mainColor + '2';
        return css`
            background-color: ${props.theme.colors[color2]};
            border-color: ${props.theme.colors[color1]};
            color: ${props.theme.colors[color1]};
            ${SmallIcon(props.theme.colors[color1])}
        `;
    }}
`;
