import styled from "styled-components";
import { Link } from "react-router-dom";

import HeaderContainer from "@components/containers/header-container";
import StandardButton from "@components/buttons/standard-button";
import TextInput from "@components/inputs/text-input";
import colors from "@styles/constants/colors";
import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";
import { allCenterAlign } from "@utils/helper";

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

const IssueTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 1280px;
  height: 270px;
  left: 80px;
  top: 190px;
  background: ${greyscale.LINE};
  border: 1px solid ${greyscale.LINE};
  border-radius: 16px;
`;

const IssueTableHeader = styled.div`
  ${allCenterAlign}
  position: static;
  width: 1280px;
  height: 64px;
  left: 0px;
  top: 0px;
  background: ${greyscale.BACKGROUND};
  border-radius: 16px 16px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1px 0px;
`;

const HeaderCheckBox = styled.input`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 32px;
  top: 24px;
`;

const IssueTableCell = styled.div`
  position: static;
  width: 1280px;
  height: 100px;
  left: 0px;
  top: 65px;
  background: ${greyscale.OFF_WHITE};
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 1px 0px;
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
      <IssueTable>
        <IssueTableHeader>
          <HeaderCheckBox type={"checkbox"}></HeaderCheckBox>
          <StandardButton componentSize={sizes.SMALL}>열린 이슈</StandardButton>
          <StandardButton componentSize={sizes.SMALL}>닫힌 이슈</StandardButton>
          <StandardButton componentSize={sizes.SMALL}>담당자</StandardButton>
          <StandardButton componentSize={sizes.SMALL}>레이블</StandardButton>
          <StandardButton componentSize={sizes.SMALL}>마일스톤</StandardButton>
          <StandardButton componentSize={sizes.SMALL}>작성자</StandardButton>
        </IssueTableHeader>
        <IssueTableCell></IssueTableCell>
        <IssueTableCell></IssueTableCell>
      </IssueTable>
    </div>
  );
};

export default IssueList;
