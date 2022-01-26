import styled, { css } from "styled-components";
import { Text } from "../atoms/Text";

export const Comment = ({ state, ...props }) => {
  return (
    <CommentWrapper state={state} {...props}>
      <CommentHeader>
        <Text options={{ size: "small" }} className="username">
          Remian103
        </Text>
        <Text options={{ size: "small" }} className="timestamp">
          5min
        </Text>
      </CommentHeader>
      <Content options={{ size: "small" }}>안녕하세요</Content>
    </CommentWrapper>
  );
};

export const CommentWrapper = styled.div(({ theme, state }) => {
  const color = {
    common: {
      backgroundColor: theme.grayscale.background,
      borderColor: theme.grayscale.line,
      usernameColor: theme.grayscale.titleActive,
    },
    close: {
      backgroundColor: theme.color.purple.light,
      borderColor: theme.color.purple.default,
      usernameColor: theme.color.purple.dark,
    },
    open: {
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

    & > *:first-child {
      border-bottom: 1px solid ${color[state].borderColor};

      .username {
        color: ${color[state].usernameColor};
      }
      .timestamp {
        color: ${theme.grayscale.label};
      }
    }
  `;
});

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 24px;
  width: 100%;
  height: 64px;
  & > * {
    margin-right: 8px;
  }
`;

export const Username = styled(Text).attrs({
  options: { size: "small" },
  className: "username",
})``;

export const CommentText = styled(Text).attrs({
  options: { size: "small" },
})(
  ({ theme }) => css`
    padding: 16px 24px;
    width: 100%;
    background-color: ${theme.grayscale.offWhite};
  `
);
