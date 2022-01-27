import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'

export const BUTTON_TYPE = {
  STANDARD: 'standard',
  SECONDARY: 'secondary',
  TEXT: 'text'
}

export const BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${ COLOR.OFF_WHITE };
  }

  svg + span {
    margin-left: 3px;
  }

  ${ ({ customStyle }) => customStyle }
`

const standardBtnStyle = css`
  box-sizing: content-box;
  background: ${ COLOR.BLUE } content-box;
  border: 4px solid rgba(0, 0, 0, 0);

  span {
    padding-top: 3px;
    color: ${ COLOR.OFF_WHITE };
  }
`

const standardBtnInteractionStyle = css`
  &:hover {
    background: ${ COLOR.DARK_BLUE } content-box;
  }

  &:active {
    border: 4px solid ${ COLOR.LIGHT_BLUE }
  }
`

const secondaryBtnStyle = css`
  background: ${ COLOR.OFF_WHITE };
  border: 2px solid ${ COLOR.BLUE };
  border-radius: 11px;

  svg {
    color: ${ COLOR.BLUE }
  }

  span {
    padding-top: 3px;
    color: ${ COLOR.BLUE };
  }
`

const secondaryBtnInteractionStyle = css`
  &:hover {
    border-color: ${ COLOR.DARK_BLUE };

    svg {
      color: ${ COLOR.DARK_BLUE }
    }

    span {
      color: ${ COLOR.DARK_BLUE };
    }
  }

  &:active {
    border: 2px solid ${ COLOR.LIGHT_BLUE };

    svg {
      color: ${ COLOR.BLUE }
    }

    span {
      color: ${ COLOR.BLUE };
    }
  }
`

const textBtnStyle = css`
  width: 100%;
  height: 28px;
  justify-content: space-between;
  padding: 0 4px;

  svg {
    color: ${ COLOR.LABEL };
  }

  span {
    padding-top: 4px;
    color: ${ COLOR.LABEL };
  }
  
  span + svg {
    margin-left: 5px;
  }
  
  svg + span {
    margin-left: 5px;
  }
`

const textBtnInteractionStyle = css`
  &:hover {
    svg {
      color: ${ COLOR.BODY };
    }

    span {
      color: ${ COLOR.BODY };
    }
  }

  &:active {
    svg {
      color: ${ COLOR.TITLE_ACTIVE };
    }

    span {
      color: ${ COLOR.TITLE_ACTIVE };
    }
  }
`

const largeStyle = css`
  width: 340px;
  height: 64px;
  border-radius: 24px;

  span {
    ${ FONT.LINK_MEDIUM }
  }
`

const mediumStyle = css`
  width: 240px;
  height: 56px;
  border-radius: 24px;

  span {
    ${ FONT.LINK_MEDIUM }
  }
`

const smallStyle = css`
  width: 120px;
  height: 40px;
  border-radius: 15px;

  span {
    ${ FONT.LINK_XSMALL }
  }
`

const disableBtnStyle = css`
  opacity: 0.5;
  cursor: default;
`

/**
 * 버튼 컴포넌트
 * @param {JSX.Element} children
 * @param {string} type
 * @param {string} size
 * @param {boolean} isDisabled
 * @param {function} onClickListener
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({
                  children,
                  type,
                  size,
                  isDisabled,
                  onClickListener
                }) => {
  const onClick = useCallback(() => {
    if (!isDisabled) {
      onClickListener()
    }
  }, [ isDisabled ])
  
  const customStyle = useMemo(() => {
    let style = (
      size === BUTTON_SIZE.LARGE ? largeStyle
        : size === BUTTON_SIZE.MEDIUM ? mediumStyle
          : size === BUTTON_SIZE.SMALL ? smallStyle
            : mediumStyle
    )
    
    style = (
      type === BUTTON_TYPE.STANDARD ? style.concat(standardBtnStyle)
        : type === BUTTON_TYPE.SECONDARY ? style.concat(secondaryBtnStyle)
          : type === BUTTON_TYPE.TEXT ? style.concat(textBtnStyle)
            : style.concat(standardBtnStyle)
    )
    
    if (isDisabled) {
      style = style.concat(disableBtnStyle)
    } else {
      style = (
        type === BUTTON_TYPE.STANDARD ? style.concat(standardBtnInteractionStyle)
          : type === BUTTON_TYPE.SECONDARY ? style.concat(secondaryBtnInteractionStyle)
            : type === BUTTON_TYPE.TEXT ? style.concat(textBtnInteractionStyle)
              : style.concat(standardBtnInteractionStyle)
      )
    }
    
    return style
  }, [ type, size, isDisabled ])
  
  return (
    <Btn
      onClick={ onClick }
      customStyle={ customStyle }>
      { children }
    </Btn>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClickListener: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default Button