import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR } from '../../Assets/Styles/commonStyle'

const LABEL_TYPE = {
  LARGE: 'large',
  SMALL: 'small',
}

const LABEL_COLOR = {
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

  ${({ size, color }) => {
    const sizeStyle =
      size === LABEL_TYPE.LARGE
        ? largeSizeContainerStyle
        : size === LABEL_TYPE.SMALL
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
  width: 90px;
  height: 28px;
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

const Label = (props) => {
  return <></>
}

Label.propTypes = {}

export default Label
