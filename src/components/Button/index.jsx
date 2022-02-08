import React from 'react';
import styled from 'styled-components';

export default function Button({
  onClick = () => {},
  disable = false,
  hover = true,
  text = '내용 없음',
  bgColor,
  fontColor,
  size,
}) {
  return (
    <Button
      onClick={onClick}
      disable={disable}
      hover={hover}
      bgColor={bgColor}
      fontColor={fontColor}
      size={size}
    >
      <Text text={text} />
    </Button>
  );
}

const Button = styled.button``;

const Text = styled.span``;
