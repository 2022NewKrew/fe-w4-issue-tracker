import React from 'react';
import styled, { css } from 'styled-components';
import {
  inputBackgroundGS,
  offWhiteGS,
  softSuccess,
  darkSuccess,
  softDanger,
  darkDanger,
} from '@/assets/styles/Palette';

export default function TextInput({
  size = 3,
  label = '',
  placeholder = '',
  validator = () => {},
  validationFailText = '',
  validationSuccessText = '',
}) {
  return <Input></Input>;
}

const Input = styled.input``;

const getInputSize = ({ size }) => {
  switch (size) {
    case 1:
      return css`
        width: 40px;
        height: 300px;
      `;

    case 2:
      return css`
        width: 320px;
        height: 56px;
      `;

    case 3:
      return css`
        width: 340px;
        height: 64px;
      `;
  }
};
