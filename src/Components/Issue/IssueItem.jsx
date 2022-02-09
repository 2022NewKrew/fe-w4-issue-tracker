import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import CheckBox, { CHECK_BOX_TYPE } from '../Common/CheckBox/CheckBox'
import Label, { LABEL_SIZE } from '../Common/Label/Label'

import { ReactComponent as AlertIcon } from '../../Assets/Icon/ic-alert.svg'
import { ReactComponent as MilestoneIcon } from '../../Assets/Icon/ic-milestone.svg'

import { COLOR, FONT } from '../../Assets/Styles/commonStyle'
import { STATE_TYPE } from '../../Services/DB/data'

const IssueItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.OFF_WHITE};
  padding: 16px 32px;
`

const CheckBoxWrapper = styled.div`
  height: 52px;
`

const IssueContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const HorizontalDiv = styled.div`
  display: flex;
  align-items: center;
`

const IconBox = styled.div`
  svg {
    ${({ backgroundColor, color }) => css`
      fill: ${backgroundColor};
      color: ${color};
    `}
  }
`

const IssueTitle = styled.span`
  color: ${COLOR.TITLE_ACTIVE};
  ${FONT.LINK_MEDIUM};
`

const DescriptionText = styled.span`
  color: ${COLOR.LABEL};
  ${FONT.TEXT_SMALL};
`

const IssueItem = ({ issue, onSelectedEventListener }) => {
  const { id, title, author, state, labels, milestone, assignees, histories } =
    issue

  const [isSelected, setIsSelected] = useState(false)

  const onCheckBoxClick = useCallback(() => {
    setIsSelected((prev) => !prev)

    onSelectedEventListener(isSelected)
  }, [onSelectedEventListener])

  const iconColor = useMemo(() => {
    if (state === STATE_TYPE.OPEN) {
      return {
        color: COLOR.BLUE,
        backgroundColor: COLOR.LIGHT_BLUE,
      }
    } else if (state === STATE_TYPE.CLOSE) {
      return {
        color: COLOR.PURPLE,
        backgroundColor: COLOR.LIGHT_PURPLE,
      }
    }
  }, [state])

  return (
    <IssueItemContainer>
      <CheckBoxWrapper>
        <CheckBox type={CHECK_BOX_TYPE.RECT} isSelected={isSelected} />
      </CheckBoxWrapper>
      <IssueContentWrapper>
        <HorizontalDiv>
          <IconBox
            onClick={onCheckBoxClick}
            backgroundColor={iconColor.backgroundColor}
            color={iconColor.color}>
            <AlertIcon width="16px" height="16px" />
          </IconBox>
          <IssueTitle>{title}</IssueTitle>
          {labels.map((label) => (
            <Label
              key={label.id}
              size={LABEL_SIZE.SMALL}
              textColor={'#' + label.textColor}
              backgroundColor={'#' + label.backgroundColor}>
              {label.name}
            </Label>
          ))}
        </HorizontalDiv>
        <HorizontalDiv>
          <DescriptionText>{id}</DescriptionText>
          <DescriptionText>{}</DescriptionText>
          <DescriptionText>
            <MilestoneIcon width="16px" height="16px" />
            {milestone.title}
          </DescriptionText>
        </HorizontalDiv>
      </IssueContentWrapper>
    </IssueItemContainer>
  )
}

IssueItem.propTypes = {
  isSelected: PropTypes.bool,
  issue: PropTypes.object.isRequired,
  onSelectedEventListener: PropTypes.object,
}

export default IssueItem
