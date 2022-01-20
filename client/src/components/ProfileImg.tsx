import React from 'react';
import styled from 'styled-components';

interface IProps {
    profileImgSrc: string;
}

export const ProfileImage = ({ profileImgSrc }: IProps) => {
    return <CircleImage src={profileImgSrc} />;
};

const CircleImage = styled.img`
    width: 44px;
    height: 44px;
    border: 1px solid var(--border-color);
    border-radius: 22px;
`;
