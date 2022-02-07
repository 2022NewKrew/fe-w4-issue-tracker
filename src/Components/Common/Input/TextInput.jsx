import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'

export const TEXT_INPUT_TYPE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  TEXT_AREA: 'text-area',
  FILTER_BAR: 'filter-bar',
}

export const TEXT_INPUT_STATE = {
  NORMAL: 'normal',
  SUCCESS: 'success',
  ERROR: 'error',
}

const LabelText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${COLOR.LABEL};
  ${FONT.TEXT_XSMALL};
  ${({ customStyle }) => customStyle}
`

const hidingLabelStyle = css`
  display: none;
`

const textInputStyle = css`
  color: ${COLOR.TITLE_ACTIVE};
  background: none;
  border: none;
  flex: 1;
  ${FONT.TEXT_SMALL};

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &:focus {
    outline: none;
  }
`

const Input = styled.input`
  ${textInputStyle}
`

const TextArea = styled.textarea`
  ${textInputStyle};
  font-family: 'Noto Sans KR', sans-serif;

  &::-webkit-resizer {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const successLabelStyle = {
  color: COLOR.GREEN,
}

const errorLabelStyle = {
  color: COLOR.RED,
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  background-color: ${COLOR.INPUT_BACKGROUND};
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: text;
  ${({ customStyle }) => customStyle}
`

const disableWrapperStyle = css`
  opacity: 0.5;
  cursor: default;
`

const activeWrapperStyle = css`
  background-color: ${COLOR.OFF_WHITE};
  border: 1px solid ${COLOR.TITLE_ACTIVE};
`

const successWrapperStyle = css`
  border: 1px solid ${COLOR.GREEN};
  background-color: ${COLOR.LIGHT_GREEN};
`

const errorWrapperStyle = css`
  border: 1px solid ${COLOR.RED};
  background-color: ${COLOR.LIGHT_RED};
`

const largeWrapperStyle = css`
  height: 64px;
`

const mediumWrapperStyle = css`
  height: 56px;
`

const smallWrapperStyle = css`
  align-items: center;
  height: 40px;

  ${LabelText} {
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

const filterBarWrapperStyle = css`
  align-items: center;
  height: 40px;
  border: 1px solid ${COLOR.LINE};

  ${LabelText} {
    width: 15px;
  }

  input {
    width: calc(100% - 23px);
  }
`

const PaddingDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: 100%;
  height: 100%;
  padding: 5px 24px;
`

/**
 * @param {ReactNode?} children
 * @param {string} type
 * @param {string} state
 * @param {string} placeholder
 * @param {string} labelPlaceholder
 * @param {boolean?} isDisabled
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
  labelPlaceholder,
  isDisabled,
  inputValue,
  onInputValueChangeListener,
  onFocusChangeListener,
}) => {
  // input element 참조
  const inputRef = useRef()
  // blur되었을때 즉시 setIsFocus가 실행되는 것을 막기 위한 delay 장치
  const blurTimeRef = useRef(0)

  // input element가 focus인지 추적
  const [isFocus, setIsFocus] = useState(false)
  // input element 내용이 비었는지 추적
  const [isEmpty, setIsEmpty] = useState(true)
  // input element 내용을 추적
  const [inputValueState, setInputValueState] = useState('')

  // inputValue가 변경되면 반영
  useEffect(() => {
    if (inputValue) {
      setInputValueState(inputValue)
    }
  }, [inputValue])

  // input을 감싸고 있는 wrapper element가 클릭되어도 input으로 focus되도록 함
  const focusToInput = useCallback(() => {
    if (!isDisabled) {
      setTimeout(() => {
        clearTimeout(blurTimeRef.current)
        inputRef.current.focus()
      }, 1)
    }
  }, [isDisabled])

  const onFocus = useCallback(() => {
    setIsFocus(true)
    if (onFocusChangeListener) {
      onFocusChangeListener(true)
    }
  }, [onFocusChangeListener])

  const onBlur = useCallback(() => {
    blurTimeRef.current = setTimeout(() => {
      setIsFocus(false)
      if (onFocusChangeListener) {
        onFocusChangeListener(false)
      }
    }, 10)
  }, [onFocusChangeListener])

  const onChange = useCallback(
    (event) => {
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
    },
    [onInputValueChangeListener]
  )

  const wrapperStyle = useMemo(() => {
    let style =
      type === TEXT_INPUT_TYPE.LARGE
        ? largeWrapperStyle
        : type === TEXT_INPUT_TYPE.MEDIUM
        ? mediumWrapperStyle
        : type === TEXT_INPUT_TYPE.SMALL
        ? smallWrapperStyle
        : type === TEXT_INPUT_TYPE.TEXT_AREA
        ? textAreaWrapperStyle
        : type === TEXT_INPUT_TYPE.FILTER_BAR
        ? filterBarWrapperStyle
        : mediumWrapperStyle

    if (isFocus) {
      style = style.concat(activeWrapperStyle)
    } else {
      state === TEXT_INPUT_STATE.SUCCESS
        ? (style = style.concat(successWrapperStyle))
        : state === TEXT_INPUT_STATE.ERROR
        ? (style = style.concat(errorWrapperStyle))
        : null
    }

    if (isDisabled) {
      style = style.concat(disableWrapperStyle)
    }

    return style
  }, [type, isFocus, state, isDisabled])

  const labelStyle = useMemo(() => {
    let style = css``

    if (
      isEmpty &&
      (type === TEXT_INPUT_TYPE.MEDIUM ||
        type === TEXT_INPUT_TYPE.LARGE ||
        type === TEXT_INPUT_TYPE.TEXT_AREA)
    ) {
      style = style.concat(hidingLabelStyle)
    }

    if (!isFocus) {
      state === TEXT_INPUT_STATE.SUCCESS
        ? (style = style.concat(successLabelStyle))
        : state === TEXT_INPUT_STATE.ERROR
        ? (style = style.concat(errorLabelStyle))
        : null
    }

    return style
  }, [isEmpty, isFocus, type, state])

  const placeholderInInput = useMemo(() => {
    switch (type) {
      case TEXT_INPUT_TYPE.SMALL:
        return ''

      case TEXT_INPUT_TYPE.MEDIUM:
      case TEXT_INPUT_TYPE.LARGE:
      case TEXT_INPUT_TYPE.TEXT_AREA:
      case TEXT_INPUT_TYPE.FILTER_BAR:
        return placeholder

      default:
        return placeholder
    }
  }, [type, placeholder])

  const placeholderColor = useMemo(() => {
    if (!isFocus) {
      return state === TEXT_INPUT_STATE.SUCCESS
        ? COLOR.GREEN
        : state === TEXT_INPUT_STATE.ERROR
        ? COLOR.RED
        : COLOR.PLACEHOLDER
    } else {
      return COLOR.PLACEHOLDER
    }
  }, [state, isFocus])

  const textInput = useMemo(() => {
    if (type === TEXT_INPUT_TYPE.TEXT_AREA) {
      return (
        <TextArea
          placeholder={placeholderInInput}
          placeholderColor={placeholderColor}
          disabled={isDisabled}
          ref={inputRef}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValueState}
        />
      )
    } else {
      return (
        <Input
          placeholder={placeholderInInput}
          placeholderColor={placeholderColor}
          disabled={isDisabled}
          ref={inputRef}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValueState}
        />
      )
    }
  }, [
    type,
    placeholderInInput,
    placeholderColor,
    inputRef,
    onChange,
    onFocus,
    onBlur,
    inputValueState,
  ])

  return (
    <Wrapper onMouseDownCapture={focusToInput} customStyle={wrapperStyle}>
      {type === TEXT_INPUT_TYPE.FILTER_BAR && children}
      <PaddingDiv
        flexDirection={
          type === TEXT_INPUT_TYPE.SMALL || type === TEXT_INPUT_TYPE.FILTER_BAR
            ? 'row'
            : 'column'
        }>
        <LabelText customStyle={labelStyle}>{labelPlaceholder}</LabelText>
        {textInput}
      </PaddingDiv>
      {type === TEXT_INPUT_TYPE.FILTER_BAR || children}
    </Wrapper>
  )
}

TextInput.propTypes = {
  children: PropTypes.element,
  inputValue: PropTypes.string,
  onInputValueChangeListener: PropTypes.func,
  onFocusChangeListener: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  labelPlaceholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  state: PropTypes.oneOf(Object.values(TEXT_INPUT_STATE)).isRequired,
  type: PropTypes.oneOf(Object.values(TEXT_INPUT_TYPE)).isRequired,
  isDisabled: PropTypes.bool,
}

export default TextInput
