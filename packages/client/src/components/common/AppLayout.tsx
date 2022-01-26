import styled from "@emotion/styled";
import Icon from "@icon";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <StyledHeader>
        <Icon name="logo_medium" />
        <Icon name="user_image_large" />
      </StyledHeader>
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
`;

const StyledHeader = styled.header`
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
`;
