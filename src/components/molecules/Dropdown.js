import React, { useEffect, useState, useCallback } from "react";
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
  visibility: ${({ isActivated }) => (isActivated ? "visible" : "hidden")};
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
  options,
  isMultipleOptionsAvailable,
  parentRef,
}) {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const clickEventHandler = (e) => {
      const { target } = e;
      const { current: parentNode } = parentRef;
      if (isActivated && !parentNode.contains(target)) {
        setIsActivated(false);
      } else if (!isActivated && parentNode.contains(target)) {
        setIsActivated(true);
      }
    };
    document.addEventListener("click", clickEventHandler);
    return () => {
      document.removeEventListener("click", clickEventHandler);
    };
  }, [isActivated]);

  return (
    <DropdownWrapper className={className} isActivated={isActivated}>
      <DropdownTitle>{title}</DropdownTitle>
      {options.map((option, idx) => {
        const { text, imgUrl } = option;
        return (
          <DropdownPanel
            key={`dropdown-${title}-content-${idx}`}
            text={text}
            imgUrl={imgUrl}
            isMultipleOptionsAvailable={isMultipleOptionsAvailable}
          />
        );
      })}
    </DropdownWrapper>
  );
}

export default Dropdown;
