import styled, { css } from "styled-components";
import { cssFontSize } from "../atoms/Text";

export const Comment = ({ comment, ...props }) => {
  return (
    <CommentWrapper state={comment.status} {...props}>
      <CommentHeader>
        <Author>{comment.author}</Author>
        <Timestamp>{comment.timestamp}</Timestamp>
      </CommentHeader>
      <Content>{comment.content}</Content>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div(({ theme, state }) => {
  const color = {
    initial: {
      backgroundColor: theme.grayscale.background,
      borderColor: theme.grayscale.line,
      usernameColor: theme.grayscale.titleActive,
    },
    closed: {
      backgroundColor: theme.color.purple.light,
      borderColor: theme.color.purple.default,
      usernameColor: theme.color.purple.dark,
    },
    reopen: {
      backgroundColor: theme.color.blue.light,
      borderColor: theme.color.blue.default,
      usernameColor: theme.color.blue.dark,
    },
  };

  return css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${color[state].backgroundColor};
    border: 1px solid ${color[state].borderColor};
    border-radius: 16px;
    overflow: hidden;

    ${CommentHeader} {
      border-bottom: 1px solid ${color[state].borderColor};

      ${Author} {
        color: ${color[state].usernameColor};
      }
      ${Timestamp} {
        color: ${theme.grayscale.label};
      }
    }
  `;
});

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 24px;
  width: 100%;
  height: 64px;
  & > * {
    margin-right: 8px;
  }
`;

const Author = styled.p`
  ${cssFontSize["small"]}
`;

const Timestamp = styled.p`
  ${cssFontSize["small"]}
`;

const Content = styled.div`
  ${cssFontSize["small"]}
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.grayscale.offWhite};
`;
