import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { Color, Size } from "@/common/designSystem";
import plusImg from "@/asset/img/plus.svg";
import SVG from "react-inlinesvg";

export enum ButtonMode {
  Standard,
  Secondary,
  Text,
}

interface ButtonInputInfo {
  buttonSize: Size;
  buttonMode: ButtonMode;
}

interface ButtonProps {
  buttonSize?: Size;
  buttonMode?: ButtonMode;
  message?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  buttonSize = Size.Medium,
  buttonMode = ButtonMode.Text,
  message = "BUTTON",
}) => {
  return (
    <Wrapper>
      <SvgImg src={plusImg} buttonSize={buttonSize} buttonMode={buttonMode} />
      <ButtonInput
        type="button"
        buttonSize={buttonSize}
        buttonMode={buttonMode}
        value={message}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;

const largeSize = css`
  height: 64px;
  width: 340px;
  font-size: 18px;
  line-height: 32px;
`;

const mediumSize = css`
  width: 240px;
  height: 56px;
  font-size: 16px;
  line-height: 28px;
`;

const SvgImg = styled(SVG)<ButtonInputInfo>`
  visibility: ${(props) =>
    props.buttonSize === Size.Small ? "visible" : "hidden"};
  position: absolute;
  left: 24px;
  top: 10px;
  width: 16px;
  height: 16px;
  & path {
    stroke: ${Color.offWhite};
  }
`;

const smallSize = css`
  width: 120px;
  height: 40px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 11px;
  text-indent: 20px;
`;

const standardMode = css`
  color: ${Color.White};
  background: ${Color.Blue};
  &:hover {
    background: ${Color.DarkBlue};
  }

  &:focus {
    border: 4px solid ${Color.LightBlue};
  }

  &:disabled {
    background: ${Color.LightBlue};
  }
`;

const secondaryMode = css`
  color: ${Color.Blue};
  background: ${Color.White};
  border: 4px solid ${Color.Blue};
  &:hover {
    color: ${Color.DarkBlue};
    border: 4px solid ${Color.DarkBlue};
  }

  &:focus {
    color: ${Color.Blue};
    border: 4px solid ${Color.LightBlue};
  }

  &:disabled {
    color: ${Color.Blue};
    border: 4px solid ${Color.Blue};
  }
`;

const textMode = css`
  color: ${Color.Label};
  background: ${Color.None};
  &:hover {
    color: ${Color.Body};
  }

  &:active {
    color: ${Color.TitleActive};
  }

  &:disabled {
    color: ${Color.Body};
  }

  //TODO: 실제 적용 해배고 수정 예정
  width: max-content;
  height: max-content;
  border-radius: 0px;
  padding: 0px;
`;

const buttonSizeToStyles = {
  [Size.Large]: largeSize,
  [Size.Medium]: mediumSize,
  [Size.Small]: smallSize,
};

const buttonModeToStyles = {
  [ButtonMode.Standard]: standardMode,
  [ButtonMode.Secondary]: secondaryMode,
  [ButtonMode.Text]: textMode,
};

const ButtonInput = styled.input<ButtonInputInfo>`
  padding: 0px 24px;
  border-radius: 20px;

  text-align: center;

  /* Link Medium */
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  border: none;

  ${(props) => buttonSizeToStyles[props.buttonSize]}

  ${(props) => buttonModeToStyles[props.buttonMode]}
`;
export default Button;
