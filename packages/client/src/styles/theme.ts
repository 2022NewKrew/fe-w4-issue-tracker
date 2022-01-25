import { css, Theme } from "@emotion/react";

const theme: Theme = {
  text: {
    title: css`
      font-size: 2rem;
    `,
    large: css`
      font-size: 1.5rem;
    `,
    medium: css`
      font-size: 1.125rem;
    `,
    small: css`
      font-size: 1rem;
    `,
    xsmall: css`
      font-size: 0.75rem;
    `,
  },
  greyscale: {
    titleActive: "#14142B",
    body: "#4E4B66",
    label: "#6E7191",
    placeholer: "#A0A3BD",
    line: "#D9DBE9",
    inputBackgound: "#EFF0F6",
    background: "#F7F7FC",
    offWhite: "#FEFEFE",
  },
  colors: {
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
  },
  flexCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default theme;
