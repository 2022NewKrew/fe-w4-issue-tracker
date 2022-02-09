import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TextInput, {
  TEXT_INPUT_STATE,
  TEXT_INPUT_TYPE,
} from '../Input/TextInput'
import { ReactComponent as SearchIcon } from '../../../Assets/Icon/ic-search.svg'
import Dropdown from '../Dropdown/Dropdown'
import { COLOR } from '../../../Assets/Styles/commonStyle'
import { DROPDOWN_ITEM_TYPE } from '../Dropdown/DropdownPanelItem'

const DropdownContainer = styled.div`
  width: 128px;
  height: 100%;
  border-right: 1px solid ${COLOR.LINE};

  &:hover {
    background-color: ${COLOR.LINE};
  }
`

const buttonPaddingStyle = css`
  padding: 0 24px;
`

const FilterBar = (props) => {
  return (
    <TextInput
      type={TEXT_INPUT_TYPE.FILTER_BAR}
      state={TEXT_INPUT_STATE.NORMAL}
      labelPlaceholder={<SearchIcon width="16px" height="16px" />}
      placeholder="is:open is:issue">
      <DropdownContainer>
        <Dropdown
          type={DROPDOWN_ITEM_TYPE.NORMAL}
          indicatorText="필터"
          panelTitle="이슈 필터"
          btnUserStyle={buttonPaddingStyle}
          isCheckCircleExists
          itemInfoList={[
            {
              text: '열린 이슈',
            },
            {
              text: '내가 작성한 이슈',
            },
            {
              text: '나에게 할당된 이슈',
            },
            {
              text: '내가 댓글을 남긴 이슈',
            },
            {
              text: '닫힌 이슈',
            },
          ]}
        />
      </DropdownContainer>
    </TextInput>
  )
}

FilterBar.propTypes = {}

export default FilterBar
