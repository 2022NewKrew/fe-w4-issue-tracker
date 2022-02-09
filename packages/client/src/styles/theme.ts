import { Theme } from "@emotion/react";

const FontSize = {
  title: `
  font-size: 2rem;
  line-height: 150%;
  `,
  large: `
  font-size: 1.5rem;
  line-height: 167%;
  `,
  medium: `
  font-size: 1.125rem;
  line-height: 178%;
  `,
  small: `
  font-size: 1rem;
  line-height: 175%;
  `,
  xsmall: `
  font-size: 0.75rem;
  line-height: 167%;
  `,
};

const Greyscale = {
  titleActive: "#14142B",
  body: "#4E4B66",
  label: "#6E7191",
  placeholer: "#A0A3BD",
  line: "#D9DBE9",
  inputBackground: "#EFF0F6",
  background: "#F7F7FC",
  offWhite: "#FEFEFE",
};

const Colors = {
  primary: {
    default: "#007AFF",
    light: "#C7EBFF",
    dark: "#004DE3",
  },
  secondary: {
    default: "#0025E7",
    light: "#CCD4FF",
    dark: "#020070",
  },
  error: {
    default: "#FF3B30",
    light: "#FFD1CF",
    dark: "#C60B00",
  },
  success: {
    default: "#34C759",
    light: "#DDFFE6",
    dark: "#00A028",
  },
};

const FlexCenter = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const theme: Theme = {
  FontSize,
  Greyscale,
  Colors,
  FlexCenter,
};

export default theme;
