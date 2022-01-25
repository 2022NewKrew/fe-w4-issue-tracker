import styled from "@emotion/styled";
import { useBooleanState } from "@hooks";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import ArrowDownIcon from "@assets/icons/arrow_down.svg";
import SelectIcon from "@assets/icons/check-on-circle.svg";
import NotSelectIcon from "@assets/icons/check-off-circle.svg";

interface Props {
  title: string;
  list: string[];
  image?: boolean;
  icon?: boolean;
}

const Dropdown = ({ title, list, image = false, icon = false }: Props) => {
  const [visible, showMenu, closeMenu] = useBooleanState(true);
  const [select, setSelect] = useState("");

  const handleClick = (e: any) => {
    setSelect(e.target.textContent);
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [visible]);

  return (
    <Wrapper>
      <Indicator onClick={showMenu}>
        Filter
        <ArrowDownIcon />
      </Indicator>
      <Panel visible={visible}>
        <h3>{title}</h3>
        <ul onClick={handleClick}>
          {list.map((ele) => (
            <li key={ele} className={select === ele ? "select" : ""}>
              {ele}
              {icon && (select === ele ? <SelectIcon /> : <NotSelectIcon />)}
            </li>
          ))}
        </ul>
      </Panel>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
`;

const Indicator = styled.button`
  width: 128px;
  height: 40px;
  ${theme.text.small}
  font-weight: bold;
  color: ${theme.greyscale.label};
  background: ${theme.greyscale.background};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    color: ${theme.greyscale.body};
    background: ${theme.greyscale.line};
    svg {
      opacity: 1;
    }
  }
  svg {
    opacity: 0.5;
  }
`;

const Panel = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  width: 240px;
  position: absolute;
  top: 48px;
  background: ${theme.greyscale.line};
  border: 1px solid ${theme.greyscale.line};
  border-radius: 16px;

  h3,
  li {
    padding: 8px 16px;
  }
  h3 {
    ${theme.text.medium};
    color: ${theme.greyscale.titleActive};
    background: ${theme.greyscale.background};
    border-radius: 16px 16px 0px 0px;
  }
  li {
    ${theme.text.small};
    color: ${theme.greyscale.body};
    border-top: 1px solid ${theme.greyscale.line};
    background: ${theme.greyscale.offWhite};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover {
      color: ${theme.greyscale.titleActive};
      background: ${theme.greyscale.background};
    }
  }
  li:last-child {
    border-radius: 0px 0px 16px 16px;
  }
  .select {
    color: ${theme.greyscale.titleActive};
  }
`;
