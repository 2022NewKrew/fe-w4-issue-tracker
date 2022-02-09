import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

interface Props {
  value: "dark" | "light";
  onChange: (id: "dark" | "light") => void;
}

const TextColorSelection = ({ value, onChange }: Props) => {
  return (
    <Wrapper className="OptionSelection">
      <label>텍스트 색상</label>
      <Atoms.Button
        onClick={() => onChange("dark")}
        shape="text"
        size="medium"
        icon={value === "dark" ? "check" : "no_check"}
        active={value === "dark"}
      >
        어두운 색
      </Atoms.Button>
      <Atoms.Button
        onClick={() => onChange("light")}
        shape="text"
        size="medium"
        icon={value === "light" ? "check" : "no_check"}
        active={value === "light"}
      >
        밝은 색
      </Atoms.Button>
    </Wrapper>
  );
};

export default TextColorSelection;

const Wrapper = styled.div`
  width: 352px;
  height: 40px;
  background: var(--inputBackground);
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  & > label {
    ${({ theme }) => theme.FontSize.xsmall}
    display: flex;
    align-items: center;
    min-width: 80px;
    color: var(--label);
  }
  & > button {
    width: 104px;
    font-weight: normal;
  }
`;
