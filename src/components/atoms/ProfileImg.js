import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants";

export const ProfileImg = styled.img`
  border: 1px solid ${COLOR.GREYSCALE.LINE};
  box-sizing: border-box;
`;

export const BigProfileImg = styled(ProfileImg)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export const SmallProfileImg = styled(ProfileImg)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;
