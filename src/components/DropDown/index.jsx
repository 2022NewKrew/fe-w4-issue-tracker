import React, { useState } from 'react';
import styled from 'styled-components';

export default function DropDown({
  label = '없음',
  dropDownList = [],
  className,
}) {
  const onClickHandler = () => {};

  return (
    <Wrapper onClick={onClickHandler} className={className}>
      {label}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
