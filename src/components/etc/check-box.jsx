const StyledCheckBox = styled.input`
  position: absolute;
  width: 16px;
  height: 16px;
`;

const CheckBox = ({ children }) => {
  return (
    <StyledCheckBox>
      <input type={"checkbox"}></input>
      <span>{children}</span>
    </StyledCheckBox>
  );
};

export default CheckBox;
