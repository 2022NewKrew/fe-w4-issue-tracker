import React from 'react';
import styled from 'styled-components';
import { ProfileImage } from './assets';
import { ReactComponent as Logo } from '@images/LogotypeMedium.svg';
import { ReactComponent as UserImage } from '@images/UserImageLarge.svg';

export const Header = () => {
    return (
        <Wrapper>
            <Logo width="199px" height="40px" />
            <ProfileImage>
                <UserImage />
            </ProfileImage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 27px 0;
`;
