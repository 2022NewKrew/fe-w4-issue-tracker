import React from "react";
import styled, { css } from "styled-components";
import { Comment } from "@/components/atoms";
import { IStyle } from "@/constants/type";
import { ExamIcons } from "@/components/atoms/Icons";

interface IIssueDetailComment {
  styles?: IStyle;
}
const IssueDetailComment: React.FC<IIssueDetailComment> = ({ styles }) => {
  const CommentProps = {
    commentContent:
      "처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근 완성도를 높여보세요",
    userName: "Oni",
    timeStamp: "20분 전",
    styles: {
      width: "880px",
      height: "124px",
    },
  };
  return (
    <CommentWrap {...styles}>
      <UserIcon>
        <ExamIcons></ExamIcons>
      </UserIcon>
      <Comment {...CommentProps}></Comment>
    </CommentWrap>
  );
};
const UserIcon = styled.div``;
const CommentWrap = styled.div<any>`
  ${({ margin, width, height, background, borderColor, color }) => css`
    margin: ${margin ?? ""};
    width: ${width ?? ""};
    height: ${height ?? ""};
    background: ${background ?? ""};
    border-color: ${borderColor ?? ""};
    color: ${color ?? ""};
  `};
  ${UserIcon} {
    margin: 0px 16px 0px 0px;
  }
  display: flex;
`;
export default IssueDetailComment;
