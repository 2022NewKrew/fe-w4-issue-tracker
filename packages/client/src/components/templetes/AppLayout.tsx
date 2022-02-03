import Icon from "@UI/Icon";

import { LayoutProps } from "@interface/components";
import styled from "@emotion/styled";

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <header>
        <Icon name="logo_medium" />
        <Icon name="user_image_large" />
      </header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  padding: 0 80px;
  main {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  header {
    width: 100%;
    height: 126px;
    position: relative;
    svg:first-of-type {
      left: 0;
      top: 27px;
    }
    svg:last-child {
      right: 0;
      top: 25px;
    }
  }
`;
