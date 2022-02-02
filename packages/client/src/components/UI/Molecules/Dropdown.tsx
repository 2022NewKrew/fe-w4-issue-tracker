import Icon from "@Icon";
import { useDropdown } from "@hooks";

import { useState } from "react";

import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

interface Props {
  indicator: string;
  listTitle: string;
  list: string[];
  direction: "left" | "right";
  image?: boolean;
  icon?: boolean;
}

const Dropdown = ({
  indicator,
  listTitle,
  list,
  direction,
  image = false,
  icon = true,
}: Props) => {
  const [visible, open] = useDropdown();
  const [select, setSelect] = useState("");
  const handleClick = (e: any) => {
    setSelect(e.target.textContent);
  };

  const createList = (list: string[]) => {
    return list.map((item) => (
      <li key={item} className={select === item ? "select" : ""}>
        {image && <Icon name="user_image_small" />}
        {item}
        {icon &&
          (select === item ? (
            <Icon name="check_on_circle" />
          ) : (
            <Icon name="check_off_circle" />
          ))}
      </li>
    ));
  };

  return (
    <Wrapper>
      <Atoms.Button shape="text" size="medium" onClick={open} icon="arrow_down">
        {indicator}
      </Atoms.Button>
      <Panel visible={visible} direction={direction}>
        <Atoms.Title type="panel">{listTitle}</Atoms.Title>
        <ul onClick={handleClick}>{createList(list)}</ul>
      </Panel>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
  & > button {
    flex-direction: row-reverse;
  }
`;

export const Panel = styled.div<{
  visible: boolean;
  direction: "left" | "right";
}>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 16px;
  width: 240px;
  position: absolute;
  top: 48px;
  overflow: hidden;
  ${({ direction }) => (direction === "left" ? "left : 0" : "right: 0")};
  & > h2 {
    background: var(--background);
    padding: 8px 16px;
    height: 48px;
  }
  & > ul > li {
    ${({ theme }) => theme.FontSize.small}
    padding: 8px 16px;
    border-top: 1px solid var(--line);
    display: flex;
    align-items: center;
    color: var(--body);
    background: var(--offWhite);
    height: 44px;
    position: relative;
    cursor: pointer;
    & > svg:last-of-type {
      top: 12px;
      right: 17px;
    }
  }
  .select {
    color: var(--titleActive);
  }
`;
