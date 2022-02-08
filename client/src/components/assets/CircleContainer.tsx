import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
    children?: ReactNode;
    size?: number;
}

export const CircleContainer = ({ children, size = 20 }: IProps) => {
    return <Container size={size}>{children}</Container>;
};

const Container = styled.div<{ size: number }>`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 10px;
    overflow: hidden;
    margin-right: 8px;

    & > * {
        width: ${({ size }) => `${size}px`};
        height: ${({ size }) => `${size}px`};
    }
`;
