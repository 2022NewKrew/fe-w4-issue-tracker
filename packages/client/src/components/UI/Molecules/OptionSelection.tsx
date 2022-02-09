import styled from "@emotion/styled";
import { useSelection } from "@hooks";
import Icon from "@UI/Icon";

interface Props {
  label: string;
  options: string[];
}

const OptionSelection = ({ label, options }: Props) => {
  const [select, onClick] = useSelection("");

  return (
    <Wrapper onClick={onClick} className="OptionSelection">
      <span>{label}</span>
      {options.map((option) => [
        <input id={option} name={label} type="radio" />,
        <label htmlFor={option}>
          <Icon name={select === option ? "check" : "no_check"} />
          {option}
        </label>,
      ])}
    </Wrapper>
  );
};

export default OptionSelection;

const Wrapper = styled.div`
  width: 352px;
  height: 40px;
  background: var(--inputBackground);
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  & > span {
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
  }
  & > input {
    visibility: hidden;
  }
  & > label {
    cursor: pointer;
    padding-left: 24px;
    position: relative;
    & > svg {
      top: -1px;
      left: 0;
    }
  }
`;
