import React from 'react';
import styled, { css } from 'styled-components';
import { primary, softPrimary, darkPrimary } from '@/assets/styles/Palette';

export default function CustomButton({
  onClick = () => {},
  disable = false,
  text = '내용 없음',
  fontColor = 'white',
  bgColor = primary,
  size = 3,
  className,
}) {
  return (
    <Button
      onClick={onClick}
      disable={disable}
      fontColor={fontColor}
      bgColor={bgColor}
      size={size}
      className={className}
    >
      <span>{text}</span>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-weight: bold;
  ${() => getButtonSize}
  ${() => getHoverCSS}

  .span {
    color: ${(props) => props.fontColor};
    font-weight: 700;
  }
`;

const getHoverCSS = ({ disable, bgColor }) => {
  switch (disable) {
    case true:
      return css`
        cursor: not-allowed;
        opacity: 0.5;
      `;

    case false:
      return css`
        cursor: pointer;
        &:hover {
          background-color: ${bgColor === primary ? darkPrimary : bgColor};
        }
        &:active {
          border: 4px solid ${bgColor === primary ? softPrimary : bgColor};
        }
      `;
  }
};

const getButtonSize = ({ size }) => {
  switch (size) {
    case 1:
      return css`
        font-size: 12px;
        width: 120px;
        height: 40px;
        border-radius: 11px;
      `;

    case 2:
      return css`
        font-size: 15px;
        width: 240px;
        height: 56px;
        border-radius: 20px;
      `;

    case 3:
      return css`
        font-size: 18px;
        width: 340px;
        height: 64px;
        border-radius: 20px;
      `;

    default:
      console.warn(
        '버튼의 사이즈는 1 2 3 중 하나입니다. 범위를 벗어나거나 타입이 잘못되어 기본값(3)을 적용합니다.',
      );
      return css`
        font-size: 18px;
        width: 340px;
        height: 64px;
        border-radius: 20px;
      `;
  }
};
