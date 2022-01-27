import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'

const TabItemContainer = styled.li`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0;
  ${ FONT.LINK_SMALL };
  cursor: pointer;
  color: ${ COLOR.LABEL };
  border-right: 1px solid ${ COLOR.LINE };

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: ${ COLOR.INPUT_BACKGROUND };
  }

  span {
    padding-top: 4px;
  }

  ${ ({ isSelected }) => {
    if (isSelected) {
      return css`
        background-color: ${ COLOR.LINE };
        color: ${ COLOR.BODY };
      `
    }
  } }
`

/**
 * @param {JSX.Element} children
 * @param {boolean} isSelected
 * @return {JSX.Element}
 * @constructor
 */
const TabItem = ({
                   children,
                   isSelected
                 }) => {
  return (
    <TabItemContainer isSelected={ isSelected }>
      { children }
    </TabItemContainer>
  )
}

TabItem.propTypes = {
  isSelected: PropTypes.bool
}

export default TabItem