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
import IssueTrackerRouter from './Routes/IssueTrackerRouter'
import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <MarginDiv>
        <Label
          size={LABEL_SIZE.LARGE}
          textColor={COLOR.BLUE}
          backgroundColor={COLOR.LIGHT_BLUE}>
          <AlertIcon width="16px" height="16px" />
          열린 이슈
        </Label>
        <Label
          size={LABEL_SIZE.SMALL}
          textColor={COLOR.OFF_WHITE}
          backgroundColor={COLOR.DARK_BLUE}>
          레이블 이름
        </Label>
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
          <>
            <PlusIcon width="16px" height="16px" />
            <LeftMarginSpan>무언가</LeftMarginSpan>
            <LeftMarginSpan>(2)</LeftMarginSpan>
          </>
        </Tab>
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
          <>
            <PlusIcon width="16px" height="16px" />
            <LeftMarginSpan>무언가</LeftMarginSpan>
            <LeftMarginSpan>(2)</LeftMarginSpan>
          </>
        </Tab>
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
        <FlexDiv>
          <DropdownBox>
            <Dropdown
              indicatorText="이미지, 체크박스 있는 드롭다운"
              panelTitle="이미지, 체크박스 있는 패널"
              isCheckCircleExists
              itemInfoList={[
                {
                  text: 'filter1',
                  imgSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                },
                {
                  text: 'filter2',
                  imgSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                },
                {
                  text: 'filter3',
                  imgSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                },
              ]}
            />
          </DropdownBox>
          <DropdownBox>
            <Dropdown
              indicatorText="체크박스 있는 드롭다운"
              panelTitle="체크박스 있는 패널"
              isCheckCircleExists
              itemInfoList={[
                {
                  text: 'filter1',
                },
                {
                  text: 'filter2',
                },
                {
                  text: 'filter3',
                },
              ]}
            />
          </DropdownBox>
          <DropdownBox>
            <Dropdown
              indicatorText="그냥 드롭다운"
              panelTitle="그냥 패널"
              itemInfoList={[
                {
                  text: 'filter1',
                },
                {
                  text: 'filter2',
                },
                {
                  text: 'filter3',
                },
              ]}
            />
          </DropdownBox>
        </FlexDiv>
        <Button
          type={BUTTON_TYPE.STANDARD}
          size={BUTTON_SIZE.LARGE}
          onClickListener={() => {
            console.log('clicked')
          }}>
          <span>LARGE STANDARD</span>
        </Button>
        <Button
          type={BUTTON_TYPE.STANDARD}
          size={BUTTON_SIZE.LARGE}
          text="LARGE STANDARD DISABLE"
          isDisabled
          onClickListener={() => {
            console.log('clicked')
          }}>
          <span>LARGE STANDARD DISABLE</span>
        </Button>
        <Button
          type={BUTTON_TYPE.STANDARD}
          size={BUTTON_SIZE.MEDIUM}
          onClickListener={() => {
            console.log('clicked')
          }}>
          <span>MEDIUM STANDARD</span>
        </Button>
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
        <Button
          type={BUTTON_TYPE.SECONDARY}
          size={BUTTON_SIZE.SMALL}
          Icon={PlusIcon}
          onClickListener={() => {
            console.log('clicked')
          }}>
          <PlusIcon width="1em" height="1em" />
          <span>SMALL SEC</span>
        </Button>
        <Button
          type={BUTTON_TYPE.TEXT}
          size={BUTTON_SIZE.MEDIUM}
          Icon={PlusIcon}
          isRightIcon
          onClickListener={() => {
            console.log('clicked')
          }}>
          <span>MEDIUM TEXT</span>
          <PlusIcon width="1em" height="1em" />
        </Button>
        <Button
          type={BUTTON_TYPE.TEXT}
          size={BUTTON_SIZE.SMALL}
          Icon={PlusIcon}
          isRightIcon
          onClickListener={() => {
            console.log('clicked')
          }}>
          <span>SMALL TEXT</span>
          <PlusIcon width="1em" height="1em" />
        </Button>
        <TextInput
          type={TEXT_INPUT_TYPE.LARGE}
          state={TEXT_INPUT_STATE.NORMAL}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.LARGE}
          state={TEXT_INPUT_STATE.SUCCESS}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.LARGE}
          state={TEXT_INPUT_STATE.ERROR}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.LARGE}
          state={TEXT_INPUT_STATE.NORMAL}
          placeholder="아이디"
          labelPlaceholder="아이디"
          isDisabled
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.MEDIUM}
          state={TEXT_INPUT_STATE.NORMAL}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.MEDIUM}
          state={TEXT_INPUT_STATE.SUCCESS}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.MEDIUM}
          state={TEXT_INPUT_STATE.ERROR}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.SMALL}
          state={TEXT_INPUT_STATE.NORMAL}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.SMALL}
          state={TEXT_INPUT_STATE.SUCCESS}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <TextInput
          type={TEXT_INPUT_TYPE.SMALL}
          state={TEXT_INPUT_STATE.ERROR}
          placeholder="아이디"
          labelPlaceholder="아이디"
          onInputValueChangeListener={() => {
            console.log('change')
          }}
        />
        <FilterBar />
        <ColorCodeInput />
        <BigDiv>
          <TextArea placeholder="코멘트를 입력하세요" />
        </BigDiv>
        <IssueTrackerRouter />
      </MarginDiv>
    </BrowserRouter>
  )
}

export default App
