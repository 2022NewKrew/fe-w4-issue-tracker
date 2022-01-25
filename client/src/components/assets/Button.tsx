import React from 'react';
import styled, { css } from 'styled-components';
import { LinkMedium, LinkXSmall } from '../../styles/textStyle';
import { ReactComponent as PlusIcon } from '@icons/Plus.svg';

type buttonClasses = 'large' | 'medium-standard' | 'medium-text' | 'small-standard' | 'small-secondary' | 'small-text';

interface IProps {
    innerText: string;
    buttonType?: buttonClasses;
    disabled?: 'disabled' | '';
}

export const Button = ({ innerText, buttonType, disabled = '' }: IProps) => {
    const buttonView = buttonType ? buttonType : 'medium-standard';
    return (
        <StyledButton buttonType={buttonView} disabled={disabled}>
            <PlusIcon width="16px" height="16px" />
            <div>{innerText}</div>
        </StyledButton>
    );
};

const LargeSize = css`
    ${LinkMedium}
    line-height: normal;
    width: 340px;
    height: 64px;
    border-width: 4px;
    border-radius: 20px;
`;

const MediumSize = css`
    ${LinkMedium}
    line-height: normal;
    width: 240px;
    height: 64px;
    border-width: 4px;
    border-radius: 20px;
`;

const SmallSize = css`
    ${LinkXSmall}
    line-height: normal;
    width: 120px;
    height: 40px;
    border-width: 2px;
    border-radius: 11px;
    & svg {
        display: block;
    }
`;

const StandardColor = css`
    color: var(--off-white-color);
    background-color: var(--primary1-color);
    border: solid var(--primary1-color);

    &:hover:enabled {
        background-color: var(--primary3-color);
        border-color: var(--primary3-color);
    }

    &:focus:enabled {
        border-color: var(--primary2-color);
    }

    & svg path {
        stroke: var(--off-white-color);
    }
`;

const SecondaryColor = css`
    color: var(--primary1-color);
    background-color: var(--offWhite-color);
    border: 1px solid var(--primary1-color);

    &:hover:enabled {
        color: var(--primary3-color);
        border-color: var(--primary3-color);
    }

    &:focus:enabled {
        border-color: var(--primary2-color);
    }
`;

const StyledButton = styled.button<{ buttonType: buttonClasses }>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin: 4px;
    font-weight: var(--link-font-weight);
    font-family: Noto Sans KR;

    & svg {
        display: none;
        padding-right: 4px;
    }

    &:disabled {
        opacity: 0.5;
    }

    ${({ buttonType }) => {
        switch (buttonType) {
            case 'large':
                return css`
                    ${LargeSize}
                    ${StandardColor}
                `;
            case 'medium-standard':
                return css`
                    ${MediumSize}
                    ${StandardColor}
                `;
            case 'small-standard':
                return css`
                    ${SmallSize}
                    ${StandardColor}
                `;
            case 'small-secondary':
                return css`
                    ${SmallSize}
                    ${SecondaryColor}
                `;
        }
    }}
`;
