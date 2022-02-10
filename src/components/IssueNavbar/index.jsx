import React from 'react';
import styled from 'styled-components';
import MediumLogo from '@/assets/logo/LogotypeMedium.svg';
import { lineGS } from '@/assets/styles/Palette';
import SampleProfileImage from '@/assets/images/sample-profile.png';

export default function IssueNavbar() {
  return (
    <Wrapper>
      <MediumLogo />
      <ProfileImage src={SampleProfileImage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${lineGS};
`;
