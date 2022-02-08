import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR } from '../../Assets/Styles/commonStyle'
import IssueItem from './IssueItem'
import Dropdown from '../Common/Dropdown/Dropdown'
import { DROPDOWN_ITEM_TYPE } from '../Common/Dropdown/DropdownPanelItem'

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
  background-color: ${COLOR.LINE};
  border-radius: 16px 16px 0 0;
`

const List = styled.ul`
  width: 100%;
`

const ItemWrapper = styled.li`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${COLOR.LINE};
`

const IssueList = ({ issueList }) => {
  return (
    <Container>
      <Header>
        <div>
          <span>열린 이슈</span>
          <span>닫힌 이슈</span>
        </div>
        <div>
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
          <Dropdown
            indicatorText="레이블"
            panelTitle="레이블"
            type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
            itemInfoList={[
              { text: '레이블이 없는 이슈' },
              { text: 'documentation' },
            ]}
          />
          <Dropdown
            indicatorText="마일스톤"
            panelTitle="마일스톤"
            type={DROPDOWN_ITEM_TYPE.RADIO_BTN}
            itemInfoList={[
              { text: '마일스톤이 없는 이슈' },
              { text: '마스터즈 코스' },
            ]}
          />
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
        </div>
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
