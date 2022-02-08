import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PlusIcon } from "@icons";
import { SmallStandardButton, Wrapper, XSmallText } from "@atoms";
import { FilterBar, TabList } from "@molecules";

import { COLOR, DIRECTION } from "@constants";

const IssueListPageHeaderWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonText = styled(XSmallText)`
  color: ${COLOR.GREYSCALE.OFF_WHITE};
  margin-left: 10px;
`;

const CreateIssueButton = styled(SmallStandardButton)`
  margin-left: 30px;
`;

function IssueListPageHeader() {
  const navigate = useNavigate();

  const clickCreateIssueButton = () => {
    navigate("/issuecreation");
  };

  return (
    <IssueListPageHeaderWrapper>
      <FilterBar />
      <RightPart>
        <TabList />
        <CreateIssueButton color={COLOR.BLUE} direction={DIRECTION.ROW}>
          <PlusIcon />
          <ButtonText onClick={clickCreateIssueButton}>이슈 작성</ButtonText>
        </CreateIssueButton>
      </RightPart>
    </IssueListPageHeaderWrapper>
  );
}

export default IssueListPageHeader;
