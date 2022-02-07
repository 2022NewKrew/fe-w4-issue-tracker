import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../Button/Button'
import DropdownPanel from './DropdownPanel'
import { ReactComponent as DropdownIcon } from '../../../Assets/Icon/ic-dropdown.svg'
import useOutsideClickEventListener from '../../../Services/Hooks/useOutsideClickEventListener'
import PropTypes from 'prop-types'
import { DROPDOWN_ITEM_TYPE } from './DropdownPanelItem'

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
 * @return {JSX.Element}
 * @constructor
 */
const Dropdown = ({ itemInfoList, panelTitle, type, indicatorText, btnUserStyle }) => {
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
}

export default Dropdown
