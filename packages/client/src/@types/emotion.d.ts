import "@emotion/react";

type LARGE = "large";
type MEDIUM = "medium";
type SMALL = "small";

type STANDARD = "standard";
type SECONDARY = "secondary";
type TEXT = "text";

type PRIMARY = "primary";
type SECONDARY = "secondary";
type ERROR = "error";
type SUCCESS = "success";

type greyscaleKey =
  | "titleActive"
  | "body"
  | "label"
  | "placeholer"
  | "line"
  | "inputBackgound"
  | "background"
  | "offWhite";

type sizeType = LARGE | MEDIUM | SMALL;
type textSizeType = "title" | sizeType | "xsmall";

type colorType = PRIMARY | SECONDARY | ERROR | SUCCESS;
// type colorsTone = "default" | "dark" | "light";

type buttonType = STANDARD | SECONDARY | TEXT;

interface IColorDetail {
  default: string;
  light: string;
  dark: string;
}

declare module "@emotion/react" {
  export interface Theme {
    text: { [key in textSizeType]: SerializedStyles };
    greyscale: {
      [key in greyscaleKey]: string;
    };
    colors: {
      [key in colorsKey]: IColorDetail;
    };
    flexCenter: SerializedStyles;
  }
}
