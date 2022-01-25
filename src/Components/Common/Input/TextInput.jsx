import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../style/commonStyle'

export const TEXT_INPUT_TYPE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  TEXT_AREA: 'text-area'
}

export const TEXT_INPUT_STATE = {
  NORMAL: 'normal',
  SUCCESS: 'success',
  ERROR: 'error'
}

const LabelText = styled.div`
  padding-top: 2px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${ COLOR.LABEL };
  ${ FONT.TEXT_XSMALL };
  ${ ({ customStyle }) => customStyle }
`

const hidingLabelStyle = css`
  display: none;
`

const textInputStyle = css`
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

const Input = styled.input`
  ${ textInputStyle }
`

const TextArea = styled.textarea`
  ${ textInputStyle };
  font-family: 'Noto Sans KR', sans-serif;

  &::-webkit-resizer {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
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
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: ${ COLOR.INPUT_BACKGROUND };
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: text;

  ${ ({ customStyle }) => customStyle }
  &:disabled {
    opacity: 0.5;
  }
`

const activeWrapperStyle = css`
  background-color: ${ COLOR.OFF_WHITE };
  border: 1px solid ${ COLOR.TITLE_ACTIVE };
`

const successWrapperStyle = css`
  border: 1px solid ${ COLOR.GREEN };
  background-color: ${ COLOR.LIGHT_GREEN };
`

const errorWrapperStyle = css`
  border: 1px solid ${ COLOR.RED };
  background-color: ${ COLOR.LIGHT_RED };
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

const textAreaWrapperStyle = css`
  flex-direction: column;
  height: 100%;
`

const PaddingDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${ ({ flexDirection }) => flexDirection };
  width: 100%;
  height: 100%;
  padding: 5px 24px;
`

/**
 * @param {ReactNode?} children
 * @param {string} type
 * @param {string} state
 * @param {string} placeholder
 * @param {string?} inputValue
 * @param {function?} onInputValueChangeListener
 * @param {function?} onFocusChangeListener
 * @return {JSX.Element}
 * @constructor
 */
const TextInput = ({
                     children,
                     type,
                     state,
                     placeholder,
                     inputValue,
                     onInputValueChangeListener,
                     onFocusChangeListener
                   }) => {
  // input element 참조
  const inputRef = useRef()
  // blur되었을때 즉시 setIsFocus가 실행되는 것을 막기 위한 delay 장치
  const blurTimeRef = useRef(0)
  
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
    setTimeout(() => {
      clearTimeout(blurTimeRef.current)
      inputRef.current.focus()
    }, 1)
  }, [])
  
  const onFocus = useCallback(() => {
    setIsFocus(true)
    if (onFocusChangeListener) {
      onFocusChangeListener(true)
    }
  }, [ onFocusChangeListener ])
  
  const onBlur = useCallback(() => {
    blurTimeRef.current = setTimeout(() => {
      setIsFocus(false)
      if (onFocusChangeListener) {
        onFocusChangeListener(false)
      }
    }, 10)
  }, [ onFocusChangeListener ])
  
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
    
    if (onInputValueChangeListener) {
      onInputValueChangeListener(inputValue, setInputValueState)
    }
  }, [ onInputValueChangeListener ])
  
  const wrapperStyle = useMemo(() => {
    let style = (
      type === TEXT_INPUT_TYPE.LARGE ? largeWrapperStyle
        : type === TEXT_INPUT_TYPE.MEDIUM ? mediumWrapperStyle
          : type === TEXT_INPUT_TYPE.SMALL ? smallWrapperStyle
            : type === TEXT_INPUT_TYPE.TEXT_AREA ? textAreaWrapperStyle
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
    
    if (isEmpty && (
      type === TEXT_INPUT_TYPE.MEDIUM
      || type === TEXT_INPUT_TYPE.LARGE
      || type === TEXT_INPUT_TYPE.TEXT_AREA)) {
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
      case TEXT_INPUT_TYPE.TEXT_AREA:
        return placeholder
    }
  }, [ type, placeholder ])
  
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
  
  const textInput = useMemo(() => {
    if (type === TEXT_INPUT_TYPE.TEXT_AREA) {
      return (
        <TextArea
          placeholder={ placeholderInInput }
          placeholderColor={ placeholderColor }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValueState } />
      )
    } else {
      return (
        <Input
          placeholder={ placeholderInInput }
          placeholderColor={ placeholderColor }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValueState } />
      )
    }
  }, [ type, placeholderInInput, placeholderColor, inputRef, onChange, onFocus, onBlur, inputValueState ])
  
  return (
    <Wrapper
      onMouseDownCapture={ focusToInput }
      customStyle={ wrapperStyle }>
      <PaddingDiv flexDirection={ type === TEXT_INPUT_TYPE.SMALL ? 'row' : 'column' }>
        <LabelText customStyle={ labelStyle }>
          { placeholder }
        </LabelText>
        { textInput }
      </PaddingDiv>
      { children }
    </Wrapper>
  )
}

TextInput.propTypes = {
  inputValue: PropTypes.string,
  onInputValueChangeListener: PropTypes.func,
  onFocusChangeListener: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default TextInput