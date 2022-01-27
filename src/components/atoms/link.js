import styled from "styled-components";

const Link = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.greyscale.body};
  margin: 0;
`;

export const LargeLink = styled(Link)`
  font-size: 24px;
  line-height: 40px;
`;

export const MediumLink = styled(Link)`
  font-size: 18px;
  line-height: 32px;
`;

export const SmallLink = styled(Link)`
  font-size: 16px;
  line-height: 28px;
`;

export const XSmallLink = styled(Link)`
  font-size: 12px;
  line-height: 20px;
`;
