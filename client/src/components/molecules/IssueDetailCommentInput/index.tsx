import React from "react";
import styled, { css } from "styled-components";
import { IStyle } from "@/constants/type";
import { ExamIcons } from "@/components/atoms/Icons";
import { CommentTextArea } from "@/components/molecules";

interface IIssueDetailCommentInput {
  styles?: IStyle;
}
const IssueDetailCommentInput: React.FC<IIssueDetailCommentInput> = ({ styles }) => {
  const CommentTextAreaProps = {
    styles: {
      width: `${880 - 24 * 2}px`,
      height: "343px",
    },
  };
  return (
    <CommentInputWrap {...styles}>
      <UserIcon>
        <ExamIcons></ExamIcons>
      </UserIcon>
      <CommentTextArea {...CommentTextAreaProps}></CommentTextArea>
    </CommentInputWrap>
  );
};
const UserIcon = styled.div``;
const CommentInputWrap = styled.div<any>`
  display: flex;
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
`;
export default IssueDetailCommentInput;
