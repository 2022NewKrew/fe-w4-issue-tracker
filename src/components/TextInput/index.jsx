import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  titleActiveGS,
  inputBackgroundGS,
  offWhiteGS,
  labelGS,
  softSuccess,
  darkSuccess,
  softDanger,
  darkDanger,
} from '@/assets/styles/Palette';

export default function TextInput({
  size = 3,
  label = '',
  validator = '',
  validationFailText = '',
  validationSuccessText = '',
  inputType = 'text',
}) {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Wrapper>
      {inputValue && <Label size={size}>{label}</Label>}
      <Input
        placeholder={label}
        type={inputType}
        size={size}
        inputValue={inputValue}
        onChange={onChangeHandler}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  background-color: ${inputBackgroundGS};
  border: none;
  font-size: 16px;

  ${() => getInputPadding}
  ${() => getInputSize}

  &:focus {
    outline: none;
    border: 1px solid ${titleActiveGS};
    background-color: ${offWhiteGS};
  }
`;

const Label = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${labelGS};
  ${() => getLabelPositionAndSize}
`;

const getInputSize = ({ size }) => {
  switch (size) {
    case 1:
      return css`
        width: 40px;
        height: 300px;
        border-radius: 11px;
      `;

    case 2:
      return css`
        width: 320px;
        height: 56px;
        border-radius: 14px;
      `;

    case 3:
      return css`
        width: 340px;
        height: 64px;
        border-radius: 16px;
      `;
  }
};

const getInputPadding = ({ size, inputValue }) => {
  switch (size) {
    case 1:
      return css`
        padding: ${inputValue ? '0px 112px' : '0px 40px'};
      `;

    case 2:
      return css`
        padding: ${inputValue ? '24px 24px 4px 24px' : '14px 24px'};
      `;

    case 3:
      return css`
        padding: ${inputValue ? '24px 28px 8px 24px' : '14px 24px'};
      `;
  }
};

const getLabelPositionAndSize = ({ size }) => {
  switch (size) {
    case 1:
      return css`
        top: 0px;
        left: 24px;
        width: 80px;
        height: 40px;
      `;

    case 2:
      return css`
        top: 4px;
        left: 24px;
        height: 20px;
      `;

    case 3:
      return css`
        top: 8px;
        left: 24px;
        height: 20px;
      `;
  }
};
