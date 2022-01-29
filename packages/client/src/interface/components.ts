import { buttonType, colorType, sizeType } from "src/@types/emotion";
import * as icons from "@assets/icons";

export interface LayoutProps {
  children: React.ReactNode;
}

// icon
export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGElement> {
  name: IconName;
  className?: string;
}

// button
export interface ButtonStyleProps {
  size: sizeType;
  color?: colorType;
  shape?: buttonType;
}

export interface ButtonProps extends ButtonStyleProps, LayoutProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconName;
  link?: string;
}

export interface ButtonGroupStyleProps {
  direction?: "row" | "column";
  gap: number | string;
}

export interface ButtonGroupProps extends ButtonGroupStyleProps, LayoutProps {}

// label
export interface LabelStyleProps {
  size?: "large" | "small";
  type?: "open" | "close" | "dark" | "light" | "line" | "custom";
  color: string;
}

// textArea
export interface TextAreaStyleProps {
  height: number | string;
}

export interface TextAreaProps extends TextAreaStyleProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// textInput
export interface TextInputStyleProps {
  size: sizeType;
}

export interface TextInputProps extends TextInputStyleProps {
  id: string;
  value: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  pattern?: string;
  errormsg?: string;
}

export interface DropdownProps {
  indicator: string;
  panelTitle: string;
  list: string[];
  direction: "left" | "right";
  image?: boolean;
  icon?: boolean;
}
