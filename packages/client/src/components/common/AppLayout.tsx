import styled from "@emotion/styled";
import Logo from "./Logo";
import ProfileLarge from "@assets/icons/UserImageLarge.svg";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo size="medium" />
        <ProfileLarge />
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
  svg:first-child {
    left: 0;
    top: 27px;
  }
  svg:last-child {
    right: 0;
    top: 25px;
  }
`;
