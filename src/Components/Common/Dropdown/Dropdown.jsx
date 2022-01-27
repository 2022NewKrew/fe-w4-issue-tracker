import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../Button/Button'
import DropdownPanel from './DropdownPanel'
import { ReactComponent as DropdownIcon } from '../../../Assets/Icon/ic-dropdown.svg'
import useOutsideClickEventListener from '../../../Services/Hooks/useOutsideClickEventListener'

const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Dropdown = ({
                    itemInfoList,
                    panelTitle,
                    isCheckCircleExists,
                    indicatorText
                  }) => {
  const dropdownRef = useRef()
  
  const [ isPanelShown, setIsPanelShown ] = useState(false)
  
  const onButtonClick = useCallback(() => {
    setIsPanelShown((prev) => !prev)
  }, [])
  
  useOutsideClickEventListener(() => {
    setIsPanelShown(false)
  }, dropdownRef, [])
  
  return (
    <DropdownContainer ref={ dropdownRef }>
      <Button
        type={ BUTTON_TYPE.TEXT }
        size={ BUTTON_SIZE.MEDIUM }
        onClickListener={ onButtonClick }>
        <span>{ indicatorText }</span>
        <DropdownIcon
          width="10px"
          height="6px" />
      </Button>
      <DropdownPanel
        itemInfoList={ itemInfoList }
        title={ panelTitle }
        isCheckCircleExists={ isCheckCircleExists }
        isShown={ isPanelShown } />
    </DropdownContainer>
  )
}

Dropdown.propTypes = {}

export default Dropdown