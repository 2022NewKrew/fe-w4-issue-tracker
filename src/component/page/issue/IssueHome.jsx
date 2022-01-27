import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icons";
import { SmallLabel } from "../../atoms/Label";
import { Text } from "../../atoms/Text";
import { FilterBar } from "../../molecules/FilterBar";
import { Taps } from "../../molecules/Taps";

const issuelist = [
  {
    title: "이슈 제목",
    num: 1,
    description: "이 이슈가 8분 전, Oni님에 의해 작성되었습니다",
    milestone: "마스터즈 코스",
  },
];

export const IssueHome = () => {
  const [active, setCheckBox] = useState(false);
  const handleClick = () => {
    setCheckBox((prev) => !prev);
  };

  const name = active ? "check-box-active" : "check-box-initial";

  return (
    <>
      <Header>
        <FilterBar />
        <RightItems>
          <Taps labelCount={3} milestoneCount={2} />
          <Button options={{ type: "Small-Standard", prefixIcon: "plus" }}>이슈 작성</Button>
        </RightItems>
      </Header>
      <IssueTable>
        <IssueTableHeader>
          <CheckBox name={name} onClick={handleClick} active={active} />
          <Button options={{ type: "Medium-Text", prefixIcon: "alert-circle" }}>열린 이슈(2)</Button>
          <Button options={{ type: "Medium-Text", prefixIcon: "archive" }}>닫힌 이슈(0)</Button>
          <RightItems></RightItems>
        </IssueTableHeader>
        <Issue>
          <CheckBox name={name} onClick={handleClick} active={active} />
          <Icon name="alert-circle" />
          <Text options={{ size: "medium", isLink: true }}>이슈 제목</Text>
          <SmallLabel name="documentation" backgroundColor="blue" isBright={true} />
        </Issue>
      </IssueTable>
      <Link to="new">
        <Button options={{ type: "Medium-Standard" }}>새로운 이슈 작성</Button>
      </Link>
      <Link to="/test">
        <Button options={{ type: "Medium-Standard" }}>테스트 페이지</Button>
      </Link>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const RightItems = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  & > * {
    margin-left: 16px;
  }
`;

const IssueTable = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.grayscale.line};
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    overflow: hidden;
    width: 100%;

    & > *:not(:last-child) {
      border-bottom: 1px solid ${theme.grayscale.line};
    }
  `
);

const IssueTableHeader = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.background};
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
  `
);

const CheckBox = styled(Icon)(
  ({ theme, active }) => css`
    margin: 0px 32px;
    color: ${active ? theme.color.blue.default : theme.grayscale.offWhite};
    stroke: ${active ? theme.grayscale.offWhite : theme.grayscale.line};
  `
);

const Issue = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 0px;
  `
);
