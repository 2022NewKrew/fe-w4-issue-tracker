import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { MediumText, Wrapper } from "@atoms";
import { COLOR } from "@constants";
import { DropdownPanel } from "@molecules";

const DropdownWrapper = styled(Wrapper)`
  align-items: flex-start;
  width: 240px;
  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  border: 1px solid ${COLOR.GREYSCALE.LINE};
  border-radius: 16px;
  overflow: hidden;
  z-index: 10;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const DropdownTitle = styled(MediumText)`
  padding: 8px 16px;
  height: 48px;
  width: 100%;
  color: ${COLOR.GREYSCALE.TITLE_ACTIVE};
  background-color: ${COLOR.GREYSCALE.BACKGROUND};
  box-sizing: border-box;
`;

function Dropdown({
  className,
  title,
  isCheckIcon,
  options,
  parentRef,
  callbackAfterPanelClickEvent,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const clickPanel = (clickedPanelData) => {
    const { value } = clickedPanelData;
    callbackAfterPanelClickEvent(value);
  };
  useEffect(() => {
    const clickDropdown = (e) => {
      const { target } = e;
      const { current: parentNode } = parentRef;
      const { current: thisNode } = dropdownRef;
      if (isVisible && !thisNode.contains(target)) {
        setIsVisible(false);
      } else if (!isVisible && parentNode.contains(target)) {
        setIsVisible(true);
      }
    };
    document.addEventListener("click", clickDropdown);
    return () => {
      document.removeEventListener("click", clickDropdown);
    };
  }, [isVisible]);

  return (
    <DropdownWrapper
      ref={dropdownRef}
      className={className}
      isVisible={isVisible}
    >
      <DropdownTitle>{title}</DropdownTitle>
      {options?.map((panelOption, idx) => {
        return (
          <DropdownPanel
            onClick={() => clickPanel(panelOption)}
            key={`dropdown-${title}-panel-${idx}`}
            {...panelOption}
            isCheckIcon={isCheckIcon}
          />
        );
      })}
    </DropdownWrapper>
  );
}

export default Dropdown;
