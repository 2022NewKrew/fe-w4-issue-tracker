import React from 'react';
import styled from 'styled-components';
import MediumLogo from '@/assets/logo/LogotypeMedium.svg';
import { lineGS } from '@/assets/styles/Palette';

export default function IssueNavbar() {
  return (
    <Wrapper>
      <MediumLogo />
      <ProfileImage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border: 1px solid ${lineGS};
  margin-top: 25px;
`;
