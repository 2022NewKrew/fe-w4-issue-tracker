import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IssueItem from './IssueItem'
import Dropdown from '../Common/Dropdown/Dropdown'
import { DROPDOWN_ITEM_TYPE } from '../Common/Dropdown/DropdownPanelItem'

import { COLOR } from '../../Assets/Styles/commonStyle'

//TODO: 이슈가 하나도 없을때 Header의 border 아래 모서리에 생기는 문제 해결
const Container = styled.div`
  width: 1280px;
  border: 1px solid ${COLOR.LINE};
  border-radius: 16px;
`

const Header = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLOR.BACKGROUND};
  border-radius: 16px 16px 0 0;
`

const HorizontalDiv = styled.div`
  display: flex;
  align-items: center;
`

const SmallDropdownWrapper = styled.div`
  width: 70px;
  margin-right: 30px;
`

const LargeDropdownWrapper = styled.div`
  width: 84px;
  margin-right: 30px;
`

const List = styled.ul`
  width: 100%;
`

const ItemWrapper = styled.li`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${COLOR.LINE};

  &:last-child {
    border-radius: 0 0 16px 16px;
    overflow: hidden;
  }
`

const IssueList = ({ issueList }) => {
  return (
    <Container>
      <Header>
        <HorizontalDiv>
          <span>열린 이슈</span>
          <span>닫힌 이슈</span>
        </HorizontalDiv>
        <HorizontalDiv>
          <SmallDropdownWrapper>
            <Dropdown
              indicatorText="담당자"
              panelTitle="담당자"
              type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
              itemInfoList={[
                { text: '담당자가 없는 이슈' },
                {
                  text: 'Oni',
                  imgSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                },
              ]}
            />
          </SmallDropdownWrapper>
          <SmallDropdownWrapper>
            <Dropdown
              indicatorText="레이블"
              panelTitle="레이블"
              type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
              itemInfoList={[
                { text: '레이블이 없는 이슈' },
                { text: 'documentation' },
              ]}
            />
          </SmallDropdownWrapper>
          <LargeDropdownWrapper>
            <Dropdown
              indicatorText="마일스톤"
              panelTitle="마일스톤"
              type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
              itemInfoList={[
                { text: '마일스톤이 없는 이슈' },
                { text: '마스터즈 코스' },
              ]}
            />
          </LargeDropdownWrapper>
          <SmallDropdownWrapper>
            <Dropdown
              indicatorText="작성자"
              panelTitle="작성자"
              type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
              itemInfoList={[
                {
                  text: 'Oni',
                  imgSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                },
              ]}
            />
          </SmallDropdownWrapper>
        </HorizontalDiv>
      </Header>
      <List>
        {issueList.map((issue) => (
          <ItemWrapper key={issue.id}>
            <IssueItem issue={issue} />
          </ItemWrapper>
        ))}
      </List>
    </Container>
  )
}

IssueList.propTypes = {
  issueList: PropTypes.array.isRequired,
}

export default IssueList
