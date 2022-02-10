import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import { v4 } from "uuid";
import styled from "@emotion/styled";

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const ColorCode = ({ value, onChange, reset }: Props) => {
  const uuid = v4();
  return (
    <SInputWrapper className="ColorCode">
      <label htmlFor={uuid}>배경 색상</label>
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
    display: flex;
    align-items: center;
    min-width: 80px;
    color: var(--label);
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
