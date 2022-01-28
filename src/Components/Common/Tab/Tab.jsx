import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR } from '../../../Assets/Styles/commonStyle'

const TabItemList = styled.ul`
  display: inline-flex;
`

const TabContainer = styled.div`
  display: inline-block;
  background-color: ${ COLOR.BACKGROUND };
  border: 1px solid ${ COLOR.LINE };
  border-radius: 11px;
  overflow: hidden;
`

/**
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
const Tab = ({ children }) => {
  return (
    <TabContainer>
      <TabItemList>
        { children }
      </TabItemList>
    </TabContainer>
  )
}

Tab.propTypes = {}

export default Tab