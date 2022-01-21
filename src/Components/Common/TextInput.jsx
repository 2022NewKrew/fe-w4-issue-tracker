import React, { useCallback, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../style/commonStyle'

export const TEXT_INPUT_TYPE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

export const TEXT_INPUT_STATE = {
  NORMAL: 'normal',
  SUCCESS: 'success',
  ERROR: 'error'
}

const LabelText = styled.div`
  padding-top: 3px;
  margin-right: 8px;
  color: ${ COLOR.LABEL };
  ${ FONT.TEXT_XSMALL };
`

const LargeLabelText = styled(LabelText)`
  color: ${ COLOR.PLACEHOLDER };
  ${ FONT.TEXT_SMALL };
`

const Input = styled.input`
  width: 100%;
  color: ${ COLOR.TITLE_ACTIVE };
  background: none;
  border: none;
  ${ FONT.TEXT_SMALL };

  &::placeholder {
    color: ${ COLOR.PLACEHOLDER };
  }

  &:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  border-radius: 16px;
  background-color: ${ COLOR.INPUT_BACKGROUND };
  cursor: text;

  &:disabled {
    opacity: 0.5;
  }
`

const activeStyle = {
  backgroundColor: COLOR.OFF_WHITE,
  border: `1px solid ${ COLOR.TITLE_ACTIVE }`,
  padding: '0 23px'
}

const successWrapperStyle = {
  border: `1px solid ${ COLOR.GREEN }`,
  backgroundColor: COLOR.LIGHT_GREEN,
  padding: '0 23px'
}

const successLabelStyle = {
  color: COLOR.GREEN
}

const errorWrapperStyle = {
  border: `1px solid ${ COLOR.RED }`,
  backgroundColor: COLOR.LIGHT_RED,
  padding: '0 23px'
}

const errorLabelStyle = {
  color: COLOR.RED
}

const LargeWrapper = styled(Wrapper)`
  flex-direction: column;
  height: 64px;

  div {
    display: none;
  }
`

const MediumWrapper = styled(Wrapper)`
  flex-direction: column;
  height: 56px;

  div {
    display: none;
  }
`

const SmallWrapper = styled(Wrapper)`
  align-items: center;
  height: 40px;

  div {
    width: 80px;
  }
`


const TextInput = ({ type, state, placeholder, onChangeListener }) => {
  const inputRef = useRef()
  const [ isFocus, setIsFocus ] = useState(false)
  const [ isEmpty, setIsEmpty ] = useState(true)
  
  const focusToInput = useCallback(() => {
    inputRef.current.focus()
  }, [])
  
  const onFocus = useCallback(() => {
    setIsFocus(true)
  }, [])
  
  const onBlur = useCallback(() => {
    setIsFocus(false)
  }, [])
  
  const onChange = useCallback(({ target }) => {
    if (target.value) {
      if (isEmpty) {
        setIsEmpty(false)
      }
    } else {
      setIsEmpty(true)
    }
    
    onChangeListener(target.value)
  }, [ onChangeListener ])
  
  const wrapperStyle = useCallback(() => {
    if (isFocus) {
      return activeStyle
    } else {
      switch (state) {
        case TEXT_INPUT_STATE.SUCCESS:
          return successWrapperStyle
        
        case TEXT_INPUT_STATE.ERROR:
          return errorWrapperStyle
          
        default:
          return {}
      }
    }
  }, []) // isFocus가 있을 때, 없을 때 차이 확인
  // useCallback이란, dependency에 따라 함수가 재생성이 되는 것 아닌가?
  
  console.log('rerender')
  console.log(isFocus)
  console.log(wrapperStyle())
  
  switch (type) {
    case TEXT_INPUT_TYPE.LARGE:
      return (
        <LargeWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          <LabelText style={ !isEmpty ? { display: 'inline-block' } : {} }>{ placeholder }</LabelText>
          <Input
            placeholder={ placeholder }
            ref={ inputRef }
            onChange={ onChange }
            onFocus={ onFocus }
            onBlur={ onBlur } />
        </LargeWrapper>
      )
    
    case TEXT_INPUT_TYPE.MEDIUM:
      return (
        <MediumWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          <LabelText style={ !isEmpty ? { display: 'inline-block' } : {} }>{ placeholder }</LabelText>
          <Input
            placeholder={ placeholder }
            ref={ inputRef }
            onChange={ onChange }
            onFocus={ onFocus }
            onBlur={ onBlur } />
        </MediumWrapper>
      )
    
    case TEXT_INPUT_TYPE.SMALL:
      return (
        <SmallWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          {
            isEmpty
              ? <LargeLabelText>{ placeholder }</LargeLabelText>
              : <LabelText>{ placeholder }</LabelText>
          }
          <Input
            ref={ inputRef }
            onChange={ onChange }
            onFocus={ onFocus }
            onBlur={ onBlur } />
        </SmallWrapper>
      )
  }
}

TextInput.propTypes = {
  onChangeListener: PropTypes.func,
  placeholder: PropTypes.string,
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default TextInput