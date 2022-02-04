import React, { useState } from "react";
import styled from "styled-components";
import { SmallProfileImg, SmallText, Wrapper } from "@atoms";
import { COLOR } from "@constants";
import { CheckOffCircleIcon, CheckOnCircleIcon } from "@icons";

const DropdownPanelWrapper = styled(Wrapper)`
  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  border-top: 1px solid ${COLOR.GREYSCALE.LINE};
  flex-direction: row;
  width: 100%;
  padding: 8px 16px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const DropdownPanelInfoWrapper = styled(SmallText)`
  justify-content: space-between;
  width: ${({ isImgContained }) => (isImgContained ? "85%" : "100%")};
  align-items: center;
  color: ${({ isActivated }) =>
    isActivated ? COLOR.GREYSCALE.TITLE_ACTIVE : ""};
`;
const ProfileImg = styled(SmallProfileImg)``;

function DropdownPanel({ text, imgUrl, isMultipleOptionsAvailable }) {
  const [isActivated, setIsActivated] = useState(false);
  const clickPanel = () => {
    setIsActivated(!isActivated);
  };
  return (
    <DropdownPanelWrapper>
      {imgUrl ? <ProfileImg src={imgUrl} /> : <></>}
      <DropdownPanelInfoWrapper
        isImgContained={!!imgUrl}
        onClick={clickPanel}
        isActivated={isActivated}
      >
        <span>{text}</span>
        {isMultipleOptionsAvailable ? (
          isActivated ? (
            <CheckOnCircleIcon />
          ) : (
            <CheckOffCircleIcon />
          )
        ) : (
          <></>
        )}
      </DropdownPanelInfoWrapper>
    </DropdownPanelWrapper>
  );
}
export default DropdownPanel;
