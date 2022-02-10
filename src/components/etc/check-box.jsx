import styled from "styled-components";

const StyledCheckBox = styled.div`
  width: 16px;
  height: 16px;
`;

const CheckBox = ({ children, checked, onChange }) => {
  return (
    <StyledCheckBox>
      <input type={"checkbox"} checked={checked} onChange={onChange}></input>
      <span>{children}</span>
    </StyledCheckBox>
  );
};

export default CheckBox;
