import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { useClickLink } from "@hooks";
import { LayoutProps } from "@emotion/react";

const AppLayout = ({ children }: LayoutProps) => {
  const goIssue = useClickLink("/issue");
  const goLogin = useClickLink("/login");
  return (
    <Wrapper>
      <header>
        <Icon name="logo_medium" onClick={goIssue} />
        <Icon name="user_image_large" onClick={goLogin} />
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
    margin-bottom: 100px;
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
  .LabelAddButton {
    position: absolute;
    right: 0;
  }
`;
