import styled from "styled-components";

const Text = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.greyscale.body};
  margin: 0;
`;

export const LargeText = styled(Text)`
  font-size: 24px;
  line-height: 40px;
`;

export const MediumText = styled(Text)`
  font-size: 18px;
  line-height: 32px;
`;

export const SmallText = styled(Text)`
  font-size: 16px;
  line-height: 28px;
`;

export const XSmallText = styled(Text)`
  font-size: 12px;
  line-height: 20px;
`;
