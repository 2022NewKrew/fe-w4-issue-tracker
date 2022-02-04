import React, { useCallback, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TextInput, { TEXT_INPUT_STATE, TEXT_INPUT_TYPE } from './TextInput'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import { ReactComponent as AttachIcon } from '../../../Assets/Icon/ic-paperclip.svg'

const AttachWrapper = styled.div`
  width: 100%;
  border-top: 1px dashed ${COLOR.LINE};
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;

  ${({ customStyle }) => customStyle}
  svg {
    color: ${COLOR.LABEL};
  }
`

const AttachWrapperActiveStyle = css`
  border-color: ${COLOR.TITLE_ACTIVE};
`

const AttachText = styled.span`
  padding-top: 2px;
  margin-left: 7px;
  color: ${COLOR.LABEL};
  ${FONT.LINK_XSMALL};
`

const InputLengthText = styled.div`
  position: absolute;
  bottom: 65px;
  right: 20px;
  color: ${COLOR.LABEL};
  ${FONT.LINK_XSMALL};
`

/**
 * @param {string?} placeholder
 * @param {boolean} isDisabled
 * @param {function?} onChangeListener
 * @param {function?} onAttachClickListener
 * @return {JSX.Element}
 * @constructor
 */
const TextArea = ({
  placeholder,
  isDisabled,
  onChangeListener,
  onAttachClickListener,
}) => {
  // 입력이 끝난 후 2초 후에 입력 길이를 보이도록 하기 위한 timeId
  const timeRef = useRef(0)

  // input의 값의 길이에 대한 state
  const [inputLength, setInputLength] = useState(0)
  // input이 focus되고 있는지에 대한 state
  const [isFocus, setIsFocus] = useState(false)
  // input의 값이 변경되고 2초가 지났는지에 대한 state
  const [isPassedTwoSecondsAfterTyping, setIsPassedTwoSecondsAfterTyping] =
    useState(false)

  const onInputValueChange = useCallback(
    (inputValue, setInputValue) => {
      setInputLength(inputValue.length)

      clearTimeout(timeRef.current)
      setIsPassedTwoSecondsAfterTyping(false)

      timeRef.current = setTimeout(() => {
        setIsPassedTwoSecondsAfterTyping(true)
      }, 2000)

      if (onChangeListener) {
        onChangeListener(inputValue, setInputValue)
      }
    },
    [onChangeListener]
  )

  const onFocusChange = useCallback((isFocus) => {
    setIsFocus(isFocus)
  }, [])

  // focus인 상태에서 input 값이 바뀐지 2초가 지나면 몇자를 입력했는지 보여주도록 함
  const inputLengthText = useMemo(() => {
    if (isFocus && isPassedTwoSecondsAfterTyping) {
      return (
        <InputLengthText>{`띄어쓰기 포함 ${inputLength}자`}</InputLengthText>
      )
    } else {
      return null
    }
  }, [isFocus, isPassedTwoSecondsAfterTyping])

  return (
    <TextInput
      type={TEXT_INPUT_TYPE.TEXT_AREA}
      state={TEXT_INPUT_STATE.NORMAL}
      placeholder={placeholder || ''}
      isDisabled={isDisabled}
      onInputValueChangeListener={onInputValueChange}
      onFocusChangeListener={onFocusChange}>
      {inputLengthText}
      <AttachWrapper
        customStyle={isFocus ? AttachWrapperActiveStyle : {}}
        onClick={onAttachClickListener}>
        <AttachIcon width="16px" height="16px" />
        <AttachText>파일 첨부하기</AttachText>
      </AttachWrapper>
    </TextInput>
  )
}

TextArea.propTypes = {
  onChangeListener: PropTypes.func,
  onAttachClickListener: PropTypes.func,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default TextArea
