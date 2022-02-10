import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { readIssue } from '../Services/DB/firebase'

import FilterBar from '../Components/Common/FilterBar/FilterBar'
import Tab from '../Components/Common/Tab/Tab'
import IssueList from '../Components/Issue/IssueList'
import Button, {
  BUTTON_SIZE,
  BUTTON_TYPE,
} from '../Components/Common/Button/Button'

import { ReactComponent as TagIcon } from '../Assets/Icon/ic-tag.svg'
import { ReactComponent as MilestonIcon } from '../Assets/Icon/ic-milestone.svg'
import { ReactComponent as PlusIcon } from '../Assets/Icon/ic-plus.svg'

import { STATE_TYPE } from '../Services/DB/data'

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FilterBarWrapper = styled.div`
  width: 600px;
`

const HorizontalDiv = styled.div`
  display: flex;
  align-items: center;
`

const LeftMarginSpan = styled.span`
  margin-left: 4px;
`

const IssueListLayout = (props) => {
  const [filterOption, setFilterOption] = useState({
    state: STATE_TYPE.OPEN,
    authorId: undefined,
    labelId: undefined,
    milestoneId: undefined,
    assigneeId: undefined,
  })

  const [issues, setIssues] = useState([])

  useEffect(async () => {
    setIssues(await readIssue(filterOption))
  }, [filterOption])

  return (
    <Container>
      <Header>
        <FilterBarWrapper>
          <FilterBar />
        </FilterBarWrapper>
        <HorizontalDiv>
          <Tab>
            <div key="레이블">
              <TagIcon width="16px" height="16px" />
              <LeftMarginSpan>레이블</LeftMarginSpan>
              <LeftMarginSpan>(0)</LeftMarginSpan>
            </div>
            <div key="마일스톤">
              <MilestonIcon width="16px" height="16px" />
              <LeftMarginSpan>마일스톤</LeftMarginSpan>
              <LeftMarginSpan>(0)</LeftMarginSpan>
            </div>
          </Tab>
          <Button
            type={BUTTON_TYPE.STANDARD}
            size={BUTTON_SIZE.SMALL}
            Icon={PlusIcon}
            onClickListener={() => {
              console.log('clicked')
            }}>
            <PlusIcon width="1em" height="1em" />
            <span>이슈 생성</span>
          </Button>
        </HorizontalDiv>
      </Header>
      <IssueList issues={issues} setFilterOption={setFilterOption} />
    </Container>
  )
}

IssueListLayout.propTypes = {}

export default IssueListLayout
