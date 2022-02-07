import React from "react";
import styled from "styled-components";
import { Color, Size } from "@/common/designSystem";
import userImg from "@/asset/img/user-img-large.svg";
import SVG from "react-inlinesvg";
import FilterBar from "../Filter-Bar";
import Taps from "../Taps";
import IssueList from "../Issue-List";
import Button, { ButtonMode } from "../Common/Button";

const IssueMain = () => {
  return (
    <Wrapper>
      <Header>
        <LogoSpan>Issue Tracker</LogoSpan>
        <SvgImg src={userImg} />
      </Header>
      <IssueWrapper>
        <IssueHeader>
          <FilterBar></FilterBar>
          <TapWrapper>
            <Taps labelGroupCount="2" milestoneGroupCount="0"></Taps>
            <Button
              buttonMode={ButtonMode.Standard}
              buttonSize={Size.Small}
              message="+ 이슈 작성"
            />
          </TapWrapper>
        </IssueHeader>
        <IssueList></IssueList>
      </IssueWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 80px;
  padding-left: 80px;
  box-sizing: border-box;
`;

const LogoSpan = styled.span`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: ${Color.TitleActive};
  letter-spacing: -0.04em;
`;

const SvgImg = styled(SVG)`
  height: 44px;
  width: 44px;
`;

const IssueWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  row-gap: 24px;
`;

const IssueHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TapWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;
export default IssueMain;
