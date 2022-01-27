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
    }
    & > button:first-of-type {
      background: #14142b;
      margin: 60px 0 24px;
      :hover:enabled:not(:active),
      :active {
        background: #14142b;
        border: none;
      }
    }
    form {
      ${flexCenter}
      height: 230px;
      justify-content: space-between;
    }
    span {
      ${text.small};
      color: ${greyscale.placeholer};
      font-weight: bold;
    }
  `}
`;
