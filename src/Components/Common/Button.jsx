import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../style/commonStyle'
import plusIcon from '../../icon/ic-plus.svg'
import { ReactComponent as PlusIcon } from '../../icon/ic-plus.svg'

export const BUTTON_TYPE = {
  LARGE_STANDARD: 'large-standard',
  MEDIUM_STANDARD: 'medium-standard',
  SMALL_STANDARD: 'small-standard',
  SMALL_SECONDARY: 'small-secondary',
  MEDIUM_TEXT: 'medium-text',
  SMALL_TEXT: 'small-text'
}

const btnStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  svg {
    color: ${ COLOR.OFF_WHITE };
  }
`

const standardBtnStyle = css`
  ${ btnStyle };
  box-sizing: content-box;
  background: ${ COLOR.BLUE } content-box;
  border: 4px solid rgba(0, 0, 0, 0);

  &:hover {
    background: ${ COLOR.DARK_BLUE } content-box;
  }

  &:active {
    border: 4px solid ${ COLOR.LIGHT_BLUE }
  }

  span {
    padding-top: 3px;
    color: ${ COLOR.OFF_WHITE };
  }
  
  svg {
    color: ${ COLOR.OFF_WHITE };
  }
  
  svg + span {
    margin-left: 3px;
  }
`

const secondaryStyle = css`
  ${ btnStyle };

  background: ${ COLOR.OFF_WHITE };
  border: 2px solid ${ COLOR.BLUE };
  border-radius: 11px;

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

  svg {
    color: ${ COLOR.BLUE }
  }

  span {
    padding-top: 3px;
    color: ${ COLOR.BLUE };
  }
`

const textBtnStyle = css`
  ${ btnStyle };

  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 24px;

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

  svg {
    color: ${ COLOR.LABEL };
  }

  span {
    padding-top: 4px;
    color: ${ COLOR.LABEL };
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

const LargeStandardBtn = styled.div`
  ${ largeStyle }
  ${ standardBtnStyle }
`

const MediumStandardBtn = styled.div`
  ${ mediumStyle }
  ${ standardBtnStyle }
`

const SmallStandardBtn = styled.div`
  ${ smallStyle }
  ${ standardBtnStyle }
`

const SmallSecondaryBtn = styled.div`
  ${ smallStyle }
  ${ secondaryStyle }
`

const MediumTextBtn = styled.div`
  ${ mediumStyle }
  ${ textBtnStyle }
  span {
    ${ FONT.LINK_SMALL }
  }
`

const SmallTextBtn = styled.div`
  ${ smallStyle }
  ${ textBtnStyle }
`

/**
 * 버튼 컴포넌트
 * @param { string } type
 * @param {string} text
 * @param {function} onClickListener
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({ type, text, onClickListener }) => {
  switch (type) {
    case BUTTON_TYPE.LARGE_STANDARD:
      return (
        <LargeStandardBtn onClick={ onClickListener }>
          <span>{ text }</span>
        </LargeStandardBtn>
      )
    
    case BUTTON_TYPE.MEDIUM_STANDARD:
      return (
        <MediumStandardBtn onClick={ onClickListener }>
          <span>{ text }</span>
        </MediumStandardBtn>
      )
    
    case BUTTON_TYPE.SMALL_STANDARD:
      return (
        <SmallStandardBtn onClick={ onClickListener }>
          <PlusIcon
            width="1em"
            height="1em" />
          <span>{ text }</span>
        </SmallStandardBtn>
      )
    
    case BUTTON_TYPE.SMALL_SECONDARY:
      return (
        <SmallSecondaryBtn onClick={ onClickListener }>
          <PlusIcon
            width="1em"
            height="1em" />
          <span>{ text }</span>
        </SmallSecondaryBtn>
      )
    
    case BUTTON_TYPE.MEDIUM_TEXT:
      return (
        <MediumTextBtn onClick={ onClickListener }>
          <span>{ text }</span>
          <PlusIcon
            width="1em"
            height="1em" />
        </MediumTextBtn>
      )
    
    case BUTTON_TYPE.SMALL_TEXT:
      return (
        <SmallTextBtn onClick={ onClickListener }>
          <span>{ text }</span>
          <PlusIcon
            width="1em"
            height="1em" />
        </SmallTextBtn>
      )
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickListener: PropTypes.func.isRequired
}

export default Button