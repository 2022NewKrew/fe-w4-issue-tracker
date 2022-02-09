import React from 'react'
import './Assets/Styles/reset.css'
import './Assets/Styles/main.scss'
import TextArea from './Components/Common/Input/TextArea'
import Button, {
  BUTTON_SIZE,
  BUTTON_TYPE,
} from './Components/Common/Button/Button'
import TextInput, {
  TEXT_INPUT_STATE,
  TEXT_INPUT_TYPE,
} from './Components/Common/Input/TextInput'
import ColorCodeInput from './Components/Common/Input/ColorCodeInput'
import styled from 'styled-components'
import { ReactComponent as PlusIcon } from './Assets/Icon/ic-plus.svg'
import { ReactComponent as TagIcon } from './Assets/Icon/ic-tag.svg'
import { ReactComponent as MilestonIcon } from './Assets/Icon/ic-milestone.svg'
import { ReactComponent as AlertIcon } from './Assets/Icon/ic-alert.svg'
import DropdownPanelItem from './Components/Common/Dropdown/DropdownPanelItem'
import DropdownPanel from './Components/Common/Dropdown/DropdownPanel'
import Dropdown from './Components/Common/Dropdown/Dropdown'
import Tab from './Components/Common/Tab/Tab'
import TabItem from './Components/Common/Tab/TabItem'
import Label, { LABEL_SIZE } from './Components/Common/Label/Label'
import FilterBar from './Components/Common/FilterBar/FilterBar'
import { COLOR } from './Assets/Styles/commonStyle'
import IssueItem from './Components/Issue/IssueItem'
import { STATE_TYPE } from './Services/DB/data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IssueTrackerLayout from './Layouts/IssueTrackerLayout'
import IssueListLayout from './Layouts/IssueListLayout'

const MarginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px auto;
  width: 1000px;
`

const FlexDiv = styled.div`
  display: flex;
`

const DropdownBox = styled.div`
  padding: 10px;
`

const BigDiv = styled.div`
  width: 300px;
  height: 300px;
`

const LeftMarginSpan = styled.span`
  margin-left: 4px;
`

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<IssueTrackerLayout />}>
          <Route path="/issue-list" element={<IssueListLayout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
