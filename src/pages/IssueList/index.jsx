import React from 'react';
import styled from 'styled-components';
import IssueNavbar from '@/components/IssueNavbar';

export default function IssueList() {
  return (
    <Wrapper>
      <IssueNavbar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 25px 80px;
`;
