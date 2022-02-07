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

const TextInput = ({ children, customType }) => {
  return (
    <Container customType={"text-input"}>
      <CustomText customType={"x-small"} color={greyscale.label}>
        <span>{children}</span>
      </CustomText>
      <StyledTextInput type={"text"} customType={customType}></StyledTextInput>
    </Container>
  );
};

export default TextInput;
