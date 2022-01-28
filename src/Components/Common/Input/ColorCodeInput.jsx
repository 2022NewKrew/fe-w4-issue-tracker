import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextInput, { TEXT_INPUT_STATE, TEXT_INPUT_TYPE } from './TextInput'
import { ReactComponent as RefreshIcon } from '../../../Assets/Icon/ic-refresh.svg'
import { COLOR } from '../../../Assets/Styles/commonStyle'

const IconBox = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 24px;

  svg {
    vertical-align: middle;
    color: ${ COLOR.LABEL }
  }
`

/**
 * @param {boolean} isDisabled
 * @param {function?} onChangeListener
 * @return {JSX.Element}
 * @constructor
 */
const ColorCodeInput = ({
                          isDisabled,
                          onChangeListener
                        }) => {
  // input 태그의 값을 바꿔야할때만 수정
  const [ inputValue, setInputValue ] = useState('#')
  // input 태그의 값과 일치
  const [ colorCode, setColorCode ] = useState('')
  
  const setColorCodeWithListener = useCallback((value) => {
    setColorCode(value)
    
    if (onChangeListener) {
      onChangeListener(value)
    }
  }, [ onChangeListener ])
  
  const generateColorCode = useCallback(() => {
    const colorValue = Math.floor((256 * 256 * 256 - 1) * Math.random())
    const newColorCode = '#' + colorValue.toString(16)
                                         .toUpperCase()
                                         .padStart(6, '0')
    
    setColorCodeWithListener(newColorCode)
    setInputValue(newColorCode)
  }, [])
  
  const onChange = useCallback((value, setValue) => {
    if (!value.includes('#')) { // #이 지워지면 무시
      setValue(colorCode)
    } else if (value.match(/[^#a-fA-F0-9]/)) { // #, 0~9, a~f, A~F외의 문자가 입력되면 무시
      setValue(colorCode)
    } else if (value.length <= 7) { // 길이가 7이 넘지 않을 때 반영
      setColorCodeWithListener(value.toUpperCase())
      setValue(value.toUpperCase())
    } else { // 그 외의 경우 모두 무시
      setValue(colorCode)
    }
  }, [ colorCode ])
  
  return (
    <TextInput
      type={ TEXT_INPUT_TYPE.SMALL }
      state={ TEXT_INPUT_STATE.NORMAL }
      placeholder="Label"
      onInputValueChangeListener={ onChange }
      inputValue={ inputValue }
      isDisabled={ isDisabled }>
      <IconBox onClick={ generateColorCode }>
        <RefreshIcon
          width="1em"
          height="1em" />
      </IconBox>
    </TextInput>
  )
}

ColorCodeInput.propTypes = {
  onChangeListener: PropTypes.func,
  isDisabled: PropTypes.bool
}

export default ColorCodeInput