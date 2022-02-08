import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FilterBar from '../Components/Common/FilterBar/FilterBar'
import { ReactComponent as TagIcon } from '../Assets/Icon/ic-tag.svg'
import { ReactComponent as MilestonIcon } from '../Assets/Icon/ic-milestone.svg'
import Tab from '../Components/Common/Tab/Tab'
import Button, { BUTTON_SIZE, BUTTON_TYPE } from '../Components/Common/Button/Button'
import { ReactComponent as PlusIcon } from '../Assets/Icon/ic-plus.svg'

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftMarginSpan = styled.span`
  margin-left: 4px;
`

const IssueListLayout = (props) => {
  return (
    <Container>
      <Header>
        <FilterBar/>
        <div>
          <Tab>
            <>
              <TagIcon width="16px" height="16px" />
              <LeftMarginSpan>레이블</LeftMarginSpan>
              <LeftMarginSpan>(0)</LeftMarginSpan>
            </>
            <>
              <MilestonIcon width="16px" height="16px" />
              <LeftMarginSpan>마일스톤</LeftMarginSpan>
              <LeftMarginSpan>(0)</LeftMarginSpan>
            </>
          </Tab>
          <Button
            type={BUTTON_TYPE.STANDARD}
            size={BUTTON_SIZE.SMALL}
            Icon={PlusIcon}
            onClickListener={() => {
              console.log('clicked')
            }}>
            <PlusIcon width="1em" height="1em" />
            <span>SMALL STA</span>
          </Button>
        </div>
      </Header>
    </Container>
  )
}

IssueListLayout.propTypes = {}

export default IssueListLayout