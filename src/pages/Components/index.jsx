import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';
import { offWhiteGS } from '@/assets/styles/Palette';

export default function Components() {
  return (
    <Wrapper>
      <h1>버튼</h1>
      <Button
        size={1}
        disable={false}
        text={'Button'}
        fontColor={offWhiteGS}
        onClick={() => {}}
      />
      <Button
        size={2}
        disable={true}
        text={'Button'}
        fontColor={offWhiteGS}
        onClick={() => {}}
      />
      <Button
        size={3}
        disable={false}
        text={'Button'}
        fontColor={offWhiteGS}
        onClick={() => {}}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    margin: 20px 0px;
  }
`;
