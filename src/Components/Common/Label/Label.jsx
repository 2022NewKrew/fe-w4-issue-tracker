import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR, FONT } from '../../../Assets/Styles/commonStyle'
import PropTypes from 'prop-types'

export const LABEL_SIZE = {
  LARGE: 'large',
  SMALL: 'small',
}

export const LABEL_COLOR = {
  NORMAL: 'normal',
  LIGHT: 'light',
  DARK: 'dark',
  BLUE: 'blue',
  PURPLE: 'purple',
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  ${FONT.TEXT_XSMALL};

  ${({ size, color }) => {
    const sizeStyle =
      size === LABEL_SIZE.LARGE
        ? largeSizeContainerStyle
        : size === LABEL_SIZE.SMALL
        ? smallSizeContainerStyle
        : smallSizeContainerStyle

    const colorStyle =
      color === LABEL_COLOR.NORMAL
        ? normalColorContainerStyle
        : color === LABEL_COLOR.LIGHT
        ? lightColorContainerStyle
        : color === LABEL_COLOR.DARK
        ? darkColorContainerStyle
        : color === LABEL_COLOR.BLUE
        ? blueColorContainerStyle
        : color === LABEL_COLOR.PURPLE
        ? purpleColorContainerStyle
        : normalColorContainerStyle

    return [...sizeStyle, ...colorStyle]
  }}
`

const largeSizeContainerStyle = css`
  height: 40px;
  border-radius: 20px;
`

const smallSizeContainerStyle = css`
  height: 28px;
  border-radius: 14px;
`

const normalColorContainerStyle = css`
  border: 1px solid ${COLOR.LINE};
  color: ${COLOR.LABEL};
`

const lightColorContainerStyle = css`
  background-color: ${COLOR.BACKGROUND};
  color: ${COLOR.TITLE_ACTIVE};
`

const darkColorContainerStyle = css`
  background-color: ${COLOR.BODY};
  color: ${COLOR.OFF_WHITE};
`

const blueColorContainerStyle = css`
  border: 1px solid ${COLOR.BLUE};
  background-color: ${COLOR.LIGHT_BLUE};
  color: ${COLOR.BLUE};
`

const purpleColorContainerStyle = css`
  border: 1px solid ${COLOR.PURPLE};
  background-color: ${COLOR.LIGHT_PURPLE};
  color: ${COLOR.PURPLE};
`

/**
 * @param {JSX.Element} children
 * @param {string} size
 * @param {string} color
 * @return {JSX.Element}
 * @constructor
 */
const Label = ({ children, size, color }) => {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  )
}

Label.propTypes = {
  children: PropTypes.element,
  color: PropTypes.oneOf(Object.values(LABEL_COLOR)),
  size: PropTypes.oneOf(Object.values(LABEL_SIZE)),
}

export default Label
