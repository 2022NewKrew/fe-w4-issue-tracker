import { LayoutProps } from "@interface/components";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LoginLayout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LoginLayout;

const Wrapper = styled.div`
  ${({ theme: { flexCenter, text, greyscale } }) => css`
    ${flexCenter}
    margin-top: 230px;
    justify-content: space-between;
    svg {
      position: static;
      margin-bottom: 60px;
    }
    & > button:first-of-type {
      background: #14142b;
      :hover:enabled:not(:active),
      :active {
        background: #14142b;
        border: none;
      }
    }
    form {
      & > div:nth-of-type(2) {
        margin: 16px 0 24px;
      }
    }
    & > span {
      ${text.small};
      color: ${greyscale.placeholer};
      font-weight: bold;
      margin: 24px 0;
    }
  `}
`;
