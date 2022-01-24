import "@emotion/react";

type textKey = "title" | "large" | "medium" | "small" | "xsmall";

type greyscaleKey =
  | "titleActive"
  | "body"
  | "label"
  | "placeholer"
  | "line"
  | "inputBackgound"
  | "background"
  | "offWhite";

type colorsKey = "primary" | "secondary" | "error" | "success";
// type colorsTone = "default" | "dark" | "light";

type sizeKey = "large" | "medium" | "small";

interface IColorDetail {
  default: string;
  light: string;
  dark: string;
}

declare module "@emotion/react" {
  export interface Theme {
    text: { [key in textKey]: SerializedStyles };
    greyscale: {
      [key in greyscaleKey]: string;
    };
    colors: {
      [key in colorsKey]: IColorDetail;
    };
    flexCenter: SerializedStyles;
  }
}
