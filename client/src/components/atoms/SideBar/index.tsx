import React from "react";
import styled, { css } from "styled-components";
import { Plus } from "../Icons";
import { theme } from "@/styles/theme";
import { IStyle } from "@/constants/type";

interface ISideBar {
  styles?: IStyle;
}
const SideBar: React.FC<ISideBar> = () => {
  return (
    <SideBarWrap>
      <SideBarItems>
        <SideBarItemsTitle>
          담당자
          <Plus color={theme.color.label} />
        </SideBarItemsTitle>
      </SideBarItems>
      <SideBarItems>
        <SideBarItemsTitle>
          레이블
          <Plus color={theme.color.label} />
        </SideBarItemsTitle>
      </SideBarItems>
      <SideBarItems>
        <SideBarItemsTitle>
          마일스톤
          <Plus color={theme.color.label} />
        </SideBarItemsTitle>
      </SideBarItems>
    </SideBarWrap>
  );
};

const SideBarItems = styled.div``;
const SideBarItemsTitle = styled.div``;
const SideBarWrap = styled.div`
  width: 308px;
  height: 290px;
  background: #d9dbe9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9dbe9;
  border-radius: 16px;
  ${SideBarItems} {
    background: #fefefe;
    &:first-child {
      border-radius: 16px 16px 0px 0px;
    }
    &:last-child {
      border-radius: 0px 0px 16px 16px;
    }
    ${SideBarItemsTitle} {
      width: 306px;
      height: 95px;
      font-weight: bold;
      font-size: 16px;
      padding-left: 32px;
      padding-top: 44px;
      padding-bottom: 40px;
      color: ${theme.color.label};
      position: relative;
      border-radius: 16px;

      & > svg {
        position: absolute;
        right: 32px;
        top: 40px;
        cursor: pointer;
      }
    }
  }
`;
export default SideBar;
