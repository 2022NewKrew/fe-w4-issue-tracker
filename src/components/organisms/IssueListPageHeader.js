import React from "react";
import styled from "styled-components";
import { FilterBar, TabList } from "@molecules";
import { SmallStandardButton, Wrapper, XSmallText } from "@atoms";
import { PlusIcon } from "@icons";
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
  return (
    <IssueListPageHeaderWrapper>
      <FilterBar />
      <RightPart>
        <TabList />
        <CreateIssueButton color={COLOR.BLUE} direction={DIRECTION.ROW}>
          <PlusIcon />
          <ButtonText>이슈 작성</ButtonText>
        </CreateIssueButton>
      </RightPart>
    </IssueListPageHeaderWrapper>
  );
}

export default IssueListPageHeader;
