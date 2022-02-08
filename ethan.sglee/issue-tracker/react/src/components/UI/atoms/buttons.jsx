import React from 'react'
import styled from 'styled-components'
import BaseCSS from '@Components/UI/atoms/base_css/base'

const BaseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BaseCSS.primaryColor};
  font-family: ${BaseCSS.textFont};
  border: 1px solid ${BaseCSS.primaryColor};
  color: ${BaseCSS.grayWhite};
  &:hover {
    background-color: ${BaseCSS.primaryDarkColor};
  }
  &:focus {
    border: 4px solid ${BaseCSS.primaryLightColor};
  }
  &:disabled {
    background-color: ${BaseCSS.primaryLightColor};
  }
`

const LargeBtn = styled(BaseBtn)`
  flex-direction: column;
  width: ${BaseCSS.buttonLargeWidth};
  height: ${BaseCSS.buttonLargeHeight}; 
  border-radius: ${BaseCSS.buttonLargeRadius};
  font-size: ${BaseCSS.buttonLargeFontSize};
  line-height: ${BaseCSS.buttonLargeLineHeight};
`

const MediumBtn = styled(BaseBtn)`
  flex-direction: column;
  width: ${BaseCSS.buttonMediumWidth};
  height: ${BaseCSS.buttonMediumHeight}; 
  border-radius: ${BaseCSS.buttonMediumRadius};
  font-size: ${BaseCSS.buttonMediumFontSize};
  line-height: ${BaseCSS.buttonMediumLineHeight};
`

const SmallBtn = styled(BaseBtn)`
  flex-direction: row;
  width: ${BaseCSS.buttonSmallWidth};
  height: ${BaseCSS.buttonSmallHeight}; 
  border-radius: ${BaseCSS.buttonSmallRadius};
  font-size: ${BaseCSS.buttonSmallFontSize};
  line-height: ${BaseCSS.buttonSmallLineHeight};

  svg {
    color: ${BaseCSS.grayWhite};
  }
`

const PlusIcon = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33334V12.6667" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33325 8H12.6666" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LargeButton() {
  return (
    <LargeBtn>
      <p>큰버튼입니다</p>
    </LargeBtn>
  )
}

function MediumButton() {
  return (
    <MediumBtn>중간버튼입니다</MediumBtn>
  )
}

function SmallButton() {
  const plusIconPath = require('@Public/svg/plus.svg').default
  return (
    <SmallBtn>
      <PlusIcon></PlusIcon>
      작은버튼입니다
    </SmallBtn>
  )
}

export { LargeButton, MediumButton, SmallButton }
