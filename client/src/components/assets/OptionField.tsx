import React from 'react';
import styled from 'styled-components';
import { TextSmall } from '@styles/styleTemplates';
import { IFilterInfo } from '@types';
import { CircleContainer } from '.';

interface IProps {
    filterInfo: IFilterInfo;
    checkbox: boolean;
    onClickHandler: (value: number) => void;
}

export const OptionField = ({ filterInfo, checkbox, onClickHandler }: IProps) => {
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
            {checkbox && <input type="checkbox" />}
        </Option>
    );
};

const Option = styled.div`
    ${TextSmall}
    height: 44px;
    border-top: 1px solid var(--line-color);
    cursor: pointer;
`;

const ColorDiv = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
`;
