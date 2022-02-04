import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'

const activeStyle = css`
  background-color: ${COLOR.LINE};
  color: ${COLOR.BODY};

  &:hover {
    background-color: ${COLOR.LINE};
  }
`

const TabItemContainer = styled.li`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0;
  ${FONT.LINK_SMALL};
  cursor: pointer;
  color: ${COLOR.LABEL};
  border-right: 1px solid ${COLOR.LINE};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: ${COLOR.INPUT_BACKGROUND};
  }

  span {
    padding-top: 4px;
  }

  ${({ isSelected }) => {
    if (isSelected) {
      return activeStyle
    }
  }}
`

/**
 * @param {JSX.Element} children
 * @param {boolean} isSelected
 * @param {function} onClick
 * @return {JSX.Element}
 * @constructor
 */
const TabItem = ({ children, isSelected, onClick }) => {
  return (
    <TabItemContainer isSelected={isSelected} onClick={onClick}>
      {children}
    </TabItemContainer>
  )
}

TabItem.propTypes = {
  children: PropTypes.element,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TabItem
