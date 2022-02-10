import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IssueNavbar from '@/components/IssueNavbar';
import Button from '@/components/Button';

export default function IssueList() {
  const navigate = useNavigate();

  const navigateToIssueCreate = () => {
    navigate('/issue-create');
  };

  return (
    <Wrapper>
      <IssueNavbar />
      <WrapperTop>
        <CreateIssueButton
          size={1}
          text="+ 이슈 작성"
          onClick={navigateToIssueCreate}
        />
      </WrapperTop>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 25px 80px;
`;

const WrapperTop = styled.div``;

const CreateIssueButton = styled(Button)``;
