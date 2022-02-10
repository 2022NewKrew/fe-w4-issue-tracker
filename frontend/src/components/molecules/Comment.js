import React from "react";
import styled, { css } from "styled-components";

import moment from "moment";
import "moment/locale/ko";

import { SmallText } from "@components/atoms/Text";
import { XSmallLink } from "@components/atoms/Link";
import { SmallLabel } from "@components/molecules/Labels";
import { TextButton } from "@components/atoms/Buttons";

import { ReactComponent as Edit } from "@assets/icons/edit.svg";
import { ReactComponent as Smile } from "@assets/icons/smile.svg";

import { useRecoilValue } from "recoil";
import { userState } from "../../_state";

const Container = styled.div`
  width: 880px;
  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;

  overflow: hidden;

  ${(props) => {
    if (props.type === "initial") {
      return css`
        border: 1px solid ${(props) => props.theme.greyscale.line};
      `;
    } else if (props.type === "reopen") {
      return css`
        border: 1px solid ${(props) => props.theme.colors.blue};
      `;
    } else if (props.type === "closed") {
      return css`
        border: 1px solid ${(props) => props.theme.colors.purple};
      `;
    }
  }};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 24px;

  height: 64px;

  ${(props) => {
    if (props.type === "initial") {
      return css`
        background-color: ${(props) => props.theme.greyscale.background};
        border-bottom: 1px solid ${(props) => props.theme.greyscale.line};
      `;
    } else if (props.type === "reopen") {
      return css`
        background-color: ${(props) => props.theme.colors.lightBlue};
        border-bottom: 1px solid ${(props) => props.theme.colors.blue};
      `;
    } else if (props.type === "closed") {
      return css`
        background-color: ${(props) => props.theme.colors.lightPurple};
        border-bottom: 1px solid ${(props) => props.theme.colors.purple};
      `;
    }
  }};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  p + p {
    margin-left: 8px;
  }

  ${TextButton} > svg {
    margin-right: 5.33px;
  }

  ${TextButton} {
    margin-left: 28px;
    margin-right: 16px;
  }

  svg {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 16px 24px;
  background-color: ${(props) => props.theme.greyscale.offWhite};
`;

export function Comment({
  id,
  username,
  timestamp,
  type,
  content,
  setEditingCommentId,
}) {
  const user = useRecoilValue(userState);
  const isAuthor = user && user === username;

  function AuthorComponent() {
    if (isAuthor && type === "initial") {
      return (
        <>
          <SmallLabel type='line' text='작성자' />
          <TextButton onClick={() => setEditingCommentId(id)}>
            <Edit />
            <XSmallLink color='label'>편집</XSmallLink>
          </TextButton>
        </>
      );
    }
  }

  return (
    <Container type={type}>
      <Header type={type}>
        <Wrapper>
          <SmallText color={type === "open" ? "darkBlue" : "titleActive"}>
            {username}
          </SmallText>
          <SmallText color='label'>{moment(timestamp).fromNow()}</SmallText>
        </Wrapper>
        <Wrapper>
          {AuthorComponent()}
          <Smile />
        </Wrapper>
      </Header>
      <Content>
        <SmallText color={type === "open" ? "darkBlue" : "titleActive"}>
          {content}
        </SmallText>
      </Content>
    </Container>
  );
}
