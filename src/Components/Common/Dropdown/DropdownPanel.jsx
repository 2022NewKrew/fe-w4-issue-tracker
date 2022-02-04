import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import DropdownPanelItem, { DROPDOWN_ITEM_TYPE } from './DropdownPanelItem'

const ReferencePoint = styled.div`
  position: relative;
`

const Panel = styled.div`
  position: absolute;
  right: 0;
  width: 240px;
  background-color: ${COLOR.BACKGROUND};
  border: 1px solid ${COLOR.LINE};
  border-radius: 16px;
  z-index: 100;
`

const TitleText = styled.div`
  width: 100%;
  padding: 12px 16px 8px 16px;
  color: ${COLOR.TITLE_ACTIVE};
  ${FONT.TEXT_MEDIUM};
`

const List = styled.ul`
  width: 100%;

  li {
    border-top: 1px solid ${COLOR.LINE};
  }

  li:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`

/**
 * @param {Object[]} itemInfoList
 * @param {string} type
 * @param {string} title
 * @param {boolean} isShown
 * @return {JSX.Element}
 * @constructor
 */
const DropdownPanel = ({ itemInfoList, type, title, isShown }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  return (
    <ReferencePoint>
      <Panel style={{ visibility: isShown ? 'visible' : 'hidden' }}>
        <TitleText>{title}</TitleText>
        <List>
          {itemInfoList.map((itemInfo, idx) => {
            const { text, imgSrc } = itemInfo

            return (
              <DropdownPanelItem
                key={text}
                imageSrc={imgSrc}
                text={text}
                type={type}
                isSelected={idx === selectedIdx}
                onClick={() => {
                  setSelectedIdx(idx)
                }}
              />
            )
          })}
        </List>
      </Panel>
    </ReferencePoint>
  )
}

DropdownPanel.propTypes = {
  type: PropTypes.oneOf(Object.values(DROPDOWN_ITEM_TYPE)).isRequired,
  itemInfoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  isShown: PropTypes.bool,
}

export default DropdownPanel
