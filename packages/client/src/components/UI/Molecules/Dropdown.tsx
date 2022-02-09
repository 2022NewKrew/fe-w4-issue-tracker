import Icon from "@UI/Icon";
import { useDropdown } from "@hooks";

import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

interface PannelList {
  id: string;
  name: string;
  [key: string]: any;
}

interface Props {
  indicator: string;
  listTitle?: string;
  list: PannelList[];
  direction?: "left" | "right";
  image?: boolean;
  icon?: boolean;
  select?: string | string[] | null;
  onSelect: (id: string) => void;
}

const Dropdown = ({
  indicator,
  listTitle = `${indicator} 필터`,
  list,
  direction = "right",
  image = false,
  icon = true,
  select,
  onSelect,
}: Props) => {
  const [visible, open] = useDropdown();

  const isSelect = (id: string) => {
    if (typeof select === "string") {
      return select === id;
    } else if (Array.isArray(select)) {
      return select.includes(id);
    }
    return false;
  };

  const createList = (list: PannelList[]) =>
    list.map(({ id, name }) => (
      <Atoms.Li
        key={id}
        className={isSelect(id) ? "select" : ""}
        onClick={() => onSelect(id)}
      >
        {image && <Icon name="user_image_small" />}
        {name}
        {icon && <Icon name={isSelect(id) ? "check" : "no_check"} />}
      </Atoms.Li>
    ));

  return (
    <Wrapper className="Dropdown">
      <Atoms.Button shape="text" size="medium" onClick={open} icon="arrow_down">
        {indicator}
      </Atoms.Button>
      <Panel className="Panel" visible={visible} direction={direction}>
        <Atoms.Li header>{listTitle}</Atoms.Li>
        {createList(list)}
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

const Panel = styled(Atoms.Ul)<{
  visible: boolean;
  direction: "left" | "right";
}>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  width: 240px;
  position: absolute;
  top: 48px;
  overflow: hidden;
  z-index: 10;
  ${({ direction }) => (direction === "left" ? "left : 0" : "right: 0")};
  & > li {
    height: 44px;
    padding: 0 16px;
    color: var(--body);
    cursor: pointer;
    & > svg {
      position: static;
    }
    &:first-of-type {
      height: 48px;
    }
  }
  .select {
    color: var(--titleActive);
  }
`;
