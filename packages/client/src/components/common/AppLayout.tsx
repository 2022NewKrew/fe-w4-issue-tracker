import styled from "@emotion/styled";

const Header: React.FC = () => (
  <StyledHeader>
    <div>로고</div>
    <div>아이콘</div>
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
