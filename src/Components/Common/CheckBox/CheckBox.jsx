import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as CheckedBoxIcon } from '../../../Assets/Icon/ic-checkbox-checked.svg'
import { ReactComponent as CheckedCircleIcon } from '../../../Assets/Icon/ic-checkcircle-checked.svg'
import { ReactComponent as UncheckedBoxIcon } from '../../../Assets/Icon/ic-checkbox-unchecked.svg'
import { ReactComponent as UncheckedCircleIcon } from '../../../Assets/Icon/ic-checkcircle-unchecked.svg'

export const CHECK_BOX_TYPE = {
  RECT: 'rect',
  CIRCLE: 'circle',
}

const CheckBoxContainer = styled.div`
  cursor: pointer;
`

const CHECKED_ICON = {
  [CHECK_BOX_TYPE.RECT]: <CheckedBoxIcon width="16px" height="16px" />,
  [CHECK_BOX_TYPE.CIRCLE]: <CheckedCircleIcon width="16px" height="16px" />,
}

const UNCHECKED_ICON = {
  [CHECK_BOX_TYPE.RECT]: <UncheckedBoxIcon width="16px" height="16px" />,
  [CHECK_BOX_TYPE.CIRCLE]: <UncheckedCircleIcon width="16px" height="16px" />,
}

const CheckBox = ({ type, isSelected, onClick }) => {
  const checkIcon = useMemo(() => {
    return isSelected ? CHECKED_ICON[type] : UNCHECKED_ICON[type]
  }, [isSelected, type])

  return <CheckBoxContainer onClick={onClick}>{checkIcon}</CheckBoxContainer>
}

CheckBox.propTypes = {
  type: PropTypes.oneOf(Object.values(CHECK_BOX_TYPE)).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default CheckBox
