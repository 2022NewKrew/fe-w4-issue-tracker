import styled from "@emotion/styled";
import Logo from "./Logo";
import ProfileLarge from "@assets/icons/UserImageLarge.svg";

const Header: React.FC = () => (
  <StyledHeader>
    <Logo size="medium" />
    <ProfileLarge />
  </StyledHeader>
);

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  padding: 27px 80px 0;
  main {
    display: flex;
    flex-direction: column;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
`;
