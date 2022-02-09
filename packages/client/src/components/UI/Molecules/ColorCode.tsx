import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import { useInput } from "@hooks";

import { v4 } from "uuid";
import styled from "@emotion/styled";

interface Props {
  label: string;
}

const ColorCode = ({ label }: Props) => {
  const uuid = v4();
  const [value, onChange, reset] = useInput("");
  return (
    <SInputWrapper className="ColorCode">
      <label htmlFor={uuid}>{label}</label>
      <input id={uuid} value={value} onChange={onChange} maxLength={7} />
      <Icon name="refresh" onClick={reset} />
    </SInputWrapper>
  );
};

export default ColorCode;

const SInputWrapper = styled(Atoms.InputWrapper)`
  width: 240px;
  height: 40px;
  border-radius: 11px;
  padding: 0 24px;
  display: flex;
  & > label {
    ${({ theme }) => theme.FontSize.xsmall}
    display: inline-flex;
    align-items: center;
    min-width: 80px;
  }
  & > input {
    ${({ theme }) => theme.FontSize.small}
    padding-left: 8px;
  }
  & > svg {
    right: 10%;
    top: 30%;
  }
`;
