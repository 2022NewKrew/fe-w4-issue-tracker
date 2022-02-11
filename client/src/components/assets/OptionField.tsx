import React from 'react';
import styled from 'styled-components';
import { TextSmall } from '@styles/styleTemplates';
import { IFilterInfo } from '@types';
import { CircleContainer } from '@components/assets';
import { ReactComponent as CheckOffCircle } from '@icons/CheckOffCircle.svg';
import { ReactComponent as CheckInCircle } from '@icons/CheckInCircle.svg';

interface IProps {
    filterInfo: IFilterInfo;
    checkbox: boolean;
    isChecked: boolean;
    onClickHandler: (value: number) => void;
}

export const OptionField = ({ filterInfo, checkbox, isChecked, onClickHandler }: IProps) => {
    const { id, name } = filterInfo;
    return (
        <Option onClick={() => onClickHandler(id)}>
            {filterInfo.profileImgSrc && (
                <CircleContainer>
                    <img src={filterInfo.profileImgSrc} />
                </CircleContainer>
            )}
            {filterInfo.color && (
                <CircleContainer>
                    <ColorDiv color={filterInfo.color} />
                </CircleContainer>
            )}
            {name}
            {isChecked ? <CheckInCircle /> : <CheckOffCircle />}
        </Option>
    );
};

const Option = styled.div`
    ${TextSmall}
    height: 44px;
    border-top: 1px solid var(--line-color);
    cursor: pointer;

    & svg {
        position: absolute;
        right: 16px;
    }
`;

const ColorDiv = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
`;
