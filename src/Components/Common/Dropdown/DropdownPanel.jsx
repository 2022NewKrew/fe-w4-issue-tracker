import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import DropdownPanelItem from './DropdownPanelItem'

const ReferencePoint = styled.div`
  position: relative;
`

const Panel = styled.div`
  position: absolute;
  right: 0;
  width: 240px;
  background-color: ${ COLOR.BACKGROUND };
  border: 1px solid ${ COLOR.LINE };
  border-radius: 16px;
  z-index: 100;
`

const TitleText = styled.div`
  width: 100%;
  padding: 12px 16px 8px 16px;
  color: ${ COLOR.TITLE_ACTIVE };
  ${ FONT.TEXT_MEDIUM };
`

const List = styled.ul`
  width: 100%;

  li {
    border-top: 1px solid ${ COLOR.LINE };
  }

  li:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`

/**
 * @param {object[]} itemInfoList
 * @param {boolean} isCheckCircleExists
 * @param {string} title
 * @param {boolean} isShown
 * @return {JSX.Element}
 * @constructor
 */
const DropdownPanel = ({
                         itemInfoList,
                         isCheckCircleExists,
                         title,
                         isShown
                       }) => {
  const [ selectedIdx, setSelectedIdx ] = useState(-1)
  
  return (
    <ReferencePoint>
      <Panel style={ isShown ? { visibility: 'visible' } : { visibility: 'hidden' } }>
        <TitleText>{ title }</TitleText>
        <List>
          {
            itemInfoList.map((itemInfo, idx) => (
              <DropdownPanelItem
                key={ itemInfo.text }
                imageSrc={ itemInfo.imgSrc }
                text={ itemInfo.text }
                isCheckCircleExists={ isCheckCircleExists }
                isSelected={ idx === selectedIdx }
                onClick={ () => {
                  setSelectedIdx(idx)
                } } />
            ))
          }
        </List>
      </Panel>
    </ReferencePoint>
  )
}

DropdownPanel.propTypes = {
  isCheckCircleExists: PropTypes.bool,
  itemInfoList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  isShown: PropTypes.bool
}

export default DropdownPanel