import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextInput, { TEXT_INPUT_STATE, TEXT_INPUT_TYPE } from './TextInput'
import { ReactComponent as RefreshIcon } from '../../../icon/ic-refresh.svg'
import { COLOR } from '../../../style/commonStyle'

const IconBox = styled.div`
  display: inline-block;
  cursor: pointer;

  svg {
    vertical-align: middle;
    color: ${ COLOR.LABEL }
  }
`

const ColorCodeInput = ({ onChangeListener }) => {
  const [ inputValue, setInputValue ] = useState('#')
  
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
      onChangeListener={ onChange }
      inputValue={ inputValue }>
      <IconBox onClick={ generateColorCode }>
        <RefreshIcon
          width="1em"
          height="1em" />
      </IconBox>
    </TextInput>
  )
}

ColorCodeInput.propTypes = {
  onChangeListener: PropTypes.func
}

export default ColorCodeInput