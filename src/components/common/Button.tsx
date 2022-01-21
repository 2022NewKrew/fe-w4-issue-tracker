import React from "react";
import styled, { css } from "styled-components";
import { Color } from "@/constant/constant";
import { Size, ButtonMode } from "@/ts/enum";

type ButtonInfo = {
  buttonSize?: Size;
  buttonMode?: ButtonMode;
  message?: string;
};

const Button = (props: ButtonInfo) => {
  const buttonSize = props.buttonSize;
  const buttonMode = props.buttonMode;
  //TODO 메세지의 경우 현재 text모드일때 +를 텍스트로 추가하는 형태로 넣고 있지만 자체적으로 메시지를 이미지화 또는 + 이미지를 앞에 붙이는 형식 고민 중
  const message = props.message;
  return (
    <ButtonInput
      type="button"
      buttonSize={buttonSize}
      buttonMode={buttonMode}
      value={message}
    />
  );
};

const ButtonInput = styled.input<ButtonInfo>`
  margin: 5px; //TODO: 테스트용 값 변경 예장

  padding: 0px 24px;
  border-radius: 20px;

  text-align: center;

  /* Link Medium */
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  border: none;

  ${(props) => {
    switch (props.buttonSize) {
      case Size.Large:
        return largeSize;
      case Size.Small:
        return smallSize;
      default:
        //Size.Medium || undefined
        return mediumSize;
    }
  }}

  ${(props) => {
    switch (props.buttonMode) {
      case ButtonMode.Standard:
        return standardMode;
      case ButtonMode.Secondary:
        return secondaryMode;
      default:
        //ButtonMode.Text|| undefined
        return textMode;
    }
  }}
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

const smallSize = css`
  width: 120px;
  height: 40px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 11px;
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
export default Button;
