import React, { useState, useRef, useImperativeHandle, useEffect } from 'react'
import styled, { css } from 'styled-components'
import BaseCSS from '@Components/UI/atoms/base_css/base'

const BaseInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${BaseCSS.grayInputBackground};
  font-family: ${BaseCSS.textFont};
  border: 1px solid ${BaseCSS.grayInputBackground};
  color: ${BaseCSS.grayPlaceholder};
  ${(props) => {
    return props.focus && css`
      background-color: ${BaseCSS.grayWhite};
      border-color: ${BaseCSS.grayTitle};
    `
  }}
  &:disabled {
    background-color: ${BaseCSS.primaryLightColor};
  }
`

const StyledLargeInput = styled(BaseInput)`
  flex-direction: column;
  width: ${BaseCSS.buttonLargeWidth};
  height: ${BaseCSS.buttonLargeHeight}; 
  border-radius: ${BaseCSS.buttonLargeRadius};
  font-size: ${BaseCSS.buttonLargeFontSize};
  line-height: ${BaseCSS.buttonLargeLineHeight};
  padding: 0px ${BaseCSS.buttonLargeRadius};
`

const StyledMediumInput = styled(BaseInput)`
  flex-direction: column;
  width: ${BaseCSS.buttonMediumWidth};
  height: ${BaseCSS.buttonMediumHeight}; 
  border-radius: ${BaseCSS.buttonMediumRadius};
  font-size: ${BaseCSS.buttonMediumFontSize};
  line-height: ${BaseCSS.buttonMediumLineHeight};
`

const StyledSmallInput = styled(BaseInput)`
  flex-direction: row;
  align-items: center;
  width: ${BaseCSS.buttonSmallWidth};
  height: ${BaseCSS.buttonSmallHeight}; 
  border-radius: ${BaseCSS.buttonSmallRadius};
  font-size: ${BaseCSS.buttonSmallFontSize};
  line-height: ${BaseCSS.buttonSmallLineHeight};
`

const StyledInput = styled.input`
  display: none;
  background-color: ${BaseCSS.grayInputBackground};
  border: none;
  outline: none;
  width: 90%;

  ${(props) => {
    return props.focus && css`
      display: block;
      background-color: ${BaseCSS.grayWhite};
    `
  }}
`

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    blur: () => {
      inputRef.current.blur()
    }
  }))
  return (
    <StyledInput focus={props.focus} ref={inputRef}>
    </StyledInput>
  )
})
  
function LargeInput() {
  
  const [focus, setFocus] = useState(false)
  const inputRef = useRef()
  
  function onClick(e) {
    setFocus(true)
  }

  function onBlur() {
    setFocus(false)
  }

  useEffect(() => {
    if (focus) {
      inputRef.current.focus()
    } else {
      inputRef.current.blur()
    }
  }, [focus])

  return (
    <StyledLargeInput onClick={onClick} onBlur={onBlur} focus={focus}>
      아이디
      <Input focus={focus} ref={inputRef}></Input>
    </StyledLargeInput>
  )
}

function MediumInput() {
  return (
    <StyledMediumInput>
      아이디
    </StyledMediumInput>
  )
}

function SmallInput() {
  return (
    <StyledSmallInput>
      아이디
    </StyledSmallInput>
  )
}

export { LargeInput, MediumInput, SmallInput }
