import React from 'react';
import styled from 'styled-components';
import { ProfileImage } from './ProfileImg';
import userProfileImage from '../../public/images/userImage.png';

export const Header = () => {
    return (
        <Wrapper>
            <Logo>Issue Tracker</Logo>
            <ProfileImage profileImgSrc={userProfileImage} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 199px;
    height: 40px;
    font-family: Montserrat;
    font-weight: 500;
    font-style: italic;
    font-size: 32px;
    line-height: 40px;
    color: var(--main-text-color);
`;
