import { useBooleanState } from "@hooks";
import { useEffect, useState } from "react";
import ArrowDownIcon from "@assets/icons/arrow_down.svg";
import SelectIcon from "@assets/icons/check-on-circle.svg";
import NotSelectIcon from "@assets/icons/check-off-circle.svg";
import { Indicator, Panel, Wrapper } from "./style";

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
