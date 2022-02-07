import styled from "styled-components";
import { useState } from "react";

import Container from "@components/etc/container";
import CustomText from "@components/typography/custom-text";
import greyscale from "@styles/greyscale";
import { allCenterAlign, disabledOpacity } from "@utils/helper";

const StyledTextInput = styled.input`
  padding: 0px 24px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${greyscale.titleActive};

  ${allCenterAlign}
  ${disabledOpacity}

  &:active {
  }
`;

const TextInput = ({ children, componentSize, componentDisabled }) => {
  const [disabled, setDisabled] = useState(componentDisabled);

  return (
    <Container componentType={"text-input"}>
      <CustomText componentSize={"x-small"} componentColor={greyscale.label}>
        <span>{children}</span>
      </CustomText>
      <StyledTextInput
        type={"text"}
        disabled={disabled}
        componentSize={componentSize}
      ></StyledTextInput>
    </Container>
  );
};

export default TextInput;
