import React from "react";
import styled from "styled-components";

import { CheckOffCircleIcon, CheckOnCircleIcon } from "@icons";
import { SmallProfileImg, SmallText, Wrapper } from "@atoms";

import { COLOR } from "@constants";

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

function DropdownPanel({ text, photoUrl, isCheckIcon, isChecked, onClick }) {
  return (
    <DropdownPanelWrapper onClick={onClick}>
      {photoUrl && <ProfileImg src={photoUrl} />}
      <DropdownPanelInfoWrapper
        isImgContained={!!photoUrl}
        isActivated={isChecked}
      >
        <span>{text}</span>
        {isCheckIcon && isChecked && <CheckOnCircleIcon />}
        {isCheckIcon && !isChecked && <CheckOffCircleIcon />}
      </DropdownPanelInfoWrapper>
    </DropdownPanelWrapper>
  );
}
export default DropdownPanel;
