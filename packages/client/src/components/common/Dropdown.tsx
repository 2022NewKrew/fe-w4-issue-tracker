import styled from "@emotion/styled";
import { useBooleanState } from "@hooks";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import ArrowDownIcon from "@assets/icons/arrow_down.svg";
import SelectIcon from "@assets/icons/check-on-circle.svg";
import NotSelectIcon from "@assets/icons/check-off-circle.svg";
import { CSSIF } from "@utils/helper";

interface Props {
  indicator: string;
  panelTitle: string;
  list: string[];
  direction: "left" | "right";
  image?: boolean;
  icon?: boolean;
}

const Dropdown = ({
  indicator,
  panelTitle,
  list,
  direction,
  image = false,
  icon = true,
}: Props) => {
  const [visible, showMenu, closeMenu] = useBooleanState(false);
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
        {indicator}
        <ArrowDownIcon />
      </Indicator>
      <Panel visible={visible} direction={direction}>
        <h3>{panelTitle}</h3>
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
  ${theme.text.small}
  /* height: 100%; */
  font-weight: bold;
  color: ${theme.greyscale.label};
  background: ${theme.greyscale.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg {
    position: static;
    margin-left: 8px;
    opacity: 0.5;
  }
  :hover {
    color: ${theme.greyscale.body};
    svg {
      opacity: 1;
    }
  }
`;

const Panel = styled.div<{ visible: boolean; direction: "left" | "right" }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  width: 240px;
  position: absolute;
  top: 48px;
  ${({ direction }) => CSSIF(direction === "left", "left : 0;", "right: 0;")}
  background: ${theme.greyscale.line};
  border: 1px solid ${theme.greyscale.line};
  border-radius: 16px;
  overflow: hidden;
  z-index: 10;
  h3,
  li {
    padding: 8px 16px;
  }
  h3 {
    ${theme.text.medium};
    color: ${theme.greyscale.titleActive};
    background: ${theme.greyscale.background};
  }
  li {
    ${theme.text.small};
    color: ${theme.greyscale.body};
    border-top: 1px solid ${theme.greyscale.line};
    background: ${theme.greyscale.offWhite};
    height: 44px;
    position: relative;
    cursor: pointer;
    svg {
      top: 12px;
      right: 17px;
    }
    :hover {
      color: ${theme.greyscale.titleActive};
      background: ${theme.greyscale.background};
    }
  }
  .select {
    color: ${theme.greyscale.titleActive};
  }
`;
