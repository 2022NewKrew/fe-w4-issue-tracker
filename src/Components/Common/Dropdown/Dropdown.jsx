import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../Button/Button'
import DropdownPanel from './DropdownPanel'
import useOutsideClickEventListener from '../../../Services/Hooks/useOutsideClickEventListener'
import { DROPDOWN_ITEM_TYPE } from './DropdownPanelItem'

import { ReactComponent as DropdownIcon } from '../../../Assets/Icon/ic-dropdown.svg'

const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`

/**
 * @param {Object[]} itemInfoList
 * @param {string} panelTitle
 * @param {string} type
 * @param {string} indicatorText
 * @param {object[]} btnUserStyle
 * @param {function} onChange
 * @return {JSX.Element}
 * @constructor
 */
const Dropdown = ({
  itemInfoList,
  panelTitle,
  type,
  indicatorText,
  btnUserStyle,
  onChange,
}) => {
  const dropdownRef = useRef()

  const [isPanelShown, setIsPanelShown] = useState(false)

  const onButtonClick = useCallback(() => {
    setIsPanelShown((prev) => !prev)
  }, [])

  useOutsideClickEventListener(
    () => {
      setIsPanelShown(false)
    },
    dropdownRef,
    []
  )

  return (
    <DropdownContainer ref={dropdownRef}>
      <Button
        type={BUTTON_TYPE.TEXT}
        size={BUTTON_SIZE.SEMI_MEDIUM}
        userStyle={btnUserStyle}
        onClickListener={onButtonClick}>
        <span>{indicatorText}</span>
        <DropdownIcon width="10px" height="6px" />
      </Button>
      <DropdownPanel
        itemInfoList={itemInfoList}
        title={panelTitle}
        type={type}
        isShown={isPanelShown}
        onChange={onChange}
      />
    </DropdownContainer>
  )
}

Dropdown.propTypes = {
  indicatorText: PropTypes.string,
  itemInfoList: PropTypes.array,
  panelTitle: PropTypes.string,
  btnUserStyle: PropTypes.array,
  type: PropTypes.oneOf(Object.values(DROPDOWN_ITEM_TYPE)).isRequired,
  onChange: PropTypes.func,
}

export default Dropdown
