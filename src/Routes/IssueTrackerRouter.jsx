import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import IssueListPage from '../Pages/IssueListPage'
import Button, {
  BUTTON_SIZE,
  BUTTON_TYPE,
} from '../Components/Common/Button/Button'

const IssueTrackerRouter = (props) => {
  return (
    <>
      <Button type={BUTTON_TYPE.STANDARD} size={BUTTON_SIZE.MEDIUM}>
        <Link to="/issues">issues</Link>
      </Button>
      <Routes>
        <Route path="/issues" component={IssueListPage} />
      </Routes>
    </>
  )
}

IssueTrackerRouter.propTypes = {}

export default IssueTrackerRouter
