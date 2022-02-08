import React from "react";
import styled from "styled-components";
import { LogotypeMedium } from "@/components/atoms/Logo";
import { ExamIcons } from "@/components/atoms/Icons";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <LogotypeMedium></LogotypeMedium>
      <ExamIcons></ExamIcons>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 1280px;
  height: 94px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
export default Header;
