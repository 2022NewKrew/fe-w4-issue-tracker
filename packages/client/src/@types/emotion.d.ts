import "@emotion/react";
import * as icons from "@assets/icons";

type Greyscale =
  | "titleActive"
  | "body"
  | "label"
  | "placeholer"
  | "line"
  | "inputBackground"
  | "background"
  | "offWhite";

type Size = "large" | "medium" | "small";
type FontSize = "title" | Size | "xsmall";

interface IColorDetail {
  default: string;
  light: string;
  dark: string;
}

declare module "@emotion/react" {
  export interface Theme {
    FontSize: { [key in FontSize]: string };
    Greyscale: { [key in Greyscale]: string };
    Colors: { [key in color]: IColorDetail };
    FlexCenter: string;
  }
  export interface LayoutProps {
    children?: React.ReactNode;
  }

  // icon
  export type IconName = keyof typeof icons;

  export interface IconProps extends React.SVGProps<SVGElement> {
    name: IconName;
    className?: string;
  }
}
