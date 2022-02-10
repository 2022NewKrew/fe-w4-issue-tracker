import styled from "styled-components";
import { Link } from "react-router-dom";

import HeaderContainer from "@components/containers/header-container";
import StandardButton from "@components/buttons/standard-button";
import TextInput from "@components/inputs/text-input";
import IssueTable from "@components/etc/issue-table";
import colors from "@styles/constants/colors";
import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 601px;
  height: 40px;
  left: 80px;
  top: 126px;
  border: 1px solid ${greyscale.LINE};
  border-radius: 11px;
`;

const TapsLabelMilestone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 321px;
  height: 40px;
  left: 903px;
  top: 126px;
  border: 1px solid ${greyscale.LINE};
  border-radius: 11px;
`;

const ButtonIssueAdd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  position: absolute;
  width: 120px;
  height: 40px;
  left: 1240px;
  top: 126px;
  background: ${colors.BLUE};
  border-radius: 11px;
`;

const IssueList = () => {
  return (
    <div>
      <HeaderContainer>Issue Tracker</HeaderContainer>
      <FilterBar>
        <StandardButton componentSize={sizes.SMALL}>필터</StandardButton>
        <TextInput
          componentSize={sizes.SMALL}
          componentValue={"is:issue is:open"}
        ></TextInput>
      </FilterBar>
      <TapsLabelMilestone>
        <Link to="/label-list">
          <StandardButton componentSize={sizes.SMALL}>레이블</StandardButton>
        </Link>
        <Link to="/milestone-list">
          <StandardButton componentSize={sizes.SMALL}>마일스톤</StandardButton>
        </Link>
      </TapsLabelMilestone>
      <ButtonIssueAdd>
        <Link to="/new-issue">
          <StandardButton componentSize={sizes.SMALL}>이슈 작성</StandardButton>
        </Link>
      </ButtonIssueAdd>
      <IssueTable></IssueTable>
    </div>
  );
};

export default IssueList;
