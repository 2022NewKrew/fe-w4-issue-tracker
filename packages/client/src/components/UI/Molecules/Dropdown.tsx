import Icon from "@Icon";
import { useDropdown } from "@hooks";

import { useState } from "react";

import { DropdownProps } from "@interface/components";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Dropdown = ({
  indicator,
  panelTitle,
  list,
  direction,
  image = false,
  icon = true,
}: DropdownProps) => {
  const [visible, open] = useDropdown();
  const [select, setSelect] = useState("");

  const handleClick = (e: any) => {
    setSelect(e.target.textContent);
  };

  return (
    <Wrapper>
      <Indicator onClick={open}>
        {indicator}
        <Icon name="arrow_down" />
      </Indicator>
      <Panel visible={visible} direction={direction}>
        <h3>{panelTitle}</h3>
        <ul onClick={handleClick}>
          {list.map((ele) => (
            <li key={ele} className={select === ele ? "select" : ""}>
              {image && <Icon name="user_image_small" />}
              {ele}
              {icon &&
                (select === ele ? (
                  <Icon name="check_on_circle" />
                ) : (
                  <Icon name="check_off_circle" />
                ))}
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

export const Indicator = styled.button`
  ${({ theme: { FontSize, Greyscale } }) => css`
    ${FontSize.small}
    color: ${Greyscale.label};
    background: ${Greyscale.background};
    font-weight: bold;
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
      color: ${Greyscale.body};
      svg {
        opacity: 1;
      }
    }
  `}
`;

export const Panel = styled.div<{
  visible: boolean;
  direction: "left" | "right";
}>`
  ${({ theme: { FontSize, Greyscale }, visible, direction }) => css`
    background: ${Greyscale.line};
    border: 1px solid ${Greyscale.line};
    display: ${visible ? "flex" : "none"};
    flex-direction: column;
    width: 240px;
    position: absolute;
    top: 48px;
    ${direction === "left" ? "left : 0" : "right: 0"};
    border-radius: 16px;
    overflow: hidden;
    z-index: 10;
    h3 {
      ${FontSize.medium};
      color: ${Greyscale.titleActive};
      background: ${Greyscale.background};
      padding: 16px 16px 12px;
    }
    li {
      ${FontSize.small};
      padding: 8px 16px;
      display: flex;
      align-items: center;
      color: ${Greyscale.body};
      border-top: 1px solid ${Greyscale.line};
      background: ${Greyscale.offWhite};
      height: 44px;
      position: relative;
      cursor: pointer;
      svg {
        top: 12px;
        right: 17px;
      }
      :hover {
        color: ${Greyscale.titleActive};
        background: ${Greyscale.background};
      }
    }
    .select {
      color: ${Greyscale.titleActive};
    }
  `}
`;
