import Icon from "@UI/Icon";
import { useDropdown } from "@hooks";

import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

interface FilterList {
  id: string;
  name: string;
}

interface Props {
  indicator: string;
  listTitle: string;
  list: FilterList[];
  direction: "left" | "right";
  image?: boolean;
  icon?: boolean;
  select: string[];
  onSelect: (e: any) => void;
}

const Dropdown = ({
  indicator,
  listTitle,
  list,
  direction,
  image = false,
  icon = true,
  select,
  onSelect,
}: Props) => {
  const [visible, open] = useDropdown();

  const createList = (list: FilterList[]) => {
    return list.map(({ id, name }) => (
      <li key={id} className={select.includes(id) ? "select" : ""} data-id={id}>
        {image && <Icon name="user_image_small" />}
        {name}
        {icon && <Icon name={select.includes(id) ? "check" : "no_check"} />}
      </li>
    ));
  };

  return (
    <Wrapper className="Dropdown">
      <Atoms.Button shape="text" size="medium" onClick={open} icon="arrow_down">
        {indicator}
      </Atoms.Button>
      <Panel className="Panel" visible={visible} direction={direction}>
        <Atoms.Title type="panel">{listTitle}</Atoms.Title>
        <ul onClick={onSelect}>{createList(list)}</ul>
      </Panel>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: relative;
  & > .Button {
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
  z-index: 10;
  ${({ direction }) => (direction === "left" ? "left : 0" : "right: 0")};
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
