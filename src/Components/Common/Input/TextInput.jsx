import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../style/commonStyle'

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
  ${ ({ customStyle }) => customStyle }
`

const hidingLabelStyle = css`
  display: none;
`

const Input = styled.input`
  color: ${ COLOR.TITLE_ACTIVE };
  background: none;
  border: none;
  flex: 1;
  ${ FONT.TEXT_SMALL };

  &::placeholder {
    color: ${ ({ placeholderColor }) => placeholderColor };
  }

  &:focus {
    outline: none;
  }
`

const successLabelStyle = {
  color: COLOR.GREEN
}

const errorLabelStyle = {
  color: COLOR.RED
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  border-radius: 16px;
  background-color: ${ COLOR.INPUT_BACKGROUND };
  cursor: text;

  ${ ({ customStyle }) => customStyle }
  &:disabled {
    opacity: 0.5;
  }
`

const activeWrapperStyle = css`
  background-color: ${ COLOR.OFF_WHITE };
  border: 1px solid ${ COLOR.TITLE_ACTIVE };
  padding: 0 23px;
`

const successWrapperStyle = css`
  border: 1px solid ${ COLOR.GREEN };
  background-color: ${ COLOR.LIGHT_GREEN };
  padding: 0 23px;
`

const errorWrapperStyle = css`
  border: 1px solid ${ COLOR.RED };
  background-color: ${ COLOR.LIGHT_RED };
  padding: 0 23px;
`

const largeWrapperStyle = css`
  flex-direction: column;
  height: 64px;
`

const mediumWrapperStyle = css`
  flex-direction: column;
  height: 56px;
`

const smallWrapperStyle = css`
  align-items: center;
  height: 40px;

  ${ LabelText } {
    width: 80px;
  }

  input {
    width: calc(100% - 88px);
  }
`

/**
 * @param {ReactNode} children
 * @param {string} type
 * @param {string} state
 * @param {string} placeholder
 * @param {string} inputValue
 * @param {function} onChangeListener
 * @return {JSX.Element}
 * @constructor
 */
const TextInput = ({
                     children,
                     type,
                     state,
                     placeholder,
                     inputValue,
                     onChangeListener
                   }) => {
  // input element 참조
  const inputRef = useRef()
  // blur되었을때 즉시 setIsFocus가 실행되는 것을 막기 위한 delay 장치
  const timeRef = useRef(0)
  // input element가 focus인지 추적
  const [ isFocus, setIsFocus ] = useState(false)
  // input element 내용이 비었는지 추적
  const [ isEmpty, setIsEmpty ] = useState(true)
  // input element 내용을 추적
  const [ inputValueState, setInputValueState ] = useState('')
  
  // inputValue가 변경되면 반영
  useEffect(() => {
    if (inputValue) {
      setInputValueState(inputValue)
    }
  }, [ inputValue ])
  
  // input을 감싸고 있는 wrapper element가 클릭되어도 input으로 focus되도록 함
  const focusToInput = useCallback(() => {
    inputRef.current.focus()
  }, [])
  
  const onFocus = useCallback(() => {
    clearTimeout(timeRef.current)
    setIsFocus(true)
  }, [])
  
  const onBlur = useCallback(() => {
    timeRef.current = setTimeout(() => {
      setIsFocus(false)
    }, 50)
  }, [])
  
  const onChange = useCallback((event) => {
    const { target } = event
    const { value: inputValue } = target
    
    event.preventDefault()
    
    setInputValueState(inputValue)
    
    if (inputValue) {
      if (isEmpty) {
        setIsEmpty(false)
      }
    } else {
      setIsEmpty(true)
    }
    
    if (onChangeListener) {
      onChangeListener(inputValue, setInputValueState)
    }
  }, [ onChangeListener ])
  
  const wrapperStyle = useMemo(() => {
    let style = (
      type === TEXT_INPUT_TYPE.LARGE ? largeWrapperStyle
        : type === TEXT_INPUT_TYPE.MEDIUM ? mediumWrapperStyle
          : type === TEXT_INPUT_TYPE.SMALL ? smallWrapperStyle
            : mediumWrapperStyle
    )
    
    if (isFocus) {
      style = style.concat(activeWrapperStyle)
    } else {
      state === TEXT_INPUT_STATE.SUCCESS ? style = style.concat(successWrapperStyle)
        : state === TEXT_INPUT_STATE.ERROR ? style = style.concat(errorWrapperStyle)
          : null
    }
    
    return style
  }, [ type, isFocus, state ])
  
  const labelStyle = useMemo(() => {
    let style = css``
    
    if (isEmpty && (type === TEXT_INPUT_TYPE.MEDIUM || type === TEXT_INPUT_TYPE.LARGE)) {
      style = style.concat(hidingLabelStyle)
    }
    
    if (!isFocus) {
      state === TEXT_INPUT_STATE.SUCCESS ? style = style.concat(successLabelStyle)
        : state === TEXT_INPUT_STATE.ERROR ? style = style.concat(errorLabelStyle)
          : null
    }
    
    return style
  }, [ isEmpty, isFocus, type, state ])
  
  const placeholderInInput = useMemo(() => {
    switch (type) {
      case TEXT_INPUT_TYPE.SMALL:
        return ''
      
      case TEXT_INPUT_TYPE.MEDIUM:
      case TEXT_INPUT_TYPE.LARGE:
        return placeholder
    }
  }, [ type ])
  
  const placeholderColor = useMemo(() => {
    if (!isFocus) {
      return (
        state === TEXT_INPUT_STATE.SUCCESS ? COLOR.GREEN
          : state === TEXT_INPUT_STATE.ERROR ? COLOR.RED
            : COLOR.PLACEHOLDER
      )
    } else {
      return COLOR.PLACEHOLDER
    }
  }, [ state, isFocus ])
  
  return (
    <Wrapper
      onClick={ focusToInput }
      customStyle={ wrapperStyle }>
      <LabelText customStyle={ labelStyle }>
        { placeholder }
      </LabelText>
      <Input
        placeholder={ placeholderInInput }
        placeholderColor={ placeholderColor }
        ref={ inputRef }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
        value={ inputValueState } />
      { children }
    </Wrapper>
  )
}

TextInput.propTypes = {
  inputValue: PropTypes.string,
  onChangeListener: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default TextInput