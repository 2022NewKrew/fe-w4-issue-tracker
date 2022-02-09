import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../Assets/Styles/commonStyle'
import TabItem from './TabItem'
import PropTypes from 'prop-types'

const TabItemList = styled.ul`
  display: inline-flex;
`

const TabContainer = styled.div`
  height: 40px;
  display: inline-flex;
  background-color: ${COLOR.BACKGROUND};
  border: 1px solid ${COLOR.LINE};
  border-radius: 11px;
  overflow: hidden;
`

/**
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
const Tab = ({ children }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const asd = { ss: '123', cc: '12344' }

  return (
    <TabContainer>
      <TabItemList>
        {children.map((child, idx) => (
          <TabItem
            key={child.key}
            isSelected={selectedIdx === idx}
            onClick={() => {
              setSelectedIdx(idx)
            }}>
            {child}
          </TabItem>
        ))}
      </TabItemList>
    </TabContainer>
  )
}

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Tab
