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

const SuccessPlaceholderInput = styled(Input)`
  &::placeholder {
    color: ${ COLOR.GREEN }
  }
`

const ErrorPlaceholderInput = styled(Input)`
  &::placeholder {
    color: ${ COLOR.RED }
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

  input {
    width: calc(100% - 88px);
  }
`

/**
 * @param {string} type
 * @param {string} state
 * @param {string} placeholder
 * @param {function} onChangeListener
 * @return {JSX.Element}
 * @constructor
 */
const TextInput = ({ type, state, placeholder, onChangeListener }) => {
  // input element 참조
  const inputRef = useRef()
  // input element가 focus인지 추적
  const [ isFocus, setIsFocus ] = useState(false)
  // input element 내용이 비었는지 추적
  const [ isEmpty, setIsEmpty ] = useState(true)
  // input 태그가 state, focus에 따라 바뀌기 때문에
  // 입력한 내용이 사라지는 것을 방지하기 위해 input element 내용을 추적
  const [ inputValue, setInputValue ] = useState('')
  
  // input을 감싸고 있는 wrapper element가 클릭되어도 input으로 focus되도록 함
  const focusToInput = useCallback(() => {
    inputRef.current.focus()
  }, [])
  
  const onFocus = useCallback(() => {
    setIsFocus(true)
  }, [])
  
  const onBlur = useCallback(() => {
    setIsFocus(false)
  }, [])
  
  const onChange = useCallback((event) => {
    const { target } = event
    const { value } = target
    
    event.preventDefault()
    
    if (value) {
      if (isEmpty) {
        setIsEmpty(false)
      }
    } else {
      setIsEmpty(true)
    }
    
    setInputValue(value)
    onChangeListener(value)
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
  }, [ isFocus ])
  
  const labelStyle = useCallback(() => {
    let style = {}
    
    if (!isEmpty) {
      style = {
        ...style,
        display: 'inline-block'
      }
    }
    
    if (!isFocus) {
      switch (state) {
        case TEXT_INPUT_STATE.SUCCESS:
          style = {
            ...style,
            ...successLabelStyle
          }
          break
        
        case TEXT_INPUT_STATE.ERROR:
          style = {
            ...style,
            ...errorLabelStyle
          }
          break
      }
    }
    
    return style
  }, [ isEmpty, isFocus ])
  
  const placeholderInInput = useMemo(() => {
    if (type === TEXT_INPUT_TYPE.SMALL) {
      return ''
    } else {
      return placeholder
    }
  }, [ type ])
  
  const input = useMemo(() => {
    if (!isFocus) {
      return (
        state === TEXT_INPUT_STATE.SUCCESS
        ? <SuccessPlaceholderInput
          placeholder={ placeholderInInput }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValue } />
        :
        state === TEXT_INPUT_STATE.ERROR
        ? <ErrorPlaceholderInput
          placeholder={ placeholderInInput }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValue } />
        : <Input
          placeholder={ placeholderInInput }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValue } />
      )
    } else {
      return (
        <Input
          placeholder={ placeholderInInput }
          ref={ inputRef }
          onChange={ onChange }
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ inputValue }
          autoFocus={ true } />
      )
    }
  }, [ state, isFocus, inputValue ])
  
  
  switch (type) {
    case TEXT_INPUT_TYPE.LARGE:
      return (
        <LargeWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          <LabelText style={ labelStyle() }>{ placeholder }</LabelText>
          { input }
        </LargeWrapper>
      )
    
    case TEXT_INPUT_TYPE.MEDIUM:
      return (
        <MediumWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          <LabelText style={ labelStyle() }>{ placeholder }</LabelText>
          { input }
        </MediumWrapper>
      )
    
    case TEXT_INPUT_TYPE.SMALL:
      return (
        <SmallWrapper
          onClick={ focusToInput }
          style={ wrapperStyle() }>
          {
            isEmpty
            ? <LargeLabelText style={ labelStyle() }>{ placeholder }</LargeLabelText>
            : <LabelText style={ labelStyle() }>{ placeholder }</LabelText>
          }
          { input }
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