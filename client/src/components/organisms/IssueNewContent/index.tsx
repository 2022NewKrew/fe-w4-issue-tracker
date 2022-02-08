import React from "react";
import styled, { css } from "styled-components";
import { SideBar, TextInput } from "@/components/atoms";
import { ExamIcons } from "@/components/atoms/Icons";
import { CommentTextArea } from "@/components/molecules";
import { IStyle } from "@/constants/type";

interface IIssueNewContent {
  styles?: IStyle;
}
const IssNewContent: React.FC<IIssueNewContent> = ({ styles }) => {
  const Props = {
    TextInputProps: {
      name: "제목",
      styles: {
        width: "880px",
      },
    },
    TextAreaProps: {
      name: "코멘트를 입력하세요",
      styles: { margin: "16px 0px 0px 0px", width: "832px", height: "310px" },
    },
  };
  return (
    <IssueNewContentWrap>
      <UserIcon>
        <ExamIcons />
      </UserIcon>
      <ContentWrap {...styles}>
        <TextInput type="medium" {...Props.TextInputProps} />
        <CommentTextArea {...Props.TextAreaProps} />
      </ContentWrap>
      <SideBar />
    </IssueNewContentWrap>
  );
};

const UserIcon = styled.div``;
const IssueNewContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
`;
const ContentWrap = styled.div<IStyle>`
  ${({ margin, width, height, background, borderColor, color }) => css`
    display: flex;
    flex-direction: column;
    margin: ${margin ?? ""};
    width: ${width ?? ""};
    height: ${height ?? ""};
    background: ${background ?? ""};
    border-color: ${borderColor ?? ""};
    color: ${color ?? ""};
  `}
`;
export default IssNewContent;
