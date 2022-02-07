import { LayoutProps } from "@emotion/react";
import styled from "@emotion/styled";

const LoginLayout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LoginLayout;

const Wrapper = styled.div`
  ${({ theme }) => theme.FlexCenter};
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
  & > span {
    ${({ theme }) => theme.FontSize.small};
    color: var(--placeholer);
    font-weight: bold;
    margin: 24px 0;
  }
`;
