import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import PropTypes from 'prop-types'

export const LABEL_SIZE = {
  LARGE: 'large',
  SMALL: 'small',
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  ${FONT.TEXT_XSMALL};

  ${({ size, textColor, backgroundColor }) => {
    const sizeStyle =
      size === LABEL_SIZE.LARGE
        ? largeSizeContainerStyle
        : size === LABEL_SIZE.SMALL
        ? smallSizeContainerStyle
        : smallSizeContainerStyle

    const userColorStyle = css`
      color: ${textColor};
      background-color: ${backgroundColor};
      border-color: ${textColor};
    `

    return [...sizeStyle, ...userColorStyle]
  }}
`

const largeSizeContainerStyle = css`
  height: 40px;
  border-radius: 20px;
  border: 1px solid;
`

const smallSizeContainerStyle = css`
  height: 28px;
  border-radius: 14px;
`

/**
 * @param {JSX.Element} children
 * @param {string} size
 * @param {string} textColor
 * @param {string} backgroundColor
 * @return {JSX.Element}
 * @constructor
 */
const Label = ({ children, size, textColor, backgroundColor }) => {
  return (
    <Container
      size={size}
      textColor={textColor}
      backgroundColor={backgroundColor}>
      {children}
    </Container>
  )
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(Object.values(LABEL_SIZE)).isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default Label
