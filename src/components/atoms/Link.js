import styled from "styled-components";

export const LinkText = styled.span`
  font-family: Noto Sans KR, sans-serif;
  color: #4e4b66;
  font-style: normal;
  font-weight: bold;
`;

export const LargeLinkText = styled(LinkText)`
  font-size: 24px;
  line-height: 40px;
`;
export const MediumLinkText = styled(LinkText)`
  font-size: 18px;
  line-height: 32px;
`;
export const SmallLinkText = styled(LinkText)`
  font-size: 16px;
  line-height: 28px;
`;
export const XSmallLinkText = styled(LinkText)`
  font-size: 12px;
  line-height: 20px;
`;
