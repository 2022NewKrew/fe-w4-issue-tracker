import styled from "styled-components";

export const Display = styled.p`
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${(props) => props.theme.greyscale.titleActive};
  font-weight: ${(props) => (props.type === "regular" ? "normal" : "bold")};
`;
