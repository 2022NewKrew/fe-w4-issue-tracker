import styled from "styled-components";

const colors = {
  blue: "#007AFF",
  lightBlue: "#C7EBFF",
  darkBlue: "#004DE3",
  purple: "#0025E7",
  lightPurple: "#CCD4FF",
  darkPurple: "#020070",
  red: "#FF3B30",
  lightRed: "#FFD1CF",
  darkRed: "#C60B00",
  green: "#34C759",
  lightGreen: "#DDFFE6",
  darkGreen: "#00A028",
  titleActive: "#14142B",
  body: "#4E4B66",
  label: "#6E7191",
  placeholder: "#A0A3BD",
  line: "#D9DBE9",
  inputBackground: "#EFF0F6",
  background: "#F7F7FC",
  offWhite: "#FEFEFE",
};

const Text = styled.p`
  font-weight: 400;
  color: ${(props) =>
    props.color ? colors[props.color] : props.theme.greyscale.body};
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
