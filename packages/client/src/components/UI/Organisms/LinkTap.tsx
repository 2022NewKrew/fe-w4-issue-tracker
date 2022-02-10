import { CustomButton, Taps } from "@UI/Molecules";

import styled from "@emotion/styled";

const LinkTap = () => {
  return (
    <Wrapper className="LinkTap">
      <Taps />
      <CustomButton.AddIssueButton />
    </Wrapper>
  );
};

export default LinkTap;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  & > button:last-of-type {
    margin-left: 16px;
  }
`;
