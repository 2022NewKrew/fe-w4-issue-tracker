import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import { ReactComponent as CheckedCircleIcon } from '../../../Assets/Icon/ic-checkcircle-checked.svg'
import { ReactComponent as UncheckedCircleIcon } from '../../../Assets/Icon/ic-checkcircle-unchecked.svg'

export const DROPDOWN_ITEM_TYPE = {
  NORMAL: 'normal',
  RADIO_BTN: 'radio',
}

const ItemImage = styled.img`
  width: 20px;
  height: 20px;
  border: 1px solid ${COLOR.LINE};
  border-radius: 10px;
  margin-right: 8px;
`

const ItemText = styled.span`
  && {
    flex: 1;
    padding-top: 5px;
    color: ${COLOR.BODY};
    ${FONT.TEXT_SMALL};
  }
`

const CheckCircle = styled.div`
  svg {
    vertical-align: middle;
    color: ${COLOR.BODY};
  }
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 16px;
  background-color: ${COLOR.OFF_WHITE};
  cursor: pointer;

  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        ${ItemText} {
          color: ${COLOR.TITLE_ACTIVE};
        }

        ${CheckCircle} {
          svg {
            color: ${COLOR.TITLE_ACTIVE};
          }
        }
      `
    }
  }}
`

/**
 * @param {string} imageSrc
 * @param {string} text
 * @param {string} type
 * @param {boolean} isSelected
 * @param {function} onClick
 * @return {JSX.Element}
 * @constructor
 */
const DropdownPanelItem = ({ imageSrc, text, type, isSelected, onClick }) => {
  const icon = useMemo(() => {
    switch (type) {
      case DROPDOWN_ITEM_TYPE.NORMAL:
        return null

      case DROPDOWN_ITEM_TYPE.RADIO_BTN:
        return (
          <CheckCircle>
            {isSelected ? (
              <CheckedCircleIcon width="16px" height="16px" />
            ) : (
              <UncheckedCircleIcon width="16px" height="16px" />
            )}
          </CheckCircle>
        )

      default:
        return null
    }
  }, [type, isSelected])

  return (
    <ListItem isSelected={isSelected} onClick={onClick}>
      {imageSrc && <ItemImage src={imageSrc} />}
      <ItemText>{text}</ItemText>
      {icon}
    </ListItem>
  )
}

DropdownPanelItem.propTypes = {
  imageSrc: PropTypes.string,
  type: PropTypes.oneOf(Object.values(DROPDOWN_ITEM_TYPE)).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

export default DropdownPanelItem
