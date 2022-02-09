import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as HeaderLogo } from '../Assets/Logo/logo-medium.svg'

import { COLOR } from '../Assets/Styles/commonStyle'

const Container = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.BACKGROUND};
`

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const IssueTrackerLayout = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderLogo />
          <div />
        </Header>
        <Outlet />
      </Wrapper>
    </Container>
  )
}

IssueTrackerLayout.propTypes = {}

export default IssueTrackerLayout
