import styled from "styled-components";

const StyledStandardButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: 20px;

  background: #007aff;
  border-radius: 20px;
`;

const StandardButton = ({ children, type }) => {
  <StyledStandardButton type={type}>
    <span>{children}</span>
  </StyledStandardButton>;
};

export default StandardButton;
