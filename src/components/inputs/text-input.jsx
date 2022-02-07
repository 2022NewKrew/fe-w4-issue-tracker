import styled from "styled-components";

import Container from "@components/etc/container";
import CustomText from "@components/typography/custom-text";
import greyscale from "@styles/greyscale";
import { allCenterAlign } from "@utils/helper";

const StyledTextInput = styled.input`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${greyscale.titleActive};
  ${allCenterAlign}
`;

const TextInput = ({ children, componentSize }) => {
  return (
    <Container componentType={"text-input"}>
      <CustomText componentSize={"x-small"} componentColor={greyscale.label}>
        <span>{children}</span>
      </CustomText>
      <StyledTextInput
        type={"text"}
        componentSize={componentSize}
      ></StyledTextInput>
    </Container>
  );
};

export default TextInput;
