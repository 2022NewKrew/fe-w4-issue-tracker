import React from 'react'
import { Route, Routes } from 'react-router-dom'

import IssueTrackerLayout from './Layouts/IssueTrackerLayout'
import IssueListLayout from './Layouts/IssueListLayout'

import './Assets/Styles/reset.css'
import './Assets/Styles/main.scss'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/issue-tracker" element={<IssueTrackerLayout />}>
          <Route
            path="/issue-tracker/issue-list"
            element={<IssueListLayout />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
