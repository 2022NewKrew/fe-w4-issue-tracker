import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  list: string[];
  image?: boolean;
  icon?: boolean;
}

const Dropdown = ({ title, list, image = false, icon = false }: Props) => {
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState("");

  const showMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

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
      <Indicator onClick={showMenu}>Filter</Indicator>
      <Panel visible={visible}>
        <h3>{title}</h3>
        <ul onClick={handleClick}>
          {list.map((ele) => (
            <li key={ele} className={select === ele ? "select" : ""}>
              {ele}
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
  :hover {
    color: ${theme.greyscale.body};
    background: ${theme.greyscale.line};
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
