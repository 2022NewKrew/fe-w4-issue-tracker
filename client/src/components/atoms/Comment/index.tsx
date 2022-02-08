import React from "react";
import styled, { css } from "styled-components";
import { IStyle } from "@/constants/type";

interface ICommentProps {
  commentContent: string;
  userName?: string;
  timeStamp?: string;
  styles?: IStyle & {
    titleBackground?: string;
  };
}
const Comment: React.FC<ICommentProps> = ({
  styles,
  commentContent,
  userName,
  timeStamp,
  children,
  ...props
}) => {
  const CommentWrapProps = {
    ...styles,
  };
  return (
    <CommentWrap {...CommentWrapProps}>
      <CommentTitle>
        <CommentMetaWrap>
          <CommentUserName>{userName ?? "userName"}</CommentUserName>
          <CommentTimeStamp>{timeStamp ?? "timeStamp"}</CommentTimeStamp>
        </CommentMetaWrap>
        {children}
      </CommentTitle>
      <CommentContent>{commentContent}</CommentContent>
    </CommentWrap>
  );
};

const CommentTitle = styled.div``;
const CommentMetaWrap = styled.div``;
const CommentUserName = styled.div``;
const CommentTimeStamp = styled.div``;
const CommentContent = styled.div``;
const CommentWrap = styled.div<
  IStyle & {
    titleBackground?: string;
  }
>`
  ${({ margin, width, height, titleBackground, borderColor }) => css`
    border: 1px solid ${borderColor ?? "#d9dbe9"};
    box-sizing: border-box;
    border-radius: 16px;
    background: #fefefe;
    overflow: hidden;
    width: ${width ?? "480px"};
    /* height: ${height ?? "124px"}; */
    margin: ${margin ?? ""};
    ${CommentTitle} {
      width: ${width ?? "480px"};
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      align-items: center;
      background: ${titleBackground ?? "#f7f7fc"};
      border-bottom: 1px solid ${borderColor ?? "#d9dbe9"};
      ${CommentMetaWrap} {
        display: flex;
        ${CommentUserName} {
          color: ${borderColor ?? "#14142B"};
          height: 28px;
          line-height: 28px;
        }
        ${CommentTimeStamp} {
          color: #6e7191;
          width: 86px;
          height: 28px;
          line-height: 28px;
          margin-left: 8px;
        }
      }
    }
    ${CommentContent} {
      width: ${width ?? "480px"};
      background: ${"#fefefe"};
      color: ${borderColor ?? "#14142B"};
      padding: 16px 24px 16px 24px;
    }
  `}
`;
export default Comment;
