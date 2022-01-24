import React from 'react';
import styled from 'styled-components';

interface IProps {
    children: React.ReactNode;
}

export const ProfileImage = ({ children }: IProps) => {
    return <CircleContainer>{children}</CircleContainer>;
};

const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--border-color);
    border-radius: 22px;
`;
